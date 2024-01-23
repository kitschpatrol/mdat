import type { Expander } from '../types'
import badges from './badges'
import shortDescription from './short-description'
import title from './title'

// Compound expander for standard readme header boilerplate

export default {
	async getNodes(ast) {
		return [
			...(await title.getNodes(ast)),
			...(await badges.getNodes(ast)),
			...(await shortDescription.getNodes(ast)),
		]
	},
	keyword: 'header',
	order: 0, // Always first
	required: false,
} satisfies Expander
