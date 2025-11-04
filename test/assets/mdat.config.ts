import type { Config } from '../../src/lib/config'
import { testModule } from './test-module'
import tldrawPlugin from 'mdat-plugin-tldraw'
import cliHelpPlugin from 'mdat-plugin-cli-help'
import examplePlugin from 'mdat-plugin-example'

export default {
	rules: {
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
		...tldrawPlugin,
		...cliHelpPlugin,
		...examplePlugin,
	},
} satisfies Config
