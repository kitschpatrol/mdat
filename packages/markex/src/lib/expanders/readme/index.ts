import { type ExpanderPreset } from '../types'
import badges from './badges'
import code from './code'
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
	badges,
	code,
	shortDescription,
	contributing,
	license,
	footer,
	tableOfContents, // Must be almost last
	title, // Goes last so it's excluded from the table of contents
] satisfies ExpanderPreset
