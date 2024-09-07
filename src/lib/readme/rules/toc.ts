import { getSoleRule, type Rules } from 'remark-mdat'
import tableOfContents from './table-of-contents'

/**
 * Simple alias for table-of-contents
 */
export default {
	toc: getSoleRule(tableOfContents),
} satisfies Rules
