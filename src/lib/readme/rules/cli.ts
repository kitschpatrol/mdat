import { getSoleRule, type Rules } from 'remark-mdat'
import cliHelp from './cli-help'

/**
 * Simple alias for cli-help
 */
export default {
	cli: getSoleRule(cliHelp),
} satisfies Rules
