import { type Rules } from '../mdat/rules'
import { mdatClean } from './mdast-util-mdat-clean'
import { mdatExpand } from './mdast-util-mdat-expand'
import { mdatSplit } from './mdast-util-mdat-split'
import { mdatValidate } from './mdast-util-mdat-validate'
import type { Root } from 'mdast'
import { type VFile } from 'vfile'

export type Options = {
	addMetaComment: boolean
	closingPrefix: string
	keywordPrefix: string
	metaCommentIdentifier: string
	rules: Rules
}

export async function mdat(tree: Root, file: VFile, options: Options): Promise<void> {
	const { addMetaComment, closingPrefix, keywordPrefix, metaCommentIdentifier, rules } = options

	mdatSplit(tree, file)

	mdatClean(tree, file, {
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
	})

	await mdatExpand(tree, file, {
		addMetaComment,
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
		rules,
	})

	await mdatValidate(tree, file, {
		addMetaComment,
		closingPrefix,
		keywordPrefix,
		metaCommentIdentifier,
		paranoid: false,
		rules,
	})
}
