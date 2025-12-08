/* eslint-disable jsdoc/require-jsdoc */

import type { ConfigResult as AmbientRemarkConfig } from 'unified-engine'
import fs from 'node:fs'
import path from 'node:path'
import { packageUp } from 'package-up'
import { isFileSync } from 'path-type'
import { log } from 'remark-mdat'
import { Configuration } from 'unified-engine'
import untildify from 'untildify'

export { type ConfigResult as AmbientRemarkConfig } from 'unified-engine'

function zeroPad(n: number, nMax: number): string {
	const places = nMax === 0 ? 1 : Math.floor(Math.log10(Math.abs(nMax)) + 1)
	return n.toString().padStart(places, '0')
}

export function getInputOutputPaths(
	inputs: string[],
	output: string | undefined,
	name: string | undefined,
	extension: string | undefined,
): Array<{ input: string; name: string; output: string }> {
	const paths: Array<{ input: string; name: string; output: string }> = []

	// Accounts for numbering outputs if multiple files are provided
	for (const [index, file] of inputs.entries()) {
		const nameSuffix = name && inputs.length > 1 ? `-${zeroPad(index + 1, inputs.length + 1)}` : ''
		const inputOutputPath = getInputOutputPath(file, output, name, extension, nameSuffix)
		paths.push(inputOutputPath)
	}

	return paths
}

function getInputOutputPath(
	input: string,
	output: string | undefined,
	name: string | undefined,
	extension: string | undefined,
	nameSuffix = '',
): { input: string; name: string; output: string } {
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
		fs.mkdirSync(resolvedOutput, { recursive: true })
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

	// eslint-disable-next-line ts/no-invalid-void-type
	const configResult = await new Promise<AmbientRemarkConfig | undefined | void>((resolve) => {
		ambientConfig.load('', (error, result) => {
			if (error) {
				console.error(error)
				resolve()
				return
			}

			resolve(result)
		})
	})

	if (configResult) {
		const { filePath } = configResult
		if (filePath === undefined) {
			log.info('No ambient Remark configuration file found"')
		} else {
			log.info(`Found and loaded ambient Remark configuration from "${filePath}"`)
		}

		return configResult
	}

	throw new Error('Failed to load ambient remark configuration')
}
