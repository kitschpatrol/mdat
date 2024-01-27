import type { Rules } from 'magicmark'
import { readPackageUp } from 'read-package-up'

export default {
	contributing: {
		async content() {
			const normalizedPackageJson = await readPackageUp()
			if (normalizedPackageJson === undefined) {
				throw new Error('Could not find package.json')
			}

			// TODO support
			// normalizedPackageJson.packageJson.contributors

			// TODO expose some flags as options.

			const issuesUrl = normalizedPackageJson.packageJson.bugs?.url
			if (issuesUrl === undefined) {
				throw new Error('Could not find issues url in package.json')
			}

			return `## Contributing\n[Issues](${issuesUrl}) and pull requests are welcome.`
		},

		order: 15,
		required: true,
	},
} satisfies Rules
