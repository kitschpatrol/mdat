import type { Rules } from 'remark-mdat'
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

			// eslint-disable-next-line ts/no-unnecessary-condition
			const lang = (path.extname(validOptions.file) ?? '').replace(/^\./, '')
			const exampleCode = await fs.readFile(path.join(process.cwd(), validOptions.file), 'utf8')

			return `\`\`\`${lang}\n${exampleCode}\n\`\`\``
		},
	},
} satisfies Rules
