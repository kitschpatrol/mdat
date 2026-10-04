import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { create } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'
import templates from '../src/lib/readme/templates'

const SECTION_HEADING_REGEX = /\n## /v
const SECTION_START_REGEX = /^(?:## |<!-- (?:contributing|footer) -->)/v
const SKILLS_PLACEHOLDER_REGEX = /<!-- skills -->/gv

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

describe('createReadme skills placeholder', () => {
	const tempDirectories: string[] = []
	let originalCwd: string

	beforeAll(() => {
		originalCwd = process.cwd()
	})

	afterEach(async () => {
		process.chdir(originalCwd)
		resetMetadataCaches()

		for (const directory of tempDirectories) {
			await fs.rm(directory, { force: true, recursive: true })
		}

		tempDirectories.length = 0
	})

	afterAll(() => {
		process.chdir(originalCwd)
	})

	async function createInFixture(
		fixture: string,
		template: string,
		compound: boolean,
	): Promise<string> {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)
		process.chdir(path.resolve(__dirname, 'fixtures', fixture))
		resetMetadataCaches()

		const readmePath = await create({ compound, expand: false, output: tempDirectory, template })
		return fs.readFile(readmePath, 'utf8')
	}

	const variants = Object.keys(templates).flatMap((template) => [
		{ compound: true, template },
		{ compound: false, template },
	])

	it.each(variants)(
		'should add the placeholder after the usage section of "$template" (compound: $compound) when the project has skills',
		async ({ compound, template }) => {
			const content = await createInFixture('skills-package', template, compound)

			const usageIndex = content.indexOf('\n## Usage\n')
			const skillsIndex = content.indexOf('\n<!-- skills -->\n\n')
			const followingContent = content.slice(skillsIndex + '\n<!-- skills -->\n\n'.length)

			expect(usageIndex).toBeGreaterThan(-1)
			expect(skillsIndex).toBeGreaterThan(usageIndex)
			expect(content.slice(usageIndex + 1, skillsIndex)).not.toMatch(SECTION_HEADING_REGEX)
			expect(followingContent).toMatch(SECTION_START_REGEX)
			expect(content.match(SKILLS_PLACEHOLDER_REGEX)).toHaveLength(1)
		},
	)

	it.each(variants)(
		'should not add the placeholder to "$template" (compound: $compound) when the project has no skills',
		async ({ compound, template }) => {
			const content = await createInFixture('library-only', template, compound)

			expect(content).not.toContain('<!-- skills -->')
		},
	)

	it('should expand the placeholder when expand is true', { timeout: 30_000 }, async () => {
		const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-create-'))
		tempDirectories.push(tempDirectory)
		process.chdir(path.resolve(__dirname, 'fixtures/skills-package'))
		resetMetadataCaches()

		const readmePath = await create({ expand: true, output: tempDirectory })
		const content = await fs.readFile(readmePath, 'utf8')

		expect(content).toContain('## Agent skills')
		expect(content).toContain('### Skill: [`alpha-skill`](skills/alpha-skill/SKILL.md)')
	})
})
