// Regrettable use of any in this file due to untyped data from the Chevrotain parser.

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { parser } from './help-string-to-cst'
import { type CstNode } from 'chevrotain'

type Command = {
	arguments?: string[]
	commandName?: string
	default?: boolean
	description?: string
	parentCommandName?: string
}

type Positional = {
	arguments?: string[]
	defaultValue?: string
	description?: string
	required?: boolean
	type?: string
}

type Option = {
	aliases?: string[]
	arguments?: string[]
	choices?: string[]
	defaultValue?: string
	description?: string
	flags?: string[]
	type?: string
}

export type ProgramInfo = {
	arguments?: string[]
	commandName: string
	commands?: Command[]
	description?: string
	options?: Option[]
	positionals?: Positional[]
	subcommandName?: string // E.g. calling help on a subcommand
}

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
			commands: context.commandsSection ? this.visit(context.commandsSection) : undefined,
			description: this.getString(context.description),
			options: context.optionsSection ? this.visit(context.optionsSection) : undefined,
			positionals: context.positionalsSection ? this.visit(context.positionalsSection) : undefined,
			subcommandName,
		}
	}

	positionalsSection(context: any): Positional[] {
		// Some extra surgery to move parent command to argument names
		return context.sectionRow.map((entry: any) =>
			this.positionalParentCommandToArguments(this.visit(entry)),
		)
	}

	commandsSection(context: any): Command[] {
		return context.sectionRow.map((entry: any) => this.visit(entry))
	}

	optionsSection(context: any): Option[] {
		return context.sectionRow.map((entry: any) => this.visit(entry))
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

	// Helpers
	private positionalParentCommandToArguments(object: Command & Positional & Option): Positional {
		const { arguments: theArguments, parentCommandName, ...rest } = object
		if (parentCommandName === undefined) return object
		return {
			arguments: [parentCommandName, ...(theArguments ?? [])],
			...rest,
		}
	}

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

	private splitChoices(text: string | undefined): string[] | undefined {
		if (text === undefined) return undefined
		// Remove brackets and commas from the outside of the text
		return this.clean(text.replaceAll(/^\[choices:\s/g, '')).split(', ')
	}
}

const visitor = new CliHelpToObjectVisitor()

export function helpCstToObject(cst: CstNode): ProgramInfo {
	return visitor.visit(cst) as ProgramInfo
}

function getCommandParts(wholeCommand: string | undefined): {
	command: string
	subcommand: string | undefined
} {
	if (wholeCommand === undefined) {
		throw new Error('Could not find "commandName" entry in help')
	}

	const parts = wholeCommand.split(' ')

	// Check for invalid input: non-array or empty array
	if (parts.length === 0 && wholeCommand === undefined) {
		throw new Error('Could not find "commandName" entry in help')
	}

	if (parts.length === 1) {
		return { command: parts[0], subcommand: undefined }
	}

	const subcommand = parts.at(-1) // Get the last element
	const command = parts.slice(0, -1).join(' ') // Get everything up to the last element
	return { command, subcommand }
}
