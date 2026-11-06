import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig({
	ignores: ['test/assets/', '**/changelog.md'],
	ts: {
		overrides: {
			'depend/ban-dependencies': [
				'error',
				{
					allowed: ['execa', 'globby'],
				},
			],
		},
	},
	type: 'lib',
})
