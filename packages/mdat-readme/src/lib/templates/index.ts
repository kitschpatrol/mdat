// Bundle template markdown for convenience

// Note:
// This project is build with tsup, not vite... but we've configured a custom
// loader for .md files in tsup.config.ts and a module declaration in
// ./src/types/md.d.ts. We use the ?raw suffix to intersect with the vite loader
// and get the raw file contents in the vitest context, without actually having
// to include vite as a direct dev dependency.

import standardReadmeBasicCompound from './standard-readme-basic-compound.md?raw'
import standardReadmeBasic from './standard-readme-basic.md?raw'
import standardReadmeFullCompound from './standard-readme-full-compound.md?raw'
import standardReadmeFull from './standard-readme-full.md?raw'

export type Template = {
	content: { compound: string; explicit: string }
	description: string
	exampleLink: string
}
export type Templates = Record<string, Template>

export default {
	'Standard Readme Basic': {
		content: {
			compound: standardReadmeBasicCompound,
			explicit: standardReadmeBasic,
		},
		description: 'Includes only the "required" sections from the Standard Readme specification.',
		exampleLink:
			'https://github.com/RichardLitt/standard-readme/blob/main/example-readmes/minimal-readme.md',
	},
	'Standard Readme Full': {
		content: {
			compound: standardReadmeFullCompound,
			explicit: standardReadmeFull,
		},
		description: 'Includes all sections from the Standard Readme specification.',
		exampleLink:
			'https://github.com/RichardLitt/standard-readme/blob/main/example-readmes/maximal-readme.md',
	},
} satisfies Templates
