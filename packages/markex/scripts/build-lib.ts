import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	external: ['read-package-up'],
	format: 'esm',
	minify: false,
	outfile: 'dist/index.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
