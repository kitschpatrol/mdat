/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable new-cap */

import { type CstNode, CstParser, Lexer, createToken } from 'chevrotain'

// Define tokens
const newLine = createToken({ name: 'NewLine', pattern: /\n+/ })

const whiteSpace = createToken({
	group: Lexer.SKIPPED,
	name: 'WhiteSpace',
	pattern: /\s+/,
})

const positionalSection = createToken({
	name: 'PostionalSection',
	pattern: /Positionals:/,
})

const commandSection = createToken({
	name: 'CommandSection',
	pattern: /Commands:/,
})

const optionSection = createToken({
	name: 'OptionSection',
	pattern: /Options:/,
})

const flag = createToken({ name: 'Flag', pattern: /--[\w-_]+,*/ })

const alias = createToken({ name: 'Alias', pattern: /-[a-zA-z],*/ })

const type = createToken({
	name: 'type',
	pattern: /\[(boolean|string|array)]/,
})

const defaultInfo = createToken({
	name: 'defaultInfo',
	pattern: /\[default]/,
})

const choices = createToken({
	name: 'choices',
	pattern: /\[choices:\s.+?]/,
})

const defaultInfoDescription = createToken({
	name: 'defaultInfoDescription',
	pattern: /\[default:\s.+?]/,
})

const argumentMultiOptional = createToken({
	name: 'ArgumentMultiOptional',
	pattern: /<\S+\.\.>/,
})

const argumentSingleOptional = createToken({ name: 'ArgumentSingleOptional', pattern: /<(\S+?)>/ })

const argumentMultiRequired = createToken({
	name: 'ArgumentMultiRequired',
	pattern: /\[\S+\.\.]/,
})

const argumentSingleRequired = createToken({
	name: 'ArgumentSingleRequired',
	pattern: /\[\S+?]/,
})

const word = createToken({ name: 'Word', pattern: /\S+/ })

// Create lexer
const allTokens = [
	newLine,
	whiteSpace,
	positionalSection,
	commandSection,
	optionSection,
	flag,
	alias,
	type,
	defaultInfo,
	choices,
	defaultInfoDescription,
	argumentMultiOptional,
	argumentSingleOptional,
	argumentMultiRequired,
	argumentSingleRequired,
	word,
]
const cliLexer = new Lexer(allTokens)

// Create parser
class CliParser extends CstParser {
	constructor() {
		super(allTokens)
		this.performSelfAnalysis()
	}

	public programHelp = this.RULE('programHelp', () => {
		this.CONSUME1(word, { LABEL: 'programName' })

		this.OPTION(() => {
			this.CONSUME2(word, { LABEL: 'subCommandName' })
		})
		this.OPTION1(() => {
			this.SUBRULE(this.arguments)
		})
		this.CONSUME3(newLine)

		this.OPTION2(() => {
			this.SUBRULE(this.programDescription)
		})

		this.OPTION3(() => {
			this.SUBRULE(this.positionalSection)
		})

		this.OPTION4(() => {
			this.SUBRULE(this.commandSection)
		})
		this.OPTION5(() => {
			this.SUBRULE(this.optionSection)
		})
	})

	private readonly programDescription = this.RULE('programDescription', () => {
		this.MANY(() => {
			this.OR(
				allTokens
					.filter(
						(token) =>
							token !== commandSection && token !== optionSection && token !== positionalSection,
					)
					.map((token) => ({ ALT: () => this.CONSUME(token) })),
			)
		})
	})

	private readonly commandSection = this.RULE('commandSection', () => {
		this.CONSUME(commandSection)
		this.CONSUME(newLine)
		this.MANY(() => {
			this.SUBRULE(this.commandEntry)
		})
	})

	private readonly commandEntry = this.RULE('commandEntry', () => {
		this.CONSUME(word, { LABEL: 'programName' })

		// Optionally consume command name
		this.OPTION(() => {
			this.CONSUME2(word, { LABEL: 'commandName' })
		})

		this.OPTION1(() => {
			this.SUBRULE(this.arguments)
		})

		this.OPTION2(() => {
			this.SUBRULE(this.description)
		})

		this.OPTION3(() => {
			this.CONSUME(type)
		})

		this.OPTION4(() => {
			this.OR([
				{ ALT: () => this.CONSUME(defaultInfoDescription) },
				{ ALT: () => this.CONSUME(defaultInfo) },
			])
		})

		this.OPTION5(() => {
			this.CONSUME(newLine)
		})
	})

	private readonly positionalSection = this.RULE('positionalSection', () => {
		this.CONSUME(positionalSection)
		this.CONSUME(newLine)
		this.MANY(() => {
			this.SUBRULE(this.positionalEntry)
		})
	})

	private readonly positionalEntry = this.RULE('positionalEntry', () => {
		this.SUBRULE(this.arguments)

		this.OPTION2(() => {
			this.SUBRULE(this.description)
		})

		this.OPTION3(() => {
			this.CONSUME(type)
		})

		this.OPTION4(() => {
			this.OR([
				{ ALT: () => this.CONSUME(defaultInfoDescription) },
				{ ALT: () => this.CONSUME(defaultInfo) },
			])
		})

		this.OPTION5(() => {
			this.CONSUME(newLine)
		})
	})

	private readonly optionSection = this.RULE('optionSection', () => {
		this.CONSUME(optionSection)
		this.CONSUME(newLine)
		this.MANY(() => {
			this.SUBRULE(this.optionEntry)
		})
	})

	private readonly optionEntry = this.RULE('optionEntry', () => {
		this.AT_LEAST_ONE(() => {
			this.OR([{ ALT: () => this.CONSUME(alias) }, { ALT: () => this.CONSUME(flag) }])
		})

		this.OPTION2(() => {
			this.SUBRULE(this.description)
		})

		this.OPTION3(() => {
			this.CONSUME(type)
		})

		this.OPTION4(() => {
			this.CONSUME(choices)
		})

		this.OPTION5(() => {
			this.OR1([
				{ ALT: () => this.CONSUME(defaultInfoDescription) },
				{ ALT: () => this.CONSUME(defaultInfo) },
			])
		})

		this.OPTION6(() => {
			this.CONSUME(newLine)
		})
	})

	// Helpers
	private readonly arguments = this.RULE('arguments', () => {
		this.AT_LEAST_ONE(() => {
			this.OR([
				{ ALT: () => this.CONSUME(argumentMultiOptional) },
				{ ALT: () => this.CONSUME(argumentSingleOptional) },
				{ ALT: () => this.CONSUME(argumentMultiRequired) },
				{ ALT: () => this.CONSUME(argumentSingleRequired) },
			])
		})
	})

	private readonly description = this.RULE('description', () => {
		this.MANY(() => {
			this.CONSUME3(word)
		})
	})
}

// Exported for visitors
export const parser = new CliParser()

export function helpStringToCst(text: string): CstNode {
	const lexingResult = cliLexer.tokenize(text)
	parser.input = lexingResult.tokens
	const cst = parser.programHelp()

	if (parser.errors.length > 0) {
		throw new Error(
			`Errors parsing CLI command help text output: ${JSON.stringify(parser.errors, undefined, 2)}`,
		)
	}

	return cst
}
