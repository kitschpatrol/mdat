import fs from 'node:fs'
import path from 'node:path'
import { isFileSync } from 'path-type'
import untildify from 'untildify'

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
	// TODO zero pad if more than 9 files
	for (const [index, file] of inputs.entries()) {
		const nameSuffix = name && inputs.length > 1 ? `-${zeroPad(index + 1, inputs.length + 1)}` : ''
		const inputOutputPath = getInputOutputPath(file, output, name, extension, nameSuffix)
		paths.push(inputOutputPath)
	}

	return paths
}

export function getInputOutputPath(
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

export function expandPath(file: string): string {
	// TODO any other validation?
	return untildify(file)
}

// The log.ts module is intended for more generic uses, so the log formatting
// functions below are going in this file

/**
 * Get the sole entry in a record.
 *
 * Useful for working with Rules records
 * that are only supposed to contain a single rule.
 *
 * @param record The record to get the sole entry from
 * @returns The value of the sole entry in the record
 * @throws If there are no entries or more than one entry
 */
export function getSoleRecord<V>(record: Record<string, V>): V {
	const recordValues = Object.values(record)
	if (recordValues.length === 0) {
		throw new Error('Found no entries in a "sole record" record. This should never happen')
	}

	if (recordValues.length > 1) {
		throw new Error('Found multiple entries in "sole record" record. This should never happen')
	}

	return recordValues[0]
}
