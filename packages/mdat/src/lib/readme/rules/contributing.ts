import { getPackageJson } from '../../config'
import type { Rules } from 'remark-mdat'

export default {
	contributing: {
		async content() {
			const packageJson = await getPackageJson()

			// TODO support
			// packageJson.contributors

			// TODO expose some flags as options.

			const issuesUrl = packageJson?.bugs?.url
			if (issuesUrl === undefined) {
				throw new Error('Could not find "bugs.url" entry in package.json')
			}

			return `## Contributing\n[Issues](${issuesUrl}) and pull requests are welcome.`
		},

		order: 15,
		required: true,
	},
} satisfies Rules
