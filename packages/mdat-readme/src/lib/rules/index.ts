import badges from './badges'
import banner from './banner'
import cliHelp from './cli-help'
import code from './code'
import contributing from './contributing'
import footer from './footer'
import header from './header'
import license from './license'
import shortDescription from './short-description'
import tableOfContents from './table-of-contents'
import title from './title'
import toc from './toc'
import { type Rules } from 'remark-mdat'

// A little redundant to have an expander name / preset in both
// the record keys and the `keyword` field in the expansion object,
// but this smooths over the kebab vs. camel case difference and arguably
// makes expansions more portable

export default {
	...badges,
	...banner,
	...cliHelp,
	...code,
	...contributing,
	...footer,
	...header,
	...license,
	...shortDescription,
	...tableOfContents,
	...toc,
	...title,
} satisfies Rules
