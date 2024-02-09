import { type Config } from './packages/mdat/dist'
import mdatPackage from './packages/mdat/package.json' with { type: 'json' }
import remarkMdatPackage from './packages/remark-mdat/package.json' with { type: 'json' }

export default {
	rules: {
		'cli-help-note':
			'_Meta note: The entire section above was generated automatically by the [`<!-- cli-help -->`](../mdat-readme/src/lib/rules/cli-help/index.ts) mdat expansion rule provided in `mdat-readme`. It dynamically parses the output from `mdat --help` into a markdown table, recursively calling `--help` on subcommands to build a Markdown representation of the help output._',
		'mdat-description': `_**${mdatPackage.description}**_`,
		'remark-mdat-description': `_**${remarkMdatPackage.description}**_`,
	},
} satisfies Config
