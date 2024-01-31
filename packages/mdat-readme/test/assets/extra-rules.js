// This is a code sample for testing purposes
// There doesn't seem to be a way to type a default export in JsDoc

/** @satisfies {import('../../src/lib/rules').Rules} */
const rules = {
	extra: '**A bold statement from extra-rules.js**',
	title: {
		applicationOrder: 2,
		content: '# `extra-rules.js` has overridden the title',
	},
}

export default rules
