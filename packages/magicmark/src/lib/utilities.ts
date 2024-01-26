import { type CheckFileReport } from './check'
import { type ExpandFileReport } from './expand'
import log from './log'
import logSymbols from 'log-symbols'
import path from 'node:path'
import plur from 'plur'
import untildify from 'untildify'

export function getInputOutputPaths(
	files: string[],
	output: string | undefined,
	name: string | undefined,
): Array<{ input: string; output: string }> {
	const paths: Array<{ input: string; output: string }> = []

	// Accounts for numbering outputs if multiple files are provided
	// TODO zero pad if more than 9 files
	for (const [index, file] of files.entries()) {
		const nameSuffix = name && files.length > 1 ? `-${index + 1}` : ''
		const inputOutputPath = getInputOutputPath(file, output, name, nameSuffix)
		paths.push(inputOutputPath)
	}

	return paths
}

export function getInputOutputPath(
	file: string,
	output: string | undefined,
	name: string | undefined,
	nameSuffix = '',
): { input: string; output: string } {
	const resolvedFile = expandPath(file)
	const resolvedOutput = output ? expandPath(output) : undefined

	// Get base fileName either from input or name option
	const baseName = name
		? path.basename(name, path.extname(name))
		: path.basename(resolvedFile, path.extname(resolvedFile))

	const outputName = `${baseName}${nameSuffix}.md`
	const outputPath = path.join(path.dirname(resolvedOutput ?? resolvedFile), outputName)

	return { input: resolvedFile, output: outputPath }
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
