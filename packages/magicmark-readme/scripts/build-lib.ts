import esbuild from 'esbuild'

// Don't bundle the lib dependencies as aggressively as the bin
await esbuild.build({
	bundle: true,
	entryPoints: ['src/lib/index.ts'],
	external: [
		'find-up',
		'log-symbols',
		'magicmark',
		'mdast-util-toc',
		'package-up',
		'pkg-dir',
		'read-package-up',
		'remark',
		'remark-gfm',
		'zod',
	],
	format: 'esm',
	minify: true,
	outfile: 'dist/index.js',
	platform: 'node',
	target: 'node18',
})
