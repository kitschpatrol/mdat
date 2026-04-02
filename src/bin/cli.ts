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
import type { ConfigToLoad } from '../lib/config'
import { check, collapse, expand } from '../lib/api'
import { createReadme, createReadmeInteractive } from '../lib/readme/create'
import { ensureArray } from '../lib/utilities'
import {
	compoundOption,
	expandOption,
	filesPositional,
	formatOption,
	interactiveOption,
	nameOption,
	outputOption,
	overwriteOption,
	printOption,
	configOption,
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
		.option(verboseOption)
		.middleware((argv) => {
			setLogger(
				createLogger({
					name,
					verbose: (argv.verbose as boolean | undefined) ?? false,
					logToConsole: { showTime: false },
				}),
			)
		})
		// `mdat expand` (default)
		.command(
			['$0 [files..] [options]', 'expand [files..] [options]'],
			'Expand MDAT placeholder comments. If no files are provided, the closest readme.md is expanded.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(configOption)
					.option(outputOption)
					.option(nameOption)
					.option(printOption)
					.option(formatOption),
			async ({ config, files, format, name, output, print }) => {
				logConflicts({ name, output, print })
				const mergedConfig = collectConfig(config)

				const results = await expand(files, name, output, mergedConfig, { format })
				for (const file of results) {
					if (print) {
						process.stdout.write(file.toString())
					} else {
						await write(file)
					}
				}

				// Log results
				reporterMdat(results)
				log.debug(`Expanded comments in ${prettyMilliseconds(performance.now() - startTime)}.`)
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
					.option(formatOption),
			async ({ files, format, name, output, print }) => {
				logConflicts({ name, output, print })

				const results = await collapse(files, name, output, undefined, { format })

				for (const file of results) {
					if (print) {
						process.stdout.write(file.toString())
					} else {
						await write(file)
					}
				}

				// Log results
				reporterMdat(results)

				log.debug(`Collapsed comments in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = getExitCode(results)
			},
		)
		// `mdat check`
		.command(
			'check [files..] [options]',
			'Check if MDAT placeholder comments are up to date. Exits with code 1 if any files have stale or unexpanded content.',
			(yargs) =>
				yargs
					.positional(...filesPositional)
					.option(configOption)
					.option(formatOption),
			async ({ config, files, format }) => {
				const mergedConfig = collectConfig(config)
				const results = await check(files, mergedConfig, { format })

				let allInSync = true
				for (const { inSync, result } of results) {
					const filePath = result.path || 'unknown'
					if (inSync) {
						log.debug(`${picocolors.green('Up to date')}: ${filePath}`)
					} else {
						log.warn(`${picocolors.red('Stale content')}: ${filePath}`)
						allInSync = false
					}
				}

				log.debug(`Checked in ${prettyMilliseconds(performance.now() - startTime)}.`)
				process.exitCode = allInSync ? 0 : 1
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
					.option(compoundOption),
			async ({ compound, expand, interactive, output, overwrite, template }) => {
				if (interactive) {
					await createReadmeInteractive()
				} else {
					const readmePath = await createReadme({
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

function collectConfig(config: string | string[] | undefined): ConfigToLoad | undefined {
	if (config === undefined) return undefined
	return ensureArray(config)
}

function getExitCode(results: VFile[]): number {
	const reports = getMdatReports(results)
	const errorCount = reports.reduce((count, report) => count + report.errors.length, 0)
	return errorCount > 0 ? 1 : 0
}
