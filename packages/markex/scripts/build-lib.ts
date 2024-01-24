import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	format: 'esm',
	minify: false,
	outfile: 'dist/index.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
