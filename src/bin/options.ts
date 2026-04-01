import type { Options, PositionalOptions } from 'yargs'
import templates from '../lib/readme/templates'

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
		demandOption: false,
		describe:
			'Markdown file(s) with MDAT placeholder comments. If not provided, the closest readme.md file is used.',
		type: 'string',
	},
] as const satisfies [string, PositionalOptions]

// Create command options

export const interactiveOption = {
	interactive: {
		alias: 'i',
		default: true,
		description:
			'Run the guided interactive `create` process. Set explicitly to `false` to use default values and skip the prompt.',
		type: 'boolean',
	},
} as const satisfies Record<string, Options>

export const overwriteOption = {
	overwrite: {
		default: false,
		defaultDescription: "`false`, if an existing readme is found, don't touch it.",
		description: 'Replace an existing readme file if one is found.',
		type: 'boolean',
	},
} as const satisfies Record<string, Options>

export const expandOption = {
	expand: {
		alias: 'e',
		default: true,
		description: 'Automatically run `mdat` immediately after creating the readme template.',
		type: 'boolean',
	},
} as const satisfies Record<string, Options>

export const templateOption = {
	template: {
		alias: 't',
		choices: Object.keys(templates),
		default: Object.keys(templates)[0],
		description: 'Specify a template to use for the new readme.',
		type: 'string',
	},
} as const satisfies Record<string, Options>

export const compoundOption = {
	compound: {
		alias: 'c',
		default: true,
		description:
			"Use compound comment version of the template to replace several individual comment placeholders where possible. This combines things like `<!-- title -->`, `<!-- badges -->`, etc. in a single `<!-- header -->` comment. It's less clutter when you're editing, but it's also less explicit. The final readme.md output is identical.",
		type: 'boolean',
	},
} as const satisfies Record<string, Options>
