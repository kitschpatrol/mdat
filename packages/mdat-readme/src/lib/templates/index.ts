// Bundle template markdown for convenience

// Note:
// This project is build with tsup, not vite... but we've configured a custom
// loader for .md files in tsup.config.ts and a module declaration in
// ./src/types/md.d.ts. We use the ?raw suffix to intersect with the vite loader
// and get the raw file contents in the vitest context, without actually having
// to include vite as a direct dev dependency.

import readmeBasicCompound from './readme-basic-compound.md?raw'
import readmeBasic from './readme-basic.md?raw'
import readmeFullCompound from './readme-full-compound.md?raw'
import readmeFull from './readme-full.md?raw'

export default {
	readmeBasic,
	readmeBasicCompound,
	readmeFull,
	readmeFullCompound,
}
