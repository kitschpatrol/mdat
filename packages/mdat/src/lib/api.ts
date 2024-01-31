import { getInputOutputPath, getInputOutputPaths } from './utilities'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { type Options as MdatOptions, default as remarkMdat } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'

// Console.error(reporter(file))
// // Console.log(file.toString())

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export type ExpandFilesOptions = ExpandFileOptions
export async function expandFiles(files: string[], options?: ExpandFilesOptions): Promise<VFile[]> {
	const { name, output, ...mdatOptions } = options ?? {}

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(files, output, name, 'md')
	const results: VFile[] = []

	// Could reuse the processor as an optimization
	for (const { input, name, output } of inputOutputPaths) {
		const result = await expandFile(input, { name, output, ...mdatOptions })
		results.push(result)
	}

	return results
}

export type ExpandFileOptions = ExpandStringOptions & {
	name?: string
	output?: string
}

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function expandFile(file: string, options?: ExpandFileOptions): Promise<VFile> {
	const { name, output, ...mdatOptions } = options ?? {}

	const inputOutputPath = getInputOutputPath(file, output, name, 'md')
	const inputFile = await read(inputOutputPath.input)
	const result = await processVFile(inputFile, mdatOptions)
	result.dirname = inputOutputPath.output
	result.basename = inputOutputPath.name
	return result
}

export type ExpandStringOptions = MdatOptions
export async function expandString(
	markdown: string,
	options?: ExpandStringOptions,
): Promise<VFile> {
	const resolvedOptions = options ?? {}
	return processVFile(new VFile(markdown), resolvedOptions)
}

async function processVFile(file: VFile, options?: MdatOptions): Promise<VFile> {
	return remark()
		.use(remarkGfm)
		.use(remarkMdat, options ?? {})
		.process(file)
}
