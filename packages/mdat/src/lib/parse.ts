import { JSDOM } from 'jsdom'
import json5 from 'json5'
import { type Html, type Text } from 'mdast'
import type { JsonObject } from 'type-fest'

export function parseCommentText(
	text: string,
): { args: JsonObject | undefined; keyword: string } | undefined {
	// TODO use JSDOM here as well?
	// Get the keyword with args
	const match = /^\s*<!--\/*[\s#-]*(.+)\s*-->\s*$/.exec(text)?.at(1)?.trim()
	if (match === undefined) return undefined

	// Get the args
	const parts = /^([^\s({]+)[\s()]*({.+})?\)?$/g.exec(match)
	if (parts === null) return undefined

	const keyword = parts.at(1)
	if (keyword === undefined) return undefined

	const rawArgs = parts.at(2)

	// Use json5 so we can be more forgiving about unquoted keys
	const args = rawArgs ? json5.parse<JsonObject>(rawArgs) : undefined

	return { args, keyword }
}

export function splitHtmlIntoMdastNodes(text: string): Array<Html | Text> {
	const frag = JSDOM.fragment(text)

	return [...frag.childNodes].map((node) => {
		switch (node.nodeType) {
			case node.ELEMENT_NODE: {
				// For element nodes, return outerHTML
				return {
					type: 'html',
					value: (node as Element).outerHTML,
				}
			}

			case node.TEXT_NODE: {
				// For text nodes, return textContent
				return {
					type: 'html',
					value: node.textContent ?? '',
				}
			}

			case node.COMMENT_NODE: {
				// For comment nodes, return the comment
				return {
					type: 'html',
					value: `<!--${node.textContent}-->`,
				}
			}

			default: {
				// TODO problem?
				return {
					type: 'html',
					value: '',
				}
			}
		}
	})
}

// Function getOriginalHtml(node: Node): string {
// 	switch (node.nodeType) {
// 		case node.ELEMENT_NODE: {
// 			// For element nodes, return outerHTML
// 			return (node as Element).outerHTML
// 		}

// 		case node.TEXT_NODE: {
// 			// For text nodes, return textContent
// 			return node.textContent ?? ''
// 		}

// 		case node.COMMENT_NODE: {
// 			// For comment nodes, return the comment
// 			return `<!--${node.textContent}-->`
// 		}

// 		default: {
// 			// TODO problem?
// 			return ''
// 		}
// 	}
// }
