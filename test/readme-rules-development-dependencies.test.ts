import fs from 'node:fs/promises'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

const PACKAGE_MANAGER_VERSION_REGEX = /^pnpm@(?<version>[^+]+)/v

// Follows the packageManager pin in package.json, so pnpm bumps don't break
// these tests
const packageJson = JSON.parse(
	await fs.readFile(path.resolve(__dirname, '../package.json'), 'utf8'),
) as { packageManager: string }
const pinnedPnpmVersion = PACKAGE_MANAGER_VERSION_REGEX.exec(packageJson.packageManager)?.groups
	?.version

describe('development-dependencies rule', () => {
	it('should show the pinned package manager from the packageManager field', async () => {
		const result = await expandString('<!-- development-dependencies -->')
		const text = result.toString()

		expect(pinnedPnpmVersion).toBeDefined()
		expect(text).toContain('\n### Development dependencies\n')
		expect(text).toContain(`- [pnpm](https://pnpm.io/) ${pinnedPnpmVersion}`)
		expect(text).toContain('<!-- /development-dependencies -->')
	})

	it('should work via the dev-dependencies alias', async () => {
		const result = await expandString('<!-- dev-dependencies -->')
		const text = result.toString()

		expect(text).toContain('\n### Development dependencies\n')
		expect(text).toContain(`- [pnpm](https://pnpm.io/) ${pinnedPnpmVersion}`)
		expect(text).toContain('<!-- /dev-dependencies -->')
	})
})

describe('development-dependencies rule with devEngines', () => {
	const fixtureDirectory = path.resolve(__dirname, 'fixtures/dev-engines')
	let originalCwd: string

	beforeAll(() => {
		originalCwd = process.cwd()
		process.chdir(fixtureDirectory)
		resetMetadataCaches()
	})

	afterAll(() => {
		process.chdir(originalCwd)
		resetMetadataCaches()
	})

	it('should show runtimes and prefer devEngines ranges over the packageManager pin', async () => {
		const result = await expandString('<!-- development-dependencies -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- development-dependencies -->

			### Development dependencies

			- [Node.js](https://nodejs.org/) >=24.18.0
			- [pnpm](https://pnpm.io/) >=10

			<!-- /development-dependencies -->
			"
		`)
	})
})
