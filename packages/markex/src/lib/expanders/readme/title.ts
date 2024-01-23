import type { Expander } from '../types'
import { readPackageUp } from 'read-package-up'
import { remark } from 'remark'
import { z } from 'zod'

export default {
	async getNodes(_, options) {
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

		return remark.parse(`# ${validOptions?.prefix ?? ''}${normalizedPackageJson.packageJson.name}`)
			.children
	},
	keyword: 'title',
	order: 1,
	required: true,
} satisfies Expander
