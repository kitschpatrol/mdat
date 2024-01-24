import type { Expander } from '../types'
import { readPackageUp } from 'read-package-up'

export default {
	async getContent(_) {
		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		if (normalizedPackageJson.packageJson.description === undefined) {
			throw new Error('Could not find description in package.json')
		}

		return `**${normalizedPackageJson.packageJson.description}**`
	},
	keyword: 'short-description',
	order: 3,
	required: true,
} satisfies Expander
