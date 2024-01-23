import type { Expander } from '../../types'
import fs from 'node:fs/promises'
import path from 'node:path'
import { remark } from 'remark'
import { z } from 'zod'

export default {
	async getNodes(_, options) {
		// Validate options, throws if invalid
		const validOptions = z
			.object({
				file: z.string(),
				// Aka "info string"
				language: z.string().optional(),
			})
			.parse(options)

		const lang = path.extname(validOptions.file) ?? ''
		const exampleCode = await fs.readFile(path.join(process.cwd(), validOptions.file), 'utf8')

		return remark.parse(`\`\`\`${lang}\n${exampleCode}\n\`\`\``).children
	},
	keyword: 'code',
} satisfies Expander
