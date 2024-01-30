import { defineConfig } from 'tsup'

export default defineConfig({
	clean: true,
	// This is a nice idea, to keep the direct dependencies thin, but it generates
	// ugly names
	// dts: {
	// 	resolve: true,
	// },
	dts: true,
	entry: ['src/index.ts'],
	format: 'esm',
	minify: true,
	platform: 'node',
	splitting: false,
	target: 'node16',
})
