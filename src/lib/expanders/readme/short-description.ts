import type { Expander } from '../../types'
import { readPackageUp } from 'read-package-up'
import { remark } from 'remark'

export default {
	async getNodes() {
		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		if (normalizedPackageJson.packageJson.description === undefined) {
			throw new Error('Could not find description in package.json')
		}

		return remark.parse(`**${normalizedPackageJson.packageJson.description}**`).children
	},
	keyword: 'short-description',
	order: 3,
	required: true,
} satisfies Expander
