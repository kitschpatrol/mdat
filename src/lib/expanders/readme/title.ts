import type { Expander } from '../../types'
import { readPackageUp } from 'read-package-up'
import { remark } from 'remark'

export default {
	async getNodes() {
		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		return remark.parse(`# ${normalizedPackageJson.packageJson.name}`).children
	},
	keyword: 'title',
	order: 1,
	required: true,
} satisfies Expander
