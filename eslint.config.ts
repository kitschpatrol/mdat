import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig({
	ignores: ['test/assets/', '__snapshots__/'],
	ts: {
		overrides: {
			'depend/ban-dependencies': [
				'error',
				{
					allowed: ['execa', 'globby'],
				},
			],
			// Needed for rule and config exports...
			'unicorn/no-top-level-side-effects': 'off',
		},
	},
	type: 'lib',
})
