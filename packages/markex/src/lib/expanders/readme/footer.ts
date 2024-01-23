import type { Expander } from '../types'
import contributing from './contributing'
import license from './license'

// Compound expander for standard readme footer boilerplate... just license for now,
// But using this allows flexibility for future additions (maintainers, thanks, contributing, etc.)

export default {
	async getNodes() {
		return [...(await contributing.getNodes()), ...(await license.getNodes())]
	},
	keyword: 'footer',

	order: 17, // Always last
	required: false,
} satisfies Expander
