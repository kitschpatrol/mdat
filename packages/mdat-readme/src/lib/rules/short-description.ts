import { getPackageJson } from '../api'
import type { Rules } from 'remark-mdat'

export default {
	'short-description': {
		async content() {
			const packageJson = await getPackageJson()

			if (packageJson.description === undefined) {
				throw new Error('Could not find "description" entry in package.json')
			}

			return `**${packageJson.description}**`
		},

		order: 4,
		required: true,
	},
} satisfies Rules
