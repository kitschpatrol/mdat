import contributing from './contributing'
import license from './license'
import { type Rules, getSoleRule } from 'magicmark'

// Compound expander for standard readme footer boilerplate... just license for now,
// But using this allows flexibility for future additions (maintainers, thanks, contributing, etc.)

export default {
	footer: {
		async content() {
			return [
				...(await getSoleRule(contributing).content()),
				...(await getSoleRule(license).content()),
			].join('\n')
		},
		order: 17, // Always last
		required: false,
	},
} satisfies Rules
