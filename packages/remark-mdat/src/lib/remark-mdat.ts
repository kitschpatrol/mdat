import { type Options as MdatOptions, mdat } from './mdast-utils/mdast-util-mdat'
import { deepMergeDefined } from './mdat/deep-merge-defined'
import { rulesSchema } from './mdat/rules'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { z } from 'zod'

// Remark-mdat provides sensible default options
// for the lower-level mdat utility functions
export type Options = Partial<MdatOptions>

const defaultOptions: Options = {
	addMetaComment: false,
	closingPrefix: '/',
	keywordPrefix: '',
	metaCommentIdentifier: '+',
	// One default rule out of the box
	rules: {
		mdat: `Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).`,
	},
}

// Schema is exported for validation in other packages
export const optionsSchema = z
	.object({
		addMetaComment: z.boolean().optional(),
		closingPrefix: z.string().optional(),
		keywordPrefix: z.string().optional(),
		metaCommentIdentifier: z.string().optional(),
		rules: rulesSchema.optional(),
	})
	.describe('MDAT Options')

/**
 * A remark plugin that expands HTML comments in Markdown files.
 */
const remarkMdat: Plugin<[Options], Root> = function (options) {
	const resolvedOptions = deepMergeDefined(defaultOptions, options) as Required<MdatOptions>

	return async function (tree, file) {
		await mdat(tree, file, resolvedOptions)
	}
}

export default remarkMdat
