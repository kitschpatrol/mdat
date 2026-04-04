import type { Rules } from 'remark-mdat'
import { getReadmeMetadata } from '../../context'

export default {
	license: {
		async content() {
			const { author, license, licenseFilePath } = await getReadmeMetadata()

			if (author === undefined) {
				// Defensive: requires a project with no detectable author
				throw new Error('Could not find author name in project')
			}

			if (license === undefined || licenseFilePath === undefined) {
				// Defensive: requires a project with no detectable license
				throw new Error('Could not find license for project')
			}

			return `## License\n[${license}](${licenseFilePath}) © ${author}`
		},
	},
} satisfies Rules
