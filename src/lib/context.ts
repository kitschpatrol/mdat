import type { MetadataContext } from 'metascope'
import { defineTemplate, getMetadata as getMetascopeMetadata, helpers, templates } from 'metascope'
import path from 'node:path'

// Cache for memoization
let pathMetadata: MetadataContext | undefined
let metascopeMetadata: MetadataContext | undefined

/**
 * Lightweight metascope call for path discovery (readme file location).
 * Uses source filtering to only scan for readme files — very fast.
 * Result is memoized.
 */
export async function getPathMetadata(): Promise<MetadataContext> {
	if (pathMetadata !== undefined) return pathMetadata

	pathMetadata = await getMetascopeMetadata({
		offline: true,
		sources: ['readmeFile'],
	})

	return pathMetadata
}

/**
 * Reset path metadata cache.
 */
export function resetPathMetadata() {
	pathMetadata = undefined
}

/**
 * Get a bunch of platform-agnostic local metadata via metascope, exposed
 * primarily for plugin developers.
 * Result is memoized the result.
 * @throws {Error} If no package.json is found
 */
export async function getContextMetadata(): Promise<MetadataContext> {
	if (metascopeMetadata !== undefined) return metascopeMetadata

	metascopeMetadata = await getMetascopeMetadata({
		absolute: false,
		offline: true,
	})

	return metascopeMetadata
}

/**
 * Reset
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

	return {
		author: helpers.firstOf(helpers.mixedStringsToArray(helpers.toBasicNames(codemeta.author))),
		ciActionFileName: ciActionFilePath ? path.basename(ciActionFilePath) : undefined,
		description: codemeta.description,
		// Unscoped packages are always public
		// Scoped packages are only public if publishConfig.access is set to 'public', default is implicitly 'restricted'
		// See https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/HEAD/docs/rules/no-redundant-publishConfig.md
		// See https://docs.npmjs.com/cli/v8/commands/npm-publish
		isPublicNpmPackage:
			!nodePackage?.name.startsWith('@') || nodePackage.publishConfig?.access === 'public',
		issuesUrl: codemeta.issueTracker,
		license: helpers.toBasicLicense(helpers.firstOf(helpers.ensureArray(codemeta.license))),
		licenseFilePath: licenseFileData?.source,
		name: codemeta.name,
		projectDirectory:
			metascope?.data.options.path === undefined
				? undefined
				: `file://${metascope.data.options.path}`,
	}
})

export type ReadmeMetadata = ReturnType<typeof readmeMetadataTemplate>

// Cache for memoization
let readmeMetadata: ReadmeMetadata | undefined

/**
 * Nice data for readme rules
 */
export async function getReadmeMetadata() {
	if (readmeMetadata !== undefined) return readmeMetadata

	const contextMetadata = await getContextMetadata()

	readmeMetadata = readmeMetadataTemplate(contextMetadata, {})

	return readmeMetadata
}

/**
 * Reset
 */
export function resetReadmeMetadata() {
	readmeMetadata = undefined
}
