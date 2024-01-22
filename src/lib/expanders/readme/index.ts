import { type Expander } from '../../types'
import tableOfContents from './table-of-contents'
import title from './title'

// Record would be a bit cleaner, but embedding the keyword
// in the expander object feels more portable

// Important: order here determines order in which expanders are applied
export default [title, tableOfContents] satisfies Expander[] as Expander[]
