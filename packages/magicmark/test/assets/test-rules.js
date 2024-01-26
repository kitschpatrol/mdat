// This is a code sample for testing purposes
// There doesn't seem to be a way to type a default export in JsDoc

/** @satisfies {import('../../src/lib/rules').RuleSet} */
const ruleSet = {
	arguments: {
		getContent(options) {
			return `${options.prefix}Middling${options.suffix}}`
		},
		keyword: 'baz',
	},
	bold: {
		getContent() {
			return '**A bold statement from test-rules.js**'
		},
		keyword: 'foo',
	},
	date: {
		getContent() {
			return `This bit was generated at ${new Date().toISOString()}`
		},
		keyword: 'bar',
	},
	list: {
		getContent() {
			return `- I\n- am\n- a\n- list`
		},
		keyword: 'qux',
	},
}

export default ruleSet
