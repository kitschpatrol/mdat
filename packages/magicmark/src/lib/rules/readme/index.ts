import { type RuleSet } from '../types'
import badges from './badges'
import code from './code'
import contributing from './contributing'
import footer from './footer'
import header from './header'
import license from './license'
import shortDescription from './short-description'
import tableOfContents from './table-of-contents'
import title from './title'

// A little redundant to have an expander name / preset in both
// the record keys and the `keyword` field in the expansion object,
// but this smooths over the kebab vs. camel case difference and arguably
// makes expansions more portable

export default {
	badges,
	code,
	contributing,
	footer,
	header,
	license,
	shortDescription,
	tableOfContents,
	title,
} satisfies RuleSet
