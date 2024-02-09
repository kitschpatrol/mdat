import type { Config } from '../../src/lib/config'

export default {
	rules: {
		cosmiconfig: '# I was loaded by Cosmiconfig',
		'dynamic-rule': {
			content() {
				return `** I was generated from ${import.meta.url} **`
			},
		},
	},
} satisfies Config
