import tableOfContents from './table-of-contents'
import { type Rules, getSoleRule } from 'remark-mdat'

/**
 * Simple alias for table-of-contents
 */
export default {
	toc: {
		applicationOrder: 1,
		content: [getSoleRule(tableOfContents)],
	},
} satisfies Rules
