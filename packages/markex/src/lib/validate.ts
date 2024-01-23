/* eslint-disable max-depth */
/* eslint-disable complexity */
import { type ExpandAstOptions, type ExpandStringOptions } from './expand'
import { type Expander } from './expanders/types'
import { parseCommentText } from './parse'
import chalk from 'chalk'
import { type Root } from 'mdast'
import plur from 'plur'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'

export type ValidateStringOptions = ExpandStringOptions
export async function validateString(
	markdown: string,
	options: ValidateStringOptions,
): Promise<Error[] | true> {
	const ast = remark().use(remarkGfm).parse(markdown)
	return validateAst(ast, options)
}

export type ValidateAstOptions = ExpandAstOptions
export async function validateAst(ast: Root, options: ValidateAstOptions): Promise<Error[] | true> {
	const { expansionRules, keywordPrefix } = options
	const errors: Error[] = []

	// Get valid expander comments, verify valid args
	const validExpanders: Expander[] = []
	for (const node of ast.children) {
		if (node.type === 'html') {
			const parsedComment = parseCommentText(node.value)
			if (parsedComment === undefined) continue
			const { args, keyword: commentKeyword } = parsedComment

			const matchingExpander = expansionRules.find(
				(expander) => `${keywordPrefix ?? ''}${expander.keyword}` === commentKeyword,
			)
			if (matchingExpander === undefined) continue

			// Valid command, check args
			if (args) {
				try {
					await matchingExpander.getNodes(ast, args)
				} catch (error) {
					if (error instanceof Error) {
						errors.push(error)
					}
				}
			}

			validExpanders.push(matchingExpander)
		}
	}

	// Check for missing required expanders
	for (const expander of expansionRules) {
		const absenceErrors: Error[] = []
		if (expander.required && !validExpanders.includes(expander)) {
			absenceErrors.push(new Error(`\t◌ "${chalk.yellow(expander.keyword)}"`))
		}

		if (absenceErrors.length > 0) {
			errors.push(
				new Error(
					chalk.bold.red(
						`👀 ${absenceErrors.length} required ${plur('expander', absenceErrors.length)} ${absenceErrors.length > 1 ? 'are' : 'is'} missing from the document:`,
					),
				),
				...absenceErrors,
			)
		}
	}

	// Check for order issues
	const validExpandersWithOrder = validExpanders.filter((expander) => expander.order !== undefined)
	if (validExpandersWithOrder.length > 1) {
		// Force unwrap because we've checked for it in the filter above
		const sortedValidExpanders = [...validExpandersWithOrder].sort((a, b) => a.order! - b.order!)

		const sortErrors: Error[] = []

		for (const sortedExpander of validExpandersWithOrder) {
			const correctIndex = sortedValidExpanders.indexOf(sortedExpander)
			const currentIndex = validExpandersWithOrder.indexOf(sortedExpander)
			if (correctIndex !== currentIndex) {
				const up = correctIndex < currentIndex
				let message = `\t${up ? '🔼' : '🔽'} "${chalk.yellow(sortedExpander.keyword)}" should move ${up ? 'up' : 'down'} so it comes`

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
						`🔀 ${sortErrors.length} ${plur('expander', sortErrors.length)} ${sortErrors.length > 1 ? 'are' : 'is'} not in the correct order:`,
					),
				),
				...sortErrors,
			)
		}

		// TODO maybe check for missing closing tags, indicating that the tool hasn't been run?
	}

	if (errors.length > 0) {
		return errors
	}

	return true
}
