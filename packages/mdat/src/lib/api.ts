import { loadConfig } from './config'
import { getInputOutputPath, getInputOutputPaths } from './utilities'
import { type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import {
	type MdatCleanOptions,
	type Options as MdatOptions,
	type Rules,
	mdatClean,
	mdatSplit,
	default as remarkMdat,
} from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'

/**
 * Generously accept either string paths to .ts, .js, or .json files with
 * `MdatOptions` type default exports. Takes a single value, or an array of values which
 * will be merged right to left.
 */
export type ExpandConfig<T extends MdatOptions = MdatOptions> = Array<T | string> | T | string

/**
 * Generously accept either string paths to .ts, .js, or .json files with
 * `MdatOptions` type default exports. Takes a single value, or an array of values which
 * will be merged right to left.
 */
export type CleanConfig<T extends Partial<MdatCleanOptions> = Partial<MdatCleanOptions>> =
	| Array<T | string>
	| T
	| string

/**
 * Generously accept either string paths to .ts, .js, or .json files with
 * `Rules` type default exports.
 */
export type ExpandRules = Array<Rules | string> | Rules | string

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function expandFiles(
	files: string[],
	name?: string,
	output?: string,
	config?: ExpandConfig,
	rules?: ExpandRules,
): Promise<VFile[]> {
	const resolvedOptions = await loadConfig({ additionalConfig: config, additionalRules: rules })

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(files, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const processor = getProcessor(resolvedOptions)
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
	config?: ExpandConfig,
	rules?: ExpandRules,
): Promise<VFile> {
	const resolvedOptions = await loadConfig({ additionalConfig: config, additionalRules: rules })
	const inputOutputPath = getInputOutputPath(file, output, name, 'md')
	const inputFile = await read(inputOutputPath.input)
	const result = await getProcessor(resolvedOptions).process(inputFile)
	result.dirname = inputOutputPath.output
	result.basename = inputOutputPath.name
	return result
}

export async function expandString(
	markdown: string,
	config?: ExpandConfig,
	rules?: ExpandRules,
): Promise<VFile> {
	const resolvedOptions = await loadConfig({ additionalConfig: config, additionalRules: rules })

	return getProcessor(resolvedOptions).process(new VFile(markdown))
}

function getProcessor(options?: MdatOptions) {
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

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 */
export async function cleanFiles(
	files: string[],
	name?: string,
	output?: string,
	config?: CleanConfig,
): Promise<VFile[]> {
	const resolvedOptions = (await loadConfig({
		additionalConfig: config,
	})) as MdatCleanOptions // Defaults will have been applied

	console.log('----------------------------------')
	console.log(`config: ${JSON.stringify(config, undefined, 2)}`)
	console.log(`resolvedOptions: ${JSON.stringify(resolvedOptions, undefined, 2)}`)

	const { closingPrefix, keywordPrefix, metaCommentIdentifier } = resolvedOptions

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(files, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const processor = getCleanProcessor({ closingPrefix, keywordPrefix, metaCommentIdentifier })
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
	config?: CleanConfig,
): Promise<VFile> {
	const { closingPrefix, keywordPrefix, metaCommentIdentifier } = (await loadConfig({
		additionalConfig: config,
	})) as MdatCleanOptions // Defaults will have been applied

	const inputOutputPath = getInputOutputPath(file, output, name, 'md')
	const inputFile = await read(inputOutputPath.input)
	const result = await getCleanProcessor({
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
	}).process(inputFile)
	result.dirname = inputOutputPath.output
	result.basename = inputOutputPath.name
	return result
}

export async function cleanString(markdown: string, config: CleanConfig): Promise<VFile> {
	const { closingPrefix, keywordPrefix, metaCommentIdentifier } = (await loadConfig({
		additionalConfig: config,
	})) as MdatCleanOptions // Defaults will have been applied

	return getCleanProcessor({
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
	}).process(new VFile(markdown))
}

function getCleanProcessor(options: MdatCleanOptions) {
	// Have to set defaults here because they are not set in the remark-mdat
	const { closingPrefix = '/', keywordPrefix = '', metaCommentIdentifier = '+' } = options

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
