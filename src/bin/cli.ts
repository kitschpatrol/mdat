#!/usr/bin/env node

import type { VFile } from 'vfile'
import picocolors from 'picocolors'
import prettyMilliseconds from 'pretty-ms'
import { getMdatReports, reporterMdat } from 'remark-mdat'
import { setLogger } from '../lib'
import { log } from '../lib/log'
import { write } from 'to-vfile'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { version, name } from '../../package.json' with { type: 'json' }
import type { RulesToLoad } from '../lib/config'
import { collapseFiles, expandFiles } from '../lib/api'
import { collapseReadmeFiles, expandReadmeFiles } from '../lib/readme/api'
import { initReadme, initReadmeInteractive } from '../lib/readme/init'
import { ensureArray } from '../lib/utilities'
import {
	filesPositional,
	nameOption,
	outputOption,
	printOption,
	rulesOption,
	verboseOption,
} from './options'
import {
	compoundOption,
	expandOption,
	filesPositionalOptional,
	interactiveOption,
	overwriteOption,
	templateOption,
} from './readme-options'
import { createLogger } from 'lognow'

const startTime = performance.now()
const yargsInstance = yargs(hideBin(process.argv))

try {
	await yargsInstance
		.scriptName('mdat')
		.usage('$0 [command]', 'Work with MDAT placeholder comments in any Markdown file.')
		// `mdat expand` (default)
		.command(
			['$0 <files..> [options]', 'expand <files..> [options]'],
			'Expand MDAT placeholder comments.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(rulesOption)
					.option(outputOption)
					.option(nameOption)
					.option(printOption)
					.option(verboseOption),
			async ({ files, name, output, print, rules, verbose }) => {
				setLogger(
					createLogger({
						name: name,
						verbose: verbose ?? false,
						logToConsole: { showTime: false },
					}),
				)

				logConflicts({ name, output, print })
				const mergedRules = collectRules(rules)

				const results = await expandFiles(files, name, output, mergedRules)
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
		// `mdat collapse`
		.command(
			'collapse <files..> [options]',
			'Collapse MDAT placeholder comments.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(outputOption)
					.option(nameOption)
					.option(printOption)
					.option(verboseOption),
			async ({ files, name, output, print, verbose }) => {
				setLogger(
					createLogger({
						name: name,
						verbose: verbose ?? false,
						logToConsole: { showTime: false },
					}),
				)

				logConflicts({ name, output, print })

				const results = await collapseFiles(files, name, output)

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
		// `mdat readme`
		.command(
			'readme [command]',
			'Work with MDAT comments in your readme.md.',
			(yargs) =>
				yargs
					// `mdat readme expand` (default)
					.command(
						['$0 [files..] [options]', 'expand [files..] [options]'],
						'Expand MDAT comment placeholders in your readme.md using a collection of helpful built-in expansion rules.',
						(yargs) =>
							yargs
								.positional(...filesPositionalOptional)
								.option(rulesOption)
								.option(outputOption)
								.option(nameOption)
								.option(printOption)
								.option(verboseOption),
						async ({ files, name, output, print, rules, verbose }) => {
							setLogger(
								createLogger({
									name: name,
									verbose: verbose ?? false,
									logToConsole: { showTime: false },
								}),
							)

							logConflicts({ name, output, print })
							const mergedRules = collectRules(rules)

							// Finds closest readme if undefined
							const results = await expandReadmeFiles(files, name, output, mergedRules)

							for (const file of results) {
								if (print) {
									process.stdout.write(file.toString())
								} else {
									await write(file)
								}
							}

							// Log results
							reporterMdat(results)

							log.info(
								`Expanded readme(s) in ${prettyMilliseconds(performance.now() - startTime)}.`,
							)
							process.exitCode = getExitCode(results)
						},
					)
					// `mdat readme collapse`
					.command(
						'collapse [files..] [options]',
						'Collapse MDAT placeholder comments in your readme.md.',
						(yargs) =>
							yargs
								.positional(...filesPositionalOptional)
								.option(outputOption)
								.option(nameOption)
								.option(printOption)
								.option(verboseOption),
						async ({ files, name, output, print, verbose }) => {
							setLogger(
								createLogger({
									name: name,
									verbose: verbose ?? false,
									logToConsole: { showTime: false },
								}),
							)

							logConflicts({ name, output, print })

							const results = await collapseReadmeFiles(files, name, output)

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
					// `mdat readme init`
					.command(
						'init [options]',
						'Interactively create a new readme.md file with sensible default MDAT comment placeholders.',
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
							setLogger(
								createLogger({
									name: name,
									verbose: verbose ?? false,
									logToConsole: { showTime: false },
								}),
							)

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
									`Created readme at "${picocolors.blue(readmePath)}" in ${prettyMilliseconds(performance.now() - startTime)}.`,
								)
							}

							process.exitCode = 0
						},
					),
			() => {
				log.error('Root MDAT readme command should be unreachable.')
			},
		)
		.help()
		.alias('h', 'help')
		.version(version)
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

function collectRules(rules: string | string[] | undefined): RulesToLoad | undefined {
	if (rules === undefined) return undefined
	return ensureArray(rules)
}

function getExitCode(results: VFile[]): number {
	const reports = getMdatReports(results)
	const errorCount = reports.reduce((count, report) => count + report.errors.length, 0)
	return errorCount > 0 ? 1 : 0
}
