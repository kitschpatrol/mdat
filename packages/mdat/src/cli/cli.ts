#!/usr/bin/env node

import { checkFiles, collapseFiles, expandFiles } from '../lib/api'
import { type Config, type ConfigToLoad, getConfig } from '../lib/config'
import { checkReadmeFiles, collapseReadmeFiles, expandReadmeFiles } from '../lib/readme/api'
import { initReadme, initReadmeInteractive } from '../lib/readme/init'
import { ensureArray } from '../lib/utilities'
import {
	configOption,
	filesPositional,
	metaOption,
	nameOption,
	outputOption,
	prefixOption,
	printOption,
	rulesOption,
	verboseOption,
} from './options'
import {
	assetsOption,
	compoundOption,
	expandOption,
	filesPositionalOptional,
	interactiveOption,
	overwriteOption,
	packageOption,
	templateOption,
} from './readme-options'
import chalk from 'chalk'
import prettyMilliseconds from 'pretty-ms'
import { getMdatReports, log, reporterMdat } from 'remark-mdat'
import { write } from 'to-vfile'
import { type VFile } from 'vfile'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const startTime = performance.now()
const yargsInstance = yargs(hideBin(process.argv))

try {
	await yargsInstance
		.scriptName('mdat')
		.usage('$0 [command]', 'Work with `mdat` placeholder comments in any Markdown file.')
		// Mdat expand (default)
		.command(
			['$0 <files..> [options]', 'expand <files..> [options]'],
			'Expand `mdat` placeholder comments.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(configOption)
					.option(rulesOption)
					.option(outputOption)
					.option(nameOption)
					.option(metaOption)
					.option(prefixOption)
					.option(printOption)
					.option(verboseOption),
			async ({
				config,
				files,
				meta: addMetaComment,
				name,
				output,
				prefix: keywordPrefix,
				print,
				rules,
				verbose,
			}) => {
				log.verbose = verbose ?? false
				logConflicts({ name, output, print })
				const mergedConfig = mergeConfigOptions(config, {
					addMetaComment,
					keywordPrefix,
				})

				const results = await expandFiles(files, name, output, mergedConfig, rules)
				for (const file of results) {
					if (print) {
						process.stdout.write(file.toString())
					} else {
						await write(file)
					}
				}

				// Log results
				reporterMdat(results)
				log.info(`Expanded comments in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = getExitCode(results)
			},
		)
		// Mdat check
		.command(
			'check <files..> [options]',
			'Validate a markdown file with `mdat` placeholder comments.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(configOption)
					.option(rulesOption)
					.option(metaOption)
					.option(prefixOption)
					.option(verboseOption),
			async ({ config, files, meta: addMetaComment, prefix: keywordPrefix, rules, verbose }) => {
				log.verbose = verbose ?? false
				const mergedConfig = mergeConfigOptions(config, {
					addMetaComment,
					keywordPrefix,
				})

				const results = await checkFiles(files, undefined, undefined, mergedConfig, rules)

				// Log results
				reporterMdat(results)

				log.info(`Checked comments in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = getExitCode(results)
			},
		)
		// Mdat collapse
		.command(
			'collapse <files..> [options]',
			'Collapse `mdat` placeholder comments.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(configOption)
					.option(outputOption)
					.option(nameOption)
					.option(prefixOption)
					.option(printOption)
					.option(verboseOption),
			async ({ config, files, name, output, prefix: keywordPrefix, print, verbose }) => {
				log.verbose = verbose ?? false
				logConflicts({ name, output, print })
				const mergedConfig = mergeConfigOptions(config, {
					keywordPrefix,
				})

				const results = await collapseFiles(files, undefined, undefined, mergedConfig)

				for (const file of results) {
					if (print) {
						process.stdout.write(file.toString())
					} else {
						await write(file)
					}
				}

				// Log results
				reporterMdat(results)

				log.info(`Cleaned comments in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = getExitCode(results)
			},
		)
		// Second level, readme-specific commands
		// mdat readme
		.command(
			'readme [command]',
			'Work with `mdat` comments in your readme.md.',
			(yargs) =>
				yargs
					// Mdat readme expand (default)
					.command(
						['$0 [files..] [options]', 'expand [files..] [options]'],
						'Expand `mdat` comment placeholders in your readme.md using a collection of helpful built-in expansion rules.',
						(yargs) =>
							yargs
								.positional(...filesPositionalOptional)
								.option(configOption)
								.option(rulesOption)
								.option(outputOption)
								.option(nameOption)
								.option(packageOption)
								.option(assetsOption)
								.option(prefixOption)
								.option(metaOption)
								.option(printOption)
								.option(verboseOption),
						async ({
							assets: assetsPath,
							config,
							files,
							meta: addMetaComment,
							name,
							output,
							package: packageFile,
							prefix: keywordPrefix,
							print,
							rules,
							verbose,
						}) => {
							log.verbose = verbose ?? false
							logConflicts({ name, output, print })
							const mergedConfig = mergeConfigOptions(config, {
								addMetaComment,
								assetsPath,
								keywordPrefix,
								packageFile,
							})

							// Finds closest readme if undefined
							const results = await expandReadmeFiles(files, name, output, mergedConfig, rules)

							for (const file of results) {
								if (print) {
									process.stdout.write(file.toString())
								} else {
									await write(file)
								}
							}

							// Log results
							reporterMdat(results)

							const { packageFile: packageFileFound } = await getConfig()
							log.info(`Pulled package metadata from: ${chalk.bold.blue(packageFileFound)}`)
							log.info(
								`Expanded readme(s) in ${prettyMilliseconds(performance.now() - startTime)}.`,
							)
							process.exitCode = getExitCode(results)
						},
					)
					// Mdat readme check
					.command(
						'check [files..] [options]',
						'Validate `mdat` placeholder comments in your readme.md.',
						(yargs) =>
							yargs
								.positional(...filesPositionalOptional)
								.option(configOption)
								.option(rulesOption)
								.option(packageOption)
								.option(assetsOption)
								.option(prefixOption)
								.option(metaOption)
								.option(verboseOption),
						async ({
							assets: assetsPath,
							config,
							files,
							meta: addMetaComment,
							package: packageFile,
							prefix: keywordPrefix,
							rules,
							verbose,
						}) => {
							log.verbose = verbose ?? false
							const mergedConfig = mergeConfigOptions(config, {
								addMetaComment,
								assetsPath,
								keywordPrefix,
								packageFile,
							})

							// Finds closest readme if undefined
							const results = await checkReadmeFiles(
								files,
								undefined,
								undefined,
								mergedConfig,
								rules,
							)

							// Log results
							reporterMdat(results)

							const { packageFile: packageFileFound } = await getConfig()
							log.info(`Pulled package metadata from: ${chalk.bold.blue(packageFileFound)}`)
							log.info(`Checked readme(s) in ${prettyMilliseconds(performance.now() - startTime)}.`)
							process.exitCode = getExitCode(results)
						},
					)
					// Mdat readme collapse
					.command(
						'collapse [files..] [options]',
						'Collapse `mdat` placeholder comments in your readme.md.',
						(yargs) =>
							yargs
								.positional(...filesPositionalOptional)
								.option(outputOption)
								.option(nameOption)
								.option(printOption)
								.option(configOption)
								.option(prefixOption)
								.option(verboseOption),
						async ({ config, files, name, output, prefix: keywordPrefix, print, verbose }) => {
							log.verbose = verbose ?? false
							logConflicts({ name, output, print })
							const mergedConfig = mergeConfigOptions(config, {
								keywordPrefix,
							})

							const results = await collapseReadmeFiles(files, undefined, undefined, mergedConfig)

							for (const file of results) {
								if (print) {
									process.stdout.write(file.toString())
								} else {
									await write(file)
								}
							}

							// Log results
							reporterMdat(results)

							log.info(`Cleaned readme(s) in ${prettyMilliseconds(performance.now() - startTime)}.`)
							process.exitCode = getExitCode(results)
						},
					)
					// Mdat readme init
					.command(
						'init [options]',
						'Interactively create a new readme.md file with sensible default `mdat` comment placeholders.',
						(yargs) =>
							yargs
								.option(interactiveOption)
								.option(overwriteOption)
								.option(outputOption)
								.option(expandOption)
								.option(templateOption)
								.option(compoundOption)
								.option(verboseOption),
						async ({ compound, expand, interactive, output, overwrite, template, verbose }) => {
							log.verbose = verbose ?? false

							if (interactive) {
								await initReadmeInteractive()
							} else {
								const readmePath = await initReadme({
									compound,
									expand,
									output,
									overwrite,
									template,
								})
								log.info(
									`Created readme at "${chalk.blue(readmePath)}" in ${prettyMilliseconds(performance.now() - startTime)}.`,
								)
							}

							// TODO real exit code
							process.exitCode = 0
						},
					),
			() => {
				log.error('Root mdat readme command should be unreachable.')
			},
		)
		.help()
		.alias('h', 'help')
		.version()
		.alias('v', 'version')
		// Some maneuvering to get full-width help output via non-ttys for parsing
		.wrap(process.stdout.isTTY ? Math.min(120, yargsInstance.terminalWidth()) : 0)
		.fail(false)
		.parse()
} catch (error) {
	if (error instanceof Error) {
		log.error(error.message)
	}

	process.exitCode = 1
}

// Helpers

function logConflicts(args: { name?: string; output?: string; print?: boolean }) {
	if (args.print && args.output) {
		log.warn(`Ignoring --output option because --print is set`)
	}

	if (args.print && args.name) {
		log.warn(`Ignoring --name option because --print is set`)
	}
}

function mergeConfigOptions(
	config: string | string[] | undefined,
	cliOptions: Config,
): ConfigToLoad {
	const configOptionValue = ensureArray(config)
	return [...configOptionValue, cliOptions]
}

function getExitCode(results: VFile[]): number {
	const reports = getMdatReports(results)
	const errorCount = reports.reduce((count, report) => count + report.errors.length, 0)
	return errorCount > 0 ? 1 : 0
}
