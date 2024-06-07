import description from './description'
import { type Rules, getSoleRule } from 'remark-mdat'

/**
 * Simple alias for `description` rule, to match nomenclature in
 * [standard-readme](https://github.com/RichardLitt/standard-readme/blob/main/spec.md#short-description)
 * spec.
 */
export default {
	'short-description': getSoleRule(description),
} satisfies Rules
