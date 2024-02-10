import { type ProgramInfo } from './parsers/index'

/**
 * Simple case without subcommands
 * @param programInfo - a ProgramInfo object, likely output from helpCstToObject()
 * @returns - markdown string with help in table form, ready to be rendered
 */
export function helpObjectToMarkdown(
	programInfo: ProgramInfo,
	depthRemaining: number = Number.MAX_SAFE_INTEGER,
): string {
	const markdownLines = []

	// If there are multiple subcommands, and we're not at depth, then don't print all the options
	const isTopLevel = programInfo.subcommandName === undefined
	const hasMultipleSubcommands = programInfo.commands ? programInfo.commands.length > 1 : false
	const canRecurse = depthRemaining > 1
	const defaultCommand = programInfo.commands?.find((c) => c.default)
	const topLevelCommand = programInfo.commands?.find((c) => c.commandName === undefined)

	// TODO detect subcommands called directly?

	console.log(`isTopLevel: ${isTopLevel}`)
	console.log(`hasMultipleSubcommands: ${hasMultipleSubcommands}`)
	console.log(`canRecurse: ${canRecurse}`)

	// Title for the section
	const commandPrefix = isTopLevel ? 'Command' : 'Subcommand'
	const fullCommandName = `${programInfo.commandName}${programInfo.subcommandName ? ` ${programInfo.subcommandName}` : ''}`
	markdownLines.push(`#### ${commandPrefix}: \`${fullCommandName}\``)

	// Description, use the top level command if available,
	// otherwise the program description
	if (isTopLevel && topLevelCommand?.description) {
		markdownLines.push(topLevelCommand.description)

		// Prune the top level command from the commands list, since it's described above
		programInfo.commands = programInfo.commands?.filter((c) => c !== topLevelCommand)
	} else {
		markdownLines.push(programInfo.description)
	}

	if (hasMultipleSubcommands && canRecurse) {
		markdownLines.push(`This section lists top-level commands for \`${fullCommandName}\`.`)
	}

	if (defaultCommand) {
		markdownLines.push(
			`If no command is provided, \`${fullCommandName} ${defaultCommand.commandName}\` is run by default.`,
		)
	}

	markdownLines.push(
		`Usage:\n\`\`\`txt\n${fullCommandName}${topLevelCommand?.arguments ? ` ${topLevelCommand.arguments.join(' ')}` : `${programInfo.arguments ? ` ${programInfo.arguments.join(' ')}` : ''}}}`}\n\`\`\``,
	)

	// If there are multiple commands, and a default command, then don't print all the options
	// for the default command, instead list the commands and their descriptions in their own section
	// when we call help recursively
	const commandsOnly = canRecurse && hasMultipleSubcommands

	if (programInfo.positionals && !commandsOnly) {
		markdownLines.push(
			toMarkdownTable(
				['Positional Argument', 'Description', 'Type', 'Default'],
				programInfo.positionals.map((positional) => [
					positional.arguments ? [positional.arguments.map((a) => `\`${a}\``)].join(' ') : '',
					`${positional.description ?? ''}${positional.required ? ' _(Required.)_' : ' _(Optional.)_'}`,
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
					command.arguments ? command.arguments?.map((a) => `\`${a}\``).join(' ') : '',
					`${command.description ?? ''}${command.default ? ' _(Default command.)_' : ''}`,
				]),
			),
		)
	}

	if (programInfo.options && !commandsOnly) {
		markdownLines.push(
			toMarkdownTable(
				['Option', 'Alias', 'Argument', 'Description', 'Type', 'Default'],
				programInfo.options.map((option) => [
					option.flags ? option.flags.map((f) => `\`${f}\``).join(' ') : '',
					option.aliases ? option.aliases.map((a) => `\`${a}\``).join(' ') : '',
					option.arguments ? option.arguments.map((a) => `\`${a}\``).join(' ') : '',
					option.description ?? '',
					option.type ? `\`${option.type}\`` : '',
					// Don't print as code if it contains a space
					option.defaultValue
						? option.defaultValue.includes(' ')
							? option.defaultValue
							: `\`${option.defaultValue}\``
						: '',
				]),
			),
		)
	}

	if (commandsOnly) {
		markdownLines.push(`_See the sections below for more information on each subcommand._`)
	}

	return markdownLines.join('\n\n')
}

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
