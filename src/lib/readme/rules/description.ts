import type { Rules } from 'remark-mdat'
import { getReadmeMetadata } from '../../context'

/**
 * Simple alias for short-description
 */
export default {
	description: {
		async content() {
			const { description } = await getReadmeMetadata()

			if (description === undefined) {
				throw new Error('Could not find "description" entry in package.json')
			}

			return `**${description}**`
		},
	},
} satisfies Rules
