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
	metaCommentIdentifier?: string
	ruleFiles?: string[]
}

const defaultOptions: Options = {
	addMetaComment: true,
	closingPrefix: '/',
	keywordPrefix: '',
	metaCommentIdentifier: '+',
	ruleFiles: ['./test/assets/test-rules.js'],
}

const mdastUtilMagicmark: Plugin<[Options], Root> = function (options) {
	const resolvedOptions = setDefaults(options, defaultOptions)
	const { addMetaComment, closingPrefix, keywordPrefix, metaCommentIdentifier, ruleFiles } =
		resolvedOptions

	this.use(split)
	this.use(clean, {
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
	})
	this.use(expand, {
		addMetaComment,
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
		ruleFiles,
	})
	this.use(validate, {
		addMetaComment,
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
		ruleFiles,
	})
}

export default mdastUtilMagicmark
