import { type Expander } from './types'
import { type Html, type Root, type RootContent } from 'mdast'
import { type PathLike } from 'node:fs'
import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { CONTINUE, EXIT, visit } from 'unist-util-visit'

// File
export type ExpandFileOptions = ExpandStringOptions & {
	name?: string
	output?: PathLike
}
export async function expandFile(sourcePath: PathLike, options: ExpandFileOptions) {
	const { name, output, ...rest } = options

	const markdown = await fs.readFile(sourcePath, 'utf8')
	const expandedMarkdown = await expandString(markdown, rest)
	const outputPath = output ?? sourcePath
	console.log(`TODO name: ${name}`)
	await fs.writeFile(outputPath, expandedMarkdown)
}

// String
export type ExpandStringOptions = ExpandAstOptions
export async function expandString(
	markdown: string,
	options: ExpandStringOptions,
): Promise<string> {
	const ast = remark().use(remarkGfm).parse(markdown)
	const expandedAst = await expandAst(ast, options)
	return remark().use(remarkGfm).stringify(expandedAst)
}

// AST
export type ExpandAstOptions = {
	expansionRules: Expander[]
	keywordPrefix?: string
}
export async function expandAst(ast: Root, options: ExpandAstOptions): Promise<Root> {
	const { expansionRules, keywordPrefix } = options

	// Extract template expansion commands from comment nodes
	// https://github.com/syntax-tree/mdast/blob/main/readme.md

	// Happens in two passes to accommodate async expanders

	// Save promises as we go
	const newContent: Array<{
		applySequence: number
		nodes: Promise<RootContent[]>
		openingComment: Html
	}> = []

	// TODO stay at top level
	// First pass adds closing comments if needed and removes existing children
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined) {
			// See if the comment's content matches an expander
			// TODO parse args
			const regex = new RegExp(`<!--\\s*${keywordPrefix ?? ''}(.+)\\s*-->`)
			const matches = regex.exec(node.value)
			const match = matches?.at(1)?.trim() // The trim is critical
			if (match === undefined) return CONTINUE
			const matchingExpander = expansionRules.find((expander) => expander.keyword === match)
			if (matchingExpander === undefined) return CONTINUE

			// Look for a closing closing tag, if there is one we'll delete everything
			// up to it
			const closingTagIndex = getClosingTagIndex(ast, index, match)
			const tagsToReplace = closingTagIndex ? closingTagIndex - index - 1 : 0
			parent.children.splice(index + 1, tagsToReplace)

			// Add closing tag if it doesn't exist
			if (closingTagIndex === undefined) {
				const closingNode: Html = { type: 'html', value: `<!-- /${match} -->` }
				parent.children.splice(index + 1, 0, closingNode)
			}

			// Save the promise that generates the new nodes
			// TODO pass args
			newContent.push({
				applySequence: expansionRules.indexOf(matchingExpander),
				nodes: matchingExpander.getNodes(ast),
				openingComment: node,
			})
		}
	})

	// Sort newContent to apply expansion rules in order they're received in the array
	for (const { nodes, openingComment } of newContent) {
		const newNodes = await nodes
		const openingCommentIndex = ast.children.indexOf(openingComment)
		ast.children.splice(openingCommentIndex + 1, 0, ...newNodes)
	}

	return ast
}

// Helpers
function getClosingTagIndex(
	ast: Root,
	startFromIndex: number,
	keyword: string,
	keywordPrefix?: string,
): number | undefined {
	let matchingIndex: number | undefined
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined && index >= startFromIndex) {
			const regex = new RegExp(`<!--\\s*${keywordPrefix ?? ''}/${keyword}\\s*-->`)
			const match = regex.exec(node.value)
			if (match !== null) {
				matchingIndex = index
				return EXIT
			}
		}
	})
	return matchingIndex
}
