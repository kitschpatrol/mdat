import type { Rule } from '../types'
import badges from './badges'
import shortDescription from './short-description'
import title from './title'

// Compound expander for standard readme header boilerplate

export default {
	async getContent(ast) {
		return [
			...(await title.getContent(ast)),
			...(await badges.getContent(ast)),
			...(await shortDescription.getContent(ast)),
		].join('\n')
	},
	keyword: 'header',
	order: 0, // Always first
	required: false,
} satisfies Rule
