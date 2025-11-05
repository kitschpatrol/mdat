import { defineConfig } from 'tsdown'
import raw from 'unplugin-raw/rollup'

export default defineConfig([
	{
		// Calling tsc directly gives cleaner output?
		dts: false,
		entry: ['src/lib/index.ts'],
		outDir: 'dist',
		plugins: [
			// Supports ?raw suffix from vite...
			raw(),
		],
		tsconfig: 'tsconfig.build.lib.json',
	},
	{
		dts: false,
		entry: ['src/cli/cli.ts'],
		fixedExtension: false,
		outDir: 'bin',
		plugins: [
			// Supports ?raw suffix from vite...
			raw(),
		],
		tsconfig: 'tsconfig.build.bin.json',
	},
])
