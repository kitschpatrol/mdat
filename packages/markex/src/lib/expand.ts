import { type Expander } from './expanders/types'
import { parseCommentText } from './parse'
import { type Html, type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import type { JsonObject } from 'type-fest'
import { CONTINUE, EXIT, visit } from 'unist-util-visit'

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
		args: JsonObject | undefined
		getNodes: Expander['getNodes']
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

			// Save the reference to promise function and its args
			// to generate new nodes later on
			newContent.push({
				applySequence: expansionRules.indexOf(matchingExpander),
				args,
				getNodes: matchingExpander.getNodes,
				openingComment: node,
			})
		}
	})

	// Sort newContent in place to apply expansion rules in the order they're received in the array
	newContent.sort((a, b) => a.applySequence - b.applySequence)

	// Execution, not just promise resolution, must be deferred to here
	// to ensure table of contents has all generated headings
	for (const { args, getNodes, openingComment } of newContent) {
		const newNodes = await getNodes(ast, args)
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
