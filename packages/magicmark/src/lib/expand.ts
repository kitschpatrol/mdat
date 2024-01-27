import { parseCommentText } from './parse'
import { type Rules, loadRules } from './rules'
import { getInputOutputPath, getInputOutputPaths } from './utilities'
import { type Html, type Root } from 'mdast'
import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import type { JsonObject } from 'type-fest'
import { type Simplify } from 'type-fest'
import { CONTINUE, EXIT, visit } from 'unist-util-visit'

export type ExpandFileReport = { expandedFile: string; report: string[]; sourceFile: string }
export type ExpandStringReport = { expandedString: string; report: string[] }
export type ExpandAstReport = { expandedAst: Root; report: string[] }

// Multiple files, main entry point for CLI
export type ExpandFilesOptions = ExpandFileOptions
export async function expandFiles(
	sourcePaths: string[],
	options: ExpandFilesOptions,
): Promise<ExpandFileReport[]> {
	const { meta, name, output, prefix, print, rules } = options
	const inputOutputPaths = getInputOutputPaths(sourcePaths, output, name)
	const results: ExpandFileReport[] = []

	for (const { input, output } of inputOutputPaths) {
		const result = await expandFile(input, {
			meta,
			output,
			prefix,
			print,
			rules,
		})
		results.push(result)
	}

	return results
}

// Single file
export type ExpandFileOptions = Simplify<
	ExpandStringOptions & {
		name?: string
		output?: string
		print?: boolean
	}
>
export async function expandFile(
	sourcePath: string,
	options: ExpandFileOptions,
): Promise<ExpandFileReport> {
	const { meta, name, output, prefix, print, rules } = options
	const { input: inputPath, output: outputPath } = getInputOutputPath(sourcePath, output, name)

	const markdown = await fs.readFile(inputPath, 'utf8')
	const { expandedString, report } = await expandString(markdown, {
		meta,
		prefix,
		rules,
	})

	if (print) {
		process.stdout.write(`${expandedString}\n`)
	} else {
		await fs.writeFile(outputPath, expandedString)
	}

	return {
		expandedFile: print ? 'stdout' : outputPath,
		report,
		sourceFile: inputPath,
	}
}

// String
export type ExpandStringOptions = ExpandAstOptions
export async function expandString(
	markdown: string,
	options: ExpandStringOptions,
): Promise<ExpandStringReport> {
	const ast = remark().use(remarkGfm).parse(markdown)
	const { expandedAst, report } = await expandAst(ast, options)

	return {
		expandedString: remark().use(remarkGfm).stringify(expandedAst),
		report,
	}
}

// AST
export type ExpandAstOptions = {
	meta?: boolean
	prefix?: string
	rules: Array<Rules | string>
}
export async function expandAst(ast: Root, options: ExpandAstOptions): Promise<ExpandAstReport> {
	const { meta = false, prefix = '', rules } = options

	// Load dynamic rule modules if necessary, and also normalizes the rule type
	const resolvedRules = await loadRules(rules)

	// Extract template expansion commands from comment nodes
	// https://github.com/syntax-tree/mdast/blob/main/readme.md

	// Happens in two passes to accommodate async rules

	// Save promises as we go
	const newContent: Array<{
		applySequence: number
		args: JsonObject | undefined
		// Convert all rule content to this form
		content: (options: JsonObject, ast: Root) => Promise<string>
		openingComment: Html
	}> = []

	// TODO stay at top level
	// First pass adds closing comments if needed and removes existing children
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined) {
			// Parse the comment contents
			const result = parseCommentText(node.value)
			if (result === undefined) return CONTINUE
			const { args, keyword: prefixedKeyword } = result

			// Check for prefix
			if (prefix !== '' && !prefixedKeyword.startsWith(prefix)) return CONTINUE

			// Strip prefix
			const keyword = prefixedKeyword.startsWith(prefix)
				? prefixedKeyword.slice(prefix.length)
				: prefixedKeyword

			// Look for a matching rule in the rule set
			const matchingRule = resolvedRules[keyword]
			if (matchingRule === undefined) return CONTINUE

			// Look for a closing closing comment, if there is one we'll delete everything
			// between the opening and closing comments
			const closingTagIndex = getClosingTagIndex(ast, index, prefixedKeyword)
			const tagsToReplace = closingTagIndex ? closingTagIndex - index - 1 : 0
			parent.children.splice(index + 1, tagsToReplace)

			// Add closing tag if it doesn't exist
			if (closingTagIndex === undefined) {
				const closingNode: Html = {
					type: 'html',
					value: `<!-- /${prefixedKeyword} -->`,
				}
				parent.children.splice(index + 1, 0, closingNode)
			}

			newContent.push({
				applySequence: matchingRule.applicationOrder ?? 0,
				args,
				content: matchingRule.content,
				openingComment: node,
			})
		}
	})

	// Sort newContent in place to apply expansion rules in the order they're received in the array
	newContent.sort((a, b) => a.applySequence - b.applySequence)

	// Execution, not just promise resolution, must be deferred to here
	// to ensure table of contents has all generated headings
	for (const { args, content, openingComment } of newContent) {
		const newMarkdownString = await content(args ?? {}, ast)
		const newNodes = remark().use(remarkGfm).parse(newMarkdownString).children
		const openingCommentIndex = ast.children.indexOf(openingComment)
		ast.children.splice(openingCommentIndex + 1, 0, ...newNodes)
	}

	// Add or remove the meta comment if requested
	const message = 'Warning: Content in HTML comment blocks generated by magicmark'
	// Remove existing meta comments
	ast.children = ast.children.filter(
		(node) => !(node.type === 'html' && node.value.startsWith(`<!-- ${message}`)),
	)

	if (meta) {
		const date = new Date().toISOString().slice(0, 10)
		const metaComment: Html = {
			type: 'html',
			value: `<!-- ${message} on ${date}. -->`,
		}
		ast.children.unshift(metaComment)
	}

	return {
		expandedAst: ast,
		report: newContent.map(({ openingComment }) => openingComment.value),
	}
}

// Helpers
function getClosingTagIndex(
	ast: Root,
	startFromIndex: number,
	prefixedKeyword: string,
): number | undefined {
	let matchingIndex: number | undefined
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined && index >= startFromIndex) {
			const result = parseCommentText(node.value)
			if (result === undefined) return CONTINUE

			if (`/${prefixedKeyword}` === result.keyword) {
				matchingIndex = index
				return EXIT
			}
		}
	})
	return matchingIndex
}
