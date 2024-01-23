#!/usr/bin/env node

import { version } from '../../package.json'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

await yargs(hideBin(process.argv))
	.scriptName('markex')
	.command(
		'readme',
		'desc todo',
		(yargs) => yargs,
		(argv) => {
			console.log('Running readme command with:', argv)
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
	.version('version', version)
	.alias('v', 'version')
	.help()
	.parse()
