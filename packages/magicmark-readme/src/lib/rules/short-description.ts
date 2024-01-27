import type { Rules } from 'magicmark'
import { readPackageUp } from 'read-package-up'

export default {
	'short-description': {
		async content() {
			const normalizedPackageJson = await readPackageUp()

			if (normalizedPackageJson === undefined) {
				throw new Error('Could not find package.json')
			}

			if (normalizedPackageJson.packageJson.description === undefined) {
				throw new Error('Could not find description in package.json')
			}

			return `**${normalizedPackageJson.packageJson.description}**`
		},

		order: 3,
		required: true,
	},
} satisfies Rules
