import type { Rule } from '../types'
import { type Root } from 'mdast'
import { toc } from 'mdast-util-toc'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'

export default {
	// Apply towards the end so any generated headings are available
	applicationOrder: 1,
	// eslint-disable-next-line @typescript-eslint/require-await
	async getContent(ast) {
		// eslint-disable-next-line unicorn/no-null
		const result = toc(ast, { heading: null, tight: true })

		const heading = `## Table of contents`

		if (result.map === undefined) {
			throw new Error('Could not generate table of contents')
		}

		const rootWrapper: Root = {
			children: result.map.children,
			type: 'root',
		}

		const tocString = remark().use(remarkGfm).stringify(rootWrapper)
		return [heading, tocString].join('\n')
	},
	keyword: 'table-of-contents',
	order: 5,
} satisfies Rule
