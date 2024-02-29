import tableOfContents from './table-of-contents'
import { type Rules, getSoleRule } from 'remark-mdat'

/**
 * Simple alias for table-of-contents
 */
export default {
	toc: getSoleRule(tableOfContents),
} satisfies Rules
