import { saveLog } from '../mdat/mdat-log'
import { type CommentMarkerNode, parseCommentNode } from '../mdat/parse'
import {
	type NormalizedRule,
	type NormalizedRules,
	type Rules,
	getOrder,
	getRequired,
	getRuleContent,
	normalizeRules,
	validateRules,
} from '../mdat/rules'
import chalk from 'chalk'
import Table from 'cli-table3'
import type { Root } from 'mdast'
import { CONTINUE, visit } from 'unist-util-visit'
import type { VFile } from 'vfile'

export type Options = {
	addMetaComment: boolean
	closingPrefix: string
	keywordPrefix: string
	metaCommentIdentifier: string
	/** Enable extra checks, too noisy for real life. */
	paranoid: boolean
	rules: Rules
}

type CommentMarkerWithRule = CommentMarkerNode & {
	rule: NormalizedRule | undefined
}

/**
 * Mdast utility function to check mdat source document, and output.
 */
export async function mdatCheck(tree: Root, file: VFile, options: Options) {
	const {
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
		paranoid = false,
		rules: rawRules,
	} = options

	validateRules(rawRules)
	const rules = normalizeRules(rawRules)

	// Collect all comment markers from the tree, including invalid ones
	// Order will be that of appearance in the document
	const commentMarkers: CommentMarkerWithRule[] = []
	visit(tree, 'html', (node, index, parent) => {
		if (parent === undefined || index === undefined) return CONTINUE
		// Find all comments
		const commentMarker = parseCommentNode(node, parent, {
			closingPrefix,
			keywordPrefix,
			metaCommentIdentifier,
		})

		// Save the marker for validation functions
		if (commentMarker !== undefined) {
			// Pair the marker with its rule (if available) for ease of future use
			const rule =
				commentMarker.type === 'open' || commentMarker.type === 'close'
					? rules[commentMarker.keyword]
					: undefined

			commentMarkers.push({
				...commentMarker,
				rule,
			})
		}
	})

	// Now run some validations

	// Error level checks
	checkMissingRequiredComments(file, commentMarkers, rules)
	checkCommentOrder(file, commentMarkers)
	checkMetaCommentPresence(file, commentMarkers, options)
	await checkRulesReturnedContent(file, commentMarkers, tree)

	// Warning level checks
	if (paranoid) {
		checkMissingOptionalComments(file, commentMarkers, rules) // Too annoying
	}

	checkMissingRules(file, commentMarkers)
	checkMissingPrefix(file, commentMarkers, rules, options)
}

// Validation functions

/**
 * Check that all the rules are working by getting their content
 */
async function checkRulesReturnedContent(
	file: VFile,
	comments: CommentMarkerWithRule[],
	tree: Root,
) {
	for (const comment of comments) {
		if (comment.type === 'open' && comment.rule !== undefined) {
			try {
				const returnedContent = await getRuleContent(comment.rule, comment.options, tree)

				if (returnedContent.trim() === '') {
					saveLog(file, 'error', 'check', `Returned empty string: ${comment.html}`, comment.node)
				}
			} catch (error) {
				if (error instanceof Error) {
					saveLog(file, 'error', 'check', `Error getting content: ${comment.html}`, comment.node)
				}
			}
		}
	}
}

/**
 * Check for comments with missing prefix (have an un-prefixed comment that matches a rule)
 */
function checkMissingPrefix(
	file: VFile,
	comments: CommentMarkerWithRule[],
	rules: NormalizedRules,
	options: Options,
): void {
	if (options.keywordPrefix === '') return
	const ruleKeywords = Object.keys(rules)

	for (const comment of comments) {
		if (comment.type === 'native' && ruleKeywords.includes(comment.content)) {
			saveLog(file, 'warn', 'check', `Missing prefix: ${comment.html}`, comment.node)
		}
	}
}

/**
 * Check for missing "optional" rules. These are instances where we have the comment, but not the rule
 */
function checkMissingRules(file: VFile, comments: CommentMarkerWithRule[]): void {
	for (const comment of comments) {
		if (comment.type === 'open' && comment.rule === undefined) {
			saveLog(file, 'warn', 'check', `Missing rule for: ${comment.html}`, comment.node)
		}
	}
}

/**
 * Check for missing optional comments. We have defined the rule, but not written a matching comment.
 */
function checkMissingOptionalComments(
	file: VFile,
	comments: CommentMarkerWithRule[],
	rules: NormalizedRules,
): void {
	for (const [keyword, rule] of Object.entries(rules)) {
		if (
			!getRequired(rule) &&
			!comments.some((comment) => comment.type === 'open' && comment.keyword === keyword)
		) {
			saveLog(file, 'warn', 'check', `Missing optional: <!-- ${keyword} -->`)
		}
	}
}

/**
 * Check for missing required comments.
 * The rule set includes a rule with `required: true`, but no matching comment was found in the document.
 */
function checkMissingRequiredComments(
	file: VFile,
	comments: CommentMarkerWithRule[],
	rules: NormalizedRules,
): void {
	for (const [keyword, rule] of Object.entries(rules)) {
		// Compound rules don't get comments
		if (
			getRequired(rule) &&
			!comments.some((comment) => comment.type === 'open' && comment.keyword === keyword)
		) {
			saveLog(file, 'error', 'check', `Missing required: <!-- ${keyword} -->`)
		}
	}
}

/**
 * Check if comment order in document is different from order specified in the rules
 */
function checkCommentOrder(file: VFile, comments: CommentMarkerWithRule[]): void {
	const commentsInOrderOfAppearance = comments.filter(
		(commentMarker) => commentMarker.type === 'open' && getOrder(commentMarker.rule) !== undefined,
	)

	const commentsInCorrectOrder = [...commentsInOrderOfAppearance].sort((a, b) => {
		const orderA = getOrder(a.rule)
		const orderB = getOrder(b.rule)

		if (orderA === undefined || orderB === undefined) {
			throw new Error('Unexpected undefined rule order')
		}

		return orderA - orderB
	})

	const currentOrderList = commentOrderList(commentsInOrderOfAppearance)
	const correctOrderList = commentOrderList(commentsInCorrectOrder)

	const table = new Table({
		head: [chalk.bold.red('Current Order'), chalk.bold.green('Required Order')],
		style: {
			compact: true,
		},
	})

	if (currentOrderList.join(',') !== correctOrderList.join(',')) {
		table.push(
			...currentOrderList.map((currentOrder, index) => [currentOrder, correctOrderList[index]]),
		)

		saveLog(file, 'error', 'check', `Out of order:\n${table.toString()}`)
	}
}

/**
 * Check that meta presence / absence comment matches options.
 */
function checkMetaCommentPresence(
	file: VFile,
	comments: CommentMarkerWithRule[],
	options: Options,
): void {
	const { addMetaComment } = options

	const metaCommentCount = comments.filter((comment) => comment.type === 'meta').length

	if (addMetaComment && metaCommentCount !== 1) {
		saveLog(file, 'error', 'check', `Missing meta comment`)
	}

	if (!addMetaComment && metaCommentCount !== 0) {
		saveLog(file, 'error', 'check', `Unexpected meta comment`)
	}

	if (metaCommentCount > 1) {
		saveLog(file, 'error', 'check', `Multiple meta comments`)
	}
}

// Helpers

function commentOrderList(comments: CommentMarkerWithRule[]): string[] {
	return comments.map((comment, index) => {
		if (comment.type === 'open' || comment.type === 'close') {
			return `${index + 1}. ${comment.html}`
		}

		throw new Error('Unexpected comment type')
	})
}
