import json5 from 'json5'
import { type Html, type Parent } from 'mdast'
import type { JsonObject } from 'type-fest'
import { type Simplify } from 'type-fest'
import { VFileMessage } from 'vfile-message'

/**
 * Structured data about a parsed comment.
 * Note that this is a discriminated union based on the `type` field.
 */
export type CommentMarker =
	| {
			/** Character used to delimit closing tags, e.g. the `/` in `<!-- /keyword -->`  */
			closingPrefix: string
			/** The first complete word in the comment  */
			keyword: string
			/** The unique keyword prefix  */
			keywordPrefix: string
			/** Parsed JSON object of argument string that followed the keyword  */
			parameters: JsonObject | undefined
			/**
			 * `open`: A magicmark-style opening comment tag, e.g. `<!-- keyword -->`  \
			 * `close`: A magicmark-style closing comment tag, e.g. `<!-- /keyword -->`
			 */
			type: 'close' | 'open'
	  }
	| {
			/** The original text inside the comment, e.g. `<!-- content -->`  */
			content: string
			/**
			 * `meta`: A magicmark-style generated meta comment tag  \
			 * `native`: A normal comment that does not match the the `keywordPrefix` (if specified)
			 */
			type: 'meta' | 'native'
	  }

/**
 * Parsed comment with additional information about the Mdast Node and its Parent.
 */
export type CommentMarkerNode = Simplify<
	CommentMarker & {
		/** Original Mdast Html Node where the comment was found. */
		node: Html
		/** Parent of original Mdast Html Node where the comment was found. */
		parent: Parent
	}
>

export type CommentMarkerParseOptions = {
	/** Character to identify closing tags, e.g. the `/` in `<!-- /keyword -->`  */
	closingPrefix: string
	/** Prefix to require on all magicmark comments, e.g. `mm-`  */
	keywordPrefix: string
	/** Means of identifying magicmark generated meta comments, e.g. `+`  */
	metaCommentIdentifier: string
}

/**
 * Parse an Mdast HTML comment node into structured data.
 * @returns A discriminated union of CommentMarkerNode based on comment type, or
 * undefined if the node is not a comment.
 */
export function parseCommentNode(
	node: Html,
	parent: Parent,
	options: CommentMarkerParseOptions,
): CommentMarkerNode | undefined {
	try {
		const result = parseComment(node.value, options)

		if (result === undefined) {
			return undefined
		}

		return {
			...result,
			node,
			parent,
		}
	} catch (error) {
		if (error instanceof VFileMessage) {
			error.line = node.position?.start.line
			throw error
		} else if (error instanceof Error) {
			throw new VFileMessage(error.message, node)
		} else {
			throw new VFileMessage('Unknown error', node)
		}
	}
}

/**
 * Parse any comment string into structured data.
 * @returns A discriminated union of CommentMarker based on comment type, or
 * undefined if the node is not a comment.
 */
export function parseComment(
	text: string,
	options: CommentMarkerParseOptions,
): CommentMarker | undefined {
	if (!isComment(text)) return

	const { closingPrefix, keywordPrefix, metaCommentIdentifier } = options

	const commentText = text.replace(/^\s*<!--+\s*/, '').replace(/\s*-*-->\s*$/, '')
	const [rawKeyword, ...argumentParts] = commentText.split(/\s+/)

	const type = rawKeyword.startsWith(metaCommentIdentifier)
		? 'meta'
		: keywordPrefix !== '' &&
			  (!rawKeyword.startsWith(keywordPrefix) ||
					!rawKeyword.startsWith(`${closingPrefix}${keywordPrefix}`))
			? 'native'
			: rawKeyword.startsWith(closingPrefix)
				? 'close'
				: 'open'

	if (type === 'meta' || type === 'native') {
		return {
			content: commentText,
			type,
		}
	}

	// Must be open or closing tag, continue parsing
	const keyword = rawKeyword.replace(new RegExp(`^${closingPrefix}`), '')
	const argumentText = argumentParts.join(' ')

	if (type === 'open' || type === 'close') {
		let parameters: JsonObject | undefined

		try {
			parameters = argumentText === '' ? undefined : json5.parse<JsonObject>(argumentText)
		} catch (error) {
			if (error instanceof Error) {
				throw new VFileMessage(
					`Failed to parse arguments "${argumentText}" for keyword "${keyword}": ${error.message}`,
				)
			}
		}

		return {
			closingPrefix,
			keyword,
			keywordPrefix,
			parameters,
			type,
		}
	}
}

function isComment(text: string): boolean {
	const trimmed = text.trim()
	return trimmed.startsWith('<!--') && trimmed.endsWith('-->')
}
