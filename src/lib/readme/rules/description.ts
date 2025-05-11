import type { Rules } from 'remark-mdat'
import { getPackageJson } from '../../config'

/**
 * Simple alias for short-description
 */

export default {
	description: {
		async content() {
			const packageJson = await getPackageJson()

			if (packageJson.description === undefined) {
				throw new Error('Could not find "description" entry in package.json')
			}

			return `**${packageJson.description}**`
		},
		order: 4,
	},
} satisfies Rules
