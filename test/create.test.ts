import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { create } from '../src/lib/api'

describe('createReadme', () => {
	const tempDirectories: string[] = []

	afterEach(async () => {
		for (const directory of tempDirectories) {
			await fs.rm(directory, { force: true, recursive: true })
		}

		tempDirectories.length = 0
	})

	it('should create a readme with default options', { timeout: 30_000 }, async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)

		const readmePath = await create({
			expand: false,
			output: tempDirectory,
		})

		expect(readmePath).toContain('readme.md')
		const content = await fs.readFile(readmePath, 'utf8')
		// Should contain mdat comment placeholders
		expect(content).toContain('<!--')
	})

	it('should create explicit (non-compound) template', { timeout: 30_000 }, async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)

		const readmePath = await create({
			compound: false,
			expand: false,
			output: tempDirectory,
		})

		const content = await fs.readFile(readmePath, 'utf8')
		// Explicit templates use individual comments like <!-- title --> instead of <!-- header -->
		expect(content).toContain('<!-- title -->')
	})

	it('should throw when overwrite is disabled and file exists', { timeout: 30_000 }, async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)

		// Create the file first
		await fs.writeFile(path.join(tempDirectory, 'readme.md'), 'existing', 'utf8')

		await expect(
			create({
				expand: false,
				output: tempDirectory,
				overwrite: false,
			}),
		).rejects.toThrow('Readme already exists')
	})

	it('should create and expand a readme when expand is true', { timeout: 30_000 }, async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)

		const readmePath = await create({
			expand: true,
			output: tempDirectory,
		})

		const content = await fs.readFile(readmePath, 'utf8')
		// Expanded content should have closing mdat tags
		expect(content).toContain('<!-- /')
	})

	it('should use a specific template', { timeout: 30_000 }, async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)

		const readmePath = await create({
			compound: true,
			expand: false,
			output: tempDirectory,
			template: 'Standard Readme Basic',
		})

		const content = await fs.readFile(readmePath, 'utf8')
		expect(content).toContain('<!--')
	})

	it('should throw for an unknown template name', async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)

		await expect(
			create({
				expand: false,
				output: tempDirectory,
				template: 'Nonexistent Template',
			}),
		).rejects.toThrow('Unknown template "Nonexistent Template"')
	})
})
