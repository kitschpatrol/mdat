import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

function useDirectory(getDirectory: () => Promise<string> | string) {
	let originalCwd: string

	beforeAll(async () => {
		originalCwd = process.cwd()
		process.chdir(await getDirectory())
		resetMetadataCaches()
	})

	afterAll(() => {
		process.chdir(originalCwd)
		resetMetadataCaches()
	})
}

function useFixture(name: string) {
	useDirectory(() => path.resolve(__dirname, 'fixtures', name))
}

async function getErrorReasons(markdown: string): Promise<string> {
	const result = await expandString(markdown)
	return result.messages.map((message) => message.reason).join('\n')
}

describe('badges rule options', () => {
	it('should add opt-in badges after the automatic ones and before custom badges', async () => {
		const result = await expandString(
			"<!-- badges({ bundleSize: true, custom: { Custom: { image: 'https://example.com/badge.svg', link: 'https://example.com' } }, githubRelease: true, npmDownloads: true }) -->",
		)

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges({ bundleSize: true, custom: { Custom: { image: 'https://example.com/badge.svg', link: 'https://example.com' } }, githubRelease: true, npmDownloads: true }) -->

			[![NPM Package mdat](https://img.shields.io/npm/v/mdat.svg)](https://www.npmjs.com/package/mdat)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)
			[![CI](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml)
			[![Homebrew](https://img.shields.io/badge/Homebrew-kitschpatrol%2Ftap%2Fmdat-FBB040?logo=homebrew\\&logoColor=white)](https://github.com/kitschpatrol/homebrew-tap/blob/HEAD/Formula/mdat.rb)
			[![GitHub Release](https://img.shields.io/github/v/release/kitschpatrol/mdat?label=Release)](https://github.com/kitschpatrol/mdat/releases/latest)
			[![NPM Downloads mdat](https://img.shields.io/npm/dm/mdat)](https://www.npmjs.com/package/mdat)
			[![Bundle Size mdat](https://img.shields.io/bundlephobia/minzip/mdat?label=Size)](https://bundlephobia.com/package/mdat)
			[![Custom](https://example.com/badge.svg)](https://example.com)

			<!-- /badges -->
			"
		`)
	})

	it('should add download and size badges for each listed npm package', async () => {
		const result = await expandString(
			"<!-- badges({ bundleSize: true, homebrew: false, npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli'], npmDownloads: true }) -->",
		)

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges({ bundleSize: true, homebrew: false, npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli'], npmDownloads: true }) -->

			[![NPM Package svelte-tweakpane-ui](https://img.shields.io/npm/v/svelte-tweakpane-ui.svg)](https://www.npmjs.com/package/svelte-tweakpane-ui)
			[![NPM Package @kitschpatrol/tldraw-cli](https://img.shields.io/npm/v/@kitschpatrol/tldraw-cli.svg)](https://www.npmjs.com/package/@kitschpatrol/tldraw-cli)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)
			[![CI](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml)
			[![NPM Downloads svelte-tweakpane-ui](https://img.shields.io/npm/dm/svelte-tweakpane-ui)](https://www.npmjs.com/package/svelte-tweakpane-ui)
			[![NPM Downloads @kitschpatrol/tldraw-cli](https://img.shields.io/npm/dm/@kitschpatrol/tldraw-cli)](https://www.npmjs.com/package/@kitschpatrol/tldraw-cli)
			[![Bundle Size svelte-tweakpane-ui](https://img.shields.io/bundlephobia/minzip/svelte-tweakpane-ui?label=Size)](https://bundlephobia.com/package/svelte-tweakpane-ui)
			[![Bundle Size @kitschpatrol/tldraw-cli](https://img.shields.io/bundlephobia/minzip/@kitschpatrol/tldraw-cli?label=Size)](https://bundlephobia.com/package/@kitschpatrol/tldraw-cli)

			<!-- /badges -->
			"
		`)
	})

	it('should hide every automatic badge whose option is false', async () => {
		const result = await expandString(
			'<!-- badges({ ci: false, gitLfs: false, homebrew: false, license: false, npm: false, vscode: false, custom: { Kept: { image: "https://example.com/badge.svg", link: "https://example.com" } } }) -->',
		)

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges({ ci: false, gitLfs: false, homebrew: false, license: false, npm: false, vscode: false, custom: { Kept: { image: "https://example.com/badge.svg", link: "https://example.com" } } }) -->

			[![Kept](https://example.com/badge.svg)](https://example.com)

			<!-- /badges -->
			"
		`)
	})

	it('should keep download badges for the detected package when the version badge is hidden', async () => {
		const result = await expandString(
			'<!-- badges({ ci: false, homebrew: false, license: false, npm: false, npmDownloads: true }) -->',
		)

		expect(result.toString()).toContain(
			'[![NPM Downloads mdat](https://img.shields.io/npm/dm/mdat)](https://www.npmjs.com/package/mdat)',
		)
		expect(result.toString()).not.toContain('NPM Package')
	})

	it('should reject an empty npm package list', async () => {
		expect(await getErrorReasons('<!-- badges({ npm: [] }) -->')).toContain(
			'Pass npm: false instead of an empty array',
		)
	})

	it('should escape an explicit Homebrew formula for shields.io', async () => {
		const result = await expandString(
			"<!-- badges({ homebrew: 'example/my-tap/my_formula', npm: false }) -->",
		)

		expect(result.toString()).toContain(
			String.raw`[![Homebrew](https://img.shields.io/badge/Homebrew-example%2Fmy--tap%2Fmy__formula-FBB040?logo=homebrew\&logoColor=white)](https://github.com/example/homebrew-my-tap/blob/HEAD/Formula/my_formula.rb)`,
		)
	})

	it('should reject a Homebrew formula that is not in owner/tap/formula form', async () => {
		expect(await getErrorReasons("<!-- badges({ homebrew: 'mdat' }) -->")).toContain(
			'option expects a formula in the form',
		)
	})

	it('should reject required badges without the metadata to generate them', async () => {
		expect(await getErrorReasons('<!-- badges({ vscode: true }) -->')).toContain(
			'The "vscode" badge was requested, but package.json is missing a "publisher" or "engines.vscode" field',
		)
		expect(await getErrorReasons('<!-- badges({ gitLfs: true }) -->')).toContain(
			'The "gitLfs" badge was requested, but the repository does not track any files with Git LFS',
		)
		expect(await getErrorReasons('<!-- badges({ obsidianDownloads: true }) -->')).toContain(
			'The "obsidianDownloads" badge was requested, but no Obsidian plugin manifest.json was found',
		)
	})
})

describe('badges rule for a VS Code extension', () => {
	useFixture('vscode-extension')

	it('should detect the extension and read its version from the package.json in the repository directory', async () => {
		const result = await expandString('<!-- badges -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges -->

			[![Visual Studio Marketplace Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fexample%2Ffixture%2FHEAD%2Ftest%2Ffixtures%2Fvscode-extension%2Fpackage.json\\&query=version\\&label=VS%20Code%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=example.vscode-extension-fixture)

			<!-- /badges -->
			"
		`)
	})
})

describe('badges rule for a VS Code extension outside GitHub', () => {
	useFixture('vscode-extension-non-github')

	it('should skip the detected VS Code badge', async () => {
		const result = await expandString('<!-- badges -->')

		expect(result.toString()).not.toContain('Marketplace')
	})

	it('should reject badges that need a GitHub repository', async () => {
		for (const option of ['vscode', 'githubRelease']) {
			expect(await getErrorReasons(`<!-- badges({ ${option}: true }) -->`)).toContain(
				'the repository URL "https://gitlab.com/example/fixture" is not a GitHub repository',
			)
		}
	})
})

describe('badges rule for an Obsidian plugin', () => {
	useFixture('obsidian-plugin')

	it('should add release and download badges from the repository and plugin manifest', async () => {
		const result = await expandString(
			'<!-- badges({ githubRelease: true, obsidianDownloads: true }) -->',
		)

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges({ githubRelease: true, obsidianDownloads: true }) -->

			[![GitHub Release](https://img.shields.io/github/v/release/example/obsidian-plugin-fixture?label=Release)](https://github.com/example/obsidian-plugin-fixture/releases/latest)
			[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian\\&color=%23A88BFA\\&label=Downloads\\&query=%24%5B%22example-plugin%22%5D.downloads\\&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://community.obsidian.md/plugins/example-plugin)

			<!-- /badges -->
			"
		`)
	})
})

describe('badges rule for a package published to a Homebrew tap', () => {
	useFixture('cli-only')

	it('should detect the formula from the release script', async () => {
		const result = await expandString('<!-- badges -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges -->

			[![NPM Package @example/cli-only-fixture](https://img.shields.io/npm/v/@example/cli-only-fixture.svg)](https://www.npmjs.com/package/@example/cli-only-fixture)
			[![Homebrew](https://img.shields.io/badge/Homebrew-example%2Ftools%2Fcli--only--fixture-FBB040?logo=homebrew\\&logoColor=white)](https://github.com/example/homebrew-tools/blob/HEAD/Formula/cli-only-fixture.rb)

			<!-- /badges -->
			"
		`)
	})
})

describe('badges rule for a package without a license file, CI workflow, or Homebrew tap', () => {
	useFixture('library-only')

	it('should show only the badges it has metadata for', async () => {
		const result = await expandString('<!-- badges -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges -->

			[![NPM Package library-only-fixture](https://img.shields.io/npm/v/library-only-fixture.svg)](https://www.npmjs.com/package/library-only-fixture)

			<!-- /badges -->
			"
		`)
	})

	it('should reject required badges', async () => {
		expect(await getErrorReasons('<!-- badges({ license: true }) -->')).toContain(
			'The "license" badge was requested, but no license file matching a known SPDX license was found',
		)
		expect(await getErrorReasons('<!-- badges({ ci: true }) -->')).toContain(
			'The "ci" badge was requested, but no GitHub Actions workflow named "CI" was found',
		)
		expect(await getErrorReasons('<!-- badges({ homebrew: true }) -->')).toContain(
			'The "homebrew" badge was requested, but no "brewpub --tap <owner>/<tap>" invocation was found',
		)
	})
})

describe('badges rule for a CI workflow without a repository URL', () => {
	let temporaryDirectory: string

	useDirectory(async () => {
		temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-badges-ci-'))
		await fs.mkdir(path.join(temporaryDirectory, '.github/workflows'), { recursive: true })
		await fs.writeFile(
			path.join(temporaryDirectory, '.github/workflows/ci.yml'),
			'name: CI\non: push\njobs: {}\n',
		)
		await fs.writeFile(
			path.join(temporaryDirectory, 'package.json'),
			JSON.stringify({ name: 'ci-without-repository-fixture', private: true, version: '1.0.0' }),
		)
		return temporaryDirectory
	})

	afterAll(async () => {
		await fs.rm(temporaryDirectory, { force: true, recursive: true })
	})

	it('should reject a required CI badge', async () => {
		expect(await getErrorReasons('<!-- badges({ ci: true }) -->')).toContain(
			'The "ci" badge was requested, but no repository URL was found',
		)
	})
})

describe('badges rule for a private package', () => {
	useFixture('private-package')

	it('should reject required npm badges', async () => {
		for (const option of ['npm', 'npmDownloads', 'bundleSize']) {
			expect(await getErrorReasons(`<!-- badges({ ${option}: true }) -->`)).toContain(
				`The "${option}" badge was requested, but no public npm package was found`,
			)
		}
	})

	it('should reject a required GitHub release badge without a repository URL', async () => {
		expect(await getErrorReasons('<!-- badges({ githubRelease: true }) -->')).toContain(
			'The "githubRelease" badge was requested, but no repository URL was found',
		)
	})
})
