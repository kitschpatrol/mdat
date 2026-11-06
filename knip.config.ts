import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	ignore: ['test/assets/*'],
	ignoreDependencies: [
		'@kitschpatrol/chagent', // Typically invoked through bumpp's --execute argument, which Knip doesn't parse
		'tslib', // Remove once eslint-mdx declares tslib, which its compiled worker imports.
	],
})
