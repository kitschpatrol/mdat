/* eslint-disable @typescript-eslint/no-explicit-any */
import { mdatJsonLoader } from './mdat-json-loader'
import chalk from 'chalk'
import { type CosmiconfigResult, cosmiconfig } from 'cosmiconfig'
import { deepmerge } from 'deepmerge-ts'
import fs from 'node:fs/promises'
import path from 'node:path'
// Just top-level rules, with no options
import plur from 'plur'
import {
	type Options as MdatOptions,
	type Rules,
	log,
	optionsSchema,
	rulesSchema,
} from 'remark-mdat'
import { type JsonObject } from 'type-fest'
import { type z } from 'zod'

export type Config = MdatOptions

// Config file may be:
// Const configExample1: Rules = {
// 	'top-level-rule': 'This is a top-level rule',
// }
// const configExample2: Config = {
// 	addMetaComment: true,
// 	rules: {
// 		'config-adjacent-rule': 'This is a config-adjacent rule',
// 	}
// }

/**
 * Load and validate mdat configuration / rule sets
 * Uses cosmiconfig to search in the usual places.
 * Merge precedence: Additional Config Paths < Search Path < mdat-remark defaults
 *
 * Generic to accommodate additional Config options, so set T to your custom config type if needed. You must provide a matching configExtensionSchema as well.
 */
export async function loadConfig<T extends Config>(options?: {
	/**
	 * Additional Config or Rules objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` files with `Rules | Config` type default exports. These will be dynamically loaded by Cosmiconfig.
	 * Later objects in the array will override keys from earlier ones.
	 */
	additionalConfigsOrRules?: Array<Rules | T | string> | undefined
	/** Additional zod schema that will be merged with the top level of the config schema and used for config validation. Default mdat-remark options schema is used if not provided. Useful if extending config for things like mdat-readme. */
	configExtensionSchema?: z.ZodObject<any>
	/** Search for config in specific directories, mainly useful for testing. Cosmiconfig default search paths used if unset. */
	searchFrom?: string
}): Promise<T> {
	const { additionalConfigsOrRules, configExtensionSchema, searchFrom } = options ?? {}
	let finalConfig: Config = {}
	let configSchema: z.ZodObject<any> = optionsSchema

	// 1. Merge additional top-level config fields
	if (configExtensionSchema !== undefined) {
		configSchema = configSchema.merge(configExtensionSchema)
	}

	// 2. Search and load cosmiconfig locations
	const explorer = cosmiconfig('mdat', {
		loaders: {
			'.json': mdatJsonLoader,
		},
	})
	const results = await explorer.search(searchFrom)

	if (results) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { config, filepath } = results
		log.info(`Using config from "${filepath}"`)
		const configFromObject = getConfigFromObject<T>(config, configSchema)
		if (configFromObject) {
			finalConfig = deepmerge(finalConfig, configFromObject)
		}
	}

	// 3. Load and merge additional config or rule paths
	if (additionalConfigsOrRules !== undefined) {
		for (const ruleConfigOrPath of additionalConfigsOrRules) {
			let config: unknown

			if (typeof ruleConfigOrPath === 'string') {
				// It's a path to a config object (we hope)
				let results: CosmiconfigResult
				// Special work-around for Cosmiconfig's rather zealous package.json interception
				if (path.basename(ruleConfigOrPath).endsWith('package.json')) {
					const packageJson = await fs.readFile(ruleConfigOrPath, 'utf8')
					const flatJson = mdatJsonLoader(ruleConfigOrPath, packageJson) as JsonObject
					results = {
						config: flatJson,
						filepath: ruleConfigOrPath,
					}
				} else {
					// Let cosmiconfig call the custom loader itself
					results = await explorer.load(ruleConfigOrPath)
				}

				if (results === null || results === undefined) continue
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const { config: loadedConfig, filepath } = results
				log.info(`Loaded additional config from "${filepath}"`)
				config = loadedConfig
			} else {
				// It's a pre-loaded config object
				config = ruleConfigOrPath
			}

			if (config === undefined) continue

			log.info('Merging configuration object')
			const configFromObject = getConfigFromObject<T>(config, configSchema)
			if (configFromObject !== undefined) {
				finalConfig = deepmerge(finalConfig, configFromObject)
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
		log.error('No rules loaded from configuration, using default.')
	}

	return finalConfig as T
}

// Helpers

// Automatically handles rules-only objects
function getConfigFromObject<T extends Config>(
	config: unknown,
	configSchema: z.ZodSchema,
): T | undefined {
	const inferredSchema = inferZodSchema(config, [rulesSchema, configSchema])

	if (inferredSchema === configSchema) {
		log.info('Found an options config')
		return config as T
	}

	if (inferredSchema === rulesSchema) {
		log.info('Found a rules config')
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		return { rules: config } as T
	}

	log.error('Configuration is not valid. Ignoring and using default configuration.')
}

function inferZodSchema(
	unknownObject: unknown,
	testSchemas: z.ZodSchema[],
): undefined | z.ZodSchema {
	for (const schema of testSchemas) {
		if (schema.safeParse(unknownObject).success) {
			return schema
		}
	}
}
