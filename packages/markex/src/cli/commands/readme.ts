import { type ExpandAstOptions, expandString, presets } from '../../lib'
import log from '../../lib/log'
import { expandFile, getReadmePath } from '../helpers'
import fs from 'node:fs/promises'
import type { ArgumentsCamelCase, CommandModule, Options } from 'yargs'

export type CommandArguments = {
	meta: boolean
	prefix: string
	print: boolean
	verbose: boolean
} & Options

// Yargs command class approach via:
// https://gist.github.com/dsmrt/cf1812cb657738e83d76ba13ca28dbde
export class Readme<U extends CommandArguments>
	implements CommandModule<Record<string, unknown>, U>
{
	public command = 'readme'
	public describe = 'description to come'

	public handler = async (argv: ArgumentsCamelCase<U>) => {
		const { meta = true, prefix, print, verbose } = argv
		log.verbose = verbose

		const expandOptions: ExpandAstOptions = {
			expansionRules: presets.readme,
			keywordPrefix: prefix,
			meta,
		}

		// First, check for a readme in the package directory
		const readmePath = await getReadmePath()
		const readmeString = await fs.readFile(readmePath, 'utf8')
		const { expandedString, report } = await expandString(readmeString, expandOptions)

		if (!print) {
			await fs.writeFile(readmePath, expandedString)
		}

		log.info('[readme]', `Expanded:`)
		log.info('[readme]', `  From: ${readmePath}`)
		log.info('[readme]', `  To:   ${print ? 'stdout' : readmePath}`)
		log.info('[readme]', '  Replaced:')
		for (const [i, line] of report.entries()) {
			log.info('[readme]', `    ${i + 1}. ${line}`)
		}

		if (print) {
			process.stdout.write(readmeString ?? '')
		}
	}
}
