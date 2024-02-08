import { getPackageJson } from '../api'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

export default {
	title: {
		// Must be applied at the end, after table of contents expander
		applicationOrder: 2,
		async content(options?) {
			const { postfix, prefix, titleCase } = z
				.object({
					postfix: z.string().optional().default(''),
					prefix: z.string().optional().default(''),
					titleCase: z.boolean().optional().default(false),
				})
				.parse(options ?? {})

			const { name: packageName } = await getPackageJson()

			return `# ${prefix}${titleCase ? makeTitleCase(packageName) : packageName}${postfix}`
		},
		order: 1,
		required: true,
	},
} satisfies Rules

// Helpers

function makeTitleCase(text: string): string {
	return text
		.split(/[ _-]/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}
