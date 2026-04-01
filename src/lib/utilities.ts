/* eslint-disable jsdoc/require-jsdoc */

import type { ConfigResult as AmbientRemarkConfig } from 'unified-engine'
import { findUp } from 'find-up'
import fs from 'node:fs/promises'
import path from 'node:path'
import { packageDirectory } from 'package-directory'
import { packageUp } from 'package-up'
import { isFileSync } from 'path-type'
import { Configuration } from 'unified-engine'
import untildify from 'untildify'
import { log } from './log'

export { type ConfigResult as AmbientRemarkConfig } from 'unified-engine'

function zeroPad(n: number, nMax: number): string {
	const places = nMax === 0 ? 1 : Math.floor(Math.log10(Math.abs(nMax)) + 1)
	return n.toString().padStart(places, '0')
}

export async function getInputOutputPaths(
	inputs: string[],
	output: string | undefined,
	name: string | undefined,
	extension: string | undefined,
): Promise<Array<{ input: string; name: string; output: string }>> {
	const paths: Array<{ input: string; name: string; output: string }> = []

	// Accounts for numbering outputs if multiple files are provided
	for (const [index, file] of inputs.entries()) {
		const nameSuffix = name && inputs.length > 1 ? `-${zeroPad(index + 1, inputs.length)}` : ''
		const inputOutputPath = await getInputOutputPath(file, output, name, extension, nameSuffix)
		paths.push(inputOutputPath)
	}

	return paths
}

async function getInputOutputPath(
	input: string,
	output: string | undefined,
	name: string | undefined,
	extension: string | undefined,
	nameSuffix = '',
): Promise<{ input: string; name: string; output: string }> {
	const resolvedInput = expandPath(input)
	const resolvedOutput = output ? expandPath(output) : undefined

	// Ensure input is a file
	if (!isFileSync(resolvedInput)) {
		throw new Error(`Input file not found: "${resolvedInput}"`)
	}

	// Ensure output is not a file
	if (resolvedOutput) {
		if (isFileSync(resolvedOutput)) {
			throw new Error(`Output path must be a directory, received a file path: "${resolvedOutput}"`)
		}

		// Create intermediate directories if needed
		await fs.mkdir(resolvedOutput, { recursive: true })
	}

	// Get base fileName either from input or name option
	const baseName = name
		? path.basename(name, path.extname(name))
		: path.basename(resolvedInput, path.extname(resolvedInput))

	// Use argument first, then output name extension if present, then input name extension if present, then default to nothing
	const resolvedExtension = `.${
		extension ??
		(name && path.extname(name) !== ''
			? path.extname(name)
			: path.extname(input) === ''
				? ''
				: path.extname(input))
	}`

	const outputName = `${baseName}${nameSuffix}${resolvedExtension}`
	const outputPath = resolvedOutput ?? path.dirname(resolvedInput)

	return { input: resolvedInput, name: outputName, output: outputPath }
}

function expandPath(file: string): string {
	// TODO any other validation or normalization?
	return untildify(file)
}

export async function findPackage(): Promise<string | undefined> {
	return packageUp()
}

export function ensureArray<T>(value: T | T[] | undefined): T[] {
	if (value === undefined || value === null) {
		return []
	}

	return Array.isArray(value) ? value : [value]
}

/**
 * Searches for a readme file in the following order:
 * 1. Searches the current working directory for readme.md
 * 2. If there's no readme.md in the current directory, search up to the closest package directory
 * 3. Give up and return undefined if no readme is found
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
 * Searches up for a readme.md file.
 * @throws {Error} if no readme is found
 */
export async function findReadmeThrows(): Promise<string> {
	const readme = await findReadme()
	if (readme === undefined) {
		throw new Error('No readme found')
	}

	return readme
}

// Reimplements some of the logic from unified-engine to load remark configuration from
// package.json or an ambient remarkrc file.
// In the future we should use unified-engine directly for all file handling.
export async function loadAmbientRemarkConfig(): Promise<AmbientRemarkConfig> {
	const ambientConfig = new Configuration({
		cwd: process.cwd(),
		detectConfig: true,
		packageField: 'remarkConfig',
		rcName: '.remarkrc',
	})

	const configResult = await new Promise<AmbientRemarkConfig | undefined>((resolve) => {
		ambientConfig.load('', (error, result) => {
			if (error) {
				log.error(String(error))
				// eslint-disable-next-line unicorn/no-useless-undefined
				resolve(undefined)
				return
			}

			resolve(result)
		})
	})

	if (configResult) {
		const { filePath } = configResult
		if (filePath === undefined) {
			log.info('No ambient Remark configuration file found')
		} else {
			log.info(`Found and loaded ambient Remark configuration from "${filePath}"`)
		}

		return configResult
	}

	log.info('No ambient Remark configuration found')
	return { filePath: undefined, plugins: [], settings: {} }
}
