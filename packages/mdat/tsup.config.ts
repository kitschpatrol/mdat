import { type Options, defineConfig } from 'tsup'

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
	},
	{
		...shared,
		dts: false,
		entry: ['src/cli/cli.ts'],
		outDir: 'bin',
	},
])
