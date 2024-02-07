/* eslint-disable unicorn/no-array-push-push */
import { type ProgramInfo } from './help-cst-to-object'

/**
 * Simple case without subcommands
 * @param programInfo - a ProgramInfo object, likely output from helpCstToObject()
 * @returns - markdown string with help in table form, ready to be rendered
 */
export function helpObjectToMarkdown(programInfo: ProgramInfo, commandsOnly = false): string {
	const markdownLines = []

	if (commandsOnly) {
		// Special handling for "commands only" view
		const defaultCommand = programInfo.commands?.find((c) => c.default)
		const topLevelCommand = programInfo.commands?.find((c) => c.commandName === undefined)

		markdownLines.push(`#### Command: \`${programInfo.commandName}\``)

		if (topLevelCommand?.description) {
			markdownLines.push(topLevelCommand?.description)
		}

		markdownLines.push(`This section lists top-level commands for \`${programInfo.commandName}\`.`)

		if (defaultCommand) {
			markdownLines.push(
				`If no command is provided, \`${defaultCommand.parentCommandName} ${defaultCommand.commandName}\` is run by default.`,
			)
		}

		markdownLines.push('Usage:')
		if (topLevelCommand) {
			markdownLines.push(
				`\`\`\`sh\n${topLevelCommand.parentCommandName}${topLevelCommand.arguments ? ` ${topLevelCommand.arguments.join(' ')}` : ''}\n\`\`\``,
			)
		}

		// Prune the top level command from the commands list, since it's described above
		programInfo.commands = programInfo.commands?.filter((c) => c !== topLevelCommand)
	} else {
		markdownLines.push(
			`#### Subcommand: \`${programInfo.commandName} ${programInfo.subcommandName}\``,
		)
		markdownLines.push(programInfo.description)
		markdownLines.push('Usage:')
		markdownLines.push(
			`\`\`\`sh\n${programInfo.commandName} ${programInfo.subcommandName}${programInfo.arguments ? ` ${programInfo.arguments.join(' ')}` : ''}\n\`\`\``,
		)
	}

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
