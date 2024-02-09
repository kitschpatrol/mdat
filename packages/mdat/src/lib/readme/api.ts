import { cleanFile, expandFile, expandString } from '../api'
import {
	type Config,
	type ConfigLoaded,
	type ConfigToLoad,
	type RulesToLoad,
	loadConfig,
} from '../config'
import readmeRules from './rules'
import { type Simplify } from 'type-fest'
import { type VFile } from 'vfile'

// Readme and package files are mandatory for readme operations
type ReadmeConfigLoaded = Simplify<
	{
		packageFile: string
		readmeFile: string
	} & ConfigLoaded
>

export async function expandReadme(
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
		additionalRules: rules,
	})

	return expandFile(resolvedConfig.readmeFile, name, output, resolvedConfig)
}

export async function expandReadmeString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
		additionalRules: rules,
	})

	return expandString(markdown, resolvedConfig)
}

export async function cleanReadme(config?: ConfigToLoad): Promise<VFile> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
	})

	return cleanFile(resolvedConfig.readmeFile, undefined, undefined, resolvedConfig)
}

// Helpers

// Convenience loader to always include the default readme config
type LoadConfigOptions = Parameters<typeof loadConfig>[0]
export async function loadConfigReadme(options?: LoadConfigOptions): Promise<ReadmeConfigLoaded> {
	const defaultReadmeConfig: Config = {
		addMetaComment: true,
		rules: readmeRules,
	}

	const { additionalConfig = [], ...rest } = options ?? {}
	const additionalConfigArray = Array.isArray(additionalConfig)
		? additionalConfig
		: [additionalConfig]

	const result = await loadConfig({
		additionalConfig: [defaultReadmeConfig, ...additionalConfigArray],
		...rest,
	})

	// This should never happen because the defaults are set in loadConfigReadme
	if (result.packageFile === undefined || result.readmeFile === undefined) {
		throw new Error('Package and readme files are required in `mdat readme` config')
	}

	// Trust all optionals have been set
	return result as ReadmeConfigLoaded
}
