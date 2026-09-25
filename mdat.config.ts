import { mdatConfig } from '@kitschpatrol/mdat-config'
import cliHelpPlugin from 'mdat-plugin-cli-help'
import examplePlugin from 'mdat-plugin-example'
import tldrawPlugin from 'mdat-plugin-tldraw'
import readmeRules from './src/lib/readme/rules'

// Expand this repo's readme with the rules defined here, rather than the
// bundled rules of whichever mdat release is installed in node_modules.
// The compound rules are left out because released versions of mdat
// concatenate their sub-rule arrays when merging configs, duplicating the
// output. Once the fix in src/lib/deep-merge-defined.ts ships, they can be
// spread in too.
const { footer: _footer, header: _header, ...standaloneRules } = readmeRules

export default mdatConfig({
	...standaloneRules,
	...cliHelpPlugin,
	...examplePlugin,
	...tldrawPlugin,
})
