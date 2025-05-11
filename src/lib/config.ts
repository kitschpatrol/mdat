/* eslint-disable complexity */

import type { CosmiconfigResult } from 'cosmiconfig'
import type { NormalizedPackageJson } from 'read-pkg'
import type { Options, Rules } from 'remark-mdat'
import type { JsonValue, Simplify } from 'type-fest'
import { cosmiconfig } from 'cosmiconfig'
import { TypeScriptLoader as typeScriptLoader } from 'cosmiconfig-typescript-loader'
import fs from 'node:fs/promises'
import path from 'node:path'
import picocolors from 'picocolors'
import plur from 'plur'
import { readPackage } from 'read-pkg'
import { deepMergeDefined, log, optionsSchema, rulesSchema } from 'remark-mdat'
import { z } from 'zod'
import { mdatJsonLoader } from './mdat-json-loader'
import { findPackage } from './utilities'

export type Config = Simplify<
	Options & {
		assetsPath?: string
		packageFile?: string
	}
>

// Reflect defaults and normalization
export type ConfigLoaded = {
	addMetaComment: boolean
	assetsPath: string
	closingPrefix: string
	keywordPrefix: string
	metaCommentIdentifier: string
	packageFile: string | undefined
	rules: Rules
}

const configSchema = optionsSchema
	.merge(
		z.object({
			assetsPath: z.string().optional(),
			packageFile: z.string().optional(),
		}),
	)
	.describe('Config Extension')

/**
 * Generously accept either string paths to .ts, .js, or .json files with
 * `Config` type default exports. Takes a single value, or an array of values which
 * will be merged right to left.
 */
export type ConfigToLoad = Array<Config | string> | Config | string

/**
 * Generously accept either string paths to .ts, .js, or .json files with
 * `Rules` type default exports.
 */
export type RulesToLoad = Array<Rules | string> | Rules | string

// Nomenclature is somewhat obtuse:
// Config:
// File loaded implicitly by cosmiconfig, or passed in as an object or string path to load. Has top-level settings options, plus an optional rules object of its own.
//
// Rules:
// File loaded explicitly by the user, it's a record where each key is a replacement keyword
//
// Rules are merged into a final internal config file

/**
 * Load and validate mdat configuration / rule sets
 * Uses cosmiconfig to search in the usual places.
 * Merge precedence: Additional Config Paths < Search Path < mdat-remark defaults
 *
 * Generic to accommodate additional Config options, so set T to your custom config type if needed. You must provide a matching configExtensionSchema as well.
 */
export async function loadConfig(options?: {
	/**
	 * Additional Config objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` files with `Config` type default exports. These will be dynamically loaded by Cosmiconfig.
	 * Accepts an individual item, or an array. Objects in the array will be merged right to left.
	 *
	 */
	additionalConfig?: ConfigToLoad
	/**
	 * Additional Rules objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` files with `Rules` type default exports. These will be dynamically loaded by Cosmiconfig.
	 * Accepts an individual item, or an array. Objects in the array will be merged right to left, and take precedence over any rules in previously loaded Config objects as well.
	 */
	additionalRules?: RulesToLoad
	/** Search for config in specific directories, mainly useful for testing. Cosmiconfig default search paths used if unset. */
	searchFrom?: string
}): Promise<ConfigLoaded> {
	const { additionalConfig, additionalRules, searchFrom } = options ?? {}
	// Set defaults, remark-mdat sets these as well... but it sets them at runtime,
	// we need to set them here so they're on the returned object
	let finalConfig: Config = {
		addMetaComment: false,
		assetsPath: './assets',
		closingPrefix: '/',
		keywordPrefix: '',
		metaCommentIdentifier: '+',
		packageFile: await findPackage(),
		rules: {
			mdat: `Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).`,
		},
	}

	// 1. Search and load cosmiconfig locations
	const configExplorer = cosmiconfig('mdat', {
		loaders: {
			// Using the alternate typescript loader fixes ERR_MODULE_NOT_FOUND errors
			// in configuration files that import modules via a path
			// https://github.com/cosmiconfig/cosmiconfig/issues/345
			// https://github.com/Codex-/cosmiconfig-typescript-loader
			'.ts': typeScriptLoader(),
		},
	})
	const results = await configExplorer.search(searchFrom)

	if (results) {
		// eslint-disable-next-line ts/no-unsafe-assignment
		const { config, filepath } = results
		let possibleConfig = config as unknown

		log.info(`Using config from "${filepath}"`)

		// Special case for loading shared configs via a package.json key
		// Vague inspiration:
		// - https://github.com/cosmiconfig/cosmiconfig/issues/1
		// - https://github.com/prettier/prettier/pull/5963
		if (filepath.endsWith('package.json') && typeof config === 'string') {
			log.info(`Detected shared config string: "${config}"`)
			const { default: sharedConfig } = (await import(config)) as { default: unknown }
			possibleConfig = sharedConfig
		}

		const configFromObject = getAndValidateConfigFromObject(possibleConfig, configSchema)
		if (configFromObject) {
			finalConfig = deepMergeDefined(finalConfig, configFromObject)
		}
	}

	// 3. Load and merge additional configs
	if (additionalConfig !== undefined) {
		// Ensure we have an array to work with
		const additionalConfigsArray = Array.isArray(additionalConfig)
			? additionalConfig
			: [additionalConfig]

		for (const configOrPath of additionalConfigsArray) {
			let config: unknown

			if (typeof configOrPath === 'string') {
				// It's probably a path to a config object
				const results = await configExplorer.load(configOrPath)
				// eslint-disable-next-line ts/no-unnecessary-condition
				if (results === null || results === undefined) continue
				// eslint-disable-next-line ts/no-unsafe-assignment
				const { config: loadedConfig, filepath } = results
				log.info(`Loaded additional config from "${filepath}"`)
				config = loadedConfig
			} else {
				// It's probably a pre-loaded config object
				config = configOrPath
			}

			if (config === undefined) continue

			log.info('Merging configuration object')
			const configFromObject = getAndValidateConfigFromObject(config, configSchema)

			if (configFromObject !== undefined) {
				finalConfig = deepMergeDefined(finalConfig, configFromObject)
			}
		}
	}

	// 4. Load and merge additional rule sets
	if (additionalRules !== undefined) {
		// Ensure we have an array to work with
		const additionalRulesArray = Array.isArray(additionalRules)
			? additionalRules
			: [additionalRules]

		// Create new cosmiconfig loader with custom handling
		// to flatten .json files into rule sets
		const rulesExplorer = cosmiconfig('mdat', {
			loaders: {
				'.json': mdatJsonLoader,
				'.ts': typeScriptLoader(),
			},
		})

		for (const rulesOrPath of additionalRulesArray) {
			let rules: unknown

			if (typeof rulesOrPath === 'string') {
				// It's a path to a rules object (we hope)
				let results: CosmiconfigResult
				// Special work-around for Cosmiconfig's rather zealous package.json interception
				// So we can treat a package.json as a rule set... but note that this
				// is different from how additionalConfigs is handles, where a _configuration_ object
				// is loaded from package.json, instead of being interpreted as _rules_.
				if (path.basename(rulesOrPath).endsWith('package.json')) {
					const packageJson = await fs.readFile(rulesOrPath, 'utf8')
					const flatJson = mdatJsonLoader(rulesOrPath, packageJson) as JsonValue
					results = {
						config: flatJson,
						filepath: rulesOrPath,
					}
				} else {
					// Let cosmiconfig call the custom loader itself
					results = await rulesExplorer.load(rulesOrPath)
				}

				// eslint-disable-next-line ts/no-unnecessary-condition
				if (results === null || results === undefined) continue
				// eslint-disable-next-line ts/no-unsafe-assignment
				const { config: loadedRules, filepath } = results
				log.info(`Loaded additional config from "${filepath}"`)
				rules = loadedRules
			} else {
				// It's a pre-loaded rules object
				rules = rulesOrPath
			}

			if (rules === undefined) continue

			log.info('Merging rules into configuration object')
			const configFromRulesObject = getAndValidateConfigFromRulesObject(rules, rulesSchema)

			if (configFromRulesObject !== undefined) {
				finalConfig = deepMergeDefined(finalConfig, configFromRulesObject)
			}
		}
	}

	if (finalConfig.rules) {
		const prettyRules = Object.keys(finalConfig.rules)
			.sort()
			.map((rule) => `"${picocolors.green(picocolors.bold(rule))}"`)
		log.info(
			`Loaded ${picocolors.bold(prettyRules.length)} mdat comment expansion ${plur('rule', prettyRules.length)}:`,
		)
		for (const rule of prettyRules) {
			log.info(`\t${rule}`)
		}
	} else {
		log.error('No rules loaded from additional configurations or rules, using default.')
	}

	// Trust that all the non-optional values have been set

	// Set global for rules
	config = finalConfig as ConfigLoaded

	return finalConfig as ConfigLoaded
}

// Helpers

function getAndValidateConfigFromRulesObject(
	rulesObject: unknown,
	rulesSchema: z.ZodSchema,
): Config | undefined {
	if (rulesSchema.safeParse(rulesObject).success) {
		// Wrap the rules object in a config object
		const config = {
			rules: rulesObject as Rules,
		}
		return config as Config
	}

	log.error(
		`Rules object has the wrong shape. Ignoring and using default configuration:\n${JSON.stringify(rulesObject, undefined, 2)}`,
	)
}

function getAndValidateConfigFromObject(
	configObject: unknown,
	configSchema: z.ZodSchema,
): Config | undefined {
	if (configSchema.safeParse(configObject).success) {
		return configObject as Config
	}

	log.error(
		`Config object has the wrong shape. Ignoring and using default configuration:\n${JSON.stringify(configObject, undefined, 2)}`,
	)
}

// Rule helpers

// Caution: Impure functions

// TODO better to pass config into rules?
// Let rules access config for custom behavior
let config: ConfigLoaded | undefined

/**
 * Get the current MDAT config object, loading it if necessary
 */
export async function getConfig(): Promise<ConfigLoaded> {
	// Defaults guarantee all keys will be defined
	// Readme config should be defined at this point when called from one of the
	// API functions that handle config loading, but if not, e.g. in testing,
	// we can load it here

	if (config === undefined) {
		log.warn('getConfig(): config was undefined')
		config ??= await loadConfig()
	}

	return config
}

let packageJson: NormalizedPackageJson | undefined

/**
 * Convenience function for rules
 * Load as package json only as needed, memoize
 * Rules could call this themselves, but this is more convenient and efficient
 * @throws If no package.json is found
 */
export async function getPackageJson(): Promise<NormalizedPackageJson> {
	const { packageFile } = await getConfig()
	if (packageFile === undefined) {
		throw new Error('No packageFile found or set in config')
	}

	packageJson ??= await readPackage({ cwd: path.dirname(packageFile) })
	// eslint-disable-next-line ts/no-unnecessary-condition
	if (packageJson === undefined) {
		throw new Error('No package.json found')
	}

	return packageJson
}

/**
 * Convenience function for merging configs
 * Performs a deep merge, with the rightmost object taking precedence
 */
export function mergeConfigs(a: Config, b: Config): Config {
	return deepMergeDefined(a, b)
}
