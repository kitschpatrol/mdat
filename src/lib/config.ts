import type { CosmiconfigResult } from 'cosmiconfig'
import type { Rule } from 'remark-mdat'
import type { JsonValue } from 'type-fest'

/**
 * An mdat configuration is a record of expansion rules. Keys become comment
 * keywords, values define the expansion content.
 */
export type Config = Record<string, Rule>

import { cosmiconfig } from 'cosmiconfig'
import { TypeScriptLoader as typeScriptLoader } from 'cosmiconfig-typescript-loader'
import fs from 'node:fs/promises'
import path from 'node:path'
import picocolors from 'picocolors'
import plur from 'plur'
import { rulesSchema } from 'remark-mdat'
import { deepMergeDefined } from './deep-merge-defined'
import { log } from './log'
import { mdatJsonLoader } from './mdat-json-loader'
import readmeRules from './readme/rules'

// Lazy singletons — cosmiconfig caches search/load results per instance,
// so reusing instances avoids repeated filesystem searches and loader setup.
let _configExplorer: ReturnType<typeof cosmiconfig> | undefined
let _additionalConfigExplorer: ReturnType<typeof cosmiconfig> | undefined

function getConfigExplorer() {
	_configExplorer ??= cosmiconfig('mdat', {
		loaders: { '.ts': typeScriptLoader() },
	})
	return _configExplorer
}

function getAdditionalConfigExplorer() {
	_additionalConfigExplorer ??= cosmiconfig('mdat', {
		loaders: { '.json': mdatJsonLoader, '.ts': typeScriptLoader() },
	})
	return _additionalConfigExplorer
}

/**
 * Generously accept either string paths to .ts, .js, or .json config files, or
 * inline Config objects.
 */
export type ConfigToLoad = Array<Config | string> | Config | string

/**
 * Load and validate mdat configuration. Uses cosmiconfig to search in the usual
 * places. Merge precedence: Base Defaults < Defaults < Searched Config <
 * Additional Config
 */
export async function loadConfig(options?: {
	/**
	 * Additional Config objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` config files. These
	 * will be dynamically loaded by Cosmiconfig. Accepts an individual item, or
	 * an array. Objects in the array will be merged right to left.
	 */
	additionalConfig?: ConfigToLoad
	/**
	 * Default rules that have higher priority than base defaults but lower than
	 * searched config. Defaults to the built-in readme rules. Pass `{}` to
	 * disable.
	 */
	defaults?: Config
	/**
	 * Search for config in specific directories, mainly useful for testing.
	 * Cosmiconfig default search paths used if unset.
	 */
	searchFrom?: string
}): Promise<Config> {
	const { additionalConfig, defaults = readmeRules, searchFrom } = options ?? {}

	// Base default rules
	let finalConfig: Config = {
		mdat: `Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).`,
	}

	// 1. Merge defaults if provided (higher priority than base defaults)
	// eslint-disable-next-line ts/no-unnecessary-condition
	if (defaults) {
		finalConfig = deepMergeDefined(finalConfig, defaults)
	}

	// 2. Search and load cosmiconfig locations
	const results = await getConfigExplorer().search(searchFrom)

	if (results) {
		// eslint-disable-next-line ts/no-unsafe-assignment
		const { config, filepath } = results
		let possibleRules = config as unknown

		log.debug(`Using config from "${filepath}"`)

		// Special case for loading shared configs via a package.json key
		if (filepath.endsWith('package.json') && typeof config === 'string') {
			log.debug(`Detected shared config string: "${config}"`)
			// eslint-disable-next-line ts/no-unsafe-type-assertion
			const { default: sharedConfig } = (await import(config)) as { default: unknown }
			possibleRules = sharedConfig
		}

		const validated = validateConfig(possibleRules)
		if (validated) {
			finalConfig = deepMergeDefined(finalConfig, validated)
		}
	}

	// 3. Load and merge additional config
	if (additionalConfig !== undefined) {
		const additionalConfigArray = Array.isArray(additionalConfig)
			? additionalConfig
			: [additionalConfig]

		for (const configOrPath of additionalConfigArray) {
			let loaded: unknown

			if (typeof configOrPath === 'string') {
				let results: CosmiconfigResult
				// Special work-around for Cosmiconfig's rather zealous package.json interception
				if (path.basename(configOrPath).endsWith('package.json')) {
					const packageJson = await fs.readFile(configOrPath, 'utf8')
					// eslint-disable-next-line ts/no-unsafe-type-assertion
					const flatJson = mdatJsonLoader(configOrPath, packageJson) as JsonValue
					results = {
						config: flatJson,
						filepath: configOrPath,
					}
				} else {
					results = await getAdditionalConfigExplorer().load(configOrPath)
				}

				// eslint-disable-next-line ts/no-unnecessary-condition
				if (results === null || results === undefined) {
					continue
				}

				// eslint-disable-next-line ts/no-unsafe-assignment
				const { config: loadedConfig, filepath } = results
				log.debug(`Loaded additional config from "${filepath}"`)
				loaded = loadedConfig
			} else {
				loaded = configOrPath
			}

			if (loaded === undefined) {
				continue
			}

			log.debug('Merging config')
			const validated = validateConfig(loaded)
			if (validated) {
				finalConfig = deepMergeDefined(finalConfig, validated)
			}
		}
	}

	const prettyRules = Object.keys(finalConfig)
		.toSorted()
		.map((rule) => `"${picocolors.green(picocolors.bold(rule))}"`)
	log.debug(
		`Loaded ${picocolors.bold(prettyRules.length)} mdat comment expansion ${plur('rule', prettyRules.length)}:`,
	)
	for (const rule of prettyRules) {
		log.debug(`\t${rule}`)
	}

	return finalConfig
}

// Helpers

function validateConfig(value: unknown): Config | undefined {
	if (rulesSchema.safeParse(value).success) {
		// eslint-disable-next-line ts/no-unsafe-type-assertion
		return value as Config
	}

	log.warn(
		`Config has the wrong shape. Ignoring and using default configuration:\n${JSON.stringify(value, undefined, 2)}`,
	)
}

/**
 * Convenience function for merging configs. Rightmost config takes precedence.
 */
export function mergeConfig(a: Config, b: Config): Config {
	return deepMergeDefined(a, b)
}

/**
 * Identity function providing type inference for mdat configuration files.
 */
export function defineConfig(config: Config): Config {
	return config
}

// Re-export Rule for plugin authors
export { type Rule } from 'remark-mdat'
