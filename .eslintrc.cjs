/* eslint-disable perfectionist/sort-objects */
/* @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: ['@kitschpatrol/eslint-config'],
	// Overrides
	overrides: [
		{
			files: ['packages/magicmark/src/cli/**/*', 'packages/magicmark-readme/src/cli/**/*'],
			rules: {
				'n/shebang': 'off',
			},
		},
	],
}
