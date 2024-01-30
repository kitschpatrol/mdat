/* eslint-disable complexity */

import MdatError from './mdat-error'
import { parseCommentText, splitHtmlIntoMdastNodes } from './parse'
import { type NormalizedRule, type Rules, loadRules } from './rules'
import { getInputOutputPath, getInputOutputPaths } from './utilities'
import chalk from 'chalk'
import { type Html, type Parent, type Root, type RootContent } from 'mdast'
import { assert as mdastUtilAssert } from 'mdast-util-assert'
import fs from 'node:fs/promises'
import path from 'node:path'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import type { JsonObject } from 'type-fest'
import { type Simplify } from 'type-fest'
import { CONTINUE, visit } from 'unist-util-visit'

// TODO
// const buffer = await fs.readFile('./test/assets/test-document.md')
// const file = await remark()
// 	.use(remarkGfm)
// 	.use(remarkMdat, {
// 		rules: ['./test/assets/test-rules.js'],
// 	})
// 	.process(buffer)

// console.error(reporter(file))
// // Console.log(file.toString())

export type ExpandFileReport = {
	expandedFile: string
	report: MdatError[]
	sourceFile: string
}
export type ExpandStringReport = { expandedString: string; report: MdatError[] }
export type ExpandAstReport = { expandedAst: Root; report: MdatError[] }

// Multiple files, main entry point for CLI
export type ExpandFilesOptions = ExpandFileOptions
export async function expandFiles(
	sourcePaths: string[],
	options: ExpandFilesOptions,
): Promise<ExpandFileReport[]> {
	const { meta, name, output, prefix, print, rules } = options
	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(sourcePaths, output, name, 'md')
	const results: ExpandFileReport[] = []

	for (const { input, name, output } of inputOutputPaths) {
		const result = await expandFile(input, {
			meta,
			name,
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
	const {
		input: inputPath,
		name: outputName,
		output: outputPath,
	} = getInputOutputPath(sourcePath, output, name, 'md')

	const markdown = await fs.readFile(inputPath, 'utf8')
	const { expandedString, report } = await expandString(markdown, {
		meta,
		prefix,
		rules,
	})

	const outputFile = path.join(outputPath, outputName)

	if (print) {
		process.stdout.write(`${expandedString}\n`)
	} else {
		await fs.writeFile(outputFile, expandedString)
	}

	return {
		expandedFile: print ? 'stdout' : outputFile,
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
	check?: boolean
	meta?: boolean
	prefix?: string
	rules: Array<Rules | string>
}
export async function expandAst(ast: Root, options: ExpandAstOptions): Promise<ExpandAstReport> {
	const { check = false, meta = false, prefix = '', rules } = options

	const report: MdatError[] = []

	// Load dynamic rule modules if necessary, and also normalizes the rule type
	const resolvedRules = await loadRules(rules)

	// Zero pass to split any multi-comment nodes and their content into individual MDAST Html nodes
	// They're wrapped in a paragraph so as not to introduce new breaks
	// TODO not sure this works
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined) {
			const htmlNodes = splitHtmlIntoMdastNodes(node.value)
			if (htmlNodes.length > 1) {
				// HtmlNodes[0].value = `${htmlNodes[0].value}\n`

				report.push(
					new MdatError(
						'Found abutting comments, this could cause issues.',
						'warning',
						'markdown',
						node.position?.start.line,
					),
				)

				if (!check) {
					parent.children.splice(index, 1, {
						children: htmlNodes,
						type: 'paragraph',
					})
				}
			}
		}
	})

	// Extract template expansion commands from comment nodes
	// https://github.com/syntax-tree/mdast/blob/main/readme.md

	// Happens in two passes to accommodate async rules

	// Save promises as we go
	const newContent: Array<{
		args: JsonObject | undefined
		keyword: string
		openingComment: Html
		orderEncountered: number
		parent: Parent
		prefixedKeyword: string
		rule: NormalizedRule
	}> = []

	const successfullyExpandedNewContent: typeof newContent = []

	// TODO stay at top level
	// First pass adds closing comments if needed and removes existing children
	visit(ast, 'html', (node, index, parent) => {
		if (parent !== undefined && index !== undefined) {
			// Parse the comment contents
			const result = parseCommentText(node.value)
			if (result === undefined) return CONTINUE
			const { args, keyword: prefixedKeyword } = result

			// Check for prefix
			if (prefix !== '' && !prefixedKeyword.startsWith(prefix)) {
				// Warn if it's similar to a rule
				if (resolvedRules[prefixedKeyword] !== undefined) {
					report.push(
						new MdatError(
							`Comment "${node.value}" is a valid rule, but is missing the "${prefix}".`,
							'warning',
							'rules',
							node.position?.start.line,
							{ prefixedKeyword: resolvedRules[prefixedKeyword] },
						),
					)
				}

				return CONTINUE
			}

			// Strip prefix
			const keyword = prefixedKeyword.startsWith(prefix)
				? prefixedKeyword.slice(prefix.length)
				: prefixedKeyword

			// Look for a matching rule in the rule set
			const matchingRule = resolvedRules[keyword]
			if (matchingRule === undefined) {
				report.push(
					new MdatError(
						`Comment "${node.value}" did not match any rules.`,
						'warning',
						'rules',
						node.position?.start.line,
					),
				)

				return CONTINUE
			}

			// Look for a closing closing comment, if there is one we'll delete everything
			// between the opening and closing comments
			const closingTagIndex = getClosingTagIndex(parent, index, prefixedKeyword)

			const tagsToReplace = closingTagIndex ? closingTagIndex - index : 0
			if (!check) parent.children.splice(index + 1, tagsToReplace)

			// Add the closing tag later if the rule turned out to run successfully
			// We have to save some extra context in the object
			newContent.push({
				args,
				keyword,
				openingComment: node,
				orderEncountered: newContent.length,
				parent,
				prefixedKeyword,
				rule: matchingRule,
			})
		}
	})

	// Sort newContent in place to apply expansion rules in the order they're received in the array
	newContent.sort((a, b) => (a.rule.applicationOrder ?? 0) - (b.rule.applicationOrder ?? 0))

	// Execution, not just promise resolution, must be deferred to here
	// to ensure table of contents has all generated headings
	for (const newContentItem of newContent) {
		const { args, keyword, openingComment, parent, prefixedKeyword, rule } = newContentItem
		let newMarkdownString = ''
		try {
			newMarkdownString = await rule.content(args ?? {}, ast)
		} catch (error) {
			if (error instanceof MdatError) {
				report.push(error)
			} else if (error instanceof Error) {
				report.push(
					new MdatError(
						'Rule failed to expand.',
						'error',
						'rules',
						openingComment.position?.start.line,
						{ keyword: rule },
					),
				)
			}

			continue
		}

		if (newMarkdownString === '') {
			report.push(
				new MdatError(
					`Rule "${keyword}" expanded to empty string`,
					'error',
					'rules',
					openingComment.position?.start.line,
					{ keyword: rule },
				),
			)

			continue
		}

		const newNodes = remark().use(remarkGfm).parse(newMarkdownString).children

		// Add closing tag
		const closingNode: Html = {
			type: 'html',
			value: `<!-- /${prefixedKeyword} -->`,
		}

		const openingCommentIndex = parent.children.indexOf(openingComment)
		if (!check) parent.children.splice(openingCommentIndex + 1, 0, ...newNodes, closingNode)

		successfullyExpandedNewContent.push(newContentItem)
	}

	// Add or remove the meta comment if requested
	const message = 'Warning: Content in HTML comment blocks generated by mdat'
	// Remove existing meta comments
	if (!check) {
		ast.children = ast.children.filter((node) => !isMetaComment(node, message))
	}

	// Add meta comment
	if (meta) {
		const date = new Date().toISOString().slice(0, 10)
		const metaComment: Html = {
			type: 'html',
			value: `<!-- ${message} on ${date}. -->`,
		}
		if (!check) ast.children.unshift(metaComment)
	}

	// Validate meta presence
	const metaNode = ast.children.find((node) => isMetaComment(node, message))

	if (meta && metaNode === undefined) {
		report.push(new MdatError(`Missing meta comment`, 'error', 'meta'))
	} else if (!meta && metaNode !== undefined) {
		report.push(
			new MdatError(
				`Meta comment should not exist`,
				'error',
				'meta',
				metaNode.position?.start.line,
			),
		)
	}

	// Check for missing required rules
	for (const [keyword, rule] of Object.entries(resolvedRules)) {
		if (rule.required && !newContent.some(({ keyword: usedKeyword }) => usedKeyword === keyword)) {
			report.push(
				new MdatError(`Missing required rule "${keyword}"`, 'error', 'required', undefined, {
					keyword: rule,
				}),
			)
		}
	}

	// Check for rules used out of order
	// Get two arrays, with keyword sorted by order
	const orderFound = [...newContent]
		.sort((a, b) => a.orderEncountered - b.orderEncountered)
		.filter((content) => content.rule.order !== undefined)
		.map((content) => content.keyword)

	const orderExpected = [...orderFound].sort((a, b) => {
		const orderA = resolvedRules[a].order
		const orderB = resolvedRules[b].order
		// Force unwrap because we filtered the source array
		return orderA! - orderB!
	})

	for (const [currentIndex, keyword] of orderFound.entries()) {
		const correctIndex = orderExpected.indexOf(keyword)

		if (correctIndex !== currentIndex) {
			const up = correctIndex < currentIndex
			let message = `\t${up ? '↑' : '↓'} "${chalk.yellow(keyword)}" should move ${up ? 'up' : 'down'} so it comes`

			if (correctIndex === 0) {
				message = `${message} before "${chalk.yellow(orderExpected[correctIndex + 1])}"`
			} else if (correctIndex === orderFound.length - 1) {
				message = `${message} after "${chalk.yellow(orderExpected[correctIndex - 1])}"`
			} else {
				message = `${message} after "${chalk.yellow(orderExpected[correctIndex - 1])}" and before "${chalk.yellow(orderExpected[correctIndex + 1])}"`
			}

			const newContentItem = newContent.find((content) => content.keyword === keyword)
			if (newContentItem === undefined) throw new Error("Couldn't find newContentItem")

			report.push(
				new MdatError(
					message,
					'error',
					'order',
					newContentItem.openingComment.position?.start.line,
					{ keyword: newContentItem?.rule },
				),
			)
		}
	}

	// General report
	report.push(
		new MdatError(
			`Successfully applied ${successfullyExpandedNewContent.length} of ${newContent.length} expansion rules.`,
			'info',
			'rules',
		),
	)

	for (const newContentItem of successfullyExpandedNewContent) {
		report.push(
			new MdatError(
				`Successfully expanded: ${newContentItem.openingComment.value}`,
				'info',
				'rules',
				newContentItem.openingComment.position?.start.line,
				{ keyword: newContentItem.rule },
			),
		)
	}

	try {
		mdastUtilAssert(ast)
	} catch (error) {
		if (error instanceof Error) {
			report.push(new MdatError(`Markdown AST invalid`, 'error', 'markdown'))
		}
	}

	return {
		expandedAst: ast,
		report,
	}
}

// Helpers
function getClosingTagIndex(
	parent: Parent,
	startFromIndex: number,
	prefixedKeyword: string,
): number | undefined {
	let matchingIndex: number | undefined

	for (let index = startFromIndex + 1; index < parent.children.length; index++) {
		const node = parent.children[index]
		if (node.type === 'html') {
			const result = parseCommentText(node.value)
			if (result === undefined) continue

			if (`/${prefixedKeyword}` === result.keyword) {
				matchingIndex = index
				break
			} else {
				// If we find run into another comment that isn't our closing tag, assume we are unclosed forever
				return
			}
		}
	}

	return matchingIndex
}

function isMetaComment(node: RootContent, message: string): boolean {
	return node.type === 'html' && node.value.startsWith(`<!-- ${message}`)
}
