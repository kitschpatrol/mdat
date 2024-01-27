#!/usr/bin/env node

import { checkReadmeFile, expandReadmeFile, findReadme } from '../lib/readme'
import logSymbols from 'log-symbols'
import { log, logCheckReport, logExpandFilesReport } from 'magicmark'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

try {
	await yargs(hideBin(process.argv))
		.scriptName('magicmark-readme')
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
							"Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-magicmark comments in your markdown file, or if you're willing to trade some verbosity for safety.",
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

				const readmePath = readmeFile ?? (await findReadme())

				if (check) {
					// Validate the file, don't write anything
					if (output)
						log.warnPrefixed(
							'check',
							`${logSymbols.warning} Ignoring --output option because --check is set`,
						)
					if (name)
						log.warnPrefixed(
							'check',
							`${logSymbols.warning} Ignoring --name option because --check is set`,
						)
					if (print)
						log.warnPrefixed(
							'check',
							`${logSymbols.warning} Ignoring --print option because --check is set`,
						)

					log.info(`Checking magicmark comments in readme at "${readmeFile}"...`)
					const report = await checkReadmeFile(readmePath, { meta, packageFile, prefix, rules })
					const errorCount = logCheckReport([report])
					process.exitCode = errorCount > 0 ? 1 : 0
				} else {
					log.info(`Expanding magicmark comments in readme at "${readmeFile}"...`)
					const report = await expandReadmeFile(readmePath, {
						meta,
						name,
						output,
						packageFile,
						prefix,
						print,
						rules,
					})

					logExpandFilesReport([report])
				}
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
