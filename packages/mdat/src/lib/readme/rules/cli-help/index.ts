import { getHelpMarkdown } from './utilities/get-help-markdown'
import { inferCommand } from './utilities/infer-command'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

const optionsSchema = z.object({
	cliCommand: z.string().optional(),
	depth: z.number().optional(),
	helpOption: z.string().optional().default('--help'),
})

export default {
	'cli-help': {
		async content(options?: z.input<typeof optionsSchema>) {
			const resolvedOptions = optionsSchema.parse(options)

			console.log('----------------------------------')
			console.log(`options: ${JSON.stringify(options, undefined, 2)}`)

			const resolvedCommand = await inferCommand(resolvedOptions?.cliCommand)

			return getHelpMarkdown(resolvedCommand, resolvedOptions.helpOption, resolvedOptions.depth)
		},
	},
} satisfies Rules
