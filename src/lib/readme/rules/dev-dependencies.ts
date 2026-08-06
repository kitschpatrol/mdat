import type { Rules } from 'remark-mdat'
import { getSoleRule } from 'remark-mdat'
import developmentDependencies from './development-dependencies'

/**
 * Simple alias for `development-dependencies`
 */
export default {
	'dev-dependencies': getSoleRule(developmentDependencies),
} satisfies Rules
