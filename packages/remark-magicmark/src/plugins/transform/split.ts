// Split any multi-comment nodes and their content into individual MDAST Html nodes
// They're wrapped in a paragraph so as not to introduce new breaks
// TODO not sure this works

import { JSDOM } from 'jsdom'
import { type Html, type Text } from 'mdast'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { CONTINUE, visit } from 'unist-util-visit'

function splitHtmlIntoMdastNodes(text: string): Array<Html | Text> {
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

const split: Plugin<void[], Root> = function () {
	return function (tree, file) {
		visit(tree, 'html', (node, index, parent) => {
			if (parent === undefined || index === undefined) return CONTINUE

			const htmlNodes = splitHtmlIntoMdastNodes(node.value)
			if (htmlNodes.length > 1) {
				// HtmlNodes[0].value = `${htmlNodes[0].value}\n`
				file.message(
					'Found multiple comments in single HTML node. Will try to split, but this could cause issues.',
					node,
				)
				parent.children.splice(index, 1, {
					children: htmlNodes,
					type: 'paragraph',
				})
			}
		})
	}
}

export default split
