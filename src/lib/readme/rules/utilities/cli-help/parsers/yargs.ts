// Regrettable use of any in this file due to untyped data from the Chevrotain parser.

/* eslint-disable ts/no-unsafe-assignment */
/* eslint-disable ts/no-unsafe-argument */
/* eslint-disable ts/no-unsafe-call */
/* eslint-disable ts/no-unsafe-return */
/* eslint-disable ts/no-explicit-any */
/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable new-cap */
/* eslint-disable ts/naming-convention */

import { createToken, CstParser, Lexer } from 'chevrotain'
import type { Command, Option, Positional, ProgramInfo } from './index'
import { getCommandParts } from './index'

// Lexer ----------------------------------------------------------------------

const flag = createToken({ name: 'flag', pattern: /--[\w-]+/ })
const alias = createToken({ name: 'alias', pattern: /-[A-Z]/i })
const comma = createToken({
	group: Lexer.SKIPPED,
	name: 'comma',
	pattern: /,/,
})
const word = createToken({ name: 'word', pattern: /\S+/ })
const argument = createToken({ name: 'argument', pattern: /<\S+>|\[\S+\]/ })
const type = createToken({
	name: 'type',
	pattern: /\[(boolean|string|array|number)\]/,
})

const defaultInfo = createToken({
	name: 'defaultInfo',
	pattern: /\[default\]/,
})

const required = createToken({
	name: 'required',
	pattern: /\[required\]/,
})

const defaultInfoDescription = createToken({
	name: 'defaultInfoDescription',
	pattern: /\[default:\s.+\]/,
	// Hmm
	// pattern: /\[default:\s.+?]/,
})

const choices = createToken({
	name: 'choices',
	pattern: /\[choices:\s.+?\]/,
})

const whiteSpace = createToken({
	group: Lexer.SKIPPED,
	name: 'whiteSpace',
	pattern: /\s/,
})

const startProgramDescription = createToken({
	group: Lexer.SKIPPED,
	name: 'startProgramDescription',
	pattern: /\n\n/,
	push_mode: 'PROGRAM_DESCRIPTION_MODE',
})

const programDescription = createToken({
	name: 'programDescription',
	pattern: /.+/,
})

const endProgramDescription = createToken({
	group: Lexer.SKIPPED,
	name: 'endProgramDescription',
	pattern: /\n\n/,
	pop_mode: true,
})

const startOptionsSection = createToken({
	name: 'startOptionsSection',
	pattern: /Options:?\n/,
	push_mode: 'SECTION_MODE',
})

const startPositionalsSection = createToken({
	name: 'startPositionalsSection',
	pattern: /Positionals:\n/,
	push_mode: 'SECTION_MODE',
})

const startCommandsSection = createToken({
	name: 'startCommandsSection',
	pattern: /Commands:\n/,
	push_mode: 'SECTION_MODE',
})

const startRow = createToken({
	name: 'startRow',
	pattern: / {2,}/,
	push_mode: 'ROW_MODE',
})

const rowDescription = createToken({
	name: 'rowDescription',
	pattern: / {2}\w.+ {2}/,
})

const rowDescriptionTerminal = createToken({
	name: 'rowDescriptionTerminal',
	pattern: / {2}\w.+/,
})

const endRow = createToken({
	group: Lexer.SKIPPED,
	name: 'endRow',
	pattern: /\n/,
	pop_mode: true,
})

const endSection = createToken({
	group: Lexer.SKIPPED,
	name: 'endSection',
	pattern: /\n+/,
	pop_mode: true,
})

// Create lexer
const lexer = new Lexer({
	defaultMode: 'DEFAULT_MODE',
	modes: {
		DEFAULT_MODE: [
			startOptionsSection,
			startPositionalsSection,
			startCommandsSection,
			startProgramDescription,
			argument,
			word,
			whiteSpace,
		],
		PROGRAM_DESCRIPTION_MODE: [endProgramDescription, programDescription],
		ROW_MODE: [
			endRow,
			comma,
			type,
			rowDescription,
			rowDescriptionTerminal,
			defaultInfoDescription,
			defaultInfo,
			required,
			choices,
			flag,
			alias,
			argument,
			word,
			whiteSpace,
		],
		SECTION_MODE: [startRow, endSection],
	},
})

const allTokens = [
	flag,
	alias,
	comma,
	word,
	argument,
	type,
	defaultInfo,
	required,
	defaultInfoDescription,
	choices,
	whiteSpace,
	startProgramDescription,
	programDescription,
	endProgramDescription,
	startOptionsSection,
	startPositionalsSection,
	startCommandsSection,
	startRow,
	rowDescription,
	rowDescriptionTerminal,
	endRow,
	endSection,
]

// Parser ---------------------------------------------------------------------

// Create parser
class CliParser extends CstParser {
	private readonly sectionRow = this.RULE('sectionRow', () => {
		this.CONSUME(startRow)

		this.OPTION(() => {
			this.CONSUME(word, { LABEL: 'parentCommandName' })
		})
		this.MANY(() => {
			this.CONSUME1(word, { LABEL: 'commandName' })
		})
		this.MANY1(() => {
			this.OR([
				{ ALT: () => this.CONSUME(argument) },
				{ ALT: () => this.CONSUME(alias) },
				{ ALT: () => this.CONSUME(flag) },
				{ ALT: () => this.CONSUME(rowDescription, { LABEL: 'description' }) },
				{ ALT: () => this.CONSUME(rowDescriptionTerminal, { LABEL: 'description' }) },
				{ ALT: () => this.CONSUME(type) },
				{ ALT: () => this.CONSUME(required) },
				{ ALT: () => this.CONSUME(defaultInfoDescription) },
				{ ALT: () => this.CONSUME(defaultInfo) },
				{ ALT: () => this.CONSUME(choices) },
			])
		})
	})

	private readonly commandsSection = this.RULE('commandsSection', () => {
		this.CONSUME(startCommandsSection)
		this.MANY1(() => {
			this.SUBRULE1(this.sectionRow)
		})
	})

	private readonly optionsSection = this.RULE('optionsSection', () => {
		this.CONSUME(startOptionsSection)
		this.MANY2(() => {
			this.SUBRULE2(this.sectionRow)
		})
	})

	private readonly positionalsSection = this.RULE('positionalsSection', () => {
		this.CONSUME(startPositionalsSection)
		this.MANY(() => {
			this.SUBRULE(this.sectionRow)
		})
	})

	public programHelp = this.RULE('programHelp', () => {
		this.AT_LEAST_ONE(() => {
			this.CONSUME(word, { LABEL: 'commandName' })
		})
		this.MANY1(() => {
			this.CONSUME(argument)
		})
		this.OPTION(() => {
			this.CONSUME(programDescription, { LABEL: 'description' })
		})
		this.OPTION1(() => {
			this.SUBRULE(this.commandsSection)
		})
		this.OPTION2(() => {
			this.SUBRULE(this.positionalsSection)
		})
		this.OPTION3(() => {
			this.SUBRULE(this.optionsSection)
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

	commandsSection(context: any): Command[] {
		return context.sectionRow.map((entry: any) => this.visit(entry))
	}

	optionsSection(context: any): Option[] {
		return context.sectionRow.map((entry: any) => this.visit(entry))
	}

	positionalsSection(context: any): Positional[] {
		// Some extra surgery to move parent command to argument names
		return context.sectionRow.map((entry: any) =>
			this.positionalParentCommandToArguments(this.visit(entry)),
		)
	}

	programHelp(context: any): ProgramInfo {
		// "commandName" includes everything up to the final command
		const { command: commandName, subcommand: subcommandName } = getCommandParts(
			this.getString(context.commandName),
		)

		return {
			arguments: this.getArray(context.argument),
			commandName,
			commands: context.commandsSection ? this.visit(context.commandsSection) : undefined,
			description: this.getString(context.description),
			options: context.optionsSection ? this.visit(context.optionsSection) : undefined,
			positionals: context.positionalsSection ? this.visit(context.positionalsSection) : undefined,
			subcommandName,
		}
	}

	sectionRow(context: any): Command | Option | Positional {
		return {
			aliases: this.getArray(context.alias),
			arguments: this.getArray(context.argument),
			choices: this.splitChoices(this.getString(context.choices)),
			commandName: this.getString(context.commandName),
			default: context.defaultInfo ? true : undefined,
			defaultValue: this.getString(context.defaultInfoDescription, true),
			description: this.getString(context.description, true),
			flags: this.getArray(context.flag),
			parentCommandName: this.getString(context.parentCommandName),
			required: context.required ? true : undefined,
			type: this.getString(context.type, true),
		}
	}

	private clean(text: string): string {
		// Remove brackets. default prefix, and trim
		// Special case for `array` type positionals like `[default: ["readme.md"]]`
		if (text.endsWith(']]')) {
			// eslint-disable-next-line regexp/no-unused-capturing-group
			return text.replaceAll(/(^\[default:\s*)|(\]$)/g, '')
		}

		// eslint-disable-next-line regexp/no-unused-capturing-group
		return text.replaceAll(/^[\s[]*(default:)?\s*|[\s\]]*$/g, '')
	}

	private getArray(context: any): any[] | undefined {
		if (context === undefined) return undefined
		return context.map((entry: any) => entry.image)
	}

	private getString(context: any, clean = false): string | undefined {
		if (context === undefined) return undefined

		return context.map((entry: any) => (clean ? this.clean(entry.image) : entry.image)).join(' ')
	}

	// Helpers
	private positionalParentCommandToArguments(object: Command & Option & Positional): Positional {
		const { arguments: theArguments, parentCommandName, ...rest } = object
		if (parentCommandName === undefined) return object
		return {
			arguments: [parentCommandName, ...(theArguments ?? [])],
			...rest,
		}
	}

	private splitChoices(text: string | undefined): string[] | undefined {
		if (text === undefined) return undefined
		// Remove brackets and commas from the outside of the text
		return this.clean(text.replaceAll(/^\[choices:\s/g, '')).split(', ')
	}
}

const visitor = new CliHelpToObjectVisitor()

/**
 * Converts am unstructured help string emitted from a CLI tool built with the
 * `Yargs` CLI library and turn it into a structured POJO describing the
 * command.
 */
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
