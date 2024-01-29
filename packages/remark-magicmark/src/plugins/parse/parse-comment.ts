import { setDefaults } from '../utilities'
import json5 from 'json5'
import { type Html, type Parent } from 'mdast'
import type { JsonObject } from 'type-fest'
import { type Simplify } from 'type-fest'
import { VFileMessage } from 'vfile-message'

// Discriminated union
export type CommentMarker =
	| {
			closingPrefix: string
			keyword: string
			keywordPrefix: string
			parameters: JsonObject | undefined
			type: 'close' | 'open'
	  }
	| {
			content: string
			type: 'meta' | 'native'
	  }

export type CommentMarkerNode = Simplify<
	CommentMarker & {
		node: Html
		parent: Parent
	}
>

export type CommentMarkerParseOptions = {
	closingPrefix?: string
	keywordPrefix?: string
	metaCommentPrefix?: string
}

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

export function parseComment(
	text: string,
	options: CommentMarkerParseOptions,
): CommentMarker | undefined {
	if (!isComment(text)) return

	const { closingPrefix, keywordPrefix, metaCommentPrefix } = setDefaults(options, {
		closingPrefix: '/',
		keywordPrefix: '',
		metaCommentPrefix: '+',
	})

	const commentText = text.replace(/^\s*<!--+\s*/, '').replace(/\s*-*-->\s*$/, '')
	const [rawKeyword, ...argumentParts] = commentText.split(/\s+/)

	const type = rawKeyword.startsWith(metaCommentPrefix)
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
