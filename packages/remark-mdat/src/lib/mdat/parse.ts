import json5 from 'json5'
import { type Html, type Parent } from 'mdast'
import type { JsonValue } from 'type-fest'
import { type Simplify } from 'type-fest'
import { VFileMessage } from 'vfile-message'

/**
 * Structured data about a parsed comment.
 * Note that this is a discriminated union based on the `type` field.
 */
export type CommentMarker = Simplify<
	{
		// Shared field
		/** The complete original comment, e.g. `<!-- keyword -->`  */
		html: string
	} & (
		| {
				/** Character used to delimit closing tags, e.g. the `/` in `<!-- /keyword -->`  */
				closingPrefix: string
				/** The first complete word in the comment  */
				keyword: string
				/** The unique keyword prefix  */
				keywordPrefix: string
				/** Parsed JSON object of argument string that followed the keyword, empty object if nothing passed  */
				options: JsonValue
				/**
				 * `open`: A mdat-style opening comment tag, e.g. `<!-- keyword -->`  \
				 * `close`: A mdat-style closing comment tag, e.g. `<!-- /keyword -->`
				 */
				type: 'close' | 'open'
		  }
		| {
				/** The original text inside the comment, e.g. `<!-- content -->`  */
				content: string
				/**
				 * `meta`: A mdat-style generated meta comment tag  \
				 * `native`: A normal comment that does not match the the `keywordPrefix` (if specified)
				 */
				type: 'meta' | 'native'
		  }
	)
>

/**
 * Parsed comment with additional information about the Mdast Node and its Parent.
 */
export type CommentMarkerNode = Simplify<
	{
		/** Original Mdast HTML Node where the comment was found. */
		node: Html
		/** Parent of original Mdast HTML Node where the comment was found. */
		parent: Parent
	} & CommentMarker
>

export type CommentMarkerParseOptions = {
	/** Character to identify closing tags, e.g. the `/` in `<!-- /keyword -->`  */
	closingPrefix: string
	/** Prefix to require on all mdat comments, e.g. `mm-`  */
	keywordPrefix: string
	/** Means of identifying mdat generated meta comments, e.g. `+`  */
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

	const commentHtml = text.trim()
	const commentBody = commentHtml.replace(/^\s*<!--+\s*/, '').replace(/\s*-*-->\s*$/, '')

	// Splits without capturing
	const [rawKeyword, ...argumentParts] = commentBody.split(/(\s+|\(|{)/)

	const type = rawKeyword.startsWith(metaCommentIdentifier)
		? 'meta'
		: keywordPrefix !== '' &&
			  !rawKeyword.startsWith(keywordPrefix) &&
			  !rawKeyword.startsWith(`${closingPrefix}${keywordPrefix}`)
			? 'native'
			: rawKeyword.startsWith(closingPrefix)
				? 'close'
				: 'open'

	if (type === 'meta') {
		return {
			content: trimMetaIdentifiers(commentBody, metaCommentIdentifier),
			html: commentHtml,
			type,
		}
	}

	if (type === 'native') {
		return {
			content: commentBody,
			html: commentHtml,
			type,
		}
	}

	// Must be open or closing tag, continue parsing
	const keyword = rawKeyword
		.replace(new RegExp(`^${closingPrefix}`), '')
		.replace(new RegExp(`^${keywordPrefix}`), '')
	const optionText = makeValidJson(argumentParts.join(''))

	if (type === 'open' || type === 'close') {
		let options: JsonValue = {}

		try {
			options = json5.parse<JsonValue>(optionText)
		} catch (error) {
			if (error instanceof Error) {
				throw new VFileMessage(
					`Failed to parse comment options "${optionText}" for keyword "${keyword}": ${error.message}`,
				)
			}
		}

		return {
			closingPrefix,
			html: commentHtml,
			keyword,
			keywordPrefix,
			options,
			type,
		}
	}
}

function isComment(text: string): boolean {
	const trimmed = text.trim()
	return trimmed.startsWith('<!--') && trimmed.endsWith('-->')
}

// Let the user pass the comment options inside parentheses if they want, like a function call
// Or let them skip the brackets if they want
function makeValidJson(text: string): string {
	// Remove parentheses
	text = text.trim()
	text = text.startsWith('(') ? text.slice(1) : text
	text = text.endsWith(')') ? text.slice(0, -1) : text
	text = text.trim()

	// Make bare objects valid JSON
	if (!text.startsWith('{') && !text.startsWith('[')) text = '{' + text
	if (!text.endsWith('}') && !text.endsWith(']')) text += '}'
	return text
}

function trimMetaIdentifiers(text: string, metaCommentIdentifier: string): string {
	text = text.trim()
	text = text.startsWith(metaCommentIdentifier) ? text.slice(metaCommentIdentifier.length) : text
	text = text.endsWith(metaCommentIdentifier) ? text.slice(0, -metaCommentIdentifier.length) : text
	return text
}
