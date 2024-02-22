import sharedConfig, { overrideRules } from '@kitschpatrol/remark-config'

const localConfig = {
	...sharedConfig,
	plugins: overrideRules(sharedConfig.plugins, [
		['remark-lint-no-missing-blank-lines', false],
		['remark-lint-first-heading-level', false],
		['remark-lint-no-duplicate-headings', false],
		['remark-lint-no-duplicate-headings-in-section', false],
		['remark-lint-no-html', false],
		['remark-lint-no-multiple-toplevel-headings', false],
		['remark-lint-no-emphasis-as-heading', false],
	]),
}

export default localConfig
