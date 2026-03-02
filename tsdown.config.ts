import { defineConfig } from 'tsdown'
import raw from 'unplugin-raw/rollup'

export default defineConfig([
	// CLI tool
	{
		dts: false,
		entry: 'src/bin/cli.ts',
		fixedExtension: false,
		inlineOnly: false,
		minify: true,
		noExternal: /.+/,
		outDir: 'dist/bin',
		platform: 'node',
		plugins: [
			// Supports ?raw suffix from vite...
			raw(),
		],
	},
	// Library
	{
		attw: {
			profile: 'esm-only',
		},
		entry: 'src/lib/index.ts',
		fixedExtension: false,
		outDir: 'dist/lib',
		plugins: [
			// Supports ?raw suffix from vite...
			raw(),
		],
		publint: true,
		tsconfig: 'tsconfig.build.json',
	},
])
