/* eslint-disable jsdoc/require-jsdoc */

import type { ConfigResult as AmbientRemarkConfig } from 'unified-engine'
import fs from 'node:fs/promises'
import path from 'node:path'
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
	output?: string,
	name?: string,
	extension?: string,
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
	output?: string,
	name?: string,
	extension?: string,
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
	// Note: path.extname() includes the leading dot, so only prepend for bare `extension` param
	const resolvedExtension =
		extension === undefined
			? name && path.extname(name) !== ''
				? path.extname(name)
				: path.extname(input)
			: `.${extension}`

	const outputName = `${baseName}${nameSuffix}${resolvedExtension}`
	const outputPath = resolvedOutput ?? path.dirname(resolvedInput)

	return { input: resolvedInput, name: outputName, output: outputPath }
}

function expandPath(file: string): string {
	// TODO any other validation or normalization?
	return untildify(file)
}

export function ensureArray<T>(value: T | T[] | undefined): T[] {
	if (value === undefined || value === null) {
		return []
	}

	return Array.isArray(value) ? value : [value]
}

const README_SEARCH_REGEX = /^readme(?:\.\w+)?$/i

/**
 * Finds a readme file in the current working directory (case-insensitive).
 */
export async function findReadme(): Promise<string | undefined> {
	log.debug('Searching for readme in current directory...')

	const entries = await fs.readdir(process.cwd())
	const readme = entries.find((entry) => README_SEARCH_REGEX.test(entry))

	if (readme !== undefined) {
		const absolutePath = path.resolve(readme)
		log.debug(`Found readme at "${absolutePath}"`)
		return absolutePath
	}

	return undefined
}

/**
 * Searches up for a readme.md file.
 *
 * @throws {Error} If no readme is found
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
let cachedAmbientRemarkConfig: AmbientRemarkConfig | undefined

export async function loadAmbientRemarkConfig(): Promise<AmbientRemarkConfig> {
	if (cachedAmbientRemarkConfig !== undefined) return cachedAmbientRemarkConfig

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
			log.debug('No ambient Remark configuration file found')
		} else {
			log.debug(`Found and loaded ambient Remark configuration from "${filePath}"`)
		}

		cachedAmbientRemarkConfig = stripLintPlugins(configResult)
		return cachedAmbientRemarkConfig
	}

	log.debug('No ambient Remark configuration found')
	cachedAmbientRemarkConfig = { filePath: undefined, plugins: [], settings: {} }
	return cachedAmbientRemarkConfig
}

/**
 * Unused at the moment?
 *
 * @public
 */
export function resetAmbientRemarkConfigCache() {
	cachedAmbientRemarkConfig = undefined
}

/**
 * Strip remark-lint plugins from an ambient config. Lint plugins only produce
 * VFile warnings and never modify the AST or output — running them during
 * expansion is pure overhead.
 */
function stripLintPlugins(config: AmbientRemarkConfig): AmbientRemarkConfig {
	return {
		...config,
		plugins: config.plugins.filter((entry) => {
			const plugin = Array.isArray(entry) ? entry[0] : entry
			if (typeof plugin !== 'function') return true
			const { name } = plugin
			return (
				name !== 'remarkLint' && !name.startsWith('remark-lint:') && name !== 'remarkValidateLinks'
			)
		}),
	}
}
