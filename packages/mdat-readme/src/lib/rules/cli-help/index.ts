import type { Rules } from 'remark-mdat'
import { getHelpMarkdown } from './utilities/get-help-markdown'
import { z } from 'zod'
import { inferCommand } from './utilities/infer-command'

export default {
	'cli-help': {
		async content(options?) {
			const validOptions = z
				.object({
					cliCommand: z.string().optional(),
				})
				.optional()
				.parse(options)

			const resolvedCommand = await inferCommand(validOptions?.cliCommand)
			return getHelpMarkdown(resolvedCommand)
		},
	},
} satisfies Rules
