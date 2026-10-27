import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	ignore: ['test/assets/*'],
	// Remove once eslint-mdx declares tslib, which its compiled worker imports.
	ignoreDependencies: ['tslib'],
})
