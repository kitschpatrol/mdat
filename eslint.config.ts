import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig({
	ignores: ['test/assets/', '__snapshots__/'],
	ts: {
		overrides: {
			'depend/ban-dependencies': [
				'error',
				{
					allowed: ['execa', 'globby', 'find-up', 'package-up'],
				},
			],
			// Conflicts with perfectionist...
			'ts/member-ordering': 'off',
			'ts/no-unsafe-type-assertion': 'off',
		},
	},
	type: 'lib',
})
