import { type MdatReadmeConfig, loadConfigReadme } from './config'
import { setPackageFile } from './utilities'
import { type ExpandConfig, type ExpandRules, expandFile, expandString } from 'mdat'
import type { Simplify } from 'type-fest'
import { type VFile } from 'vfile'

export type ExpandReadmeConfig = ExpandConfig<MdatReadmeConfig>
export type ExpandReadmeRules = ExpandRules // No change

// Expand a readme file, maps to CLI
export type ExpandReadmeFileReport = Simplify<
	ExpandReadmeStringReport & {
		readmeFile: string
	}
>

export async function expandReadmeFile(
	config?: ExpandReadmeConfig,
	rules?: ExpandReadmeRules,
): Promise<ExpandReadmeFileReport> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
		additionalRules: rules,
	})
	const { packageFile, readmeFile, ...expandFileConfig } = resolvedConfig

	// This should never happen because the defaults are set in loadConfigReadme
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	// Hacky global state for rules
	setPackageFile(packageFile)

	// No second deep load because expandFileOptions already has loaded and normalized rules
	const result = await expandFile(readmeFile, undefined, undefined, expandFileConfig)

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
	config?: ExpandReadmeConfig,
	rules?: ExpandReadmeRules,
): Promise<ExpandReadmeStringReport> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
		additionalRules: rules,
	})
	const { packageFile, readmeFile, ...expandConfig } = resolvedConfig

	// This should never happen because the defaults are set
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	// Hacky global state for rules
	setPackageFile(packageFile)

	const result = await expandString(markdown, expandConfig)

	return {
		packageFile,
		result,
	}
}
