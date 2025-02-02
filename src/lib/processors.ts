import { type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { mdatCheck, mdatClean, mdatExpand, mdatSplit } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'
import { type ConfigLoaded, type ConfigToLoad, type loadConfig, type RulesToLoad } from './config'
import {
	type AmbientRemarkConfig,
	ensureArray,
	getInputOutputPaths,
	loadAmbientRemarkConfig,
} from './utilities'

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

	// Respect .remarkrc files in the current working directory
	const localRemarkConfiguration = await loadAmbientRemarkConfig()

	const resolvedFiles = ensureArray(files)

	// Does some validation and  adds  a number to the name if needed
	const inputOutputPaths = getInputOutputPaths(resolvedFiles, output, name, 'md')
	const results: VFile[] = []

	// We don't call expandFile so we can reuse the loadConfig output and processor
	const resolvedProcessor = processorGetter(resolvedConfig, localRemarkConfiguration)
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

	// Respect .remarkrc files in the current working directory
	const localRemarkConfiguration = await loadAmbientRemarkConfig()

	const resolvedProcessor = processorGetter(resolvedConfig, localRemarkConfiguration)
	return resolvedProcessor.process(new VFile(markdown))
}

export function getExpandProcessor(
	options: ConfigLoaded,
	ambientRemarkConfig: AmbientRemarkConfig,
) {
	const processor = remark()
		// Hard-coding some style preferences here. Users who want different
		// settings can specify them in their .remarkrc configuration
		.use({
			settings: {
				bullet: '-',
				emphasis: '_',
			},
		})
		.use(remarkGfm)
		.use(ambientRemarkConfig)
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

export function getCleanProcessor(options: ConfigLoaded, ambientRemarkConfig: AmbientRemarkConfig) {
	const processor = remark()
		// Hard-coding some style preferences here. Users who want different
		// settings can specify them in their .remarkrc configuration
		.use({
			settings: {
				bullet: '-',
				emphasis: '_',
			},
		})
		.use(remarkGfm)
		.use(ambientRemarkConfig)
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

export function getCheckProcessor(options: ConfigLoaded, ambientRemarkConfig: AmbientRemarkConfig) {
	const processor = remark()
		// Hard-coding some style preferences here. Users who want different
		// settings can specify them in their .remarkrc configuration
		.use({
			settings: {
				bullet: '-',
				emphasis: '_',
			},
		})
		.use(remarkGfm)
		.use(ambientRemarkConfig)
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
