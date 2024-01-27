import { getPackageJson } from '../utilities'
import type { Rules } from 'magicmark'
import { z } from 'zod'

export default {
	title: {
		// Must be applied at the end, after table of contents expander
		applicationOrder: 2,
		async content(options?) {
			// Validate options, throws if invalid
			const validOptions = z
				.object({
					postfix: z.string().optional(),
					prefix: z.string().optional(),
				})
				.optional()
				.parse(options)

			const packageJson = await getPackageJson()

			return `# ${validOptions?.prefix ?? ''}${packageJson.name}${validOptions?.postfix ?? ''}`
		},
		order: 1,
		required: true,
	},
} satisfies Rules
