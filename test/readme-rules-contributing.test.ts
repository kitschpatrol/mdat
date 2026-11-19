import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

const KSC =
	'[ksc](https://github.com/kitschpatrol/shared-config) to handle linting and formatting with the usual tools'
const MDAT = '[mdat](https://github.com/kitschpatrol/mdat) for readme placeholder expansion'
const CHAGENT =
	'[chagent](https://github.com/kitschpatrol/chagent) to maintain the [changelog](changelog.md)'

type Project = {
	changelogFileName?: string
	dependencies?: Record<string, string>
	devDependencies?: Record<string, string>
}

async function expandContributingIn(project: Project): Promise<string> {
	const originalCwd = process.cwd()
	const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-contributing-'))
	try {
		await fs.writeFile(
			path.join(temporaryDirectory, 'package.json'),
			JSON.stringify({
				bugs: { url: 'https://github.com/example/fixture/issues' },
				dependencies: project.dependencies,
				devDependencies: project.devDependencies,
				name: 'contributing-fixture',
				version: '1.0.0',
			}),
		)
		if (project.changelogFileName !== undefined) {
			await fs.writeFile(path.join(temporaryDirectory, project.changelogFileName), '# Changelog\n')
		}

		process.chdir(temporaryDirectory)
		resetMetadataCaches()
		const result = await expandString('<!-- contributing -->')
		return result.toString()
	} finally {
		// Windows can't remove the working directory, so leave it first
		process.chdir(originalCwd)
		resetMetadataCaches()
		await fs.rm(temporaryDirectory, { force: true, recursive: true })
	}
}

describe('contributing rule tooling sentence', () => {
	it('should mention only MDAT when no other tools are present', async () => {
		const text = await expandContributingIn({})
		expect(text).toContain(`This repository uses ${MDAT}.`)
	})

	it('should mention ksc when shared-config is a dev dependency', async () => {
		const text = await expandContributingIn({
			devDependencies: { '@kitschpatrol/shared-config': '1.0.0' },
		})
		expect(text).toContain(`This repository uses ${KSC}, plus ${MDAT}.`)
	})

	it('should mention Chagent when it is a dev dependency and a changelog exists', async () => {
		const text = await expandContributingIn({
			changelogFileName: 'changelog.md',
			devDependencies: { '@kitschpatrol/chagent': '1.0.0' },
		})
		expect(text).toContain(`This repository uses ${MDAT}, plus ${CHAGENT}.`)
	})

	it('should mention Chagent when it is a regular dependency and a changelog exists', async () => {
		const text = await expandContributingIn({
			changelogFileName: 'changelog.md',
			dependencies: { '@kitschpatrol/chagent': '1.0.0' },
		})
		expect(text).toContain(`This repository uses ${MDAT}, plus ${CHAGENT}.`)
	})

	it('should compose all three tools into one sentence', async () => {
		const text = await expandContributingIn({
			changelogFileName: 'changelog.md',
			devDependencies: {
				'@kitschpatrol/chagent': '1.0.0',
				'@kitschpatrol/shared-config': '1.0.0',
			},
		})
		expect(text).toContain(`This repository uses ${KSC}, plus ${MDAT}, and ${CHAGENT}.`)
	})

	it('should link the changelog file name as it appears on disk', async () => {
		const text = await expandContributingIn({
			changelogFileName: 'CHANGELOG.md',
			devDependencies: { '@kitschpatrol/chagent': '1.0.0' },
		})
		expect(text).toContain('to maintain the [changelog](CHANGELOG.md).')
	})

	it('should omit Chagent when there is no changelog', async () => {
		const text = await expandContributingIn({
			devDependencies: { '@kitschpatrol/chagent': '1.0.0' },
		})
		expect(text).toContain(`This repository uses ${MDAT}.`)
		expect(text).not.toContain('github.com/kitschpatrol/chagent')
	})

	it('should omit Chagent when a changelog exists but Chagent is not a dependency', async () => {
		const text = await expandContributingIn({ changelogFileName: 'changelog.md' })
		expect(text).toContain(`This repository uses ${MDAT}.`)
		expect(text).not.toContain('github.com/kitschpatrol/chagent')
	})
})
