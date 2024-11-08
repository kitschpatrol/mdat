import { helpStringToObject as helpStringToObjectMeow } from './meow'
import { helpStringToObject as helpStringToObjectYargs } from './yargs'

export type Command = {
	arguments?: string[]
	commandName?: string
	default?: boolean
	description?: string
	parentCommandName?: string
}

export type Positional = {
	arguments?: string[]
	defaultValue?: string
	description?: string
	required?: boolean
	type?: string
}

export type Option = {
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

export default {
	meow: helpStringToObjectMeow,
	yargs: helpStringToObjectYargs,
}

// Helper functions for the parsers

export function getCommandParts(wholeCommand: string | undefined): {
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
