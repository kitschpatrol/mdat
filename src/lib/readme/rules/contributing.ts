import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'

export default {
	contributing: {
		async content(options) {
			// TODO support
			// packageJson.contributors

			// TODO expose some flags as options.

			const validOptions = z
				.object({
					headingLevel: headingLevelSchema,
				})
				.optional()
				.parse(options)

			const { issuesUrl } = await getReadmeMetadata()
			if (issuesUrl === undefined) {
				// Defensive: requires a project with no detectable issues URL
				throw new Error('Could not find "bugs.url" entry in package.json')
			}

			return [
				`${getHeadingPrefix(validOptions?.headingLevel ?? 2)} Contributing`,
				'',
				`[Issues](${issuesUrl}) are welcome and appreciated.`,
				'',
				'Please open an issue to discuss changes before submitting a pull request. Unsolicited PRs (especially AI-generated ones) are unlikely to be merged.',
				'',
				'This repository uses [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) (via its `ksc` CLI) for linting and formatting, plus [MDAT](https://github.com/kitschpatrol/mdat) for readme placeholder expansion.',
			].join('\n')
		},
	},
} satisfies Rules
