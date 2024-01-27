import { type CheckFileReport } from './check'
import { type ExpandFileReport } from './expand'
import log from './log'
import logSymbols from 'log-symbols'
import fs from 'node:fs'
import path from 'node:path'
import { isFileSync } from 'path-type'
import plur from 'plur'
import untildify from 'untildify'

export function getInputOutputPaths(
	inputs: string[],
	output: string | undefined,
	name: string | undefined,
	extension: string | undefined,
): Array<{ input: string; name: string; output: string }> {
	const paths: Array<{ input: string; name: string; output: string }> = []

	// Accounts for numbering outputs if multiple files are provided
	// TODO zero pad if more than 9 files
	for (const [index, file] of inputs.entries()) {
		const nameSuffix = name && inputs.length > 1 ? `-${index + 1}` : ''
		const inputOutputPath = getInputOutputPath(file, output, name, extension, nameSuffix)
		paths.push(inputOutputPath)
	}

	return paths
}

export function getInputOutputPath(
	input: string,
	output: string | undefined,
	name: string | undefined,
	extension: string | undefined,
	nameSuffix = '',
): { input: string; name: string; output: string } {
	const resolvedInput = expandPath(input)
	const resolvedOutput = output ? expandPath(output) : undefined

	// Ensure input is a file
	if (!isFileSync(resolvedInput)) {
		throw new Error(`Input file not found: "${resolvedInput}"`)
	}

	console.log(`inner output: ${output}`)

	// Ensure output is not a file
	if (resolvedOutput) {
		if (isFileSync(resolvedOutput)) {
			throw new Error(`Output path must be a directory, received a file path: "${resolvedOutput}"`)
		}

		// Create intermediate directories if needed
		fs.mkdirSync(resolvedOutput, { recursive: true })
	}

	// Get base fileName either from input or name option
	const baseName = name
		? path.basename(name, path.extname(name))
		: path.basename(resolvedInput, path.extname(resolvedInput))

	console.log('----------------------------------')
	console.log(`output: ${output}`)
	console.log(`resolvedOutput: ${resolvedOutput}`)
	console.log(`baseName: ${baseName}`)

	// Use argument first, then output name extension if present, then input name extension if present, then default to nothing
	const resolvedExtension = `.${
		extension ??
		(name && path.extname(name) !== ''
			? path.extname(name)
			: path.extname(input) === ''
				? ''
				: path.extname(input))
	}`

	const outputName = `${baseName}${nameSuffix}${resolvedExtension}`
	const outputPath = resolvedOutput ?? path.dirname(resolvedInput)

	return { input: resolvedInput, name: outputName, output: outputPath }
}

export function expandPath(file: string): string {
	// TODO any other validation?
	return untildify(file)
}

// The log.ts module is intended for more generic uses, so the log formatting
// functions below are going in this file

/*
 * @param report - The report to log, returned from expandFiles
 * @returns The number of expansions made across all files
 */
export function logExpandFilesReport(report: ExpandFileReport[]): number {
	let expansionCount = 0

	for (const { expandedFile, report: fileReport, sourceFile } of report) {
		log.infoPrefixed('expand', 'Expanded:')
		log.infoPrefixed('expand', `  From: ${sourceFile}`)
		log.infoPrefixed('expand', `  To:   ${expandedFile}`)

		const expansionCountInFile = fileReport.length
		expansionCount += expansionCountInFile

		log.infoPrefixed('expand', `  Expansions: ${expansionCountInFile}`)
		for (const [i, line] of fileReport.entries()) {
			log.infoPrefixed('expand', `    ${i + 1}. ${line}`)
		}
	}

	return expansionCount
}

/*
 *
 * @param report - The report to log, returned from checkFiles
 * @returns The number of errors logged
 */
export function logCheckReport(report: CheckFileReport[]): number {
	let errorCount = 0
	for (const { file, report: fileReport } of report) {
		if (typeof fileReport === 'boolean' && fileReport) {
			log.infoPrefixed('check', `${file}: ${logSymbols.success} OK`)
		} else {
			log.errorPrefixed(
				'check',
				`${file}: ${logSymbols.warning} ${fileReport.length} ${plur('Error', fileReport.length)}:`,
			)
			for (const error of fileReport) {
				log.errorPrefixed('check', `   ${logSymbols.error} ${error.message}`)
				errorCount++
			}
		}
	}

	return errorCount
}
