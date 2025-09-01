import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig({
	ignores: ['test/assets/', 'bin/', '__snapshots__/'],
	ts: {
		overrides: {
			'depend/ban-dependencies': [
				'error',
				{
					allowed: ['execa', 'globby', 'read-pkg', 'find-up', 'package-up'],
				},
			],
			// Conflicts with perfectionist...
			'ts/member-ordering': 'off',
			'ts/no-unsafe-type-assertion': 'off',
		},
	},
	type: 'lib',
})
