import readmeRules from './rules'
import { findPackage, findReadme, setPackageFile } from './utilities'
import { type ExpandFileOptions, type ExpandStringOptions, expandFile, expandString } from 'mdat'
import type { SetOptional, Simplify } from 'type-fest'
import { type VFile } from 'vfile'

// Expand a readme string, mostly for testing
export type ExpandReadmeStringReport = {
	packageFile: string
	result: VFile
}

export type ExpandReadmeStringOptions = Simplify<
	SetOptional<ExpandStringOptions, 'rules'> & {
		packageFile?: string
	}
>
export async function expandReadmeString(
	markdown: string,
	options?: ExpandReadmeStringOptions,
): Promise<ExpandReadmeStringReport> {
	const {
		addMetaComment = true,
		keywordPrefix,
		packageFile = await findPackage(),
		rules = [],
	} = options ?? {}

	setPackageFile(packageFile)

	const result = await expandString(markdown, {
		addMetaComment,
		keywordPrefix,
		rules: [readmeRules, ...rules],
	})

	return {
		packageFile,
		result,
	}
}

// Expand a readme file, maps to CLI
export type ExpandReadmeFileReport = Simplify<
	ExpandReadmeStringReport & {
		readmeFile: string
	}
>
export type ExpandReadmeFileOptions = Simplify<
	SetOptional<ExpandFileOptions, 'rules'> & {
		packageFile?: string
		readmeFile?: string
	}
>
export async function expandReadmeFile(
	options?: ExpandReadmeFileOptions,
): Promise<ExpandReadmeFileReport> {
	const {
		addMetaComment = true,
		keywordPrefix,
		name,
		output,
		packageFile = await findPackage(),
		readmeFile = await findReadme(),
		rules = [],
	} = options ?? {}

	setPackageFile(packageFile)

	const result = await expandFile(readmeFile, {
		addMetaComment,
		keywordPrefix,
		name,
		output,
		rules: [readmeRules, ...rules],
	})

	return {
		packageFile,
		readmeFile,
		result,
	}
}
