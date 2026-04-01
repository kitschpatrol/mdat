import type { Rules } from 'remark-mdat'
import { getSoleRule } from 'remark-mdat'
import badges from './badges'
import banner from './banner'
import shortDescription from './short-description'
import title from './title'

export default {
	header: {
		content: [
			getSoleRule(title),
			getSoleRule(banner),
			getSoleRule(badges),
			getSoleRule(shortDescription),
		],
		order: 2,
	},
} satisfies Rules
