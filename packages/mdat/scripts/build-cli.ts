import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	entryPoints: ['src/cli/cli.ts'], // Replace with your entry point
	external: ['jsdom'],
	format: 'esm',
	minify: true,
	outfile: 'bin/cli.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
