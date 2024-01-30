/* eslint-disable perfectionist/sort-objects */
/* @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: ['@kitschpatrol/eslint-config'],
	// Overrides
	overrides: [
		{
			files: ['packages/mdat/src/cli/**/*', 'packages/mdat-readme/src/cli/**/*'],
			rules: {
				'n/shebang': 'off',
			},
		},
	],
}
