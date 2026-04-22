import type { Rules } from 'remark-mdat'
import { getReadmeMetadata } from '../../context'

export default {
	contributing: {
		async content() {
			// TODO support
			// packageJson.contributors

			// TODO expose some flags as options.

			const { issuesUrl } = await getReadmeMetadata()
			if (issuesUrl === undefined) {
				// Defensive: requires a project with no detectable issues URL
				throw new Error('Could not find "bugs.url" entry in package.json')
			}

			return [
				'## Contributing',
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
