import type { Rules } from 'remark-mdat'
import cliHelpPlugin from 'mdat-plugin-cli-help'
import examplePlugin from 'mdat-plugin-example'
import tldrawPlugin from 'mdat-plugin-tldraw'

export default {
	...cliHelpPlugin,
	...examplePlugin,
	...tldrawPlugin,
} satisfies Rules
