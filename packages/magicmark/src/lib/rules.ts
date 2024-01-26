import log from '../lib/log'
import { type Root } from 'mdast'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import plur from 'plur'
import type { JsonObject } from 'type-fest'

// Basic interface for comment expanders
export type Rule = {
	/**
	 * The order in which the rule should be applied when used in a preset collection.
	 * Used for validation purposes.
	 * Leave undefined to is application order is inconsequential.
	 */
	applicationOrder?: number
	/**
	 * Gets content to expand at the comment site.
	 * @param ast matching document tree, necessary for some expanders like TOC.
	 * Do not mutate the AST.
	 * @param options JSON object of options passed to the
	 * expander. Options may be defined in the comment as JSON strings, e.g.:
	 * `<!-- keyword({something: true}) -->` or
	 * `<!-- keyword {something: true}-->`
	 * If no JSON object is provided from the template, an empty object will be passed by default.
	 * @returns A markdown string with the generated content
	 * not be generated.
	 */
	getContent: (options: JsonObject, ast: Root) => Promise<string>
	/**
	 * The keyword to match in the comment.
	 * `<!-- keyword -->`
	 */
	keyword: string
	/**
	 * The expected order of the keyword in the document relative to other expander comments.
	 * Used for validation purposes.
	 * Leave undefined to order skip validation.
	 */
	order?: number
	/**
	 * Whether the presence of the keyword comment in the document is required.
	 * Used for validation purposes.
	 * Leave undefined to skip presence validation.
	 */
	required?: boolean
}

// Collection of expanders for use as a preset
export type RuleSet = Record<string, Rule>

/**
 *
 * @param rules - An array that can mix string that are paths to rule .js module files
 * that will be dynamically loaded, or RuleSet objects that have already been
 * loaded. Rules will be merged from left to right, so later rules will override
 * earlier rules.
 * @returns
 */
export async function loadRules(rules: Array<RuleSet | string>): Promise<RuleSet> {
	// Load modules as needed
	let finalRules: RuleSet = {}

	for (const ruleSetOrRuleModulePath of rules) {
		if (typeof ruleSetOrRuleModulePath === 'string') {
			// Load module
			const ruleModulePath = ruleSetOrRuleModulePath

			const fullPath = path.resolve(process.cwd(), ruleModulePath)
			const { default: ruleModule } = (await import(
				fileURLToPath(new URL(`file://${fullPath}`))
			)) as { default: RuleSet }

			// TODO validate module
			// TODO support TS? See SystemJS and SystemJS babel plugin

			const rulesLoadedCount = Object.entries(ruleModule).length

			if (rulesLoadedCount === 0) {
				throw new Error(`No rules found in module: "${ruleModulePath}"`)
			} else {
				log.info(`Loaded ${rulesLoadedCount} rules from file: "${ruleModulePath}"`)
			}

			finalRules = { ...finalRules, ...ruleModule }
		} else {
			// Merge rule into finalRules
			const ruleSet = ruleSetOrRuleModulePath

			const rulesLoadedCount = Object.entries(ruleSet).length

			if (rulesLoadedCount === 0) {
				throw new Error(`No rules found in internal module`)
			} else {
				log.info(
					`Loaded ${rulesLoadedCount} ${plur('rule', rulesLoadedCount)} from internal module`,
				)
			}

			finalRules = { ...finalRules, ...ruleSet }
		}
	}

	const finalRulesLoadedCount = Object.entries(finalRules).length
	if (finalRulesLoadedCount === 0) {
		throw new Error(`No rules found. Did you forget to pass in paths to a rules module?`)
	}

	log.info(
		`Loaded ${finalRulesLoadedCount} magicmark comment expansion ${plur('rule', finalRulesLoadedCount)} in total`,
	)

	return finalRules
}
