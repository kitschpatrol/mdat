/* eslint-disable perfectionist/sort-classes */
import log from '../../lib/log'
import type { ArgumentsCamelCase, Argv, CommandModule, Options } from 'yargs'

export type CommandArguments = {
	print: boolean
	verbose: boolean
} & Options

export class Expand<U extends CommandArguments>
	implements CommandModule<Record<string, unknown>, U>
{
	public command = ['$0 <files..>', 'expand <files..>']
	public describe = 'description to come'

	public builder = (yargs: Argv): Argv<U> => {
		yargs
			.positional('files', {
				demandOption: true,
				describe: 'TODO',
				type: 'string',
			})
			.option('preset', {
				choices: ['readme'] as const,
				description:
					'Convenient collections of rule presets included with markex. Currently, `readme` is the only bundled preset. Presets are also available as top-level commands on `markex` with some additional functionality, e.g. `markex readme` applies `--preset readme` and also finds the nearest readme file.',
				requiresArg: true,
				type: 'string',
			})
			.option('rules', {
				alias: 'r',
				description: 'Path to .js or .ts files with expansion rules.',
				string: true, // Ensures the array items are treated as strings
				type: 'array',
			})
			.option('output', {
				alias: 'o',
				description: 'Output file directory.',
				type: 'string',
			})
			.option('name', {
				alias: 'n',
				description: 'Output file name.',
				type: 'string',
			})
		return yargs as unknown as Argv<U>
	}

	public handler = (argv: ArgumentsCamelCase<U>) => {
		const { print, verbose } = argv
		log.verbose = verbose

		throw new Error('TODO')
	}
}
