import { findUp } from 'find-up'
import path from 'node:path'
import { packageUp } from 'package-up'
import { packageDirectory } from 'pkg-dir'
import { type NormalizedPackageJson, readPackage } from 'read-pkg'
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

// Decadent
// function getCasePermutations(input: string, index = 0, current = ''): string[] {
// 	if (index === input.length) {
// 		return [current]
// 	}

// 	const char = input[index]
// 	const nextPermutations = getCasePermutations(input, index + 1, current + char)

// 	if (char.toLowerCase() !== char.toUpperCase()) {
// 		const upperPermutations = getCasePermutations(input, index + 1, current + char.toUpperCase())
// 		return [...nextPermutations, ...upperPermutations]
// 	}

// 	return nextPermutations
// }

export async function findPackage(): Promise<string> {
	const packageFile = await packageUp()
	if (packageFile === undefined) {
		throw new Error('No package.json found')
	}

	return packageFile
}

// Careful, global stuff here...
// For use by rules, allows override of package.json
// via cli options
let packageJson: NormalizedPackageJson | undefined
let packageFile: string | undefined

export function setPackageFile(path: string) {
	packageFile = path
}

// Load as package json only as needed, memoize
export async function getPackageJson(): Promise<NormalizedPackageJson> {
	// Find package as needed
	packageFile ??= await findPackage()
	packageJson ??= await readPackage({ cwd: path.dirname(packageFile) })

	if (packageJson === undefined) {
		throw new Error('No package.json found')
	}

	return packageJson
}

// Sometimes rules need the path to the package.json
export async function getPackagePath(): Promise<string> {
	// Find package as needed
	packageFile ??= await findPackage()
	return packageFile
}
