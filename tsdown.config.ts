import type { Options } from 'tsdown'
import { defineConfig } from 'tsdown'
import raw from 'unplugin-raw/rollup'

const shared: Options = {
	// Handled by raw plugin...
	// loader: {
	// 	'.md': 'text',
	// },
	plugins: [
		// Supports ?raw suffix from vite...
		raw(),
	],
	// Implemented in tsup but not tsdown
	// splitting: false,
}

export default defineConfig([
	{
		...shared,
		// Calling tsc directly gives cleaner output?
		dts: false,
		entry: ['src/lib/index.ts'],
		outDir: 'dist',
		tsconfig: 'tsconfig.build.lib.json',
	},
	{
		...shared,
		dts: false,
		entry: ['src/cli/cli.ts'],
		outDir: 'bin',
		tsconfig: 'tsconfig.build.bin.json',
	},
])
