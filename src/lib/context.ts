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

	return {
		author: helpers.firstOf(helpers.mixedStringsToArray(helpers.toBasicNames(codemeta.author))),
		ciActionFileName: ciActionFilePath ? path.basename(ciActionFilePath) : undefined,
		description: codemeta.description,
		// See https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/HEAD/docs/rules/no-redundant-publishConfig.md
		// See https://docs.npmjs.com/cli/v8/commands/npm-publish
		isPublicNpmPackage:
			// Private to prevent publishing unscoped packages
			nodePackage?.private === false &&
			// Unscoped packages public by default
			(!nodePackage.name.startsWith('@') ||
				// Scoped packages only public when publishConfig is set
				nodePackage.publishConfig?.access === 'public'),
		issuesUrl: codemeta.issueTracker,
		license: helpers.toBasicLicense(helpers.firstOf(helpers.ensureArray(codemeta.license))),
		licenseFilePath: licenseFileData?.source,
		name: codemeta.name,
		projectDirectory:
			metascope?.data.options.path === undefined
				? undefined
				: `file://${metascope.data.options.path}`,
		repositoryUrl,
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
