// Import { type ExpandAstOptions } from '../magicmark/src/lib'

import mdastUtilMagicmark from './plugins/mdast-util-magicmark'
import type { Options } from './plugins/mdast-util-magicmark'
import type { Root } from 'mdast'
import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import type { Plugin } from 'unified'
import { reporter } from 'vfile-reporter'

// Async plugin pain:
// https://github.com/syntax-tree/unist-util-visit-parents/issues/8#issuecomment-1413405543
// https://github.com/gatsbyjs/gatsby/issues/16403

// Plugin types:
// https://github.com/orgs/unifiedjs/discussions/204
// https://github.com/facebook/docusaurus/blob/48cab8e3fb23ec45245d6608ee04f2818ac08187/packages/docusaurus-mdx-loader/src/remark/transformLinks/index.ts#L203

// Desired outcome:
// const processor = remark().use(remarkGfm).use(remarkMagicmarkPreset, { ...options })
// const file = await processor.process(toVfile(./README.md))
//
// Preset includes a bunch of stuff...

/**
 * A remark plugin that expands HTML comments in markdown files.
 */
// export function remarkMagicmark(options: ExpandAstOptions): Plugin<void[], Root> {

// Alternate form seems to have less accurate types:
// function remarkMagicmark(
// 	this: Processor<Root, Root, Root, Root, string>,
// 	options: Options,
// ): Transformer<Root> {

// https://github.com/syntax-tree/mdast-zone/tree/main

// close but... doesn't handle /comments
// prefer json args
// https://github.com/syntax-tree/mdast-comment-marker

export const remarkMagicmark: Plugin<[Options], Root> = function (options) {
	this.use(mdastUtilMagicmark, options)

	// Y this?
	// https://github.com/Xunnamius/unified-utils/blob/main/packages/remark-tight-comments/src/index.ts
	// const data = this.data() as Record<string, unknown>
	// add('toMarkdownExtensions', mdastUtilMagicmark(options))

	// function add(field: string, value: unknown) {
	// 	const list = // ? Be cognizant of other extensions
	// 		(data[field] || (data[field] = [])) as unknown[]

	// 	list.push(value)
	// }
}

export default remarkMagicmark

// Function remarkMagicmark(
// 	this: Processor<Root, Root, Root, Root, string>,
// 	options: Options,
// ): Transformer<Root> {
// 	// Const self = this
// 	const resolvedOptions = { ...defaultOptions, ...stripUndefined(options ?? {}) }

// 	this.use(mdastUtilMagicmark(resolvedOptions))

// 	console.log('----------------------------------')
// 	console.log(this)
// 	console.log('----------------------------------')

// 	return async function (tree, file) {
// 		console.log(options)
// 		console.log(tree)
// 		console.log(file)

// 		await Promise.resolve()
// 		// 	File.message('Hi', tree)
// 		// 	// Const promises: Array<Promise<Root>> = []
// 		// 	// promises.push(expandAst(tree: Node, options))
// 		// 	}
// 		// }
// 	}
// }

const buffer = await fs.readFile('./test/assets/test-document.md')
const file = await remark().use(remarkGfm).use(remarkMagicmark, {}).process(buffer)

console.error(reporter(file))

console.log(file.toString())
