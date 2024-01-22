import type { Expander } from '../../types'
import { readPackageUp } from 'read-package-up'

export default {
	async getNodes() {
		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		return [
			{
				children: [
					{
						type: 'text',
						value: normalizedPackageJson.packageJson.name,
					},
				],
				depth: 1,
				type: 'heading',
			},
		]
	},
	keyword: 'title',
} satisfies Expander
