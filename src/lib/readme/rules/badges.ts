import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import type { ReadmeMetadata } from '../../context'
import { getReadmeMetadata } from '../../context'

const HOMEBREW_FORMULA_REGEX = /^(?<owner>[^\/]+)\/(?<tap>[^\/]+)\/(?<formula>[^\/]+)$/v
const GITHUB_REPOSITORY_REGEX = /^https:\/\/github\.com\/(?<owner>[^\/]+)\/(?<repo>[^\/]+)$/v

const NO_NPM_PACKAGE =
	'no public npm package was found. Remove "private": true from package.json if the package is published, or list packages explicitly, e.g. badges({ npm: ["package-name"] })'

const optionsSchema = z.object({
	bundleSize: z.boolean().optional(),
	ci: z.boolean().optional(),
	custom: z
		.record(
			z.string(),
			z.object({
				image: z.string(),
				link: z.string(),
			}),
		)
		.default({}),
	githubRelease: z.boolean().optional(),
	gitLfs: z.boolean().optional(),
	homebrew: z
		.union([
			z.boolean(),
			z
				.string()
				.regex(
					HOMEBREW_FORMULA_REGEX,
					'The badges "homebrew" option expects a formula in the form "owner/tap/formula"',
				),
		])
		.optional(),
	license: z.boolean().optional(),
	npm: z
		.union([
			z.boolean(),
			z
				.array(z.string())
				.min(1, 'Pass npm: false instead of an empty array to hide the NPM version badge'),
		])
		.optional(),
	npmDownloads: z.boolean().optional(),
	obsidianDownloads: z.boolean().optional(),
	vscode: z.boolean().optional(),
})

type BadgeOptions = z.infer<typeof optionsSchema>

type BadgeContext = ReadmeMetadata & {
	/** Packages for the npm-based badges, from the `npm` option or detected */
	npmPackages: string[]
	options: BadgeOptions
}

/** Badge lines, or the reason the badge can't be generated */
type BadgeResult = string[] | { unavailable: string }

type BadgeDefinition = {
	/** Option that shows, hides, or requires the badge */
	key: Exclude<keyof BadgeOptions, 'custom'>
	/** Hidden unless its option is set, instead of shown whenever available */
	optIn?: boolean
	render: (context: BadgeContext) => BadgeResult
}

/**
 * Escape text for a path segment of a shields.io static badge, where `-` and
 * `_` are delimiters and must be doubled to appear literally.
 */
function escapeStaticBadgeText(text: string): string {
	return encodeURIComponent(text.replaceAll('-', '--').replaceAll('_', '__'))
}

/**
 * One badge per npm package, for badges that report on npm packages.
 */
function mapNpmPackages(
	npmPackages: string[],
	toBadge: (packageName: string) => string,
): BadgeResult {
	return npmPackages.length === 0
		? { unavailable: NO_NPM_PACKAGE }
		: npmPackages.map((packageName) => toBadge(packageName))
}

/**
 * Owner and name of the project's GitHub repository, or undefined if the
 * repository isn't on GitHub.
 */
function getGithubRepository(repositoryUrl = ''): undefined | { owner: string; repo: string } {
	const { owner, repo } = GITHUB_REPOSITORY_REGEX.exec(repositoryUrl)?.groups ?? {}
	return owner === undefined || repo === undefined ? undefined : { owner, repo }
}

/**
 * Reason for badges that need a GitHub repository.
 */
function getNotGithubReason(repositoryUrl: string | undefined): string {
	const problem =
		repositoryUrl === undefined
			? 'no repository URL was found in the project metadata'
			: `the repository URL "${repositoryUrl}" is not a GitHub repository`
	return `${problem}. Set the "repository" field in package.json to the project's GitHub repository.`
}

/**
 * Explicit package names are useful for monorepos. Otherwise the package itself
 * is used if it's public, even when the NPM version badge is hidden, so the
 * download and size badges can still appear.
 */
function getNpmPackages(
	option: BadgeOptions['npm'],
	{ isPublicNpmPackage, name }: ReadmeMetadata,
): string[] {
	if (Array.isArray(option)) {
		return option
	}

	return isPublicNpmPackage && name !== undefined ? [name] : []
}

/**
 * Badges in display order. Each appears when its metadata is available unless
 * it's `optIn`, and its option can hide it (`false`) or require it (`true`).
 */
const badgeDefinitions: BadgeDefinition[] = [
	{
		key: 'npm',
		render: ({ npmPackages }) =>
			mapNpmPackages(
				npmPackages,
				(packageName) =>
					`[![NPM Package ${packageName}](https://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.com/package/${packageName})`,
			),
	},
	{
		key: 'license',
		// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
		render: ({ license, licenseUrl }) =>
			license === undefined || licenseUrl === undefined
				? { unavailable: 'no license file matching a known SPDX license was found' }
				: [
						`[![License: ${license}](https://img.shields.io/badge/License-${license.replaceAll('-', '--')}-yellow.svg)](${licenseUrl})`,
					],
	},
	{
		key: 'ci',
		render({ ciActionFileName, repositoryUrl }) {
			if (ciActionFileName === undefined) {
				return {
					unavailable: 'no GitHub Actions workflow named "CI" was found in .github/workflows',
				}
			}

			if (repositoryUrl === undefined) {
				return { unavailable: 'no repository URL was found in the project metadata' }
			}

			return [
				`[![CI](${repositoryUrl}/actions/workflows/${ciActionFileName}/badge.svg)](${repositoryUrl}/actions/workflows/${ciActionFileName})`,
			]
		},
	},
	{
		key: 'gitLfs',
		render: ({ usesGitLfs }) =>
			usesGitLfs
				? [
						'![Git LFS](https://img.shields.io/badge/Git%20LFS-enabled-F64935?logo=gitlfs&logoColor=white)',
					]
				: { unavailable: 'the repository does not track any files with Git LFS' },
	},
	{
		key: 'vscode',
		// Shields.io retired its VS Code Marketplace badge, so the version is read
		// from the extension's package.json on GitHub instead
		render({ repositoryDirectory, repositoryUrl, vscodeExtensionId }) {
			if (vscodeExtensionId === undefined) {
				return { unavailable: 'package.json is missing a "publisher" or "engines.vscode" field' }
			}

			const repository = getGithubRepository(repositoryUrl)
			if (repository === undefined) {
				return {
					unavailable: `the extension version is read from package.json on GitHub, but ${getNotGithubReason(repositoryUrl)}`,
				}
			}

			const packageJsonPath = [repositoryDirectory, 'package.json']
				.filter((segment) => segment !== undefined)
				.join('/')
			const packageJsonUrl = `https://raw.githubusercontent.com/${repository.owner}/${repository.repo}/HEAD/${packageJsonPath}`

			return [
				`[![Visual Studio Marketplace Version](https://img.shields.io/badge/dynamic/json?url=${encodeURIComponent(packageJsonUrl)}&query=version&label=VS%20Code%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=${vscodeExtensionId})`,
			]
		},
	},
	{
		key: 'homebrew',
		// Links to the formula file in the tap's repository, which Homebrew names
		// `<owner>/homebrew-<tap>` by convention
		render({ homebrewFormula, options }) {
			const formulaPath = typeof options.homebrew === 'string' ? options.homebrew : homebrewFormula
			if (formulaPath === undefined) {
				return {
					unavailable:
						'no "brewpub --tap <owner>/<tap>" invocation was found in the package.json scripts. Pass the formula explicitly instead, e.g. badges({ homebrew: "owner/tap/formula" })',
				}
			}

			const formulaParts = HOMEBREW_FORMULA_REGEX.exec(formulaPath)?.groups
			if (
				formulaParts?.owner === undefined ||
				formulaParts.tap === undefined ||
				formulaParts.formula === undefined
			) {
				return {
					unavailable: `the detected formula "${formulaPath}" is not in the form "owner/tap/formula"`,
				}
			}

			const { formula, owner, tap } = formulaParts

			return [
				`[![Homebrew](https://img.shields.io/badge/Homebrew-${escapeStaticBadgeText(formulaPath)}-FBB040?logo=homebrew&logoColor=white)](https://github.com/${owner}/homebrew-${tap}/blob/HEAD/Formula/${formula}.rb)`,
			]
		},
	},
	{
		key: 'githubRelease',
		optIn: true,
		render({ repositoryUrl }) {
			const repository = getGithubRepository(repositoryUrl)
			if (repository === undefined) {
				return { unavailable: getNotGithubReason(repositoryUrl) }
			}

			const { owner, repo } = repository

			return [
				`[![GitHub Release](https://img.shields.io/github/v/release/${owner}/${repo}?label=Release)](https://github.com/${owner}/${repo}/releases/latest)`,
			]
		},
	},
	{
		key: 'npmDownloads',
		optIn: true,
		render: ({ npmPackages }) =>
			mapNpmPackages(
				npmPackages,
				(packageName) =>
					`[![NPM Downloads ${packageName}](https://img.shields.io/npm/dm/${packageName})](https://www.npmjs.com/package/${packageName})`,
			),
	},
	{
		key: 'obsidianDownloads',
		optIn: true,
		// Obsidian publishes download counts for every community plugin in a single
		// JSON file, which shields.io queries by plugin ID
		render({ obsidianPluginId }) {
			if (obsidianPluginId === undefined) {
				return { unavailable: 'no Obsidian plugin manifest.json was found' }
			}

			const statsUrl =
				'https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json'
			const query = `$["${obsidianPluginId}"].downloads`

			return [
				`[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23A88BFA&label=Downloads&query=${encodeURIComponent(query)}&url=${encodeURIComponent(statsUrl)})](https://community.obsidian.md/plugins/${obsidianPluginId})`,
			]
		},
	},
	{
		key: 'bundleSize',
		optIn: true,
		render: ({ npmPackages }) =>
			mapNpmPackages(
				npmPackages,
				(packageName) =>
					`[![Bundle Size ${packageName}](https://img.shields.io/bundlephobia/minzip/${packageName}?label=Size)](https://bundlephobia.com/package/${packageName})`,
			),
	},
	// TODO PyPi
]

export default {
	badges: {
		async content(options?) {
			const validOptions = optionsSchema.parse(options ?? {})
			const metadata = await getReadmeMetadata()
			const context: BadgeContext = {
				...metadata,
				npmPackages: getNpmPackages(validOptions.npm, metadata),
				options: validOptions,
			}

			const badges: string[] = []

			for (const { key, optIn = false, render } of badgeDefinitions) {
				const option = validOptions[key]
				if (option === false || (optIn && option === undefined)) {
					continue
				}

				const result = render(context)
				if (Array.isArray(result)) {
					badges.push(...result)
				} else if (option !== undefined) {
					throw new Error(`The "${key}" badge was requested, but ${result.unavailable}`)
				}
			}

			// Custom badges
			for (const [badgeName, { image, link }] of Object.entries(validOptions.custom)) {
				badges.push(`[![${badgeName}](${image})](${link})`)
			}

			return badges.join('\n')
		},
	},
} satisfies Rules
