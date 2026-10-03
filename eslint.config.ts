import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig(
	{
		ignores: ['test/assets/', '__snapshots__/'],
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
	},
	{
		// The Agent Skills specification requires this exact file name
		// TODO fix in shared config
		files: ['**/skills/*/SKILL.md'],
		rules: {
			'unicorn/filename-case': 'off',
		},
	},
	{
		// Code examples in skills import from paths in the reader's project
		// TODO fix in shared config
		files: ['**/skills/*/SKILL.md/**'],
		rules: {
			'import/no-unresolved': 'off',
		},
	},
)
