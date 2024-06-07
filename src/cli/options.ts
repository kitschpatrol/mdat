import { type Options, type PositionalOptions } from 'yargs'

// TODO remove
// export const checkOption = {
// 	check: {
// 		alias: 'c',
// 		default: false,
// 		describe:
// 			'Check the input files for rule violations without expanding them. Identifies things like missing comment placeholders and incorrect placeholder ordering.',
// 		type: 'boolean',
// 	},
// } as const satisfies Record<string, Options>

export const configOption = {
	config: {
		defaultDescription:
			'Configuration is loaded if found from the usual places, or defaults are used.',
		description: 'Path(s) to files containing MDAT configuration.',
		string: true,
		type: 'array',
	},
} as const satisfies Record<string, Options>

export const metaOption = {
	meta: {
		alias: 'm',
		description:
			'Embed an extra comment at the top of the generated Markdown warning editors that certain sections of the document have been generated dynamically.',
		type: 'boolean',
	},
} as const satisfies Record<string, Options>

export const nameOption = {
	name: {
		alias: 'n',
		defaultDescription: 'Same name as input file. Overwrites the input file.',
		description: 'Output file name.',
		type: 'string',
	},
} as const satisfies Record<string, Options>

export const outputOption = {
	output: {
		alias: 'o',
		defaultDescription: 'Same directory as input file.',
		description: 'Output file directory.',
		type: 'string',
	},
} as const satisfies Record<string, Options>

export const prefixOption = {
	prefix: {
		description:
			"Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-MDAT comments in your Markdown file, or if you're willing to trade some verbosity for safety.",
		type: 'string',
	},
} as const satisfies Record<string, Options>

export const printOption = {
	print: {
		description:
			'Print the expanded Markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.',
		type: 'boolean',
	},
} as const satisfies Record<string, Options>

export const rulesOption = {
	rules: {
		alias: 'r',
		description: 'Path(s) to files containing MDAT comment expansion rules.',
		string: true,
		type: 'array',
	},
} as const satisfies Record<string, Options>

export const verboseOption = {
	verbose: {
		describe:
			'Enable verbose logging. All verbose logs and prefixed with their log level and are printed to stderr for ease of redirection.',
		type: 'boolean',
	},
} as const satisfies Record<string, Options>

export const filesPositional = [
	'files',
	{
		array: true,
		demandOption: true,
		describe: 'Markdown file(s) with MDAT placeholder comments.',
		type: 'string',
	},
] as const satisfies [string, PositionalOptions]
