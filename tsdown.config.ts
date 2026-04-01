import { defineConfig } from 'tsdown'
import raw from 'unplugin-raw/rollup'

export default defineConfig([
	// CLI tool
	{
		deps: {
			alwaysBundle: /.+/,
			neverBundle: ['metascope', 'prettier'],
			onlyBundle: false,
		},
		dts: false,
		entry: 'src/bin/cli.ts',
		fixedExtension: false,
		minify: false,
		outDir: 'dist/bin',
		platform: 'node',
		plugins: [
			// Supports ?raw suffix from vite...
			raw(),
			// https://github.com/unjs/jiti/issues/417
			// https://github.com/unjs/jiti/pull/430
			{
				name: 'jiti-babel-eager',
				transform(code, id) {
					if (!id.includes('jiti')) return
					// Replace lazy createRequire(import.meta.url)(...) with direct require
					return code.replace(
						`createRequire(import.meta.url)("../dist/babel.cjs")`,
						`require("../dist/babel.cjs")`,
					)
				},
			},
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
