import expanders from './expanders/index'
import { type Html, type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import { CONTINUE, EXIT, visit } from 'unist-util-visit'

function getClosingTagIndex(
	ast: Root,
	startFromIndex: number,
	keyword: string,
): number | undefined {
	let matchingIndex: number | undefined
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined && index >= startFromIndex) {
			const regex = new RegExp(`<!--\\s*/${keyword}\\s*-->`)
			const match = regex.exec(node.value)
			if (match !== null) {
				matchingIndex = index
				return EXIT
			}
		}
	})
	return matchingIndex
}

export function parseReadme(readmeMarkdown: string): string {
	const ast = remark().use(remarkGfm).parse(readmeMarkdown)

	// Extract template commands

	// Console.log(`ast: ${JSON.stringify(ast, undefined, 2)}`)

	// https://github.com/syntax-tree/mdast/blob/main/readme.md
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined) {
			// See if the comment's content matches an expander
			const matches = /<!--\s*(.+)\s*-->/.exec(node.value)
			const match = matches?.at(1)?.trim() // The trim is critical
			if (match === undefined) return CONTINUE
			const matchingExpander = expanders[match]
			if (matchingExpander === undefined) return CONTINUE

			// Look for a closing closing tag, if there is one we'll delete everything
			// up to it
			const closingTagIndex = getClosingTagIndex(ast, index, match)
			const tagsToReplace = closingTagIndex ? closingTagIndex - index - 1 : 0

			// Generate the expanded nodes and splice them in
			const newNodes = matchingExpander.getNodes()
			parent.children.splice(index + 1, tagsToReplace, ...newNodes)

			// Add closing tag if it doesn't exist
			if (closingTagIndex === undefined) {
				const closingNode: Html = { type: 'html', value: `<!-- /${match} -->` }
				parent.children.splice(index + 1 + newNodes.length, 0, closingNode)
			}
		}
	})

	console.log(ast)

	const markdown = remark().use(remarkGfm).stringify(ast)

	console.log(markdown)

	return 'TODO'
}

export async function toc(markdown: string): Promise<string> {
	const file = await remark().use(remarkToc, { heading: 'contents', tight: true }).process(markdown)
	console.log(`file: ${JSON.stringify(file, undefined, 2)}`)
	return String(file)
}

export function sum(a: number, b: number) {
	return a + b + b
}

export function sub(a: number, b: number) {
	return a - b + a
}
