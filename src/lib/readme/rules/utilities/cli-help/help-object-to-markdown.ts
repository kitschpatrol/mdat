/* eslint-disable unicorn/no-array-push-push */
import { type Command, type ProgramInfo } from './parsers/index'

type CommandContext = {
	canRecurse: boolean
	commandsOnly: boolean
	defaultCommand?: Command
	fullCommandName: string
	hasMultipleSubcommands: boolean
	isTopLevel: boolean
	topLevelCommand?: Command
}

export function helpObjectToMarkdown(
	programInfo: ProgramInfo,
	depthRemaining: number = Number.MAX_SAFE_INTEGER,
): string {
	const markdownLines: string[] = []
	const commandContext = determineCommandContext(programInfo, depthRemaining)

	markdownLines.push(formatSectionTitle(commandContext))

	// Note side-effects, might modify programInfo.commands
	markdownLines.push(formatDescription(programInfo, commandContext))

	if (commandContext.hasMultipleSubcommands && commandContext.canRecurse) {
		markdownLines.push(listTopLevelCommands(commandContext.fullCommandName))
	}

	if (commandContext.defaultCommand?.commandName !== undefined) {
		markdownLines.push(formatDefaultCommandNotice(commandContext))
	}

	markdownLines.push(formatUsage(programInfo, commandContext))

	if (programInfo.positionals && !commandContext.commandsOnly) {
		markdownLines.push(
			toMarkdownTable(
				['Positional Argument', 'Description', 'Type', 'Default'],
				programInfo.positionals.map((positional) => [
					positional.arguments ? [positional.arguments.map((a) => `\`${a}\``)].join(' ') : '',
					`${positional.description ?? ''}${positional.required === undefined ? '' : positional.required ? ' _(Required.)_' : ' _(Optional.)_'}`,
					positional.type ? `\`${positional.type}\`` : '',
					// Don't print as code if it contains a space
					positional.defaultValue
						? positional.defaultValue.includes(' ')
							? positional.defaultValue
							: `\`${positional.defaultValue}\``
						: '',
				]),
			),
		)
	}

	if (programInfo.commands) {
		markdownLines.push(
			toMarkdownTable(
				['Command', 'Argument', 'Description'],
				programInfo.commands.map((command) => [
					`\`${command.commandName ?? (command.default ? '[default]' : '')}\``,
					command.arguments
						? command.arguments?.map((argument) => `\`${argument}\``).join(' ')
						: '',
					`${command.description ?? ''}${command.default ? ' _(Default command.)_' : ''}`,
				]),
			),
		)
	}

	if (programInfo.options && !commandContext.commandsOnly) {
		markdownLines.push(
			toMarkdownTable(
				['Option', 'Argument', 'Description', 'Type', 'Default'],
				programInfo.options.map((option) => [
					// Combine flags and aliases
					option.flags !== undefined || option.aliases !== undefined
						? [...(option.flags ?? []), ...(option.aliases ?? [])]
								.map((flag) => `\`${flag}\``)
								.join('<br>')
						: '',

					option.arguments ? option.arguments.map((argument) => `\`${argument}\``).join(' ') : '',

					option.description ?? '',

					// Choices override types, since they're more specific
					// Type is kind of weird in relation to arguments...
					option.choices
						? option.choices.map((choice) => `\`${choice}\``).join(' ')
						: option.type
							? `\`${option.type}\``
							: '',

					// Don't print as code if it contains a space, unless it's a choice option
					option.defaultValue
						? option.defaultValue.includes(' ') && option.choices === undefined
							? option.defaultValue
							: `\`${option.defaultValue}\``
						: '',
				]),
			),
		)
	}

	if (commandContext.canRecurse && commandContext.hasMultipleSubcommands) {
		markdownLines.push('_See the sections below for more information on each subcommand._')
	}

	return markdownLines.join('\n\n')
}

function determineCommandContext(programInfo: ProgramInfo, depthRemaining: number): CommandContext {
	const isTopLevel = programInfo.subcommandName === undefined
	const hasMultipleSubcommands = programInfo.commands ? programInfo.commands.length > 1 : false
	const canRecurse = depthRemaining > 1
	const defaultCommand = programInfo.commands?.find((command) => command.default)
	const topLevelCommand = programInfo.commands?.find((command) => command.commandName === undefined)
	const fullCommandName = `${programInfo.commandName}${programInfo.subcommandName ? ` ${programInfo.subcommandName}` : ''}`
	const commandsOnly =
		canRecurse && hasMultipleSubcommands && defaultCommand?.commandName !== undefined

	return {
		canRecurse,
		commandsOnly,
		defaultCommand,
		fullCommandName,
		hasMultipleSubcommands,
		isTopLevel,
		topLevelCommand,
	}
}

// Formatters

function formatSectionTitle(context: CommandContext): string {
	const commandPrefix = context.isTopLevel ? 'Command' : 'Subcommand'
	return `#### ${commandPrefix}: \`${context.fullCommandName}\``
}

function formatDescription(programInfo: ProgramInfo, context: CommandContext): string {
	if (context.isTopLevel && context.topLevelCommand?.description) {
		// Prune the top level command from the commands list, since it's described above
		programInfo.commands = programInfo.commands?.filter((c) => c !== context.topLevelCommand)
		return context.topLevelCommand.description
	}

	return programInfo.description ?? ''
}

function listTopLevelCommands(fullCommandName: string): string {
	return `This section lists top-level commands for \`${fullCommandName}\`.`
}

function formatDefaultCommandNotice(context: CommandContext): string {
	return `If no command is provided, \`${context.defaultCommand?.parentCommandName} ${context.defaultCommand?.commandName}\` is run by default.`
}

function formatUsage(programInfo: ProgramInfo, context: CommandContext): string {
	const usageArguments = context.topLevelCommand?.arguments
		? ` ${context.topLevelCommand.arguments.join(' ')}`
		: `${programInfo.arguments ? ` ${programInfo.arguments.join(' ')}` : ''}`
	return `Usage:\n\n\`\`\`txt\n${context.fullCommandName}${usageArguments}\n\`\`\``
}

// Helpers

function toMarkdownTable(header: string[], rows: string[][]): string {
	// Clean empty columns
	const emptyColumnsIndexes = findEmptyColumns(rows)
	header = header.filter((_, index) => !emptyColumnsIndexes.includes(index))
	rows = rows.map((row) => row.filter((_, index) => !emptyColumnsIndexes.includes(index)))

	let markdown = ''
	markdown += `| ${header.join(' | ')} |\n`
	markdown += `| ${header.map(() => '---').join(' | ')} |\n`
	for (const row of rows) {
		markdown += `| ${row.join(' | ')} |\n`
	}

	return markdown
}

function findEmptyColumns(rows: string[][]): number[] {
	const emptyColumnsIndexes: number[] = []

	// Assume all rows have the same number of columns as the first row
	const numberColumns = rows[0]?.length || 0

	for (let columnIndex = 0; columnIndex < numberColumns; columnIndex++) {
		let allEmpty = true

		for (const row of rows) {
			if (row[columnIndex] !== '') {
				allEmpty = false
				break
			}
		}

		if (allEmpty) {
			emptyColumnsIndexes.push(columnIndex)
		}
	}

	return emptyColumnsIndexes
}
