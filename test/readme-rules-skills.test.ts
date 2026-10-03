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

			This project includes [Agent Skills](https://agentskills.io) that teach coding agents like Claude Code and Codex how to work with skills-package-fixture:

			- **\`alpha-skill\`**: First fixture skill. Use when testing.
			- **\`beta-skill\`**: Second fixture skill with a folded multi-line description.

			The skills are published in the \`skills\` directory of the \`skills-package-fixture\` package. Nothing is added to your project until you install them with one of the tools below.

			### Sync from the installed package (recommended)

			With \`skills-package-fixture\` installed as a project dependency, the [\`skills\`](https://github.com/vercel-labs/skills) CLI finds skills bundled in your dependencies and copies them into your project's agent skill directories, so they match the version of \`skills-package-fixture\` you have installed:

			\`\`\`sh
			npx skills experimental_sync
			\`\`\`

			Run the command again after upgrading \`skills-package-fixture\` to refresh the copies. The \`experimental_sync\` command is experimental and its behavior may change.

			### Install from the repository

			If \`skills-package-fixture\` is not a dependency of your project, for example because you use a global installation, install the skills from the repository instead:

			\`\`\`sh
			npx skills add example/skills-fixture
			\`\`\`

			Skills installed this way follow the repository's default branch rather than your installed version of \`skills-package-fixture\`.

			<!-- /skills -->
			"
		`)
	})

	it('should respect the headingLevel option', async () => {
		const result = await expandString('<!-- skills({ headingLevel: 3 }) -->')
		const text = result.toString()

		expect(text).toContain('\n### Agent skills\n')
		expect(text).toContain('\n#### Sync from the installed package (recommended)\n')
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

			This project includes an [Agent Skill](https://agentskills.io) that teaches coding agents like Claude Code and Codex how to work with skills-private-fixture:

			- **\`only-skill\`**: The only fixture skill.

			Install it from the repository with the [\`skills\`](https://github.com/vercel-labs/skills) CLI:

			\`\`\`sh
			npx skills add https://gitlab.com/example/skills-private
			\`\`\`

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
