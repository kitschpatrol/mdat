import type { Rules } from 'remark-mdat'
import { getPackageJson } from '../../config'

export default {
	license: {
		async content() {
			const packageJson = await getPackageJson()

			const { author, license } = packageJson

			if (author?.name === undefined) {
				throw new Error('Could not find "author.name" entry in package.json')
			}

			if (license === undefined) {
				throw new Error('Could not find "license" entry in package.json')
			}

			// TODO get license file dynamically, handle other cases
			return `## License\n[${license}](license.txt) © ${author.name}`
		},
		order: 16,
	},
} satisfies Rules
