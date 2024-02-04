import contributing from './contributing'
import license from './license'
import { type Rules, getSoleRule } from 'remark-mdat'

// Compound expander for standard readme footer boilerplate... just license for now,
// But using this allows flexibility for future additions (maintainers, thanks, contributing, etc.)

export default {
	footer: {
		content: [getSoleRule(contributing), getSoleRule(license)],
		order: 17,
	},
} satisfies Rules
