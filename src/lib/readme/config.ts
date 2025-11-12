import type { Simplify } from 'type-fest'
import type { Config, ConfigLoaded } from '../config'
import { loadConfig } from '../config'
import readmeRules from './rules'

// Package file is mandatory for readme rules
type ReadmeConfigLoaded = Simplify<
	ConfigLoaded & {
		packageFile: string
	}
>

type LoadConfigOptions = Parameters<typeof loadConfig>[0]

/**
 * Convenience loader to always include the default readme config.
 * The readme defaults should have lower priority than searched/user config,
 * but higher priority than base mdat defaults.
 */
export async function loadConfigReadme(options?: LoadConfigOptions): Promise<ReadmeConfigLoaded> {
	const defaultReadmeConfig: Config = {
		addMetaComment: true,
		rules: readmeRules,
	}

	const { additionalConfig = [], readmeDefaults = defaultReadmeConfig, ...rest } = options ?? {}
	const additionalConfigArray = Array.isArray(additionalConfig)
		? additionalConfig
		: [additionalConfig]

	const result = await loadConfig({
		additionalConfig: additionalConfigArray,
		readmeDefaults,
		...rest,
	})

	// This should never happen because the default is set in loadConfig
	if (result.packageFile === undefined) {
		throw new Error('Package file path is required in `mdat readme` config')
	}

	// Trust all optionals have been set
	return result as ReadmeConfigLoaded
}
