import type { Rules } from 'remark-mdat'
import { getSoleRule } from 'remark-mdat'
import description from './description'

/**
 * Simple alias for `description` rule, to match nomenclature in
 * [standard-readme](https://github.com/RichardLitt/standard-readme/blob/main/spec.md#short-description)
 * spec.
 */
export default {
	'short-description': getSoleRule(description),
} satisfies Rules
