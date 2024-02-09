// Regrettable use of any in this file due to untyped data from the Chevrotain parser.
// TODO run https://github.com/Chevrotain/chevrotain/blob/master/examples/implementation_languages/typescript/scripts/gen_dts_signatures.js

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/naming-convention */

import { type Option, type ProgramInfo, getCommandParts } from './index'
import { CstParser, Lexer, createToken } from 'chevrotain'

// Lexer ----------------------------------------------------------------------

// Tokens
const flag = createToken({ name: 'flag', pattern: /--[\w-_]+/ })
const alias = createToken({ longer_alt: flag, name: 'alias', pattern: /-[A-Za-z]/ })
const comma = createToken({
	group: Lexer.SKIPPED,
	name: 'comma',
	pattern: /,/,
})
const dollar = createToken({
	group: Lexer.SKIPPED,
	name: 'dollar',
	pattern: /\$/,
})
const whiteSpace = createToken({
	group: Lexer.SKIPPED,
	name: 'whiteSpace',
	pattern: / /,
})

const newLine = createToken({
	group: Lexer.SKIPPED,
	name: 'newLine',
	pattern: /\n/,
})

const word = createToken({ name: 'word', pattern: /\S+/ })
const argument = createToken({ name: 'argument', pattern: /(<\S+>|\[.+])/ })

// Stateful tokens
const programDescription = createToken({
	name: 'programDescription',
	pattern: /\w.+(?=\n\n {2}Usage)/,
})

const startUsage = createToken({
	group: Lexer.SKIPPED,
	name: 'startUsage',
	pattern: / {2}Usage\n/,
	push_mode: 'USAGE_MODE',
})

const endUsage = createToken({
	group: Lexer.SKIPPED,
	name: 'endUsage',
	pattern: /\n/,
	pop_mode: true,
})

const startOptions = createToken({
	name: 'startOptions',
	pattern: / {2}Options\n/,
	push_mode: 'OPTIONS_MODE',
})

const startRow = createToken({
	name: 'startRow',
	pattern: / {4}/,
	push_mode: 'ROW_MODE',
})

const rowDescription = createToken({
	name: 'rowDescription',
	pattern: /\w.+/,
})

const endRow = createToken({
	group: Lexer.SKIPPED,
	name: 'endRow',
	pattern: /\n/,
	pop_mode: true,
})

const endOptions = createToken({
	group: Lexer.SKIPPED,
	name: 'endOptions',
	pattern: /\n/,
	pop_mode: true,
})

// Create lexer
const lexer = new Lexer({
	defaultMode: 'DEFAULT_MODE',

	modes: {
		DEFAULT_MODE: [startUsage, startOptions, programDescription, newLine, whiteSpace],
		OPTIONS_MODE: [endOptions, startRow],
		ROW_MODE: [endRow, alias, flag, comma, argument, rowDescription, whiteSpace],
		USAGE_MODE: [endUsage, dollar, argument, word, whiteSpace],
	},
})

const allTokens = [
	flag,
	alias,
	comma,
	dollar,
	whiteSpace,
	newLine,
	word,
	argument,
	programDescription,
	startUsage,
	endUsage,
	startOptions,
	startRow,
	rowDescription,
	endRow,
	endOptions,
]

// Parser ---------------------------------------------------------------------

// Create parser
class CliParser extends CstParser {
	public programHelp = this.RULE('programHelp', () => {
		this.CONSUME(programDescription, { LABEL: 'description' })
		this.AT_LEAST_ONE(() => {
			this.CONSUME(word, { LABEL: 'commandName' })
		})
		this.MANY(() => {
			this.CONSUME(argument)
		})
		this.OPTION(() => {
			this.SUBRULE(this.optionsSection)
		})
	})

	private readonly optionsSection = this.RULE('optionsSection', () => {
		this.CONSUME(startOptions)
		this.MANY(() => {
			this.SUBRULE(this.sectionRow)
		})
	})

	private readonly sectionRow = this.RULE('sectionRow', () => {
		this.CONSUME(startRow)

		this.MANY(() => {
			this.OR([
				{ ALT: () => this.CONSUME(argument) },
				{ ALT: () => this.CONSUME(alias) },
				{ ALT: () => this.CONSUME(flag) },
				{ ALT: () => this.CONSUME(rowDescription, { LABEL: 'description' }) },
			])
		})
	})

	constructor() {
		super(allTokens)
		this.performSelfAnalysis()
	}
}

const parser = new CliParser()

// Objectifying Visitor -------------------------------------------------------

class CliHelpToObjectVisitor extends parser.getBaseCstVisitorConstructor() {
	constructor() {
		super()
		this.validateVisitor()
	}

	programHelp(context: any): ProgramInfo {
		// "commandName" includes everything up to the final command
		const { command: commandName, subcommand: subcommandName } = getCommandParts(
			this.getString(context.commandName),
		)

		return {
			arguments: this.getArray(context.argument),
			commandName,
			description: this.getString(context.description),
			options: context.optionsSection ? this.visit(context.optionsSection) : undefined,
			subcommandName,
		}
	}

	optionsSection(context: any): Option[] {
		return context.sectionRow.map((entry: any) => this.visit(entry))
	}

	sectionRow(context: any): Option {
		return {
			aliases: this.getArray(context.alias),
			arguments: this.getArray(context.argument),
			description: this.getString(context.description, true),
			flags: this.getArray(context.flag),
		}
	}

	// Helpers

	private getString(context: any, clean = false): string | undefined {
		if (context === undefined) return undefined
		return context.map((entry: any) => (clean ? this.clean(entry.image) : entry.image)).join(' ')
	}

	private getArray(context: any): any[] | undefined {
		if (context === undefined) return undefined
		return context.map((entry: any) => entry.image)
	}

	private clean(text: string): string {
		// Remove brackets. default prefix, and trim
		return text.replaceAll(/^[\s[]*(default:)?\s*|[\s\]]*$/g, '')
	}
}

const visitor = new CliHelpToObjectVisitor()

export function helpStringToObject(helpString: string): ProgramInfo {
	// Lex
	const lexingResult = lexer.tokenize(helpString)
	if (lexingResult.errors.length > 0) {
		throw new Error(
			`Errors lexing CLI command: ${JSON.stringify(lexingResult.errors, undefined, 2)}`,
		)
	}

	// Parse
	parser.input = lexingResult.tokens
	const cst = parser.programHelp()
	if (parser.errors.length > 0) {
		throw new Error(
			`Errors parsing CLI command help text: ${JSON.stringify(parser.errors, undefined, 2)}`,
		)
	}

	// Visit + Objectify
	let programInfo: ProgramInfo | undefined
	try {
		programInfo = visitor.visit(cst) as ProgramInfo
	} catch (error) {
		if (error instanceof Error) {
			throw new TypeError(`Errors visiting CLI command help text: ${String(error)}`)
		}
	}

	if (programInfo === undefined) {
		throw new Error('Could not parse help string')
	}

	return programInfo
}
