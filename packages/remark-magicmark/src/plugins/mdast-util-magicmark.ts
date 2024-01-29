import clean from './transform/clean'
import expand from './transform/expand'
import split from './transform/split'
import validate from './transform/validate'
import { setDefaults } from './utilities'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'

// Lots of good stuff:
// https://github.com/Xunnamius/unified-utils

export type Options = {
	addMetaComment?: boolean
	closingPrefix?: string
	keywordPrefix?: string
	metaCommentPrefix?: string
	ruleFiles?: string[]
}

const defaultOptions: Options = {
	addMetaComment: true,
	closingPrefix: '/',
	keywordPrefix: '',
	metaCommentPrefix: '+',
	ruleFiles: ['./test/assets/test-rules.js'],
}

const mdastUtilMagicmark: Plugin<[Options], Root> = function (options) {
	const resolvedOptions = setDefaults(options, defaultOptions)

	this.use(split)
	this.use(clean)
	this.use(expand, resolvedOptions)
	this.use(validate, resolvedOptions)

	// Return async function (tree, file) {
	// 	console.log(options)
	// 	console.log(tree)
	// 	console.log(file)

	// 	file.message('Hi', tree)
	// }
}

export default mdastUtilMagicmark
