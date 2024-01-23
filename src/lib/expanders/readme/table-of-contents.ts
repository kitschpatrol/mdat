import type { Expander } from '../../types'
import { toc } from 'mdast-util-toc'
import { remark } from 'remark'

export default {
	// eslint-disable-next-line @typescript-eslint/require-await
	async getNodes(ast) {
		// eslint-disable-next-line unicorn/no-null
		const result = toc(ast, { heading: null, tight: true })

		const heading = remark.parse(`## Table of contents`).children

		if (result.map === undefined) {
			throw new Error('Could not generate table of contents')
		}

		return [...heading, result.map]
	},
	keyword: 'table-of-contents',
	order: 5,
} satisfies Expander
