import type { Expander } from '../types'
import { readPackageUp } from 'read-package-up'
import { z } from 'zod'

export default {
	// Must be applied at the end, after table of contents expander
	applicationOrder: 2,
	async getContent(_, options?) {
		// Validate options, throws if invalid
		const validOptions = z
			.object({
				prefix: z.string().optional(),
			})
			.optional()
			.parse(options)

		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		return `# ${validOptions?.prefix ?? ''}${normalizedPackageJson.packageJson.name}`
	},
	keyword: 'title',
	order: 1,
	required: true,
} satisfies Expander
