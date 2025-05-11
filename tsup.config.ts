import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

const shared: Options = {
	clean: true,
	format: 'esm',
	loader: {
		'.md': 'text',
	},
	minify: true,
	platform: 'node',
	splitting: false,
	target: 'node18',
}

export default defineConfig([
	{
		...shared,
		dts: false, // Calling tsc directly gives cleaner output?
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
