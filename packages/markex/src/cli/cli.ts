#!/usr/bin/env node

import log from '../lib/log'
import { readmeCommand } from './wrappers'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

await yargs(hideBin(process.argv))
	.scriptName('markex')
	.option('verbose', {
		default: false,
		describe:
			'Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.',
		type: 'boolean',
	})
	.option('print', {
		default: false,
		description:
			'Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.',
		type: 'boolean',
	})
	.option('prefix', {
		description:
			"Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-mdex comments in your markdown file, or if you're willing to trade some verbosity for safety.",
		type: 'string',
	})
	.option('lint', {
		description:
			'Validate the file against any expansion rules in `--preset` and / or `--rules`. Ignores `--output`, `--name`,`--meta`',
		type: 'boolean',
	})
	.option('meta', {
		alias: 'm',
		description:
			'Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.',
		type: 'boolean',
	})
	.command(
		'readme',
		'desc todo',
		(yargs) => yargs,
		async (argv) => {
			const { print, verbose } = argv
			const result = await readmeCommand({ print, verbose })
			process.exit(result)
		},
	)

	.command(
		['$0 <file..>', 'expand <file..>'],
		'desc todo',
		(yargs) =>
			yargs
				.positional('file', {
					demandOption: true,
					describe: 'TODO',
					type: 'string',
				})
				.option('preset', {
					choices: ['readme'],
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
				}),
		(argv) => {
			console.log('Running expand command with:', argv)
		},
	)
	.demandCommand(1, 'You must provide at least one command or file')
	.alias('h', 'help')
	// TODO, relative path issue
	// .version('version', version)
	.alias('v', 'version')
	.help()
	.parse()
