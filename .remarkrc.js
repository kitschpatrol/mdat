import { remarkConfig } from '@kitschpatrol/remark-config'

export default remarkConfig({
	// Some extra exceptions for template Markdown files in `./src/lib/readme/templates`...
	rules: [
		['remark-lint-first-heading-level', false],
		['remark-lint-no-duplicate-headings', false],
		['remark-lint-maximum-heading-length', 65],
	],
})
