import badges from './badges'
import shortDescription from './short-description'
import title from './title'
import { type Rules, getSoleRule } from 'magicmark'

// Compound expander for standard readme header boilerplate

export default {
	header: {
		async content() {
			return [
				...(await getSoleRule(title).content()),
				...(await getSoleRule(badges).content()),
				...(await getSoleRule(shortDescription).content()),
			].join('\n')
		},

		order: 0, // Always first
		required: false,
	},
} satisfies Rules
