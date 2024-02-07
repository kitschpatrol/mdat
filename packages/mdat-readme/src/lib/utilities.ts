import { findUp } from 'find-up'
import { packageUp } from 'package-up'
import { packageDirectory } from 'pkg-dir'
import { log } from 'remark-mdat'

/**
 * Searches for a readme file in the following order:
 * 1. Searches the current working directly for readme.md
 * 2. If there's no readme.md in the current directory, search up to the closest package directory
 * 3. Give up and return undefined if no readme is found
 *
 * @returns The path to the readme file
 * @throws If no readme is found
 */
export async function findReadme(): Promise<string | undefined> {
	log.info(`Searching for package directory...`)
	// Treat the closest package directory, if available, as the "find up" limit
	const searchCeilingDirectory = (await packageDirectory()) ?? process.cwd()

	// FindUp is case-insensitive
	const closestReadme = await findUp('readme.md', {
		stopAt: searchCeilingDirectory,
		type: 'file',
	})

	if (closestReadme !== undefined) {
		log.info(`Found closest readme at "${closestReadme}"`)
		return closestReadme
	}

	throw new Error('No readme found')
}

export async function findPackage(): Promise<string> {
	const packageFile = await packageUp()
	if (packageFile === undefined) {
		throw new Error('No package.json found')
	}

	return packageFile
}
