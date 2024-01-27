/* eslint-disable max-depth */
/* eslint-disable complexity */
import { parseCommentText } from './parse'
import { type NormalizedRules, type Rules, loadRules } from './rules'
import { expandPath } from './utilities'
import chalk from 'chalk'
import { type Root } from 'mdast'
import fs from 'node:fs/promises'
import plur from 'plur'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'

export type CheckOptions = {
	meta?: boolean | undefined
	prefix?: string | undefined
	rules: Array<Rules | string>
}
export type CheckReport = Error[] | true
export type CheckFileReport = { file: string; report: CheckReport }

// Check multiple files, main entry point for CLI
export async function checkFiles(
	sourcePaths: string[],
	options: CheckOptions,
): Promise<CheckFileReport[]> {
	const resolvedFiles = sourcePaths.map((path) => expandPath(path))

	if (resolvedFiles.length === 0) {
		throw new Error('No files provided.')
	}

	const results: CheckFileReport[] = []

	for (const file of resolvedFiles) {
		const result = await checkFile(file, options)
		results.push(result)
	}

	return results
}

// Check a file
export async function checkFile(
	sourcePath: string,
	options: CheckOptions,
): Promise<CheckFileReport> {
	const resolvedFile = expandPath(sourcePath)
	const { meta, prefix, rules } = options

	const markdown = await fs.readFile(resolvedFile, 'utf8')
	const result = await checkString(markdown, {
		meta,
		prefix,
		rules,
	})
	return {
		file: resolvedFile,
		report: result,
	}
}

// Check a markdown string
export async function checkString(markdown: string, options: CheckOptions): Promise<CheckReport> {
	const ast = remark().use(remarkGfm).parse(markdown)
	return checkAst(ast, options)
}

// Check an AST
export async function checkAst(ast: Root, options: CheckOptions): Promise<CheckReport> {
	const { meta, prefix = '', rules } = options
	const errors: Error[] = []

	// Load dynamic rule modules if necessary
	const resolvedRules = await loadRules(rules)

	// Get valid expander comments, verify valid args
	const validExpanders: NormalizedRules[] = []
	for (const node of ast.children) {
		if (node.type === 'html') {
			const parsedComment = parseCommentText(node.value)
			if (parsedComment === undefined) continue
			const { args, keyword: prefixedKeyword } = parsedComment

			// Check for prefix
			if (prefix !== '' && !prefixedKeyword.startsWith(prefix)) continue

			// Strip prefix
			const keyword = prefixedKeyword.startsWith(prefix)
				? prefixedKeyword.slice(prefix.length)
				: prefixedKeyword

			// Look for a matching rule in the rule set
			const matchingRule = resolvedRules[keyword]
			if (matchingRule === undefined) continue

			// Comment keyword is in the rule set, check args if present
			// TODO Check if the matching rule can even take args?
			if (args) {
				// See if the rule can run with the args, useful if the rule uses zod or similar
				// to validate the args
				try {
					await matchingRule.content(args, ast)
				} catch (error) {
					if (error instanceof Error) {
						errors.push(error)
					}
				}
			}

			validExpanders.push({ keyword: matchingRule })
		}
	}

	// Check for missing required rules
	const absenceErrors: Error[] = []
	for (const [keyword, rule] of Object.entries(resolvedRules)) {
		if (rule.required && !Object.keys(validExpanders).includes(keyword)) {
			absenceErrors.push(new Error(`  "${chalk.yellow(`<-- ${keyword} -->`)}"`))
		}
	}

	if (absenceErrors.length > 0) {
		errors.push(
			new Error(
				chalk.bold.red(
					`${absenceErrors.length} required ${plur('comment', absenceErrors.length)} ${absenceErrors.length > 1 ? 'are' : 'is'} missing from the document:`,
				),
			),
			...absenceErrors,
		)
	}

	// Check for order issues
	const validExpandersWithOrder = validExpanders.filter((rule) => {
		const theRule = getRuleFromRulesRecord(rule)
		return theRule.order !== undefined
	})

	if (validExpandersWithOrder.length > 1) {
		const sortedValidExpanders = [...validExpandersWithOrder].sort((a, b) => {
			const ruleA = getRuleFromRulesRecord(a)
			const ruleB = getRuleFromRulesRecord(b)
			// Force unwrap because we've checked for it in the filter above
			return ruleA.order! - ruleB.order!
		})

		const sortErrors: Error[] = []

		for (const sortedExpander of validExpandersWithOrder) {
			const correctIndex = sortedValidExpanders.indexOf(sortedExpander)
			const currentIndex = validExpandersWithOrder.indexOf(sortedExpander)
			if (correctIndex !== currentIndex) {
				const up = correctIndex < currentIndex
				let message = `\t${up ? '↑' : '↓'} "${chalk.yellow(sortedExpander.keyword)}" should move ${up ? 'up' : 'down'} so it comes`

				if (correctIndex === 0) {
					message = `${message} before "${chalk.yellow(sortedValidExpanders[correctIndex + 1].keyword)}"`
				} else if (correctIndex === validExpandersWithOrder.length - 1) {
					message = `${message} after "${chalk.yellow(sortedValidExpanders[correctIndex - 1].keyword)}"`
				} else {
					message = `${message} after "${chalk.yellow(sortedValidExpanders[correctIndex - 1].keyword)}" and before "${chalk.yellow(sortedValidExpanders[correctIndex + 1].keyword)}"`
				}

				sortErrors.push(new Error(message))
				continue
			}
		}

		if (sortErrors.length > 0) {
			errors.push(
				new Error(
					chalk.bold.red(
						`${sortErrors.length} ${plur('comment', sortErrors.length)} ${sortErrors.length > 1 ? 'are' : 'is'} not in the correct order:`,
					),
				),
				...sortErrors,
			)
		}

		if (meta) {
			// TODO check for meta comment
		}

		// TODO maybe check for missing closing tags, indicating that the tool hasn't been run?
	}

	if (errors.length > 0) {
		return errors
	}

	return true
}

// Helper for working with arrays of rule records that should only have a single rule.
function getRuleFromRulesRecord(rulesRecordArray: NormalizedRules): NormalizedRules[keyof Rules] {
	const rules = Object.values(rulesRecordArray)
	if (rules.length > 1) {
		throw new Error(
			'Found multiple rule definitions in a valid rule array entry. This should never happen',
		)
	}

	return rules[0]
}
