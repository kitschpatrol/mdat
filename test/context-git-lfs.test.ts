import { execa } from 'execa'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { getReadmeMetadata, resetMetadataCaches } from '../src/lib/context'

const gitLfsVersionResult = await execa('git', ['lfs', 'version'], { reject: false })
const gitLfsAvailable = gitLfsVersionResult.exitCode === 0

describe.skipIf(!gitLfsAvailable)('readme metadata in a repo with Git LFS', () => {
	let originalCwd: string
	let tempDirectory: string

	beforeAll(async () => {
		originalCwd = process.cwd()
		tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-git-lfs-'))

		await fs.writeFile(
			path.join(tempDirectory, 'package.json'),
			JSON.stringify({
				description: 'Fixture project with an LFS-tracked file.',
				name: 'mdat-git-lfs-fixture',
				private: true,
				version: '1.0.0',
			}),
		)
		await fs.writeFile(path.join(tempDirectory, 'model.bin'), 'binary-ish payload')

		const git = async (...arguments_: string[]) => execa('git', arguments_, { cwd: tempDirectory })
		await git('init')
		await git('config', 'user.email', 'test@example.com')
		await git('config', 'user.name', 'Test')
		await git('lfs', 'install', '--local')
		await git('lfs', 'track', '*.bin')
		await git('add', '.')
		await git('commit', '-m', 'Add LFS-tracked file')

		process.chdir(tempDirectory)
		resetMetadataCaches()
	})

	afterAll(async () => {
		process.chdir(originalCwd)
		resetMetadataCaches()
		await fs.rm(tempDirectory, { force: true, recursive: true })
	})

	it('should detect Git LFS usage', async () => {
		const metadata = await getReadmeMetadata()
		expect(metadata.usesGitLfs).toBe(true)
	})

	it('should include a Git LFS badge', async () => {
		const result = await expandString('<!-- badges -->')
		// Remark escapes the ampersand in the expanded markdown
		expect(result.toString()).toContain(
			String.raw`![Git LFS](https://img.shields.io/badge/Git%20LFS-enabled-F64935?logo=gitlfs\&logoColor=white)`,
		)
	})
})

describe('readme metadata in a repo without Git LFS', () => {
	it('should not detect Git LFS usage', async () => {
		resetMetadataCaches()
		const metadata = await getReadmeMetadata()
		expect(metadata.usesGitLfs).toBe(false)
	})
})
