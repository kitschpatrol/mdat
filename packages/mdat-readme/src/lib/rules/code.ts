import type { Rules } from 'mdat'
import fs from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'

export default {
	code: {
		async content(options) {
			// Check options, throws if invalid
			const validOptions = z
				.object({
					file: z.string(),
					// Aka "info string"
					language: z.string().optional(),
				})
				.parse(options)

			const lang = path.extname(validOptions.file) ?? ''
			const exampleCode = await fs.readFile(path.join(process.cwd(), validOptions.file), 'utf8')

			return `\`\`\`${lang}\n${exampleCode}\n\`\`\``
		},
	},
} satisfies Rules
