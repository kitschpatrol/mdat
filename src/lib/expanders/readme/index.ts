import { type Expander } from '../../types'
import badges from './badges'
import contributing from './contributing'
import footer from './footer'
import header from './header'
import license from './license'
import shortDescription from './short-description'
import tableOfContents from './table-of-contents'
import title from './title'

// Record would be a bit cleaner, but embedding the keyword
// in the expander object feels more portable

// Important: order here determines order in which expanders are applied
export default [
	header,
	title,
	badges,
	shortDescription,
	contributing,
	license,
	footer,
	tableOfContents, // Must be last
] satisfies Expander[] as Expander[]
