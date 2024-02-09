import { type ConfigLoaded, type ConfigToLoad, type RulesToLoad, type loadConfig } from './config'
import { ensureArray, getInputOutputPaths } from './utilities'
import { type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { mdatCheck, mdatClean, mdatExpand, mdatSplit } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'

type Loader = typeof loadConfig
type ProcessorGetter = typeof getCleanProcessor | typeof getExpandProcessor

export async function processFiles(
	files: string | string[],
	loader: Loader,
	processorGetter: ProcessorGetter,
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	const resolvedConfig = await loader({ additionalConfig: config, additionalRules: rules })
	// Store config for access in rules
	config = resolvedConfig
	const resolvedFiles = ensureArray(files)

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(resolvedFiles, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const resolvedProcessor = processorGetter(resolvedConfig)
	for (const { input, name, output } of inputOutputPaths) {
		const inputFile = await read(input)
		const result = await resolvedProcessor.process(inputFile)
		result.dirname = output
		result.basename = name
		results.push(result)
	}

	return results
}

export async function processString(
	markdown: string,
	loader: Loader,
	processorGetter: ProcessorGetter,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	const resolvedConfig = await loader({ additionalConfig: config, additionalRules: rules })
	// Store config for access in rules
	config = resolvedConfig
	const resolvedProcessor = processorGetter(resolvedConfig)
	return resolvedProcessor.process(new VFile(markdown))
}

export function getExpandProcessor(options: ConfigLoaded) {
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
				async function (tree: Root, file: VFile) {
					mdatSplit(tree, file)
					mdatClean(tree, file, options)
					await mdatExpand(tree, file, options)
				},
		)

	return processor
}

export function getCleanProcessor(options: ConfigLoaded) {
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
					mdatClean(tree, file, options)
				},
		)

	return processor
}

export function getCheckProcessor(options: ConfigLoaded) {
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
				async function (tree: Root, file: VFile) {
					await mdatCheck(tree, file, {
						...options,
						paranoid: false,
					})
				},
		)

	return processor
}
