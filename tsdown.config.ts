import { defineConfig } from 'tsdown'
import raw from 'unplugin-raw/rollup'

export default defineConfig({
	attw: {
		profile: 'esm-only',
	},
	// Build together so the CLI and library share their implementation.
	entry: {
		'bin/cli': 'src/bin/cli.ts',
		'lib/index': 'src/lib/index.ts',
	},
	fixedExtension: false,
	minify: false,
	outDir: 'dist',
	platform: 'node',
	plugins: [
		// Supports ?raw suffix from vite...
		raw(),
	],
	publint: true,
	tsconfig: 'tsconfig.build.json',
})
