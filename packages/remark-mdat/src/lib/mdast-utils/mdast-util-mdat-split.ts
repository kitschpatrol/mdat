import { fromHtml } from 'hast-util-from-html'
import { type Html, type Text } from 'mdast'
import type { Root } from 'mdast'
import { type Node, type Point, type Position } from 'unist'
import { CONTINUE, visit } from 'unist-util-visit'
import { type VFile } from 'vfile'

/**
 * Mdast utility plugin to split any multi-comment nodes and their content into individual MDAST Html
 * nodes They're wrapped in a paragraph so as not to introduce new breaks
 *
 * TODO not sure this works
 */
export function mdatSplit(tree: Root, file: VFile) {
	visit(tree, 'html', (node, index, parent) => {
		if (parent === undefined || index === undefined) return CONTINUE

		const htmlNodes = splitHtmlIntoMdastNodes(node)

		if (htmlNodes.length > 1) {
			// HtmlNodes[0].value = `${htmlNodes[0].value}\n`
			file.message(
				'Found multiple comments in single HTML node. Will try to split, but this could cause issues.',
				node,
			)
			// TODO really vet this step
			parent.children.splice(index, 1, {
				children: htmlNodes,
				// Position: node.position,
				type: 'paragraph',
			})
		}
	})
}

// Helpers
// Exported for testing
// TODO could be some issues with how toHtml changing the input
export function splitHtmlIntoMdastNodes(mdastNode: Html): Array<Html | Text> {
	const htmlTree = fromHtml(mdastNode.value, { fragment: true })
	const mdastNodes: Array<Html | Text> = []

	visit(htmlTree, (hastNode) => {
		// Ignore the root
		if (hastNode.type === 'root') return CONTINUE

		// Return text as normal mdast node
		if (hastNode.type === 'text') {
			mdastNodes.push({
				position: addStartPoint(hastNode.position, mdastNode.position?.start),
				type: 'text',
				value: getOriginalMarkup(mdastNode, hastNode),
			})
			return CONTINUE
		}

		// Return everything else as mdast html node
		mdastNodes.push({
			position: addStartPoint(hastNode.position, mdastNode.position?.start),
			type: 'html',
			value: getOriginalMarkup(mdastNode, hastNode),
		})
	})

	return mdastNodes
}

// Helps us merge positions from hast nodes to mdast nodes for better logging
function addStartPoint(
	position: Position | undefined,
	start: Point | undefined,
): Position | undefined {
	if (position === undefined || start === undefined) return undefined

	return {
		end: {
			column: position.end.column - 1 + start.column,
			line: position.end.line - 1 + start.line,
			offset:
				position.end.offset !== undefined && start.offset !== undefined
					? position.end.offset + start.offset
					: undefined,
		},
		start: {
			column: position.start.column - 1 + start.column,
			line: position.start.line - 1 + start.line,
			offset:
				position.start.offset !== undefined && start.offset !== undefined
					? position.start.offset + start.offset
					: undefined,
		},
	}
}

function getOriginalMarkup(mdastNode: Html, hastNode: Node): string {
	// Alternate approach would use stringify the hast node:
	// But could create issues where the HTML is not exactly the same as the original
	// toHtml(hastNode)

	if (hastNode.position === undefined) {
		throw new Error('Hast ElementContent node has no position!')
	}

	return mdastNode.value.slice(hastNode.position.start.offset, hastNode.position.end.offset)
}
