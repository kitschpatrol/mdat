import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { getReadmeMetadata, resetMetadataCaches } from '../src/lib/context'

const fixtureDirectory = path.resolve(__dirname, 'fixtures/proprietary-license')

/**
 * Regression test for an unrecognizable license file. metascope's `licenseFile`
 * source records `{ data: { type: 'unknown' }, source }` for proprietary "All
 * Rights Reserved" notices that don't map to any SPDX template. mdat must read
 * `licenseUrl` from `data.match?.spdxUrl` and leave it undefined in this case
 * without crashing — earlier metascope versions deep-stripped the `data` field
 * entirely, which threw "Cannot read properties of undefined (reading 'match')"
 * when expanding description / title in projects with such a license.
 */
describe('readme metadata with a proprietary license file', () => {
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

	it('should resolve without throwing and leave licenseUrl undefined', async () => {
		const metadata = await getReadmeMetadata()
		expect(metadata.licenseFilePath).toBe('license.txt')
		expect(metadata.licenseUrl).toBeUndefined()
		expect(metadata.description).toBe('Fixture project with a proprietary, non-SPDX license file.')
	})
})
