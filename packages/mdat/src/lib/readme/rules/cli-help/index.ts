import { getHelpMarkdown } from './utilities/get-help-markdown'
import { inferCommand } from './utilities/infer-command'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

export default {
	'cli-help': {
		async content(options) {
			const validOptions = z
				.object({
					cliCommand: z.string().optional(),
					depth: z.number().optional(),
					helpFlag: z.string().optional(),
				})
				.parse(options)
			const resolvedCommand = await inferCommand(validOptions?.cliCommand)
			return getHelpMarkdown(resolvedCommand, validOptions.helpFlag, validOptions.depth)
		},
	},
} satisfies Rules
