import type { Expander } from '../../types'
import badges from './badges'
import shortDescription from './short-description'
import title from './title'

// Compound expander for standard readme header boilerplate

export default {
	async getNodes() {
		return [
			...(await title.getNodes()),
			...(await badges.getNodes()),
			...(await shortDescription.getNodes()),
		]
	},
	keyword: 'header',
	order: 0, // Always first
	required: false,
} satisfies Expander
