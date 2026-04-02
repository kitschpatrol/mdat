import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'

export default {
	title: {
		async content(options?) {
			const { postfix, prefix, titleCase } = z
				.object({
					postfix: z.string().optional().default(''),
					prefix: z.string().optional().default(''),
					titleCase: z.boolean().optional().default(false),
				})
				.parse(options ?? {})

			const { name: packageName } = await getReadmeMetadata()

			if (packageName === undefined) {
				throw new Error('Could not find project name')
			}

			return `# ${prefix}${titleCase ? makeTitleCase(packageName) : packageName}${postfix}`
		},
		// Must be applied after table of contents expander
		order: 2,
	},
} satisfies Rules

// Helpers
const SPLIT_FOR_TITLE_CASE_REGEX = /[ _-]+/

function makeTitleCase(text: string): string {
	return text
		.split(SPLIT_FOR_TITLE_CASE_REGEX)
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}
