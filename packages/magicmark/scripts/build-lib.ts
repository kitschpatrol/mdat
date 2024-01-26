import esbuild from 'esbuild'

// Don't bundle the lib as aggressively as the bin
await esbuild.build({
	bundle: true,
	entryPoints: ['src/lib/index.ts'], // Replace with your entry point
	external: [
		'chalk',
		'json5',
		'log-symbols',
		'plur',
		'remark',
		'remark-gfm',
		'remark-parse',
		'unist-util-visit',
		'untildify',
		'yargs',
	],
	format: 'esm',
	minify: true,
	outfile: 'dist/index.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
