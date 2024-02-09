/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable new-cap */

import { type CstNode, CstParser, type ILexingResult, Lexer, createToken } from 'chevrotain'

const flag = createToken({ name: 'flag', pattern: /--[\w-_]+/ })
const alias = createToken({ name: 'alias', pattern: /-[A-Za-z]/ })
const comma = createToken({
	group: Lexer.SKIPPED,
	name: 'comma',
	pattern: /,/,
})
const word = createToken({ name: 'word', pattern: /\S+/ })
const argument = createToken({ name: 'argument', pattern: /<\S+>|\[\S+]/ })
const type = createToken({
	name: 'type',
	pattern: /\[(boolean|string|array)]/,
})

const defaultInfo = createToken({
	name: 'defaultInfo',
	pattern: /\[default]/,
})

const required = createToken({
	name: 'required',
	pattern: /\[required]/,
})

const defaultInfoDescription = createToken({
	name: 'defaultInfoDescription',
	pattern: /\[default:\s.+?]/,
})

const choices = createToken({
	name: 'choices',
	pattern: /\[choices:\s.+?]/,
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
	pattern: /Options:\n/,
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
const cliLexer = new Lexer({
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

// Exported for testing
export function tokenizeHelp(text: string): ILexingResult {
	return cliLexer.tokenize(text.trim())
}

// Create parser
class CliParser extends CstParser {
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

	private readonly positionalsSection = this.RULE('positionalsSection', () => {
		this.CONSUME(startPositionalsSection)
		this.MANY(() => {
			this.SUBRULE(this.sectionRow)
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

	constructor() {
		super(allTokens)
		this.performSelfAnalysis()
	}
}

// Exported for visitors
export const parser = new CliParser()

export function helpStringToCst(text: string): CstNode {
	const lexingResult = tokenizeHelp(text)
	parser.input = lexingResult.tokens
	const cst = parser.programHelp()
	if (parser.errors.length > 0) {
		throw new Error(
			`Errors parsing CLI command help text output: ${JSON.stringify(parser.errors, undefined, 2)}`,
		)
	}

	return cst
}
