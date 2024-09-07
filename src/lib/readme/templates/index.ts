// Bundle template Markdown for convenience

// Note:
// This project is built with tsup, not vite... but we've configured a custom
// loader for .md files in tsup.config.ts and a module declaration in
// ./src/types/md.d.ts. We use the ?raw suffix to intersect with the vite loader
// and get the raw file contents in the vitest context, without actually having
// to include vite as a direct dev dependency.

import mdatReadme from './mdat-readme.md?raw'
import mdatReadmeCompound from './mdat-readme-compound.md?raw'
import standardReadmeBasic from './standard-readme-basic.md?raw'
import standardReadmeBasicCompound from './standard-readme-basic-compound.md?raw'
import standardReadmeFull from './standard-readme-full.md?raw'
import standardReadmeFullCompound from './standard-readme-full-compound.md?raw'

export type Template = {
	content: { compound: string; explicit: string }
	description: string
	exampleLink: `https://${string}.md`
}
export type Templates = Record<string, Template>

export default {
	'MDAT Readme': {
		content: {
			compound: mdatReadmeCompound,
			explicit: mdatReadme,
		},
		description: 'The house style. An expansive starting point. Prune to your context and taste.',
		exampleLink: 'https://github.com/kitschpatrol/mdat/blob/main/readme.md',
	},
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
