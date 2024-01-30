import esbuild from 'esbuild'

// Don't bundle the lib dependencies as aggressively as the bin
await esbuild.build({
	bundle: true,
	entryPoints: ['src/lib/index.ts'], // Replace with your entry point
	external: [
		'chalk',
		'jsdom',
		'json5',
		'log-symbols',
		'mdast-util-assert',
		'path-type',
		'plur',
		'remark',
		'remark-gfm',
		'remark-parse',
		'unist-util-visit',
		'untildify',
		'yargs',
		'zod',
	],
	format: 'esm',
	minify: true,
	outfile: 'dist/index.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
