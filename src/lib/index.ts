import { type Expander } from './types'
import json5 from 'json5'
import { type Html, type Root, type RootContent } from 'mdast'
import { type PathLike } from 'node:fs'
import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import type { JsonObject } from 'type-fest'
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
			// Parse the comment contents
			const result = parseCommentText(node.value)
			if (result === undefined) return CONTINUE
			const { args, keyword } = result

			// Look for a matching expander
			const matchingExpander = expansionRules.find(
				(expander) => `${keywordPrefix ?? ''}${expander.keyword}` === keyword,
			)
			if (matchingExpander === undefined) return CONTINUE

			console.log(`matchingExpander: ${matchingExpander.keyword}`)

			// The keyword already contains the prefix from the parser
			// Look for a closing closing comment, if there is one we'll delete everything
			// between the opening and closing comments
			const closingTagIndex = getClosingTagIndex(ast, index, keyword)
			const tagsToReplace = closingTagIndex ? closingTagIndex - index - 1 : 0
			parent.children.splice(index + 1, tagsToReplace)

			// Add closing tag if it doesn't exist
			if (closingTagIndex === undefined) {
				const closingNode: Html = {
					type: 'html',
					value: `<!-- /${keyword} -->`,
				}
				parent.children.splice(index + 1, 0, closingNode)
			}

			// Save the promise that generates the new nodes
			// TODO pass args
			newContent.push({
				applySequence: expansionRules.indexOf(matchingExpander),
				nodes: matchingExpander.getNodes(ast, args),
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
	keywordWithPrefix: string,
): number | undefined {
	let matchingIndex: number | undefined
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined && index >= startFromIndex) {
			const result = parseCommentText(node.value)
			if (result === undefined) return CONTINUE

			if (`/${keywordWithPrefix}` === result.keyword) {
				matchingIndex = index
				return EXIT
			}
		}
	})
	return matchingIndex
}

export function parseCommentText(
	text: string,
): { args: JsonObject | undefined; keyword: string } | undefined {
	// Get the keyword with args
	const match = /^\s*<!--\s*(.+)\s*-->\s*$/.exec(text)?.at(1)?.trim()
	if (match === undefined) return undefined

	// Get the args
	const parts = /^([^\s({]+)[\s()]*({.+})?\)?$/g.exec(match)
	if (parts === null) return undefined

	const keyword = parts.at(1)
	if (keyword === undefined) return undefined

	const rawArgs = parts.at(2)

	// Use json5 so we can be more forgiving about unquoted keys
	const args = rawArgs ? json5.parse<JsonObject>(rawArgs) : undefined

	return { args, keyword }
}
