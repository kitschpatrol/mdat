import { type ExpandAstOptions } from '../magicmark/src/lib'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'

// Async plugin pain:
// https://github.com/syntax-tree/unist-util-visit-parents/issues/8#issuecomment-1413405543
// https://github.com/gatsbyjs/gatsby/issues/16403

/**
 * A remark plugin that expands HTML comments in markdown files.
 */
export function remarkMagicmark(options: ExpandAstOptions): Plugin<void[], Root> {
	return function (tree) {
		console.log(options)
		console.log(tree)
		// Const promises: Array<Promise<Root>> = []
		// promises.push(expandAst(tree: Node, options))
	}
}

export default remarkMagicmark
