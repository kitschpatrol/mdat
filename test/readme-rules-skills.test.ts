import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'

function useFixture(name: string) {
	const fixtureDirectory = path.resolve(__dirname, 'fixtures', name)
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
}

function getErrors(result: Awaited<ReturnType<typeof expandString>>): string {
	return result.messages
		.filter((message) => message.fatal)
		.map((message) => message.reason)
		.join('\n')
}

describe('skills rule for a published package with skills', () => {
	useFixture('skills-package')

	it('should list the skills and offer every install path', async () => {
		const result = await expandString('<!-- skills -->')

		expect(getErrors(result)).toBe('')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- skills -->

			## Agent skills

			This project bundles 2 [Agent Skills](https://agentskills.io) in its published package to help coding agents work with skills-package-fixture.

			To sync the skills into your project, run Vercel's [skills CLI](https://github.com/vercel-labs/skills) from your project root:

			\`\`\`sh
			npx skills experimental_sync
			\`\`\`

			Or install globally:

			\`\`\`sh
			npx skills add example/skills-fixture --global
			\`\`\`

			Included skills:

			### Skill: [\`alpha-skill\`](skills/alpha-skill/SKILL.md)

			First fixture skill for files, e.g. mdat.config.ts and v1.2 data.

			### Skill: [\`beta-skill\`](skills/beta-skill/SKILL.md)

			Second fixture skill with a folded multi-line description.

			<!-- /skills -->
			"
		`)
	})

	it('should respect the headingLevel option', async () => {
		const result = await expandString('<!-- skills({ headingLevel: 3 }) -->')
		const text = result.toString()

		expect(text).toContain('\n### Agent skills\n')
		expect(text).toContain('\n#### Skill: [`alpha-skill`](skills/alpha-skill/SKILL.md)\n')
		expect(text).not.toContain('\n## Agent skills\n')
	})

	it('should reject unknown option types', async () => {
		const result = await expandString('<!-- skills({ headingLevel: "big" }) -->')

		expect(getErrors(result)).not.toBe('')
		expect(result.toString()).not.toContain('Agent skills')
	})
})

describe('skills rule for a private package with a skill', () => {
	useFixture('skills-private')

	it('should only offer installation from the repository', async () => {
		const result = await expandString('<!-- skills -->')

		expect(getErrors(result)).toBe('')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- skills -->

			## Agent skills

			This project includes an [Agent Skill](https://agentskills.io) to help coding agents work with skills-private-fixture.

			To install the skill, run Vercel's [skills CLI](https://github.com/vercel-labs/skills):

			\`\`\`sh
			npx skills add https://gitlab.com/example/skills-private
			\`\`\`

			Included skill:

			### Skill: [\`only-skill\`](skills/only-skill/SKILL.md)

			The only fixture skill.

			<!-- /skills -->
			"
		`)
	})
})

describe('skills rule for a package without skills', () => {
	useFixture('library-only')

	it('should report that no skills were found', async () => {
		const result = await expandString('<!-- skills -->')

		expect(getErrors(result)).toContain('Could not find any skills')
		expect(result.toString()).not.toContain('Agent skills')
	})
})

describe('skills rule for a skill with invalid frontmatter', () => {
	useFixture('skills-invalid')

	it('should report which skill file is invalid', async () => {
		const result = await expandString('<!-- skills -->')

		expect(getErrors(result)).toContain(
			'Skill at "skills/broken-skill/SKILL.md" needs "name" and "description" strings',
		)
		expect(result.toString()).not.toContain('Agent skills')
	})
})
