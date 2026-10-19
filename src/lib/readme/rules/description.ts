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
				// Defensive: requires a project with no detectable description
				throw new Error('Could not find project description')
			}

			return `**${description}**`
		},
	},
} satisfies Rules
