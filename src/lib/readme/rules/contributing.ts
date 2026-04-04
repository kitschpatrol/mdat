import type { Rules } from 'remark-mdat'
import { getReadmeMetadata } from '../../context'

export default {
	contributing: {
		async content() {
			// TODO support
			// packageJson.contributors

			// TODO expose some flags as options.

			const { issuesUrl } = await getReadmeMetadata()
			if (issuesUrl === undefined) {
				// Defensive: requires a project with no detectable issues URL
				throw new Error('Could not find "bugs.url" entry in package.json')
			}

			return `## Contributing\n[Issues](${issuesUrl}) and pull requests are welcome.`
		},
	},
} satisfies Rules
