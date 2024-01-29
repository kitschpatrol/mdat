import { type CommentMarkerNode, parseCommentNode } from '../parse/parse-comment'
import { type NormalizedRule, loadRules } from '../rules'
import type { Root } from 'mdast'
import { table } from 'table'
import type { Plugin } from 'unified'
import { CONTINUE, visit } from 'unist-util-visit'
import type { VFile } from 'vfile'

export type ValidationOptions = {
	addMetaComment: boolean
	closingPrefix: string
	keywordPrefix: string
	metaCommentPrefix: string
	ruleFiles: string[]
}

type CommentMarkerWithRule = CommentMarkerNode & {
	rule: NormalizedRule | undefined
}

const validate: Plugin<[ValidationOptions], Root> = function (options) {
	return async function (tree, file) {
		const { closingPrefix, keywordPrefix, metaCommentPrefix, ruleFiles } = options

		const resolvedRules = await loadRules(ruleFiles)

		// Collect all comment markers from the tree, including invalid ones
		// Order will be that of appearance in the document
		const commentMarkers: CommentMarkerWithRule[] = []
		visit(tree, 'html', (node, index, parent) => {
			if (parent === undefined || index === undefined) return CONTINUE
			// Find all comments
			const commentMarker = parseCommentNode(node, parent, {
				closingPrefix,
				keywordPrefix,
				metaCommentPrefix,
			})

			// Save the marker for validation functions
			if (commentMarker !== undefined) {
				// Pair the marker with its rule (if available) for ease of future use
				const rule =
					commentMarker.type === 'open' || commentMarker.type === 'close'
						? resolvedRules[commentMarker.keyword]
						: undefined

				commentMarkers.push({
					...commentMarker,
					rule,
				})
			}
		})

		// Now run some validations
		// 1. Error: Check for missing required comments (have the rule, but not the comment, and it's mandatory)
		// 2. Warn: Check for missing optional comments (have the rule, but not the comment)
		// 3. Warn: Check for missing rules (have the comment, but not the rule, and we'not using a prefix
		// 4. Warn: Check for comments with missing prefix (have an un-prefixed comment that approximately matches a rule)
		// 5. Error: Comments out of order, different from order specified in the rules
		checkCommentOrder(commentMarkers, file, options)

		// 6. Error: Check that meta presence / absence comment matches options
		checkMetaCommentPresence(commentMarkers, file, options)

		// 7. Error: Check that all comments expanded successfully (overlaps with warnings from expand phase)
	}
}

export default validate

function checkCommentOrder(
	commentMarkers: CommentMarkerWithRule[],
	file: VFile,
	options: ValidationOptions,
): void {
	const commentsInOrderOfAppearance = commentMarkers.filter(
		(commentMarker) => commentMarker.type === 'open' && commentMarker.rule?.order !== undefined,
	)

	const commentsInCorrectOrder = [...commentsInOrderOfAppearance].sort((a, b) => {
		if (a.rule?.order === undefined || b.rule?.order === undefined) {
			throw new Error('Unexpected undefined rule order')
		}

		return a.rule.order - b.rule.order
	})

	const currentOrderList = commentOrderList(commentsInOrderOfAppearance)
	const correctOrderList = commentOrderList(commentsInCorrectOrder)

	if (currentOrderList.join(',') !== correctOrderList.join(',')) {
		file.message('Comments out of order:')
		const tableData = currentOrderList.map((currentOrder, index) => [
			currentOrder,
			correctOrderList[index],
		])
		tableData.unshift(['Found', 'Expected'])

		file.message(table(tableData, {}))
	}
}

function commentOrderList(commentMarkers: CommentMarkerWithRule[]): string[] {
	return commentMarkers.map((commentMarker, index) => {
		if (commentMarker.type === 'open' || commentMarker.type === 'close') {
			return `${index + 1}. ${commentMarker.keyword}`
		}

		throw new Error('Unexpected comment type')
	})
}

function checkMetaCommentPresence(
	commentMarkers: CommentMarkerWithRule[],
	file: VFile,
	options: ValidationOptions,
): void {
	const { addMetaComment } = options

	const metaCommentCount = commentMarkers.filter(
		(commentMarker) => commentMarker.type === 'meta',
	).length

	if (addMetaComment && metaCommentCount === 1) {
		file.message('Missing meta comment')
	}

	if (!addMetaComment && metaCommentCount !== 0) {
		file.message('Unexpected meta comment')
	}

	if (metaCommentCount > 1) {
		file.message('Multiple meta comments')
	}
}
