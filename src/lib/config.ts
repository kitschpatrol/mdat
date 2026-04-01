import type { CosmiconfigResult } from 'cosmiconfig'
import type { NormalizedPackageJson } from 'read-pkg'
import type { Rules } from 'remark-mdat'
// Export separately to prevent mangling by rolldown-plugin-dts
// eslint-disable-next-line unicorn/prefer-export-from
export type { Rules }
import type { JsonValue } from 'type-fest'
import { cosmiconfig } from 'cosmiconfig'
import { TypeScriptLoader as typeScriptLoader } from 'cosmiconfig-typescript-loader'
import fs from 'node:fs/promises'
import path from 'node:path'
import picocolors from 'picocolors'
import plur from 'plur'
import { readPackage } from 'read-pkg'
import { rulesSchema } from 'remark-mdat'
import { log } from './log'
import { mdatJsonLoader } from './mdat-json-loader'
import { findPackage } from './utilities'

/**
 * Generously accept either string paths to .ts, .js, or .json files with
 * `Rules` type default exports.
 */
export type RulesToLoad = Array<Rules | string> | Rules | string

/**
 * Load and validate mdat rule sets.
 * Uses cosmiconfig to search in the usual places.
 * Merge precedence: Base Defaults < Readme Defaults < Searched Config < Additional Rules
 */
export async function loadRules(options?: {
	/**
	 * Additional Rules objects to merge.
	 *
	 * Strings are treated as paths to `ts`, `js`, or `json` files with `Rules` type default exports.
	 * These will be dynamically loaded by Cosmiconfig.
	 * Accepts an individual item, or an array. Objects in the array will be merged right to left.
	 */
	additionalRules?: RulesToLoad
	/**
	 * Readme-specific default rules that have higher priority than base defaults but lower than searched config.
	 * Used internally by loadRulesReadme.
	 */
	readmeDefaults?: Rules
	/** Search for config in specific directories, mainly useful for testing. Cosmiconfig default search paths used if unset. */
	searchFrom?: string
}): Promise<Rules> {
	const { additionalRules, readmeDefaults, searchFrom } = options ?? {}

	// Invalidate cached state from previous calls
	packageJson = undefined

	// Base default rules
	let finalRules: Rules = {
		mdat: `Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).`,
	}

	// 1. Merge readme defaults if provided (higher priority than base defaults)
	if (readmeDefaults) {
		finalRules = { ...finalRules, ...readmeDefaults }
	}

	// 2. Search and load cosmiconfig locations
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
		let possibleRules = config as unknown

		log.info(`Using config from "${filepath}"`)

		// Special case for loading shared configs via a package.json key
		if (filepath.endsWith('package.json') && typeof config === 'string') {
			log.info(`Detected shared config string: "${config}"`)
			const { default: sharedConfig } = (await import(config)) as { default: unknown }
			possibleRules = sharedConfig
		}

		const validatedRules = validateRules(possibleRules)
		if (validatedRules) {
			finalRules = { ...finalRules, ...validatedRules }
		}
	}

	// 3. Load and merge additional rule sets
	if (additionalRules !== undefined) {
		const additionalRulesArray = Array.isArray(additionalRules)
			? additionalRules
			: [additionalRules]

		// Create cosmiconfig loader with custom handling
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
				let results: CosmiconfigResult
				// Special work-around for Cosmiconfig's rather zealous package.json interception
				if (path.basename(rulesOrPath).endsWith('package.json')) {
					const packageJson = await fs.readFile(rulesOrPath, 'utf8')
					const flatJson = mdatJsonLoader(rulesOrPath, packageJson) as JsonValue
					results = {
						config: flatJson,
						filepath: rulesOrPath,
					}
				} else {
					results = await rulesExplorer.load(rulesOrPath)
				}

				// eslint-disable-next-line ts/no-unnecessary-condition
				if (results === null || results === undefined) continue
				// eslint-disable-next-line ts/no-unsafe-assignment
				const { config: loadedRules, filepath } = results
				log.info(`Loaded additional config from "${filepath}"`)
				rules = loadedRules
			} else {
				rules = rulesOrPath
			}

			if (rules === undefined) continue

			log.info('Merging rules into configuration object')
			const validatedRules = validateRules(rules)
			if (validatedRules) {
				finalRules = { ...finalRules, ...validatedRules }
			}
		}
	}

	const prettyRules = Object.keys(finalRules)
		.toSorted()
		.map((rule) => `"${picocolors.green(picocolors.bold(rule))}"`)
	log.info(
		`Loaded ${picocolors.bold(prettyRules.length)} mdat comment expansion ${plur('rule', prettyRules.length)}:`,
	)
	for (const rule of prettyRules) {
		log.info(`\t${rule}`)
	}

	return finalRules
}

// Helpers

function validateRules(value: unknown): Rules | undefined {
	if (rulesSchema.safeParse(value).success) {
		return value as Rules
	}

	// Also accept objects with a `rules` key (backward compat with old Config shape)
	if (
		typeof value === 'object' &&
		value !== null &&
		'rules' in value &&
		rulesSchema.safeParse((value as { rules: unknown }).rules).success
	) {
		log.info('Detected config object with "rules" key, extracting rules')
		return (value as { rules: Rules }).rules
	}

	log.error(
		`Rules object has the wrong shape. Ignoring and using default configuration:\n${JSON.stringify(value, undefined, 2)}`,
	)
}

// Package JSON helpers

let packageJson: NormalizedPackageJson | undefined

/**
 * Convenience function for rules.
 * Auto-discovers the closest package.json, memoizes the result.
 * @throws {Error} If no package.json is found
 */
export async function getPackageJson(): Promise<NormalizedPackageJson> {
	if (packageJson !== undefined) return packageJson

	const packageFile = await findPackage()
	if (packageFile === undefined) {
		throw new Error('No package.json found')
	}

	packageJson = await readPackage({ cwd: path.dirname(packageFile) })
	// eslint-disable-next-line ts/no-unnecessary-condition
	if (packageJson === undefined) {
		throw new Error('No package.json found')
	}

	return packageJson
}

/**
 * Convenience function for merging rules.
 * Rightmost rules take precedence.
 */
export function mergeRules(a: Rules, b: Rules): Rules {
	return { ...a, ...b }
}
