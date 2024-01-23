import type { Expander } from '../../types'
import { readPackageUp } from 'read-package-up'
import { remark } from 'remark'
import { z } from 'zod'

const optionsSchema = z
	.object({
		prefix: z.string().optional(),
	})
	.optional()

export default {
	async getNodes(_, __, options: z.infer<typeof optionsSchema>) {
		// Validate options, throws if invalid
		optionsSchema.parse(options)

		const normalizedPackageJson = await readPackageUp()

		if (normalizedPackageJson === undefined) {
			throw new Error('Could not find package.json')
		}

		return remark.parse(`# ${options?.prefix ?? ''}${normalizedPackageJson.packageJson.name}`)
			.children
	},
	keyword: 'title',
	order: 1,
	required: true,
} satisfies Expander
