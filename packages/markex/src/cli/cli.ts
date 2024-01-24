#!/usr/bin/env node

import log from '../lib/log'
import { readmeCommand } from './wrappers'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

await yargs(hideBin(process.argv))
	.option('verbose', {
		default: false,
		describe:
			'Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.',
		type: 'boolean',
	})
	.scriptName('markex')
	.command(
		'readme',
		'desc todo',
		(yargs) => yargs,
		async (argv) => {
			const { verbose } = argv
			const result = await readmeCommand(verbose)
			process.exit(result)
		},
	)

	.command(
		['$0 <file..>', 'expand <file..>'],
		'desc todo',
		(yargs) =>
			yargs.positional('file', {
				demandOption: true,
				describe: 'TODO',
				type: 'string',
			}),
		(argv) => {
			console.log('Running expand command with:', argv)
		},
	)
	.demandCommand(1, 'You must provide at least one command or file')
	.option('flag', {
		describe: 'An example flag',
		type: 'string',
	})
	.option('another-flag', {
		describe: 'Another example flag',
		type: 'string',
	})
	.option('output', {
		describe: 'Output file',
		type: 'string',
	})

	.alias('h', 'help')
	// TODO, relative path issue
	// .version('version', version)
	.alias('v', 'version')
	.help()
	.parse()
