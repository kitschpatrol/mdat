import { loadConfig } from './config'
import { getInputOutputPath, getInputOutputPaths } from './utilities'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { type Options as MdatOptions, type Rules, default as remarkMdat } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'

/**
 * Generously accept either string paths to .ts, .js, or .json files with either
 * `Rules` or `MdatOptions` type default exports, or the actual `Rules` or
 * `MdatOptions` objects.
 */
export type ExpandOptions<T> = Array<Rules | T | string>

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function expandFiles(
	files: string[],
	name?: string,
	output?: string,
	options?: ExpandOptions<MdatOptions>,
): Promise<VFile[]> {
	const resolvedOptions = await loadConfig({ additionalConfigsOrRules: options })

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(files, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const processor = remark().use(remarkGfm).use(remarkMdat, resolvedOptions)
	for (const { input, name, output } of inputOutputPaths) {
		const inputFile = await read(input)
		const result = await processor.process(inputFile)
		result.dirname = output
		result.basename = name
		results.push(result)
	}

	return results
}

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function expandFile(
	file: string,
	name?: string,
	output?: string,
	options?: ExpandOptions<MdatOptions>,
): Promise<VFile> {
	const resolvedOptions = await loadConfig({ additionalConfigsOrRules: options })
	const inputOutputPath = getInputOutputPath(file, output, name, 'md')
	const inputFile = await read(inputOutputPath.input)
	const result = await processVFile(inputFile, resolvedOptions)
	result.dirname = inputOutputPath.output
	result.basename = inputOutputPath.name
	return result
}

export async function expandString(
	markdown: string,
	options?: ExpandOptions<MdatOptions>,
): Promise<VFile> {
	const resolvedOptions = await loadConfig({ additionalConfigsOrRules: options })
	return processVFile(new VFile(markdown), resolvedOptions)
}

async function processVFile(file: VFile, options?: MdatOptions): Promise<VFile> {
	return remark()
		.use(remarkGfm)
		.use(remarkMdat, options ?? {})
		.process(file)
}
