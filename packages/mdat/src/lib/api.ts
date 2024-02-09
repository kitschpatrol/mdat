import { type ConfigLoaded, type ConfigToLoad, type RulesToLoad, loadConfig } from './config'
import { getInputOutputPath, getInputOutputPaths } from './utilities'
import { type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { type Options, mdatClean, mdatSplit, default as remarkMdat } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function expandFiles(
	files: string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	const resolvedConfig = await loadConfig({ additionalConfig: config, additionalRules: rules })
	// Store config for access in rules
	config = resolvedConfig

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(files, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const processor = getProcessor(resolvedConfig)
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
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	const resolvedConfig = await loadConfig({ additionalConfig: config, additionalRules: rules })
	// Store config for access in rules
	config = resolvedConfig

	const inputOutputPath = getInputOutputPath(file, output, name, 'md')
	const inputFile = await read(inputOutputPath.input)
	const result = await getProcessor(resolvedConfig).process(inputFile)
	result.dirname = inputOutputPath.output
	result.basename = inputOutputPath.name
	return result
}

export async function expandString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	const resolvedConfig = await loadConfig({ additionalConfig: config, additionalRules: rules })
	// Store config for access in rules
	config = resolvedConfig

	return getProcessor(resolvedConfig).process(new VFile(markdown))
}

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function cleanFiles(
	files: string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
): Promise<VFile[]> {
	const resolvedConfig = await loadConfig({
		additionalConfig: config,
	})
	// Store config for access in rules
	config = resolvedConfig

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(files, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const processor = getCleanProcessor(resolvedConfig)
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
export async function cleanFile(
	file: string,
	name?: string,
	output?: string,
	config?: ConfigToLoad,
): Promise<VFile> {
	const resolvedConfig = await loadConfig({
		additionalConfig: config,
	})
	// Store config for access in rules
	config = resolvedConfig

	const inputOutputPath = getInputOutputPath(file, output, name, 'md')
	const inputFile = await read(inputOutputPath.input)
	const result = await getCleanProcessor(resolvedConfig).process(inputFile)
	result.dirname = inputOutputPath.output
	result.basename = inputOutputPath.name
	return result
}

export async function cleanString(markdown: string, config: ConfigToLoad): Promise<VFile> {
	const resolvedConfig = await loadConfig({
		additionalConfig: config,
	})
	// Store config for access in rules
	config = resolvedConfig

	return getCleanProcessor(resolvedConfig).process(new VFile(markdown))
}

// Helpers

function getProcessor(options?: Options) {
	const processor = remark()
		// Hard-coding some style preferences here. Users who want different
		// settings can use remark-mdat to create their own processor.
		.use({
			settings: {
				bullet: '-',
				emphasis: '_',
			},
		})
		.use(remarkGfm)
		.use(remarkMdat, options ?? {})

	return processor
}

function getCleanProcessor(options: ConfigLoaded) {
	// MdatCleanOptions compatible object
	const { closingPrefix, keywordPrefix, metaCommentIdentifier } = options

	const processor = remark()
		// Hard-coding some style preferences here. Users who want different
		// settings can use remark-mdat to create their own processor.
		.use({
			settings: {
				bullet: '-',
				emphasis: '_',
			},
		})
		.use(remarkGfm)
		.use(
			() =>
				// eslint-disable-next-line unicorn/consistent-function-scoping
				function (tree: Root, file: VFile) {
					mdatSplit(tree, file)
					mdatClean(tree, file, { closingPrefix, keywordPrefix, metaCommentIdentifier })
				},
		)

	return processor
}
