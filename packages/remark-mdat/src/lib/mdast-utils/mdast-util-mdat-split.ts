import { saveLog } from '../mdat/mdat-log'
import { fromHtml } from 'hast-util-from-html'
import { type Html, type Text } from 'mdast'
import type { Root } from 'mdast'
import { type Node, type Point, type Position } from 'unist'
import { CONTINUE, SKIP, visit } from 'unist-util-visit'
import { type VFile } from 'vfile'

/**
 * Mdast utility plugin to split any multi-comment nodes and their content into individual MDAST HTML
 * nodes. They're wrapped in a paragraph so as not to introduce new breaks.
 */
export function mdatSplit(tree: Root, file: VFile) {
	visit(tree, 'html', (node, index, parent) => {
		if (parent === undefined || index === undefined) return CONTINUE

		const htmlNodes = splitHtmlIntoMdastNodes(node)

		if (htmlNodes.length > 1) {
			// HtmlNodes[0].value = `${htmlNodes[0].value}\n`
			saveLog(file, 'warn', 'split', 'Multiple comments in a single HTML node.', node)

			// TODO really vet this step
			parent.children.splice(index, 1, {
				children: htmlNodes,
				type: 'paragraph',
			})
		}
	})
}

// Helpers
// Exported for testing
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

		// Return everything else as mdast html node, but don't descend
		// TODO support for comment in nested HTML elements, e.g.
		// <b><!-- keyword --></b>
		mdastNodes.push({
			position: addStartPoint(hastNode.position, mdastNode.position?.start),
			type: 'html',
			value: getOriginalMarkup(mdastNode, hastNode),
		})
		return SKIP
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
