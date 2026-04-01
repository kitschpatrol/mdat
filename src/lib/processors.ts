/* eslint-disable jsdoc/require-jsdoc */

import type { Root } from 'mdast'
import type { Rules } from 'remark-mdat'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { mdatClean, mdatExpand, mdatSplit } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'
import type { Config, ConfigToLoad, loadConfig } from './config'
import type { AmbientRemarkConfig } from './utilities'
import { ensureArray, getInputOutputPaths, loadAmbientRemarkConfig } from './utilities'

type Loader = typeof loadConfig
type ProcessorGetter = typeof getCleanProcessor | typeof getExpandProcessor

export async function processFiles(
	files: string | string[],
	loader: Loader,
	processorGetter: ProcessorGetter,
	name?: string,
	output?: string,
	config?: ConfigToLoad,
): Promise<VFile[]> {
	const resolvedConfig = await loader({ additionalConfig: config })

	// Respect .remarkrc files in the current working directory
	const localRemarkConfiguration = await loadAmbientRemarkConfig()

	const resolvedFiles = ensureArray(files)

	// Does some validation and adds a number to the name if needed
	const inputOutputPaths = await getInputOutputPaths(resolvedFiles, output, name, 'md')
	const results: VFile[] = []

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
): Promise<VFile> {
	const resolvedConfig = await loader({ additionalConfig: config })

	// Respect .remarkrc files in the current working directory
	const localRemarkConfiguration = await loadAmbientRemarkConfig()

	const resolvedProcessor = processorGetter(resolvedConfig, localRemarkConfiguration)
	return resolvedProcessor.process(new VFile(markdown))
}

export function getExpandProcessor(config: Config, ambientRemarkConfig: AmbientRemarkConfig) {
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
					mdatClean(tree, file)
					// Config is structurally identical to Rules
				// eslint-disable-next-line ts/no-unsafe-type-assertion
				await mdatExpand(tree, file, config as Rules)
				},
		)

	return processor
}

export function getCleanProcessor(_config: Config, ambientRemarkConfig: AmbientRemarkConfig) {
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
					mdatClean(tree, file)
				},
		)

	return processor
}
