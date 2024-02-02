import log from './log'
import chalk from 'chalk'
import path from 'node:path'
import type { Node } from 'unist'
import { type VFile } from 'vfile'
import { type Options, type VFileMessage } from 'vfile-message'

// Tries to provide a simpler wrapper to vfile.message
export type MdatMessage = {
	column?: number
	level: 'error' | 'info' | 'warn'
	line?: number
	message: string
	source?: string
}

export type MdatFileReport = {
	destinationPath?: string
	errors: MdatMessage[]
	infos: MdatMessage[]
	sourcePath: string
	warnings: MdatMessage[]
}

// Official fields:
// ancestors (Array<Node> or undefined) — stack of (inclusive) ancestor nodes surrounding the message
// cause (Error or undefined) — original error cause of the message
// column (number or undefined) — starting column of message
// fatal (boolean or undefined) — state of problem; true: error, file not usable; false: warning, change may be needed; undefined: info, change likely not needed
// line (number or undefined) — starting line of message
// place (Point, Position or undefined) — place of message
// reason (string) — reason for message (should use markdown)
// ruleId (string or undefined, example: 'my-rule') — category of message
// source (string or undefined, example: 'my-package') — namespace of message

// Wrapper for file.message

// Function Overloads
export function saveLog(
	file: VFile,
	level: 'error' | 'info' | 'warn',
	source: string,
	message: string,
	line?: number,
	column?: number,
): void
export function saveLog(
	file: VFile,
	level: 'error' | 'info' | 'warn',
	source: string,
	message: string,
	node?: Node,
): void

// Function Implementation
export function saveLog(
	file: VFile,
	level: 'error' | 'info' | 'warn',
	source: string,
	message: string,
	lineOrNode?: Node | number,
	maybeColumn?: number,
): void {
	let line: number
	let column: number

	if (lineOrNode === undefined || typeof lineOrNode === 'number') {
		// Handle the case where lineOrNode is a number
		line = lineOrNode ?? 0
		column = maybeColumn ?? 0 // Use the provided column or default to 0
	} else {
		// Handle the case where lineOrNode is a Node
		line = lineOrNode?.position?.start.line ?? 0
		column = lineOrNode?.position?.start.column ?? 0
	}

	const options: Options = {
		place: {
			end: {
				column,
				line,
			},
			start: {
				column,
				line,
			},
		},
		source,
	}

	const vFileMessage = file.message(message, options)
	vFileMessage.fatal = level === 'error' ? true : level === 'warn' ? false : undefined
}

function vFileMessageToMdatMessage(vFileMessage: VFileMessage): MdatMessage {
	return {
		column: vFileMessage.column,
		level: vFileMessage.fatal ? 'error' : vFileMessage.fatal === false ? 'warn' : 'info',
		line: vFileMessage.line,
		message: vFileMessage.reason,
		source: vFileMessage.source,
	}
}

export function getMdatReports(files: VFile[]): MdatFileReport[] {
	return files.map((file) => getMdatReport(file))
}

function getMdatReport(file: VFile): MdatFileReport {
	const mdatFileReport: MdatFileReport = {
		destinationPath: file.history.length > 0 ? file.history.at(-1) : undefined,
		errors: [],
		infos: [],
		sourcePath: file.history.at(0) ?? file.path,
		warnings: [],
	}

	if (mdatFileReport.sourcePath?.startsWith('.')) {
		mdatFileReport.sourcePath = path.relative(
			process.cwd(),
			path.join(process.cwd(), mdatFileReport.sourcePath),
		)
	}

	for (const message of file.messages) {
		const mdatMessage = vFileMessageToMdatMessage(message)
		if (mdatMessage.level === 'error') {
			mdatFileReport.errors.push(mdatMessage)
		} else if (mdatMessage.level === 'warn') {
			mdatFileReport.warnings.push(mdatMessage)
		} else {
			mdatFileReport.infos.push(mdatMessage)
		}
	}

	return mdatFileReport
}

export function reporterMdat(files: VFile[]): void {
	for (const file of files) {
		const mdatFileReport = getMdatReport(file)
		const { destinationPath, errors, infos, sourcePath, warnings } = mdatFileReport

		log.info(`${chalk.bold('Comment Expansion Report:')}`)
		log.info(`\tFrom: ${chalk.blue.bold(sourcePath)}`)
		log.info(`\tTo:   ${chalk.blue.bold(destinationPath)}`)

		for (const message of errors) {
			log.error(mdatMessageToLogString(sourcePath, message))
		}

		for (const message of warnings) {
			log.warn(mdatMessageToLogString(sourcePath, message))
		}

		for (const message of infos) {
			log.info(mdatMessageToLogString(sourcePath, message))
		}

		if (errors.length === 0 && warnings.length === 0) {
			log.info(`No issues found in ${sourcePath}`)
		} else {
			log.error(`${errors.length} errors, ${warnings.length} warnings found in ${sourcePath}`)
		}
	}
}

function mdatMessageToLogString(sourcePath: string, mdatMessage: MdatMessage): string {
	const { column, level, line, message, source } = mdatMessage

	const resolvedSource = source ? chalk.gray(`[${source}] `) : ''
	const lineColumn = line && column ? `:${line}:${column}` : ''
	const highlightedMessage = highlightComments(message, level)

	return `${resolvedSource}${highlightedMessage} ${chalk.whiteBright(sourcePath + lineColumn)}`
}

function highlightComments(text: string, level: 'error' | 'info' | 'warn'): string {
	return text.replaceAll(/<!--.+-->/g, (match) =>
		level === 'info'
			? chalk.green(match)
			: level === 'warn'
				? chalk.yellow(match)
				: chalk.red(match),
	)
}
