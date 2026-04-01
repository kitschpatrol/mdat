import type { Options, PositionalOptions } from 'yargs'

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
			'Enable verbose logging. All verbose logs are prefixed with their log level and are printed to stderr for ease of redirection.',
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
