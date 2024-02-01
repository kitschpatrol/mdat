import { type Options as MdatOptions, mdat } from './mdast-utils/mdast-util-mdat'
import { setDefaults } from './mdat/defaults'
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
		rules: rulesSchema,
	})
	.describe('Mdat Options')

/**
 * A remark plugin that expands HTML comments in Markdown files.
 */
const remarkMdat: Plugin<[Options], Root> = function (options) {
	const resolvedOptions = setDefaults(options, defaultOptions)

	return async function (tree, file) {
		await mdat(tree, file, resolvedOptions)
	}
}

export default remarkMdat

// Const buffer = await fs.readFile('./test/assets/test-document.md')
// const file = await remark()
// 	.use(remarkGfm)
// 	.use(remarkMdat, {
// 		rules: ['./test/assets/test-rules.js'],
// 	})
// 	.process(buffer)

// console.error(reporter(file))
// // Console.log(file.toString())
