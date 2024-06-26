/* eslint-disable perfectionist/sort-objects */
/* @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: ['@kitschpatrol/eslint-config'],
	// Overrides
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				// Conflicts with typescript-eslint
				'perfectionist/sort-classes': 'off',
			},
		},
		{
			files: ['src/cli/**/*'],
			rules: {
				'n/hashbang': 'off',
			},
		},
	],
}
