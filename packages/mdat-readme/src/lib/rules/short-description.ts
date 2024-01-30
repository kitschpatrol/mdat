import { getPackageJson } from '../utilities'
import type { Rules } from 'mdat'

export default {
	'short-description': {
		async content() {
			const packageJson = await getPackageJson()

			if (packageJson.description === undefined) {
				throw new Error('Could not find description in package.json')
			}

			return `**${packageJson.description}**`
		},

		order: 4,
		required: true,
	},
} satisfies Rules
