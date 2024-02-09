import templates from '../lib/readme/templates'
import { type Options, type PositionalOptions } from 'yargs'

export const packageOption = {
	package: {
		defaultDescription: 'The closest package.json file is used by default.',
		description: 'Path to the package.json file to use to populate the readme.',
		string: true,
	},
} as const satisfies Record<string, Options>

export const assetsOption = {
	assets: {
		defaultDescription: './assets',
		description: 'Path to find and save readme-related assets.',
		string: true,
	},
} as const satisfies Record<string, Options>

export const interactiveOption = {
	interactive: {
		alias: 'i',
		default: true,
		description:
			'Run the guided interactive `init` process. Set explicitly to `false` to use default values and skip the prompt.',
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
		description: 'Automatically run `mdat readme` immediately after creating the readme template.',
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

export const filesPositionalOptional = [
	'files',
	{
		array: true,
		demandOption: false,
		describe:
			'Readme file(s) with `mdat` placeholder comments to collapse. If not provided, the closest readme.md file is used.',
		type: 'string',
	},
] as const satisfies [string, PositionalOptions]
