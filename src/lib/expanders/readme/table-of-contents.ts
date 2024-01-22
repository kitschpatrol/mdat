import type { Expander } from '../../types'
import { type Root } from 'mdast'
import { toc } from 'mdast-util-toc'

export default {
	// eslint-disable-next-line @typescript-eslint/require-await
	async getNodes(ast: Root) {
		const result = toc(ast, { heading: 'contents', tight: true })

		if (result.map === undefined) {
			throw new Error('Could not generate table of contents')
		}

		return [result.map]
	},
	keyword: 'table-of-contents',
	order: 5,
} satisfies Expander
