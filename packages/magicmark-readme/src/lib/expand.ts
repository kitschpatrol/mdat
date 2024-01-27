import readmeRules from './rules'
import { findPackage, findReadme, setPackageFile } from './utilities'
import {
	type ExpandFileOptions,
	type ExpandFileReport,
	type ExpandStringOptions,
	type ExpandStringReport,
	expandFile,
	expandString,
} from 'magicmark'
import { type Simplify } from 'type-fest'
import { type SetOptional } from 'type-fest'

// Expand a readme string, mostly for testing
export type ExpandReadmeStringReport = Simplify<
	ExpandStringReport & {
		packageFile: string
	}
>
export type ExpandReadmeStringOptions = Simplify<
	SetOptional<ExpandStringOptions, 'rules'> & {
		packageFile?: string
	}
>
export async function expandReadmeString(
	markdown: string,
	options?: ExpandReadmeStringOptions,
): Promise<ExpandReadmeStringReport> {
	const { meta = true, packageFile = await findPackage(), prefix, rules = [] } = options ?? {}

	setPackageFile(packageFile)

	const { expandedString, report } = await expandString(markdown, {
		meta,
		prefix,
		rules: [readmeRules, ...rules],
	})

	return {
		expandedString,
		packageFile,
		report,
	}
}

// Expand a readme file, maps to CLI
export type ExpandReadmeFileReport = Simplify<
	ExpandFileReport & {
		packageFile: string
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
		meta = true,
		name,
		output,
		packageFile = await findPackage(),
		prefix,
		print,
		readmeFile = await findReadme(),
		rules = [],
	} = options ?? {}

	setPackageFile(packageFile)

	const result = await expandFile(readmeFile, {
		meta,
		name,
		output,
		prefix,
		print,
		rules: [readmeRules, ...rules],
	})

	return {
		...result,
		packageFile,
		readmeFile,
	}
}
