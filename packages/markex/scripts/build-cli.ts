import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	entryPoints: ['src/cli/cli.ts'], // Replace with your entry point
	external: ['read-package-up'],
	format: 'esm',
	minify: false,
	outfile: 'bin/cli.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
