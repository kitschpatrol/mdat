import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { checkString, expandString } from '../src/lib/api'
import { getReadmeMetadata, resetMetadataCaches } from '../src/lib/context'

describe('GitHub metadata through Metascope', () => {
	let originalCwd: string
	let tempDirectory: string

	beforeEach(async () => {
		originalCwd = process.cwd()
		tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-metadata-file-'))
		process.chdir(tempDirectory)
		resetMetadataCaches()
	})

	afterEach(async () => {
		process.chdir(originalCwd)
		resetMetadataCaches()
		await fs.rm(tempDirectory, { force: true, recursive: true })
	})

	async function writeJson(name: string, data: unknown) {
		await fs.writeFile(path.join(tempDirectory, name), JSON.stringify(data))
	}

	it('should expand a metadata description with the existing README title', async () => {
		await fs.writeFile(path.join(tempDirectory, 'readme.md'), '# Asterism\n')
		await writeJson('metadata.json', { description: 'A light sculpture for Disorient.' })

		const result = await expandString('<!-- title -->\n\n<!-- description -->')
		expect(result.messages.filter((message) => message.fatal)).toEqual([])
		expect(result.toString()).toContain('# Asterism')
		expect(result.toString()).toContain('**A light sculpture for Disorient.**')
		const checked = await checkString(result.toString())
		expect(checked.inSync).toBe(true)
	})

	it.each(['yaml', 'yml'])('should consume the description from metadata.%s', async (extension) => {
		await fs.writeFile(
			path.join(tempDirectory, `metadata.${extension}`),
			'description: A light sculpture for Disorient.\n',
		)

		const result = await expandString('<!-- short-description -->')
		expect(result.messages.filter((message) => message.fatal)).toEqual([])
		expect(result.toString()).toContain('**A light sculpture for Disorient.**')
	})

	it('should preserve canonical package descriptions and repository URLs', async () => {
		await writeJson('package.json', {
			description: 'Package description.',
			name: 'package-name',
			repository: 'git+https://github.com/example/package.git',
			version: '1.0.0',
		})
		await writeJson('metadata.json', {
			description: 'Metadata description.',
			repository: 'https://github.com/example/metadata',
		})

		expect(await getReadmeMetadata()).toMatchObject({
			description: 'Package description.',
			name: 'package-name',
			repositoryUrl: 'https://github.com/example/package',
		})
	})

	it('should fill missing package fields from metadata.json', async () => {
		await writeJson('package.json', { name: 'package-name', version: '1.0.0' })
		await writeJson('metadata.json', {
			description: 'Metadata description.',
			repository: 'git+https://github.com/example/metadata.git',
		})

		expect(await getReadmeMetadata()).toMatchObject({
			description: 'Metadata description.',
			name: 'package-name',
			repositoryUrl: 'https://github.com/example/metadata',
		})
	})

	it('should preserve existing CodeMeta values ahead of metadata fallbacks', async () => {
		await writeJson('codemeta.json', {
			codeRepository: 'https://github.com/example/codemeta',
			description: 'CodeMeta description.',
			name: 'CodeMeta name',
		})
		await writeJson('metadata.json', {
			description: 'Metadata description.',
			repository: 'https://github.com/example/metadata',
		})

		expect(await getReadmeMetadata()).toMatchObject({
			description: 'CodeMeta description.',
			name: 'CodeMeta name',
			repositoryUrl: 'https://github.com/example/codemeta',
		})
	})

	it('should ignore names and richer CodeMeta fields in the narrow metadata format', async () => {
		await fs.writeFile(path.join(tempDirectory, 'readme.md'), '# README title\n')
		await writeJson('metadata.json', {
			author: 'Ignored author',
			description: 'Metadata description.',
			license: 'MIT',
			name: 'Ignored name',
			runtimePlatform: ['Processing'],
		})

		const metadata = await getReadmeMetadata()
		expect(metadata.name).toBe('README title')
		expect(metadata.description).toBe('Metadata description.')
		expect(metadata.author).toBeUndefined()
		expect(metadata.license).toBeUndefined()
		expect(metadata.runtimePlatform).toBeUndefined()
	})

	it('should use the metadata file selected by Metascope when multiple formats exist', async () => {
		await writeJson('metadata.json', { description: 'JSON description.' })
		await fs.writeFile(
			path.join(tempDirectory, 'metadata.yaml'),
			'description: YAML description.\n',
		)

		const metadata = await getReadmeMetadata()
		expect(metadata.description).toBe('JSON description.')
	})

	it('should report a missing title when only GitHub metadata exists', async () => {
		await writeJson('metadata.json', { description: 'Metadata description.' })

		const result = await expandString('<!-- title -->\n\n<!-- description -->')
		expect(result.toString()).toContain('**Metadata description.**')
		const errors = result.messages.filter((message) => message.fatal)
		expect(errors).toHaveLength(1)
		expect(errors[0]?.message).toContain('Could not find project name')
	})

	it('should report a missing project description without referring to package.json', async () => {
		await fs.writeFile(path.join(tempDirectory, 'readme.md'), '# Asterism\n')

		const result = await expandString('<!-- title -->\n\n<!-- description -->')
		expect(result.toString()).toContain('# Asterism')
		const errors = result.messages.filter((message) => message.fatal)
		expect(errors).toHaveLength(1)
		expect(errors[0]?.message).toContain('Could not find project description')
	})
})
