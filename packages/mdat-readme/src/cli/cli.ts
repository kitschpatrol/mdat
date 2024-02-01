#!/usr/bin/env node

import { expandReadmeFile } from '../lib/api'
import { type MdatReadmeConfig } from '../lib/config'
import { initReadme, initReadmeInteractive } from '../lib/init'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import { getMdatReports, log, reporterMdat } from 'mdat'
import prettyMilliseconds from 'pretty-ms'
import { write } from 'to-vfile'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const startTime = performance.now()

try {
	await yargs(hideBin(process.argv))
		.scriptName('mdat-readme')
		.command(
			'init',
			'Interactively Create a new readme.md file with sensible `mdat` comment placeholders.',
			(yargs) =>
				yargs
					.option('interactive', {
						alias: 'i',
						default: true,
						description:
							'Run the guided interactive init process. Set explicitly to false to use default values and skip the prompt.',
						type: 'boolean',
					})
					.option('overwrite', {
						default: false,
						defaultDescription: "False: If an existing readme is found, don't touch it.",
						description: 'Replace an existing readme file if one is found.',
						type: 'boolean',
					})
					.option('destination', {
						defaultDescription:
							"The package root if you're in a package, otherwise the current working directory.",
						description: 'Destination directory for the new readme file.',
						type: 'string',
					})
					.option('expand', {
						default: true,
						description:
							'Automatically run `mdat-readme` immediately after creating the readme template.',
						type: 'boolean',
					})
					.option('template', {
						choices: ['basic', 'full'] as const,
						default: 'full',
						description: 'Choose between a minimalist or maximalist readme template.',
						type: 'string',
					})
					.option('compound', {
						default: true,
						description:
							"Use compound comment templates to replace several individual comment templates where possible. This combines things like <!-- title -->, <!-- badges -->, etc. in a single <!-- header --> comment. It's less clutter when you're editing, but it's also less explicit. The readme output is identical.",
						type: 'boolean',
					}),
			async ({ compound, destination, expand, interactive, overwrite, template }) => {
				// Not sure why Yargs doesn't check and narrow... should be unreachable
				if (template !== 'full' && template !== 'basic') {
					throw new TypeError('Invalid template type')
				}

				const result = await (interactive
					? await initReadmeInteractive()
					: initReadme({ compound, destination, expand, overwrite, template }))
				console.log(result)
			},
		)
		.command(
			['$0', 'expand'],
			'description goes here',
			(yargs) =>
				yargs
					.option('readme-file', {
						description:
							'Path to the readme file to expand. The closest readme file is used by default.',
						type: 'string',
					})
					.option('package-file', {
						defaultDescription: 'The closest package.json file is used by default.',
						description: 'Path to the package.json file to use to populate the readme.',
						string: true,
					})
					.option('rules', {
						alias: 'r',
						description:
							"Path(s) to .js ES module files containing additional expansion rules you'd like to apply to the readme in addition to the standard set.",
						string: true,
						type: 'array',
					})
					.option('output', {
						alias: 'o',
						defaultDescription:
							'Same directory as your readme file. Writes rule expansions directly to your readme file.',
						description: 'Output file directory.',
						type: 'string',
					})
					.option('name', {
						alias: 'n',
						defaultDescription:
							'Same directory as input file. Writes directly to your readme file.',
						description: 'Output file name.',
						type: 'string',
					})
					.option('print', {
						default: false,
						description:
							'Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.',
						type: 'boolean',
					})
					.option('prefix', {
						description:
							"Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-mdat comments in your markdown file, or if you're willing to trade some verbosity for safety.",
						type: 'string',
					})
					.option('meta', {
						alias: 'm',
						default: true,
						description:
							'Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.',
						type: 'boolean',
					})
					.option('check', {
						alias: 'c',
						default: false,
						describe:
							'Check your readme for rule violations without expanding comments. Identifies things like missing comment placeholders and incorrect placeholder ordering.',
						type: 'boolean',
					})
					.option('verbose', {
						default: false,
						describe:
							'Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.',
						type: 'boolean',
					}),
			async ({
				check,
				meta,
				name,
				output,
				packageFile,
				prefix = '',
				print,
				readmeFile,
				rules = [],
				verbose,
			}) => {
				log.verbose = verbose

				if (check) {
					// Validate the file, don't write anything
					if (output) {
						output = undefined
						log.warn(`${logSymbols.warning} Ignoring --output option because --check is set`)
					}

					if (name) {
						name = undefined
						log.warn(`${logSymbols.warning} Ignoring --name option because --check is set`)
					}

					if (print) {
						print = false
						log.warn(`${logSymbols.warning} Ignoring --print option because --check is set`)
					}
				}

				if (print) {
					if (output) {
						output = undefined
						log.warn(`${logSymbols.warning} Ignoring --output option because --print is set`)
					}

					if (name) {
						name = undefined
						log.warnPrefixed(
							'expand',
							`${logSymbols.warning} Ignoring --name option because --print is set`,
						)
					}
				}

				log.info(
					`${check ? 'Checking' : 'Expanding'} mdat comments in readme at "${readmeFile}"...`,
				)

				// CLI options override any config file options
				const cliConfig: MdatReadmeConfig = {
					addMetaComment: meta,
					keywordPrefix: prefix,
					packageFile,
					readmeFile,
					rules: {}, // Needed for config type detection...
				}

				const results = await expandReadmeFile([...rules, cliConfig])

				// Log to stdout if requested
				if (print) {
					process.stdout.write(results.result.toString())
				}

				log.info(`Expanding comment in readme:   ${chalk.bold.blue(readmeFile)}`)
				log.info(`Pulling package metadata from: ${chalk.bold.blue(packageFile)}`)

				// Log the result, goes through log not console
				// to respect verbosity
				reporterMdat([results.result])

				// Save file to disk
				if (!check && !print) {
					await write(results.result)
				}

				// Errors determine exit code
				const reports = getMdatReports([results.result])
				const errorCount = reports.reduce((count, report) => count + report.errors.length, 0)

				log.info(
					`Expanded readme comments in ${prettyMilliseconds(performance.now() - startTime)}.`,
				)
				process.exitCode = errorCount > 0 ? 1 : 0
			},
		)
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
