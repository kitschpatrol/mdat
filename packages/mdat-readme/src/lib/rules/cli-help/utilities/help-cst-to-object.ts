import { type CstNode } from 'chevrotain'
import { parser } from './help-string-to-cst'

type Command = {
	name?: string
	arguments?: string[]
	description?: string
	default?: boolean
}

type Positional = {
	arguments?: string[]
	description?: string
	type?: string
	defaultValue?: string
}

type Option = {
	aliases?: string[]
	flags?: string[]
	choices?: string[]
	arguments?: string[]
	description?: string
	type?: string
	defaultValue?: string
}

export type ProgramInfo = {
	name: string
	subCommandName?: string // e.g. calling help on a subcommand
	arguments?: string[]
	positionals?: Positional[]
	description?: string
	commands?: Command[]
	options?: Option[]
}

class CliHelpToObjectVisitor extends parser.getBaseCstVisitorConstructor() {
	constructor() {
		super()
		this.validateVisitor()
	}

	private joinWords(ctx: any): string {
		return ctx.Word.map((w: any) => w.image).join(' ')
	}

	programHelp(ctx: any): ProgramInfo {
		return {
			name: ctx.programName[0].image,
			subCommandName: ctx.subCommandName ? ctx.subCommandName[0].image : undefined,
			description: ctx.programDescription ? this.visit(ctx.programDescription[0]) : undefined,
			arguments: ctx.arguments ? this.visit(ctx.arguments[0]) : undefined,
			positionals: ctx.positionalSection ? this.visit(ctx.positionalSection[0]) : undefined,
			commands: ctx.commandSection ? this.visit(ctx.commandSection[0]) : undefined,
			options: ctx.optionSection ? this.visit(ctx.optionSection[0]) : undefined,
		}
	}

	programDescription(ctx: any): string {
		return this.joinWords(ctx)
	}

	arguments(ctx: any): string[] {
		// return (Object.values(ctx).map((entry) => { return {name: entry.image}})
		return Object.values(ctx)
			.flat()
			.map((entry: any) => entry.image)
	}

	commandSection(ctx: any): Command[] {
		return ctx.commandEntry.map((entry: any) => {
			return this.visit(entry)
		})
	}

	commandEntry(ctx: any): Command {
		return {
			name: ctx.commandName ? ctx.commandName[0].image : undefined,
			description: ctx.description ? this.visit(ctx.description[0]) : undefined,
			default: ctx.defaultInfo ? true : undefined,
			arguments: ctx.arguments ? this.visit(ctx.arguments[0]) : undefined,
		}
	}

	description(ctx: any): string {
		return this.joinWords(ctx)
	}

	optionSection(ctx: any): Option[] {
		return ctx.optionEntry.map((entry: any) => {
			return this.visit(entry)
		})
	}

	optionEntry(ctx: any): Option {
		return {
			aliases: ctx.Alias ? ctx.Alias.map((a: any) => clean(a.image)) : undefined,
			flags: ctx.Flag ? ctx.Flag.map((f: any) => clean(f.image)) : undefined,
			type: ctx.type ? clean(ctx.type[0].image) : undefined,
			defaultValue: ctx.defaultInfoDescription
				? cleanDefaultValue(ctx.defaultInfoDescription[0].image)
				: undefined,
			description: ctx.description[0] ? this.visit(ctx.description[0]) : undefined,
			arguments: ctx.arguments ? this.visit(ctx.arguments[0]) : undefined,
			choices: ctx.choices ? splitChoices(ctx.choices[0].image) : undefined,
		}
	}

	positionalSection(ctx: any): Positional[] {
		return ctx.positionalEntry.map((entry: any) => {
			return this.visit(entry)
		})
	}

	positionalEntry(ctx: any): Positional {
		return {
			arguments: ctx.arguments ? this.visit(ctx.arguments[0]) : undefined,
			defaultValue: ctx.defaultInfoDescription
				? cleanDefaultValue(ctx.defaultInfoDescription[0].image)
				: undefined,
			description: ctx.description[0] ? this.visit(ctx.description[0]) : undefined,
			type: ctx.type ? clean(ctx.type[0].image) : undefined,
		}
	}
}

const visitor = new CliHelpToObjectVisitor()

export function helpCstToObject(cst: CstNode): ProgramInfo {
	return visitor.visit(cst)
}

function clean(text: string): string {
	// remove brackets and commas from the outside of the text
	return text.replace(/^[\[,\s]*|[,\s\]]*$/g, '')
}

function cleanDefaultValue(text: string): string {
	// remove brackets and commas from the outside of the text
	return clean(text.replace(/^\[default:\s/g, ''))
}

function splitChoices(text: string): string[] {
	// remove brackets and commas from the outside of the text
	return clean(text.replace(/^\[choices:\s/g, '')).split(', ')
}
