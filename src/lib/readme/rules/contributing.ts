import type { Rules } from 'remark-mdat'
import fs from 'node:fs/promises'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingLines, headingLevelSchema, headingSchema } from './utilities/heading'

const CHANGELOG_FILE_NAME = 'changelog.md'

export default {
	contributing: {
		async content(options) {
			// TODO support
			// packageJson.contributors

			// TODO expose some flags as options.

			const validOptions = z
				.object({
					heading: headingSchema,
					headingLevel: headingLevelSchema,
				})
				.optional()
				.parse(options)

			const { issuesUrl, projectDirectory, usesBrewpub, usesChagent, usesSharedConfig } =
				await getReadmeMetadata()
			if (issuesUrl === undefined) {
				// Defensive: requires a project with no detectable issues URL
				throw new Error(
					'Could not find an issue tracker URL in the project metadata. Add "bugs.url" to package.json, "issueTracker" to codemeta.json, or a GitHub repository URL.',
				)
			}

			const changelogFileName =
				usesChagent && projectDirectory !== undefined
					? await findChangelogFileName(projectDirectory)
					: undefined

			const tools = [
				...(usesSharedConfig
					? [
							'[ksc](https://github.com/kitschpatrol/shared-config) to handle linting and formatting with the usual tools',
						]
					: []),
				'[mdat](https://github.com/kitschpatrol/mdat) for readme placeholder expansion',
				...(changelogFileName === undefined
					? []
					: [
							`[chagent](https://github.com/kitschpatrol/chagent) to maintain the [changelog](${changelogFileName})`,
						]),
				...(usesBrewpub
					? ['[brewpub](https://github.com/kitschpatrol/brewpub) to publish the Homebrew formula']
					: []),
			]

			return [
				...getHeadingLines(validOptions?.heading, validOptions?.headingLevel ?? 2, 'Contributing'),
				`[Issues](${issuesUrl}) are welcome and appreciated.`,
				'',
				'Please open an issue to discuss changes before submitting a pull request. Unsolicited PRs are unlikely to be merged.',
				'',
				getToolingSentence(tools),
			].join('\n')
		},
	},
} satisfies Rules

// Helpers

/**
 * Find the changelog in the project root, matching the file name
 * case-insensitively as Chagent does.
 *
 * @returns The file name as it appears on disk, e.g. `CHANGELOG.md`, or
 *   undefined if there is no changelog
 */
async function findChangelogFileName(projectDirectory: string): Promise<string | undefined> {
	const fileNames = await fs.readdir(projectDirectory)
	return fileNames.find((fileName) => fileName.toLowerCase() === CHANGELOG_FILE_NAME)
}

/**
 * Compose tool descriptions into a single sentence, e.g. "This repository uses
 * A, plus B, and C."
 */
function getToolingSentence(tools: string[]): string {
	const phrases = tools.map((tool, index) => {
		if (index === 0) {
			return tool
		}

		if (index === 1) {
			return `plus ${tool}`
		}

		return index === tools.length - 1 ? `and ${tool}` : tool
	})

	return `This repository uses ${phrases.join(', ')}.`
}
