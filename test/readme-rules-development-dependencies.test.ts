import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

describe('development-dependencies rule', () => {
	it('should show the pinned package manager from the packageManager field', async () => {
		const result = await expandString('<!-- development-dependencies -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- development-dependencies -->

			## Development Dependencies

			- [pnpm](https://pnpm.io/) 11.18.0

			<!-- /development-dependencies -->
			"
		`)
	})

	it('should work via the dev-dependencies alias', async () => {
		const result = await expandString('<!-- dev-dependencies -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- dev-dependencies -->

			## Development Dependencies

			- [pnpm](https://pnpm.io/) 11.18.0

			<!-- /dev-dependencies -->
			"
		`)
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

			## Development Dependencies

			- [Node.js](https://nodejs.org/en) >=24.18.0
			- [pnpm](https://pnpm.io/) >=10

			<!-- /development-dependencies -->
			"
		`)
	})
})
