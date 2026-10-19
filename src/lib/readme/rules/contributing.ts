import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingLines, headingLevelSchema, headingSchema } from './utilities/heading'

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

			const { issuesUrl, usesSharedConfig } = await getReadmeMetadata()
			if (issuesUrl === undefined) {
				// Defensive: requires a project with no detectable issues URL
				throw new Error(
					'Could not find an issue tracker URL in the project metadata. Add "bugs.url" to package.json, "issueTracker" to codemeta.json, or a GitHub repository URL.',
				)
			}

			const toolingLine = usesSharedConfig
				? 'This repository uses [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) (via its `ksc` CLI) for linting and formatting, plus [MDAT](https://github.com/kitschpatrol/mdat) for readme placeholder expansion.'
				: 'This repository uses [MDAT](https://github.com/kitschpatrol/mdat) for readme placeholder expansion.'

			return [
				...getHeadingLines(validOptions?.heading, validOptions?.headingLevel ?? 2, 'Contributing'),
				`[Issues](${issuesUrl}) are welcome and appreciated.`,
				'',
				'Please open an issue to discuss changes before submitting a pull request. Unsolicited PRs (especially AI-generated ones) are unlikely to be merged.',
				'',
				toolingLine,
			].join('\n')
		},
	},
} satisfies Rules
