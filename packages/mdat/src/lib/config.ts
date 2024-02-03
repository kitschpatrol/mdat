/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { mdatJsonLoader } from './mdat-json-loader'
import chalk from 'chalk'
import { type CosmiconfigResult, cosmiconfig } from 'cosmiconfig'
import fs from 'node:fs/promises'
import path from 'node:path'
// Just top-level rules, with no options
import plur from 'plur'
import {
	type Options,
	type Rules,
	deepMergeDefined,
	log,
	optionsSchema,
	rulesSchema,
} from 'remark-mdat'
import { type JsonValue } from 'type-fest'
import { type z } from 'zod'

export type MdatConfig = Options

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
export async function loadConfig<T extends MdatConfig>(options?: {
	/**
	 * Additional Config objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` files with `Config` type default exports. These will be dynamically loaded by Cosmiconfig.
	 * Accepts an individual item, or an array. Objects in the array will be merged right to left.
	 *
	 */
	additionalConfig?: Array<T | string> | T | string | undefined
	/**
	 * Additional Rules objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` files with `Rules` type default exports. These will be dynamically loaded by Cosmiconfig.
	 * Accepts an individual item, or an array. Objects in the array will be merged right to left, and take precedence over any rules in previously loaded Config objects as well.
	 */
	additionalRules?: Array<Rules | string> | Rules | string | undefined
	/** Additional zod schema that will be merged with the top level of the config schema and used for config validation. Default mdat-remark options schema is used if not provided. Useful if extending config for things like mdat-readme. */
	configExtensionSchema?: z.ZodObject<any>
	/** Search for config in specific directories, mainly useful for testing. Cosmiconfig default search paths used if unset. */
	searchFrom?: string
}): Promise<T> {
	const { additionalConfig, additionalRules, configExtensionSchema, searchFrom } = options ?? {}
	let finalConfig: MdatConfig = {}
	let configSchema: z.ZodObject<any> = optionsSchema

	// 1. Merge additional top-level config fields definitions for zod validation
	if (configExtensionSchema !== undefined) {
		configSchema = configSchema.merge(configExtensionSchema)
	}

	// 2. Search and load cosmiconfig locations
	const configExplorer = cosmiconfig('mdat')
	const results = await configExplorer.search(searchFrom)

	if (results) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { config, filepath } = results
		log.info(`Using config from "${filepath}"`)
		const configFromObject = getAndValidateConfigFromObject<T>(config, configSchema)
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
				if (results === null || results === undefined) continue
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const { config: loadedConfig, filepath } = results
				log.info(`Loaded additional config from "${filepath}"`)
				config = loadedConfig
			} else {
				// It's probably a pre-loaded config object
				config = configOrPath
			}

			if (config === undefined) continue

			log.info('Merging configuration object')
			const configFromObject = getAndValidateConfigFromObject<T>(config, configSchema)

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

				if (results === null || results === undefined) continue
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const { config: loadedRules, filepath } = results
				log.info(`Loaded additional config from "${filepath}"`)
				rules = loadedRules
			} else {
				// It's a pre-loaded rules object
				rules = rulesOrPath
			}

			if (rules === undefined) continue

			log.info('Merging rules into configuration object')
			const configFromRulesObject = getAndValidateConfigFromRulesObject<T>(rules, rulesSchema)

			if (configFromRulesObject !== undefined) {
				finalConfig = deepMergeDefined(finalConfig, configFromRulesObject)
			}
		}
	}

	if (finalConfig.rules) {
		const prettyRules = Object.keys(finalConfig.rules)
			.sort()
			.map((rule) => `"${chalk.bold.green(rule)}"`)
		log.info(
			`Loaded ${chalk.bold(prettyRules.length)} mdat comment expansion ${plur('rule', prettyRules.length)}:`,
		)
		for (const rule of prettyRules) {
			log.info(`\t${rule}`)
		}
	} else {
		log.error('No rules loaded from additional configurations or rules, using default.')
	}

	return finalConfig as T
}

// Helpers

function getAndValidateConfigFromRulesObject<T extends MdatConfig>(
	rulesObject: unknown,
	rulesSchema: z.ZodSchema,
): T | undefined {
	if (rulesSchema.safeParse(rulesObject).success) {
		const config = {
			rules: rulesObject as Rules,
		}
		return config as T
	}

	log.error(
		`Rules object has the wrong shape. Ignoring and using default configuration:\n${JSON.stringify(rulesObject, undefined, 2)}`,
	)
}

function getAndValidateConfigFromObject<T extends MdatConfig>(
	configObject: unknown,
	configSchema: z.ZodSchema,
): T | undefined {
	if (configSchema.safeParse(configObject).success) {
		return configObject as T
	}

	log.error(
		`Config object has the wrong shape. Ignoring and using default configuration:\n${JSON.stringify(configObject, undefined, 2)}`,
	)
}
