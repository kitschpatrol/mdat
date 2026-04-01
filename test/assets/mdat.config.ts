import { mdatConfig } from '../../src/lib/config'
import { testModule } from './test-module'

export default mdatConfig({
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
})
