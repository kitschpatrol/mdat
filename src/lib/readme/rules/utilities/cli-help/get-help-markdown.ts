import { execaCommand } from 'execa'
import { log } from 'remark-mdat'
import { helpObjectToMarkdown } from './help-object-to-markdown'
import { helpStringToObject } from './help-string-to-object'
import { type ProgramInfo } from './parsers/index'

/**
 * Get help output from a CLI command and return it as markdown
 */
export async function getHelpMarkdown(
	cliCommand: string,
	helpFlag = '--help',
	depth?: number,
): Promise<string> {
	// Run the CLI help command
	const resolvedCommand = `${cliCommand} ${helpFlag}`

	// Throws
	const rawHelpString = await getHelpString(resolvedCommand)

	// Attempt to parse typical Yargs help output
	const programInfo = helpStringToObject(rawHelpString)

	// Fall back to basic code fence output if parsing fails
	if (programInfo === undefined) {
		log.warn(`Falling back to basic cli help text output.`)
		return renderHelpMarkdownBasic(rawHelpString)
	}

	// This might recurse back to getHelpMarkdown if there are subcommands
	return renderHelpMarkdownObject(
		cliCommand,
		helpFlag,
		depth ?? Number.MAX_SAFE_INTEGER,
		programInfo,
	)
}

async function renderHelpMarkdownObject(
	cliCommand: string,
	helpFlag: string,
	depth: number,
	programInfo: ProgramInfo,
): Promise<string> {
	if (depth <= 0) {
		log.info(`Max CLI command help depth reached, stopping recursion`)
		return ''
	}

	let markdown = helpObjectToMarkdown(programInfo, depth)

	// TODO solve the recursion issue for real
	const baseCommand = cliCommand.split(' ')[0]

	// Check for subcommands
	if (programInfo.commands) {
		for (const command of programInfo.commands) {
			if (!command.parentCommandName || !command.commandName) continue
			const subCommandHelp = await getHelpMarkdown(
				`${baseCommand} ${command.commandName}`,
				helpFlag,
				depth - 1,
			)
			// Recursion limit returns empty string
			if (subCommandHelp === '') return markdown

			markdown += `\n\n${subCommandHelp}`
		}
	}

	return markdown
}

// Exported for testing
export function renderHelpMarkdownBasic(rawHelpString: string): string {
	return `\`\`\`txt\n${rawHelpString}\n\`\`\``
}

/**
 * Run the CLI help command and return the output, throw if there's no output
 * @throws
 * @returns the full help string from the resolved command
 */
async function getHelpString(resolvedCommand: string): Promise<string> {
	let rawHelpString: string | undefined
	try {
		const { stderr, stdout } = await execaCommand(resolvedCommand)
		rawHelpString = stdout

		if (rawHelpString === undefined || rawHelpString === '') {
			rawHelpString = stderr
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new TypeError(
				`Error running CLI help command: "${resolvedCommand}"\n${error.message}\n`,
			)
		}
	}

	if (rawHelpString === undefined || rawHelpString === '') {
		throw new Error(`No result from running CLI help command: "${resolvedCommand}"\n`)
	}

	return rawHelpString
}
