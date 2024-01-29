// This is a code sample for testing purposes
// There doesn't seem to be a way to type a default export in JsDoc

import path from 'node:path'

/** @satisfies {import('../../src/lib/rules').Rules} */
const rules = {
	basic: '**A bold statement from test-rules.js**',
	'basic-dynamic': {
		content() {
			return `I was generated from ${path.basename(import.meta.url)}`
		},
	},
	'basic-empty': {
		content: '',
	},
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
		content(options) {
			return `${options.prefix}I am between two ferns${options.suffix}`
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
}

export default rules
