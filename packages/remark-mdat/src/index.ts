// Export utilities for advanced use cases
export { type Options as MdatOptions, mdat } from './lib/mdast-utils/mdast-util-mdat'
export {
	type Options as MdatCheckOptions,
	mdatCheck,
} from './lib/mdast-utils/mdast-util-mdat-check'
export {
	type Options as MdatCleanOptions,
	mdatClean,
} from './lib/mdast-utils/mdast-util-mdat-clean'
export {
	type Options as MdatExpandOptions,
	mdatExpand,
} from './lib/mdast-utils/mdast-util-mdat-expand'
export { mdatSplit } from './lib/mdast-utils/mdast-util-mdat-split'
export { deepMergeDefined } from './lib/mdat/deep-merge-defined'
export { default as log } from './lib/mdat/log'
export {
	type MdatFileReport,
	type MdatMessage,
	getMdatReports,
	reporterMdat,
} from './lib/mdat/mdat-log'
export {
	type NormalizedRules,
	type Rules,
	getSoleRule,
	getSoleRuleKey,
	rulesSchema,
} from './lib/mdat/rules'
export { type Options, default, optionsSchema } from './lib/remark-mdat'
