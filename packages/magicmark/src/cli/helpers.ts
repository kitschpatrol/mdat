import { type ExpandStringOptions, type RuleSet, expandString, presets } from '../lib'
import log from '../lib/log'
import { findUp } from 'find-up'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
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
	output?: string
}
export async function expandFile(
	sourcePath: string,
	options: ExpandFileOptions,
): Promise<{ expandedFile: string; report: string[] }> {
	const { output, ...rest } = options

	const markdown = await fs.readFile(sourcePath, 'utf8')
	const { expandedString, report } = await expandString(markdown, rest)
	const outputPath = output ?? sourcePath
	await fs.writeFile(outputPath, expandedString)

	return {
		expandedFile: outputPath,
		report,
	}
}

export function getRulesForPreset(preset: string): RuleSet {
	switch (preset) {
		case 'readme': {
			return presets.readme
		}

		default: {
			throw new Error(`Unknown preset "${preset}"`)
		}
	}
}

export async function getRules(
	preset: string | undefined,
	rules: string[] | undefined,
): Promise<RuleSet> {
	// Build final rules from presets and any loaded modules
	let finalRules: RuleSet = preset ? getRulesForPreset(preset) : {}

	if (rules) {
		for (const rulePath of rules) {
			const fullPath = path.resolve(process.cwd(), rulePath)
			const { default: ruleModule } = (await import(
				fileURLToPath(new URL(`file://${fullPath}`))
			)) as { default: RuleSet }

			// TODO validate module
			// TODO support TS? See SystemJS and SystemJS babel plugin
			log.info(`ruleModule: ${JSON.stringify(ruleModule, undefined, 2)}`)
			finalRules = { ...finalRules, ...ruleModule }
		}
	}

	log.info(`Found rules: ${JSON.stringify(finalRules, undefined, 2)}`)

	if (Object.entries(finalRules).length === 0) {
		throw new Error(`No rules found. Did you forget to specify a preset or rules?`)
	}

	return finalRules
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

export function getInputOutputPaths(
	files: string[],
	output: string | undefined,
	name: string | undefined,
): Array<{ input: string; output: string }> {
	const paths: Array<{ input: string; output: string }> = []

	if (files.length === 0) {
		throw new Error('No files provided.')
	}

	// TODO expand tilde

	// accounts for numbering outputs if multiple files are provided
	// TODO zero pad if more than 9 files
	for (const [index, file] of files.entries()) {
		// Get base fileName either from input or name option
		const baseName = name
			? path.basename(name, path.extname(name))
			: path.basename(file, path.extname(file))
		const increment = name && files.length > 1 ? `-${index + 1}` : ''
		const outputName = `${baseName}${increment}.md`
		const outputPath = path.join(path.dirname(output ?? file), outputName)

		paths.push({ input: file, output: outputPath })
	}

	return paths
}
