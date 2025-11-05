import { mdatConfig } from '@kitschpatrol/mdat-config'
import cliHelpPlugin from 'mdat-plugin-cli-help'
import examplePlugin from 'mdat-plugin-example'
import tldrawPlugin from 'mdat-plugin-tldraw'

export default mdatConfig({
	rules: {
		...cliHelpPlugin,
		...examplePlugin,
		...tldrawPlugin,
	},
})
