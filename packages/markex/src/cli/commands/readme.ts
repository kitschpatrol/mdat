import { type ExpandAstOptions, expandString, presets } from '../../lib'
import log from '../../lib/log'
import { getReadmePath } from '../helpers'
import fs from 'node:fs/promises'

// Structuring these as proper Yargs CommandModules induced a type mess
// This ended up being cleaner and more portable

export async function readmeCommand(options: { meta: boolean; prefix: string; print: boolean }) {
	const { meta, prefix, print } = options

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
