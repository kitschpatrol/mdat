import { type Options as MdatOptions, mdat } from './mdast-utils/mdast-util-mdat'
import { setDefaults } from './mdat/defaults'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'

export type Options = Partial<MdatOptions>

const defaultOptions: Options = {
	addMetaComment: false,
	closingPrefix: '/',
	keywordPrefix: '',
	metaCommentIdentifier: '+',
	rules: [],
}

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
