import { mdatConfig } from '@kitschpatrol/mdat-config'

// TODO bring these back post 2.0 migration
import cliHelpPlugin from 'mdat-plugin-cli-help'
// import examplePlugin from 'mdat-plugin-example'
// import tldrawPlugin from 'mdat-plugin-tldraw'

export default mdatConfig({
	...cliHelpPlugin,
	// ...examplePlugin,
	// ...tldrawPlugin,
})
