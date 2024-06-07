import { type Config, type ConfigLoaded, loadConfig } from '../config'
import readmeRules from './rules'
import { type Simplify } from 'type-fest'

// Package file is mandatory for readme rules
type ReadmeConfigLoaded = Simplify<
	{
		packageFile: string
	} & ConfigLoaded
>

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

	// This should never happen because the default is set in loadConfig
	if (result.packageFile === undefined) {
		throw new Error('Package file path is required in `mdat readme` config')
	}

	// Trust all optionals have been set
	return result as ReadmeConfigLoaded
}
