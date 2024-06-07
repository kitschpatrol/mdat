import cliHelp from './cli-help'
import { type Rules, getSoleRule } from 'remark-mdat'

/**
 * Simple alias for cli-help
 */
export default {
	cli: getSoleRule(cliHelp),
} satisfies Rules
