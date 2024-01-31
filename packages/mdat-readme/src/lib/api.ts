import { type MdatReadmeConfig } from './config'
import readmeRules from './rules'
import { findPackage, findReadme, setPackageFile } from './utilities'
import { deepmerge } from 'deepmerge-ts'
import { type ExpandFileOptions, type ExpandStringOptions, expandFile, expandString } from 'mdat'
import type { SetOptional, Simplify } from 'type-fest'
import { type VFile } from 'vfile'

async function getReadmeDefaults(): Promise<MdatReadmeConfig> {
	return {
		addMetaComment: true,
		packageFile: await findPackage(),
		readmeFile: await findReadme(),
		rules: readmeRules,
	}
}

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
	const { packageFile, readmeFile, ...expandStringOptions } = deepmerge(
		await getReadmeDefaults(),
		options ?? {},
	)

	// This should never happen because the defaults are set
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	// Hacky global state for rules
	setPackageFile(packageFile)

	const result = await expandString(markdown, expandStringOptions)

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
	const { name, output, packageFile, readmeFile, ...expandFileOptions } = deepmerge(
		await getReadmeDefaults(),
		options ?? {},
	)

	// This should never happen because the defaults are set
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	// Hacky global state for rules
	setPackageFile(packageFile)

	const result = await expandFile(readmeFile, {
		name,
		output,
		...expandFileOptions,
	})

	return {
		packageFile,
		readmeFile,
		result,
	}
}
