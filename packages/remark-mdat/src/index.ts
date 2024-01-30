// Export utilities for advanced use cases
export { type Options as MdatOptions, mdat } from './lib/mdast-utils/mdast-util-mdat'
export {
	type Options as MdatCleanOptions,
	mdatClean,
} from './lib/mdast-utils/mdast-util-mdat-clean'
export {
	type Options as MdatExpandOptions,
	mdatExpand,
} from './lib/mdast-utils/mdast-util-mdat-expand'
export { mdatSplit } from './lib/mdast-utils/mdast-util-mdat-split'
export {
	type Options as ValidateOptions,
	mdatValidate,
} from './lib/mdast-utils/mdast-util-mdat-validate'

// Helpful types
export { type Rules } from './lib/mdat/rules'

// Main plugin
export { type Options, default } from './lib/remark-mdat'
