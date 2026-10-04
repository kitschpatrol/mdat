import type { Rules } from 'remark-mdat'
import { matter } from 'gray-matter-es'
import fs from 'node:fs/promises'
import path from 'node:path'
import plur from 'plur'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'

const SKILLS_DIRECTORY = 'skills'
const SKILL_FILE_NAME = 'SKILL.md'
const GITHUB_REPOSITORY_REGEX = /^https:\/\/github\.com\/(?<slug>[^\/]+\/[^\/]+)$/v
const WHITESPACE_REGEX = /\s+/gv
// Ends at the first terminator followed by a capitalized word, so periods in
// file names, versions, and common abbreviations don't cut the sentence short
const FIRST_SENTENCE_REGEX = /^.*?(?<!\b(?:e\.g|i\.e|vs))[.!?](?=\s+\p{Lu})/v

const skillFrontmatterSchema = z.object({
	description: z.string().trim().min(1),
	name: z.string().trim().min(1),
})

type Skill = z.infer<typeof skillFrontmatterSchema> & {
	/**
	 * Path to the skill's `SKILL.md` file, relative to the project directory,
	 * with forward slashes so it works as a Markdown link.
	 */
	filePath: string
}

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
export async function findSkills(projectDirectory: string): Promise<Skill[]> {
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

		skills.push({
			...frontmatter.data,
			filePath: `${SKILLS_DIRECTORY}/${entry.name}/${SKILL_FILE_NAME}`,
		})
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

/**
 * The first sentence of a skill description, which by convention says what the
 * skill does, leaving out the guidance on when to use it that follows.
 */
function getFirstSentence(description: string): string {
	const singleLine = description.replaceAll(WHITESPACE_REGEX, ' ')
	return FIRST_SENTENCE_REGEX.exec(singleLine)?.[0] ?? singleLine
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
			const skillHeading = getHeadingPrefix(headingLevel + 1)
			const skillNoun = plur('skill', skills.length)
			const agentSkillsLink = `${skills.length === 1 ? 'an' : skills.length} [${plur('Agent Skill', skills.length)}](https://agentskills.io)`
			const skillsCliLink = "Vercel's [skills CLI](https://github.com/vercel-labs/skills)"
			const heading = `${getHeadingPrefix(headingLevel)} Agent skills`

			const skillLines = [
				`Included ${skillNoun}:`,
				...skills.flatMap((skill) => [
					'',
					`${skillHeading} Skill: [\`${skill.name}\`](${skill.filePath})`,
					'',
					getFirstSentence(skill.description),
				]),
			]

			if (!isPublicNpmPackage) {
				if (repositoryUrl === undefined) {
					throw new Error(
						'Skill install instructions require either a publishable npm package or a repository URL in the project metadata',
					)
				}

				return [
					heading,
					'',
					`This project includes ${agentSkillsLink} to help coding agents work with ${name}.`,
					'',
					`To install the ${skillNoun}, run ${skillsCliLink}:`,
					'',
					...codeBlock(`npx skills add ${getSkillsCliSource(repositoryUrl)}`),
					'',
					...skillLines,
				].join('\n')
			}

			return [
				heading,
				'',
				`This project bundles ${agentSkillsLink} in its published package to help coding agents work with ${name}.`,
				'',
				`To sync the ${skillNoun} into your project, run ${skillsCliLink} from your project root:`,
				'',
				...codeBlock('npx skills experimental_sync'),
				...(repositoryUrl === undefined
					? []
					: [
							'',
							'Or install globally:',
							'',
							...codeBlock(`npx skills add ${getSkillsCliSource(repositoryUrl)} --global`),
						]),
				'',
				...skillLines,
			].join('\n')
		},
	},
} satisfies Rules
