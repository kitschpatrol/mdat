import type { Rules } from 'remark-mdat'
import { matter } from 'gray-matter-es'
import fs from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'

const SKILLS_DIRECTORY = 'skills'
const SKILL_FILE_NAME = 'SKILL.md'
const GITHUB_REPOSITORY_REGEX = /^https:\/\/github\.com\/(?<slug>[^\/]+\/[^\/]+)$/v
const WHITESPACE_REGEX = /\s+/gv

const skillFrontmatterSchema = z.object({
	description: z.string().trim().min(1),
	name: z.string().trim().min(1),
})

type Skill = z.infer<typeof skillFrontmatterSchema>

function codeBlock(command: string): string[] {
	return ['```sh', command, '```']
}

/**
 * Find Agent Skills in the project's `skills` directory, where each skill is a
 * subdirectory containing a `SKILL.md` file with `name` and `description`
 * frontmatter.
 *
 * @throws {Error} If a `SKILL.md` file has missing or invalid frontmatter
 */
async function findSkills(projectDirectory: string): Promise<Skill[]> {
	const skillsDirectory = path.join(projectDirectory, SKILLS_DIRECTORY)

	let entries
	try {
		entries = await fs.readdir(skillsDirectory, { withFileTypes: true })
	} catch (error) {
		if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
			return []
		}

		throw error
	}

	const skills: Skill[] = []
	for (const entry of entries) {
		if (!entry.isDirectory()) {
			continue
		}

		const skillFilePath = path.join(skillsDirectory, entry.name, SKILL_FILE_NAME)

		let skillFile
		try {
			skillFile = await fs.readFile(skillFilePath, 'utf8')
		} catch (error) {
			if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
				continue
			}

			throw error
		}

		const frontmatter = skillFrontmatterSchema.safeParse(matter(skillFile).data)
		if (!frontmatter.success) {
			throw new Error(
				`Skill at "${path.relative(projectDirectory, skillFilePath)}" needs "name" and "description" strings in its frontmatter`,
			)
		}

		skills.push(frontmatter.data)
	}

	return skills.toSorted((a, b) => a.name.localeCompare(b.name))
}

/**
 * The argument identifying a repository to the `skills add` command, which
 * accepts an `owner/repo` shorthand for GitHub and full URLs for other hosts.
 */
function getSkillsCliSource(repoUrl: string): string {
	return GITHUB_REPOSITORY_REGEX.exec(repoUrl)?.groups?.slug ?? repoUrl
}

export default {
	skills: {
		async content(options) {
			const validOptions = z
				.object({
					headingLevel: headingLevelSchema,
				})
				.optional()
				.parse(options)

			const skills = await findSkills(process.cwd())
			if (skills.length === 0) {
				throw new Error(
					`Could not find any skills, expected at least one "${SKILLS_DIRECTORY}/<name>/${SKILL_FILE_NAME}" file in the project`,
				)
			}

			const { isPublicNpmPackage, name, repositoryUrl } = await getReadmeMetadata()
			if (name === undefined) {
				throw new Error('Could not find project name')
			}

			const headingLevel = validOptions?.headingLevel ?? 2
			const subheading = getHeadingPrefix(headingLevel + 1)
			const skillNoun = skills.length === 1 ? 'skill' : 'skills'
			const skillPronoun = skills.length === 1 ? 'it' : 'them'

			const introLines = [
				`${getHeadingPrefix(headingLevel)} Agent skills`,
				'',
				`This project includes ${skills.length === 1 ? 'an [Agent Skill](https://agentskills.io)' : '[Agent Skills](https://agentskills.io)'} that ${skills.length === 1 ? 'teaches' : 'teach'} coding agents like Claude Code and Codex how to work with ${name}:`,
				'',
				...skills.map(
					(skill) =>
						`- **\`${skill.name}\`**: ${skill.description.replaceAll(WHITESPACE_REGEX, ' ')}`,
				),
			]

			if (!isPublicNpmPackage) {
				if (repositoryUrl === undefined) {
					throw new Error(
						'Skill install instructions require either a publishable npm package or a repository URL in the project metadata',
					)
				}

				return [
					...introLines,
					'',
					`Install ${skillPronoun} from the repository with the [\`skills\`](https://github.com/vercel-labs/skills) CLI:`,
					'',
					...codeBlock(`npx skills add ${getSkillsCliSource(repositoryUrl)}`),
				].join('\n')
			}

			return [
				...introLines,
				'',
				`The ${skillNoun} ${skills.length === 1 ? 'is' : 'are'} published in the \`${SKILLS_DIRECTORY}\` directory of the \`${name}\` package. Nothing is added to your project until you install ${skillPronoun} with one of the tools below.`,
				'',
				`${subheading} Sync from the installed package (recommended)`,
				'',
				`With \`${name}\` installed as a project dependency, the [\`skills\`](https://github.com/vercel-labs/skills) CLI finds skills bundled in your dependencies and copies them into your project's agent skill directories, so they match the version of \`${name}\` you have installed:`,
				'',
				...codeBlock('npx skills experimental_sync'),
				'',
				`Run the command again after upgrading \`${name}\` to refresh the copies. The \`experimental_sync\` command is experimental and its behavior may change.`,
				...(repositoryUrl === undefined
					? []
					: [
							'',
							`${subheading} Install from the repository`,
							'',
							`If \`${name}\` is not a dependency of your project, for example because you use a global installation, install the ${skillNoun} from the repository instead:`,
							'',
							...codeBlock(`npx skills add ${getSkillsCliSource(repositoryUrl)}`),
							'',
							`${skills.length === 1 ? 'A skill' : 'Skills'} installed this way ${skills.length === 1 ? 'follows' : 'follow'} the repository's default branch rather than your installed version of \`${name}\`.`,
						]),
			].join('\n')
		},
	},
} satisfies Rules
