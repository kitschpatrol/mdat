import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

const fixtureDirectory = path.resolve(__dirname, 'fixtures/cinder-block')

describe('readme rules for a Cinder block without a package.json', () => {
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

	it('should link the codemeta.json issue tracker and omit the shared-config line', async () => {
		const result = await expandString('<!-- contributing -->')
		const text = result.toString()
		expect(text).toContain('[Issues](https://github.com/example/Cinder-Fixture/issues)')
		expect(text).toContain(
			'This repository uses [MDAT](https://github.com/kitschpatrol/mdat) for readme placeholder expansion.',
		)
		expect(text).not.toContain('shared-config')
	})

	it('should URL-encode a license name containing spaces and a plus sign in the badge', async () => {
		const result = await expandString('<!-- badges -->')
		const text = result.toString()
		expect(text).toContain(
			'[![License: MIT + Proprietary](https://img.shields.io/badge/License-MIT%20%2B%20Proprietary-yellow.svg)](https://opensource.org/license/mit)',
		)
	})
})
