import rulePresets from './rules'
import { findUp } from 'find-up'
import {
	type CheckFileReport,
	type CheckOptions,
	type ExpandFileOptions,
	type ExpandFileReport,
	checkFile,
	expandFile,
	log,
} from 'magicmark'
import fs from 'node:fs/promises'
import path from 'node:path'
import { packageDirectory } from 'pkg-dir'

export async function checkReadmeFile(
	path: string,
	options: CheckOptions,
): Promise<CheckFileReport> {
	const { meta = true, prefix, rules = [] } = options

	const report = await checkFile(path, {
		meta,
		prefix,
		rules: [rulePresets.readme, ...rules],
	})
	return report
}

export async function expandReadmeFile(
	path: string,
	options: ExpandFileOptions,
): Promise<ExpandFileReport> {
	const { meta = true, name, output, prefix, print, rules = [] } = options

	const report = await expandFile(path, {
		meta,
		name,
		output,
		prefix,
		print,
		rules: [rulePresets.readme, ...rules],
	})
	return report
}

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
