import sharedConfig, { overrideRules } from '@kitschpatrol/remark-config'
import { defaultHandlers as mdastToTextHandlers } from 'mdast-util-to-markdown'

const localConfig = {
	...sharedConfig,
	plugins: overrideRules(sharedConfig.plugins, [
		// Exceptions for test Markdown files
		['remark-lint-first-heading-level', false],
		['remark-lint-no-duplicate-headings', false],
		['remark-lint-no-duplicate-headings-in-section', false],
		['remark-lint-no-multiple-toplevel-headings', false],
		[
			'remark-lint-no-undefined-references',
			{
				allow: [
					'…',
					'...',
					// GitHub Alerts / Admonitions
					// https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
					// See also the custom text handler below in settings
					'!NOTE',
					'!TIP',
					'!IMPORTANT',
					'!WARNING',
					'!CAUTION',
				],
			},
		],
	]),
	settings: {
		...sharedConfig.settings,
		handlers: {
			// Prevent escaping GFM alerts / admonitions
			// https://github.com/Xunnamius/symbiote/blob/main/src/assets/transformers/_.remarkrc.mjs.ts
			// This is necessary in addition to the remark-lint-no-undefined-references rule customization below.
			text(node, parent, state, info) {
				// Call the default text handler, then strip the leading "\" from GFM alerts
				const markdownString = mdastToTextHandlers.text(node, parent, state, info)
				return markdownString.replace(/^\\(?=\[!(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION)\])/, '')
			},
		},
	},
}

export default localConfig
