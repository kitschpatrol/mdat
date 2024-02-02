// This is a code sample for testing purposes
import path from 'node:path'
import type { Rules } from 'remark-mdat'

export default {
	basic: '**A bold statement from test-rules.ts**',
	'basic-dynamic': {
		content() {
			return `I was generated from ${path.basename(import.meta.url)}`
		},
	},
	'basic-dynamic-no-metadata'() {
		return `I was generated from ${path.basename(import.meta.url)}`
	},
	'basic-empty': '',
	'basic-inline': {
		content() {
			return `${path.basename(import.meta.url)}`
		},
	},
	'basic-list-required': {
		applicationOrder: 1,
		content: `- I\n- am\n- a\n- list\n- that\n- must\n- be\n- here`,
		required: true,
	},
	'basic-multiple-paragraphs': 'I am a paragraph 1\n\nI am a paragraph 2\n\nI am a paragraph 3',
	'basic-options': {
		content(options): string {
			const resolvedOptions = {
				prefix: '',
				suffix: '',
				...options,
			}

			return `${resolvedOptions.prefix}I am between two ferns${resolvedOptions.suffix}`
		},
	},
	'basic-ordered-1': {
		content: 'I had to be first',
		order: 1,
	},
	'basic-ordered-2': {
		content: 'I had to be last',
		order: 2,
	},
	'basic-throws': {
		content() {
			throw new Error('I am a rule that always throws an error')
		},
	},
} satisfies Rules
