import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			exclude: [
				'src/lib/index.ts',
				'test/**',
				// Static template markdown files bundled as raw strings
				'src/lib/readme/templates/*.md',
				// Top-level config files (remarkrc, mdat.config, prettier.config)
				'.remarkrc.js',
				'mdat.config.ts',
				'prettier.config.ts',
				// Trivial re-export / alias modules with no logic
				'src/lib/readme/rules/footer.ts',
				'src/lib/readme/rules/header.ts',
				'src/lib/readme/rules/index.ts',
				'src/lib/readme/rules/short-description.ts',
				'src/lib/readme/rules/toc.ts',
				'src/lib/readme/templates/index.ts',
				// Primarily interactive CLI (createReadmeInteractive)
				'src/lib/readme/create.ts',
			],
		},
		fileParallelism: false,
		silent: 'passed-only',
	},
})
