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
import { check, collapse, expand } from '../lib/api'
import { initReadme, initReadmeInteractive } from '../lib/readme/init'
import { ensureArray } from '../lib/utilities'
import {
	compoundOption,
	expandOption,
	filesPositional,
	interactiveOption,
	nameOption,
	outputOption,
	overwriteOption,
	printOption,
	rulesOption,
	templateOption,
	verboseOption,
} from './options'
import { createLogger } from 'lognow'

const startTime = performance.now()
const yargsInstance = yargs(hideBin(process.argv))

try {
	await yargsInstance
		.scriptName('mdat')
		.usage(
			'$0 [command] [files..] [options]',
			'Work with MDAT placeholder comments in Markdown files.',
		)
		// `mdat expand` (default)
		.command(
			['$0 [files..] [options]', 'expand [files..] [options]'],
			'Expand MDAT placeholder comments. If no files are provided, the closest readme.md is expanded.',
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

				const results = await expand(files, name, output, mergedRules)
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
			'collapse [files..] [options]',
			'Collapse MDAT placeholder comments. If no files are provided, the closest readme.md is collapsed.',
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

				const results = await collapse(files, name, output)

				for (const file of results) {
					if (print) {
						process.stdout.write(file.toString())
					} else {
						await write(file)
					}
				}

				// Log results
				reporterMdat(results)

				log.info(`Collapsed comments in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = getExitCode(results)
			},
		)
		// `mdat check`
		.command(
			'check [files..] [options]',
			'Check if MDAT placeholder comments are up to date. Exits with code 1 if any files are out of sync.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(rulesOption)
					.option(verboseOption),
			async ({ files, rules, verbose }) => {
				setLogger(
					createLogger({
						name: name,
						verbose: verbose ?? false,
						logToConsole: { showTime: false },
					}),
				)

				const mergedRules = collectRules(rules)
				const { inSync, results } = await check(files, mergedRules)

				for (const file of results) {
					const filePath = file.path || 'unknown'
					if (inSync) {
						log.info(`${picocolors.green('in sync')}: ${filePath}`)
					} else {
						log.info(`${picocolors.red('out of sync')}: ${filePath}`)
					}
				}

				log.info(`Checked in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = inSync ? 0 : 1
			},
		)
		// `mdat create`
		.command(
			'create [options]',
			'Create a new Markdown file from a template.',
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
