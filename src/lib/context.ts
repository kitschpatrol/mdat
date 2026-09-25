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
	if (metascopeMetadata !== undefined) {
		return metascopeMetadata
	}

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
			'gitStats',
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

const GIT_PREFIX_REGEX = /^git\+/v
const GIT_SUFFIX_REGEX = /\.git$/v
const TRAILING_SLASH_REGEX = /\/$/v
const PACKAGE_MANAGER_REGEX = /^(?<name>[^@]+)@(?<version>[^+]+)/v
const BREWPUB_TAP_REGEX = /\bbrewpub\b[^&;]*?--tap[ =](?<tap>[\w.\-\/]+)/v
const BREWPUB_NAME_REGEX = /\bbrewpub\b[^&;]*?--name[ =](?<name>[\w.\-\/@+]+)/v
const HOMEBREW_TAP_PREFIX_REGEX = /^homebrew-/v

/**
 * True if the package.json `exports` field declares a `types` condition
 * anywhere in its (possibly nested) structure.
 */
function containsTypesKey(exports: unknown): boolean {
	return (
		typeof exports === 'object' &&
		exports !== null &&
		Object.entries(exports).some(([key, value]) => key === 'types' || containsTypesKey(value))
	)
}

/**
 * True if the package is importable as a library, as opposed to a CLI-only
 * package that only exposes a `bin`.
 */
function isLibraryPackage(
	nodePackage: undefined | { exports?: unknown; main?: unknown; module?: unknown; types?: unknown },
): boolean {
	return (
		nodePackage !== undefined &&
		[nodePackage.exports, nodePackage.main, nodePackage.module, nodePackage.types].some(
			(entry) => entry !== undefined,
		)
	)
}

/**
 * Supported operating systems from the package.json `os` field, which codemeta
 * doesn't carry. Exclusions like `!win32` are ignored since they don't name a
 * supported platform.
 */
function getSupportedOperatingSystems(os: string[] | undefined): string[] | undefined {
	const supported = helpers.ensureArray(os).filter((entry) => !entry.startsWith('!'))
	return supported.length > 0 ? supported : undefined
}

/**
 * Derive the `brew install` path for a package published to a Homebrew tap with
 * [brewpub](https://github.com/kitschpatrol/brewpub), by finding the `brewpub
 * --tap <owner>/<tap>` invocation in the package.json scripts. Mirrors
 * brewpub's formula naming: the `--name` option if passed, otherwise the
 * package name without its scope.
 *
 * @returns E.g. `kitschpatrol/tap/mdat`, or undefined if brewpub isn't used
 */
function getHomebrewFormula(
	packageName: string | undefined,
	scripts: Record<string, string | undefined> | undefined,
): string | undefined {
	if (packageName === undefined || scripts === undefined) {
		return undefined
	}

	for (const script of Object.values(scripts)) {
		const tap = BREWPUB_TAP_REGEX.exec(script ?? '')?.groups?.tap
		if (tap === undefined) {
			continue
		}

		const [owner, tapName] = tap.split('/', 2)
		if (owner === undefined || tapName === undefined) {
			continue
		}

		const formula =
			BREWPUB_NAME_REGEX.exec(script ?? '')?.groups?.name ??
			packageName.slice(packageName.indexOf('/') + 1).toLowerCase()

		return `${owner}/${tapName.replace(HOMEBREW_TAP_PREFIX_REGEX, '')}/${formula}`
	}

	return undefined
}

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
	const { githubActions, gitStats, licenseFile, metascope, nodePackageJson } = context

	// Let the codemeta template do the heavy aggregation... cast is not as good as the internal schema parsing...
	const codemeta = templates.codemetaJson(context, {})

	const nodePackage = helpers.firstOf(nodePackageJson)?.data
	const licenseFileData = helpers.firstOf(licenseFile)
	const ciActionFilePath = helpers
		.ensureArray(githubActions)
		.find((entry) => entry.data.name.toLowerCase() === 'ci')?.source

	// Normalize repository URL: strip git+ prefix, trailing .git, and trailing slash
	const repoUrl = codemeta.codeRepository
		?.replace(GIT_PREFIX_REGEX, '')
		.replace(GIT_SUFFIX_REGEX, '')
		.replace(TRAILING_SLASH_REGEX, '')

	// CLI command names from bin field
	const bin = (() => {
		if (nodePackage === undefined) {
			return
		}

		const binField = nodePackage.bin
		if (binField === undefined) {
			return
		}

		if (typeof binField === 'string') {
			return [nodePackage.name]
		}

		const names = Object.keys(binField)
		return names.length > 0 ? names : undefined
	})()

	// Engine version constraints (e.g. { node: ">=22.17.0" })
	const engines = (() => {
		const raw = nodePackage?.engines
		if (raw === undefined) {
			return
		}

		const entries = Object.entries(raw).filter(
			(entry): entry is [string, string] => entry[1] !== undefined,
		)
		return entries.length > 0 ? Object.fromEntries(entries) : undefined
	})()

	// Peer dependencies with optional metadata
	const peerDependencies = (() => {
		if (nodePackage === undefined) {
			return
		}

		const peers = nodePackage.peerDependencies
		if (peers === undefined) {
			return
		}

		const entries = Object.entries(peers).filter(
			(entry): entry is [string, string] => entry[1] !== undefined,
		)

		if (entries.length === 0) {
			return
		}

		const meta = nodePackage.peerDependenciesMeta
		return entries.map(([name, version]) => ({
			name,
			optional: meta?.[name]?.optional === true,
			version,
		}))
	})()

	// Development environment requirements from the `devEngines` and
	// `packageManager` fields in package.json
	const developmentDependencies = (() => {
		if (nodePackage === undefined) {
			return
		}

		const runtimes = helpers
			.ensureArray(nodePackage.devEngines?.runtime)
			.map(({ name, version }) => ({ name, version }))

		const packageManagers = helpers
			.ensureArray(nodePackage.devEngines?.packageManager)
			.map(({ name, version }) => ({ name, version }))

		// Top-level packageManager pin, e.g. "pnpm@10.0.0" or "pnpm@10.0.0+sha512..."
		// devEngines entries take precedence since they express the actual requirement range
		const pinnedPackageManager =
			nodePackage.packageManager === undefined
				? undefined
				: PACKAGE_MANAGER_REGEX.exec(nodePackage.packageManager)?.groups
		if (
			pinnedPackageManager?.name !== undefined &&
			pinnedPackageManager.version !== undefined &&
			packageManagers.every((entry) => entry.name !== pinnedPackageManager.name)
		) {
			packageManagers.push({
				name: pinnedPackageManager.name,
				version: pinnedPackageManager.version,
			})
		}

		if (runtimes.length === 0 && packageManagers.length === 0) {
			return
		}

		return {
			packageManagers: packageManagers.length > 0 ? packageManagers : undefined,
			runtimes: runtimes.length > 0 ? runtimes : undefined,
		}
	})()

	const homebrewFormula = getHomebrewFormula(nodePackage?.name, nodePackage?.scripts)

	const firstAuthor = helpers.firstOf(helpers.ensureArray(codemeta.author))

	return {
		author: helpers.firstOf(helpers.mixedStringsToArray(helpers.toBasicNames(codemeta.author))),
		authorUrl: firstAuthor?.url,
		bin,
		ciActionFileName: ciActionFilePath === undefined ? undefined : path.basename(ciActionFilePath),
		description: codemeta.description,
		developmentDependencies,
		engines,
		hasTypes: nodePackage?.types !== undefined || containsTypesKey(nodePackage?.exports),
		homebrewFormula,
		isLibrary: isLibraryPackage(nodePackage),
		isNodePackage: nodePackage !== undefined,
		// See https://docs.npmjs.com/cli/v8/commands/npm-publish
		isPublicNpmPackage: nodePackage !== undefined && nodePackage.private !== true,
		issuesUrl: codemeta.issueTracker,
		license: helpers.toBasicLicense(helpers.firstOf(helpers.ensureArray(codemeta.license))),
		licenseFilePath: licenseFileData?.source,
		licenseUrl: licenseFileData?.data.match?.spdxUrl,
		name: codemeta.name,
		operatingSystem: codemeta.operatingSystem ?? getSupportedOperatingSystems(nodePackage?.os),
		peerDependencies,
		projectDirectory:
			metascope?.data.options.path === undefined
				? undefined
				: `file://${metascope.data.options.path}`,
		repositoryUrl: repoUrl,
		runtimePlatform: codemeta.runtimePlatform,
		usesGitLfs: helpers.firstOf(gitStats)?.data.hasLfs === true,
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
	if (readmeMetadata !== undefined) {
		return readmeMetadata
	}

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
