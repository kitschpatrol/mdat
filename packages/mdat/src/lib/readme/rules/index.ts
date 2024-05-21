import badges from './badges'
import banner from './banner'
import cli from './cli'
import cliHelp from './cli-help'
import code from './code'
import contributing from './contributing'
import description from './description'
import footer from './footer'
import header from './header'
import license from './license'
import shortDescription from './short-description'
import tableOfContents from './table-of-contents'
import title from './title'
import tldraw from './tldraw'
import toc from './toc'
import { type Rules } from 'remark-mdat'

// A little redundant to have an expander name / preset in both
// the record keys and the `keyword` field in the expansion object,
// but this smooths over the kebab vs. camel case difference and arguably
// makes expansions more portable

export default {
	...badges,
	...banner,
	...cli,
	...cliHelp,
	...code,
	...contributing,
	...description,
	...footer,
	...header,
	...license,
	...shortDescription,
	...tableOfContents,
	...title,
	...tldraw,
	...toc,
} satisfies Rules
