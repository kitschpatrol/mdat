import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

const fixtureDirectory = path.resolve(__dirname, 'fixtures/banner')

describe('banner rule in a project with an image in a typical location', () => {
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

	it('should find the image without an explicit src', async () => {
		const result = await expandString('<!-- banner -->')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner -->

			![banner-fixture banner](assets/screenshot.svg)

			<!-- /banner -->
			"
		`)
	})
})
