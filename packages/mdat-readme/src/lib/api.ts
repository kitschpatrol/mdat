import { type MdatReadmeConfig, loadConfigReadme } from './config'
import { setPackageFile } from './utilities'
import { type ExpandOptions, expandFile, expandString } from 'mdat'
import type { Simplify } from 'type-fest'
import { type VFile } from 'vfile'

export type ExpandReadmeOptions = ExpandOptions<MdatReadmeConfig>

// Expand a readme file, maps to CLI
export type ExpandReadmeFileReport = Simplify<
	ExpandReadmeStringReport & {
		readmeFile: string
	}
>

export async function expandReadmeFile(
	options?: ExpandReadmeOptions,
): Promise<ExpandReadmeFileReport> {
	const resolvedOptions = await loadConfigReadme({ additionalConfigsOrRules: options })
	const { packageFile, readmeFile, ...expandFileOptions } = resolvedOptions

	// This should never happen because the defaults are set in loadConfigReadme
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	// Hacky global state for rules
	setPackageFile(packageFile)

	// No second deep load because expandFileOptions already has loaded and normalized rules
	const result = await expandFile(readmeFile, undefined, undefined, [expandFileOptions])

	return {
		packageFile,
		readmeFile,
		result,
	}
}

// Expand a readme string, mostly for testing
export type ExpandReadmeStringReport = {
	packageFile: string
	result: VFile
}

export async function expandReadmeString(
	markdown: string,
	options?: ExpandReadmeOptions,
): Promise<ExpandReadmeStringReport> {
	const resolvedOptions = await loadConfigReadme({ additionalConfigsOrRules: options })
	const { packageFile, readmeFile, ...expandOptions } = resolvedOptions

	// This should never happen because the defaults are set
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	// Hacky global state for rules
	setPackageFile(packageFile)

	const result = await expandString(markdown, [expandOptions])

	return {
		packageFile,
		result,
	}
}
