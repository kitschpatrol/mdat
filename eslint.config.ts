import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig({
	ignores: ['test/assets/', 'bin/', '__snapshots__/'],
	ts: {
		overrides: {
			'depend/ban-dependencies': [
				'error',
				{
					allowed: ['execa', 'globby'],
				},
			],
			// Conflicts with perfectionist...
			'ts/member-ordering': 'off',
		},
	},
	type: 'lib',
})

// Files: ['src/cli/**/*'],
// rules: {
// 	'n/hashbang': 'off',
// },
