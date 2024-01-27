import { getPackageJson } from '../utilities'
import type { Rules } from 'magicmark'

export default {
	contributing: {
		async content() {
			const packageJson = await getPackageJson()

			// TODO support
			// packageJson.contributors

			// TODO expose some flags as options.

			const issuesUrl = packageJson.bugs?.url
			if (issuesUrl === undefined) {
				throw new Error('Could not find issues url in package.json')
			}

			return `## Contributing\n[Issues](${issuesUrl}) and pull requests are welcome.`
		},

		order: 15,
		required: true,
	},
} satisfies Rules
