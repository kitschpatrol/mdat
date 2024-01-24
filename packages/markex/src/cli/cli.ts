#!/usr/bin/env node

import log from '../lib/log'
import { Expand } from './commands/expand'
import { Readme } from './commands/readme'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

try {
	await yargs(hideBin(process.argv))
		.scriptName('markex')
		// Common options
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
				"Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-markex comments in your markdown file, or if you're willing to trade some verbosity for safety.",
			type: 'string',
		})

		// TODO make lint its own command
		// .option('lint', {
		// 	description:
		// 		'Validate the file against any expansion rules in `--preset` and / or `--rules`. Ignores `--output`, `--name`,`--meta`',
		// 	type: 'boolean',
		// })
		.option('meta', {
			alias: 'm',
			description:
				'Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.',
			type: 'boolean',
		})
		.command(new Readme())
		.command(new Expand())
		.help()
		.alias('h', 'help')
		.version()
		.alias('v', 'version')
		.fail(false)
		.parse()
} catch (error) {
	if (error instanceof Error) {
		log.error(error.message)
	}

	process.exit(1)
}
