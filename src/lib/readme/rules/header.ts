import badges from './badges'
import banner from './banner'
import shortDescription from './short-description'
import title from './title'
import { type Rules, getSoleRule } from 'remark-mdat'

export default {
	header: {
		applicationOrder: 2,
		content: [
			getSoleRule(title),
			getSoleRule(banner),
			getSoleRule(badges),
			getSoleRule(shortDescription),
		],
		order: 1,
	},
} satisfies Rules
