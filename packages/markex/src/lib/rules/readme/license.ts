import type { Expander } from '../types'
import { readPackageUp } from 'read-package-up'

export default {
	async getContent(_) {
		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		const name = normalizedPackageJson.packageJson.author?.name
		const { license } = normalizedPackageJson.packageJson

		if (name === undefined) {
			throw new Error('Could not find author name in package.json')
		}

		if (license === undefined) {
			throw new Error('Could not find author name in package.json')
		}

		// TODO get license file dynamically, handle other cases
		return `## License\n[${license}](license.txt) © ${name}`
	},
	keyword: 'license',
	order: 16,
	required: true,
} satisfies Expander
