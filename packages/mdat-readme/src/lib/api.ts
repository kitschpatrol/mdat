import { type MdatReadmeConfig, loadConfigReadme } from './config'
import {
	type CleanConfig,
	type ExpandConfig,
	type ExpandRules,
	cleanFile,
	cleanString,
	expandFile,
	expandString,
} from 'mdat'
import path from 'node:path'
import { type NormalizedPackageJson, readPackage } from 'read-pkg'
import { log } from 'remark-mdat'
import type { Simplify } from 'type-fest'
import { type VFile } from 'vfile'

export type CleanReadmeConfig = CleanConfig<MdatReadmeConfig>
export type ExpandReadmeConfig = ExpandConfig<MdatReadmeConfig>
export type ExpandReadmeRules = ExpandRules // No change

export type CleanReadmeFileReport = {
	readmeFile: string
	result: VFile
}

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

	// Set module global for rule access
	readmeConfig = resolvedConfig

	const { packageFile, readmeFile, ...expandFileConfig } = resolvedConfig

	// This should never happen because the defaults are set in loadConfigReadme
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

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

	// Set module global for rule access
	readmeConfig = resolvedConfig

	const { packageFile, readmeFile, ...expandConfig } = resolvedConfig

	// This should never happen because the defaults are set
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	const result = await expandString(markdown, expandConfig)

	return {
		packageFile,
		result,
	}
}

export async function cleanReadmeFile(config?: CleanReadmeConfig): Promise<CleanReadmeFileReport> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
	})

	const { packageFile, readmeFile, ...cleanFileConfig } = resolvedConfig

	// This should never happen because the defaults are set in loadConfigReadme
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	const result = await cleanFile(readmeFile, undefined, undefined, cleanFileConfig)

	return {
		readmeFile,
		result,
	}
}

export async function cleanReadmeString(
	markdown: string,
	config?: CleanReadmeConfig,
): Promise<VFile> {
	const resolvedConfig = await loadConfigReadme({
		additionalConfig: config,
	})

	const { packageFile, readmeFile, ...cleanConfig } = resolvedConfig

	// This should never happen because the defaults are set
	if (packageFile === undefined || readmeFile === undefined) {
		throw new Error('Package and readme files are required')
	}

	return cleanString(markdown, cleanConfig)
}

// Caution: Impure functions

// Let rules access config for custom behavior
let readmeConfig: MdatReadmeConfig

export async function getReadmeConfig(): Promise<Required<MdatReadmeConfig>> {
	// Defaults guarantee all keys will be defined
	// Readme config should be defined at this point when called from one of the
	// API functions that handle config loading, but if not, e.g. in testing,
	// we can load it here
	if (readmeConfig === undefined) {
		log.warn('getReadmeConfig(): readmeConfig was undefined')
		readmeConfig ??= await loadConfigReadme()
	}

	return readmeConfig as Required<MdatReadmeConfig>
}

// Convenience function for rules
// Load as package json only as needed, memoize
// Rules could call this themselves, but this is more convenient and efficient
let packageJson: NormalizedPackageJson

export async function getPackageJson(): Promise<NormalizedPackageJson> {
	const { packageFile } = await getReadmeConfig()

	packageJson ??= await readPackage({ cwd: path.dirname(packageFile) })

	if (packageJson === undefined) {
		throw new Error('No package.json found')
	}

	return packageJson
}
