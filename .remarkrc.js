import sharedConfig, { overrideRules } from '@kitschpatrol/remark-config'

const localConfig = {
	...sharedConfig,
	plugins: overrideRules(sharedConfig.plugins, [
		// Exceptions for test Markdown files
		['remark-lint-first-heading-level', false],
		['remark-lint-no-duplicate-headings', false],
		['remark-lint-no-duplicate-headings-in-section', false],
		['remark-lint-no-multiple-toplevel-headings', false],
	]),
}

export default localConfig
