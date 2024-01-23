import type { Expander } from '../types'
import { readPackageUp } from 'read-package-up'
import { remark } from 'remark'

export default {
	async getNodes(_) {
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

		return remark.parse(`## Contributing\n[Issues](${issuesUrl}) and pull requests are welcome.`)
			.children
	},
	keyword: 'contributing',
	order: 15,
	required: true,
} satisfies Expander
