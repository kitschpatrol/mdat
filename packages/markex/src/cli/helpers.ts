import { type ExpandStringOptions, expandString } from '../lib'
import log from '../lib/log'
import { findUp } from 'find-up'
import fs from 'node:fs/promises'
import path from 'node:path'
import { packageDirectory } from 'pkg-dir'

export async function getReadmePath(): Promise<string> {
	log.info(`Searching for package directory...`)

	// First, check for a readme in the package directory
	const thePackageDirectory = await packageDirectory()
	if (thePackageDirectory !== undefined) {
		log.info(`Found package directory: "${thePackageDirectory}"`)
		const files = await fs.readdir(thePackageDirectory)
		const readmeFile = files.find((file) => file.toLowerCase() === 'readme.md')
		if (readmeFile !== undefined) {
			return path.join(thePackageDirectory, readmeFile)
		}

		log.warn(`Readme not found in package directory, searching up for readme...`)
	}

	// FindUp is case-insensitive
	const closestReadme = await findUp('readme.md', {
		type: 'file',
	})

	if (closestReadme !== undefined) {
		log.info(`Found closest readme at "${closestReadme}"`)
		return closestReadme
	}

	throw new Error('No readme found')
}

export type ExpandFileOptions = ExpandStringOptions & {
	name?: string
	output?: string
}
export async function expandFile(
	sourcePath: string,
	options: ExpandFileOptions,
): Promise<{ expandedFile: string; report: string[] }> {
	const { name, output, ...rest } = options

	const markdown = await fs.readFile(sourcePath, 'utf8')
	const { expandedString, report } = await expandString(markdown, rest)
	const outputPath = output ?? sourcePath
	console.log(`TODO name: ${name}`)
	await fs.writeFile(outputPath, expandedString)

	return {
		expandedFile: outputPath,
		report,
	}
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
