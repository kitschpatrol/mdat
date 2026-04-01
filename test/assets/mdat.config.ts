import type { Rules } from '../../src/lib/config'
import { testModule } from './test-module'

export default {
	cosmiconfig: '# I was loaded by Cosmiconfig',
	'dynamic-rule': {
		content() {
			return `** I was generated from ${import.meta.url} **`
		},
	},
	'dynamic-rule-with-imported-module': {
		content() {
			return testModule()
		},
	},
} satisfies Rules
