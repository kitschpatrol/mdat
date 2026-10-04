import type { Rules } from 'remark-mdat'
import { getSoleRule } from 'remark-mdat'
import install from './install'

/**
 * Simple alias for `install`
 */
export default {
	installation: getSoleRule(install),
} satisfies Rules
