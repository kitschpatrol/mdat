/* eslint-disable jsdoc/require-jsdoc */

import type { Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { mdatCollapse, mdatExpand, mdatSplit, mdatStrip } from 'remark-mdat'
import { read } from 'to-vfile'
import { VFile } from 'vfile'
import type { Config, ConfigToLoad, loadConfig } from './config'
import type { AmbientRemarkConfig } from './utilities'
import { ensureArray, getInputOutputPaths, loadAmbientRemarkConfig } from './utilities'

type Loader = typeof loadConfig
type ProcessorGetter =
	| typeof getCollapseProcessor
	| typeof getExpandProcessor
	| typeof getStripProcessor

export async function processFiles(
	files: string | string[],
	loader: Loader,
	processorGetter: ProcessorGetter,
	name?: string,
	output?: string,
	config?: ConfigToLoad,
): Promise<VFile[]> {
	const [resolvedConfig, localRemarkConfiguration] = await Promise.all([
		loader({ additionalConfig: config }),
		loadAmbientRemarkConfig(),
	])

	const resolvedFiles = ensureArray(files)

	// Does some validation and adds a number to the name if needed
	const inputOutputPaths = await getInputOutputPaths(resolvedFiles, output, name, 'md')

	const resolvedProcessor = processorGetter(resolvedConfig, localRemarkConfiguration)
	const results = await Promise.all(
		inputOutputPaths.map(async ({ input, name, output }) => {
			const inputFile = await read(input)
			const result = await resolvedProcessor.process(inputFile)
			result.dirname = output
			result.basename = name
			return result
		}),
	)

	return results
}

export async function processString(
	markdown: string,
	loader: Loader,
	processorGetter: ProcessorGetter,
	config?: ConfigToLoad,
): Promise<VFile> {
	const [resolvedConfig, localRemarkConfiguration] = await Promise.all([
		loader({ additionalConfig: config }),
		loadAmbientRemarkConfig(),
	])

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
					mdatCollapse(tree, file)
					// Config is structurally identical to Rules
					await mdatExpand(tree, file, config)
				},
		)

	return processor
}

export function getCollapseProcessor(_config: Config, ambientRemarkConfig: AmbientRemarkConfig) {
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
					mdatCollapse(tree, file)
				},
		)

	return processor
}

export function getStripProcessor(_config: Config, ambientRemarkConfig: AmbientRemarkConfig) {
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
					mdatStrip(tree, file)
				},
		)

	return processor
}
