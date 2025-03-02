// This is a code sample for testing purposes
// There doesn't seem to be a way to type a default export in JSDoc

/** @satisfies {import('../../src/lib').Rules} */
const rules = {
	'basic-throws-required': {
		content() {
			throw new Error('I am a rule that always throws an error, and I am required')
		},
		required: true,
	},
}

export default rules
