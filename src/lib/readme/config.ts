import type { Rules } from 'remark-mdat'
import { loadRules } from '../config'
import readmeRules from './rules'

type LoadRulesOptions = Parameters<typeof loadRules>[0]

/**
 * Convenience loader to always include the default readme rules.
 * The readme defaults should have lower priority than searched/user rules,
 * but higher priority than base mdat defaults.
 */
export async function loadRulesReadme(options?: LoadRulesOptions): Promise<Rules> {
	const { additionalRules = [], readmeDefaults = readmeRules, ...rest } = options ?? {}
	const additionalRulesArray = Array.isArray(additionalRules) ? additionalRules : [additionalRules]

	return loadRules({
		additionalRules: additionalRulesArray,
		readmeDefaults,
		...rest,
	})
}
