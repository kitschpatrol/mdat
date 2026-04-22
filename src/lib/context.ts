import type { MetadataContext } from 'metascope'
import { defineTemplate, getMetadata as getMetascopeMetadata, helpers, templates } from 'metascope'
import path from 'node:path'

// Cache for memoization
let metascopeMetadata: MetadataContext | undefined

/**
 * Get a bunch of platform-agnostic local metadata via metascope, exposed
 * primarily for plugin developers. Result is memoized the result.
 *
 * @throws {Error} If no package.json is found
 */
export async function getContextMetadata(): Promise<MetadataContext> {
	if (metascopeMetadata !== undefined) return metascopeMetadata

	metascopeMetadata = await getMetascopeMetadata({
		absolute: false,
		offline: true,
		recursive: false,
		// Omit expensive analysis sources that mdat doesn't need
		sources: [
			'arduinoLibraryProperties',
			'cinderCinderblockXml',
			'codemetaJson',
			// 'codeStats',
			// 'dependencyUpdates',
			// 'fileStats',
			'gitConfig',
			// 'github',
			'githubActions',
			// 'gitStats',
			'goGoMod',
			'goGoreleaserYaml',
			'javaPomXml',
			'licenseFile',
			'metadataFile',
			'metascope',
			// 'nodeNpmRegistry',
			'nodePackageJson',
			'obsidianPluginManifestJson',
			// 'obsidianPluginRegistry',
			'openframeworksAddonConfigMk',
			'openframeworksInstallXml',
			'processingLibraryProperties',
			'processingSketchProperties',
			'publiccodeYaml',
			'pythonPkgInfo',
			// 'pythonPypiRegistry',
			'pythonPyprojectToml',
			'pythonSetupCfg',
			'pythonSetupPy',
			'readmeFile',
			'rubyGemspec',
			'rustCargoToml',
			'xcodeInfoPlist',
			'xcodeProjectPbxproj',
		],
	})

	return metascopeMetadata
}

const GIT_PREFIX_REGEX = /^git\+/
const GIT_SUFFIX_REGEX = /\.git$/
const TRAILING_SLASH_REGEX = /\/$/

/**
 * Reset cached context metadata. Call between tests or when the underlying
 * project files may have changed on disk.
 *
 * @public
 */
export function resetContextMetadata() {
	metascopeMetadata = undefined
}

// Helpful bridge from old pure package.json approach
const readmeMetadataTemplate = defineTemplate((context) => {
	const { githubActions, licenseFile, metascope, nodePackageJson } = context

	// Let the codemeta template do the heavy aggregation... cast is not as good as the internal schema parsing...
	const codemeta = templates.codemetaJson(context, {})

	const nodePackage = helpers.firstOf(nodePackageJson)?.data
	const licenseFileData = helpers.firstOf(licenseFile)
	const ciActionFilePath = helpers
		.ensureArray(githubActions)
		.find((entry) => entry.data.name.toLowerCase() === 'ci')?.source

	// Normalize repository URL: strip git+ prefix, trailing .git, and trailing slash
	const repositoryUrl = codemeta.codeRepository
		?.replace(GIT_PREFIX_REGEX, '')
		.replace(GIT_SUFFIX_REGEX, '')
		.replace(TRAILING_SLASH_REGEX, '')

	// CLI command names from bin field
	const bin = (() => {
		if (nodePackage === undefined) return undefined
		const binField = nodePackage.bin
		if (binField === undefined) return undefined
		if (typeof binField === 'string') return [nodePackage.name]
		const names = Object.keys(binField)
		return names.length > 0 ? names : undefined
	})()

	// Engine version constraints (e.g. { node: ">=22.17.0" })
	const engines = (() => {
		const raw = nodePackage?.engines
		if (raw === undefined) return undefined
		const entries = Object.entries(raw).filter(
			(entry): entry is [string, string] => entry[1] !== undefined,
		)
		return entries.length > 0 ? Object.fromEntries(entries) : undefined
	})()

	// Peer dependencies with optional metadata
	const peerDependencies = (() => {
		if (nodePackage === undefined) return undefined
		const peers = nodePackage.peerDependencies
		if (peers === undefined) return undefined
		const entries = Object.entries(peers).filter(
			(entry): entry is [string, string] => entry[1] !== undefined,
		)
		if (entries.length === 0) return undefined
		const meta = nodePackage.peerDependenciesMeta
		return entries.map(([name, version]) => ({
			name,
			optional: meta?.[name]?.optional === true,
			version,
		}))
	})()

	return {
		author: helpers.firstOf(helpers.mixedStringsToArray(helpers.toBasicNames(codemeta.author))),
		bin,
		ciActionFileName: ciActionFilePath ? path.basename(ciActionFilePath) : undefined,
		description: codemeta.description,
		engines,
		// See https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/HEAD/docs/rules/no-redundant-publishConfig.md
		// See https://docs.npmjs.com/cli/v8/commands/npm-publish
		isPublicNpmPackage:
			// Private to prevent publishing unscoped packages
			nodePackage?.private !== true &&
			// Scoped packages only public when publishConfig is set
			// eslint-disable-next-line ts/prefer-nullish-coalescing
			((nodePackage?.name.startsWith('@') && nodePackage.publishConfig?.access === 'public') ||
				true),
		issuesUrl: codemeta.issueTracker,
		license: helpers.toBasicLicense(helpers.firstOf(helpers.ensureArray(codemeta.license))),
		licenseFilePath: licenseFileData?.source,
		name: codemeta.name,
		operatingSystem: codemeta.operatingSystem,
		peerDependencies,
		projectDirectory:
			metascope?.data.options.path === undefined
				? undefined
				: `file://${metascope.data.options.path}`,
		repositoryUrl,
		runtimePlatform: codemeta.runtimePlatform,
		usesPnpm: helpers.usesPnpm(nodePackageJson),
	}
})

export type ReadmeMetadata = ReturnType<typeof readmeMetadataTemplate>

// Cache for memoization
let readmeMetadata: ReadmeMetadata | undefined

/**
 * Nice data for readme rules
 *
 * @public
 */
export async function getReadmeMetadata() {
	if (readmeMetadata !== undefined) return readmeMetadata

	const contextMetadata = await getContextMetadata()

	readmeMetadata = readmeMetadataTemplate(contextMetadata, {})

	return readmeMetadata
}

/**
 * Reset cached readme metadata. Call between tests or when the underlying
 * project files may have changed on disk.
 *
 * @public
 */
export function resetReadmeMetadata() {
	readmeMetadata = undefined
}

/**
 * Reset all cached metadata. Call between tests or when the underlying project
 * files may have changed on disk.
 */
export function resetMetadataCaches() {
	resetContextMetadata()
	resetReadmeMetadata()
}
