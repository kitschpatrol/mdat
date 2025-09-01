import { findUp } from 'find-up'
import { packageDirectory } from 'package-directory'
import { log } from 'remark-mdat'

/**
 * Searches for a readme file in the following order:
 * 1. Searches the current working directly for readme.md
 * 2. If there's no readme.md in the current directory, search up to the closest package directory
 * 3. Give up and return undefined if no readme is found
 * @returns The path to the readme file or undefined if not found
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

	return undefined
}

/**
 * Searches up for a readme.md file
 * @see `findReadme()` for more details on the search process.
 * @returns The path to the readme file
 * @throws if no readme is found
 */
export async function findReadmeThrows(): Promise<string> {
	const readme = await findReadme()
	if (readme === undefined) {
		throw new Error('No readme found')
	}

	return readme
}
