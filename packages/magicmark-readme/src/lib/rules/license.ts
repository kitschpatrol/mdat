import { getPackageJson } from '../utilities'
import type { Rules } from 'magicmark'

export default {
	license: {
		async content() {
			const packageJson = await getPackageJson()

			const name = packageJson.author?.name
			const { license } = packageJson

			if (name === undefined) {
				throw new Error('Could not find author name in package.json')
			}

			if (license === undefined) {
				throw new Error('Could not find author name in package.json')
			}

			// TODO get license file dynamically, handle other cases
			return `## License\n[${license}](license.txt) © ${name}`
		},

		order: 16,
		required: true,
	},
} satisfies Rules
