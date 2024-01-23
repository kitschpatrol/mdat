import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	entryPoints: ['src/lib/index.ts'], // Replace with your entry point
	format: 'esm',
	minify: true,
	outfile: 'dist/index.js', // Replace with your output file
	platform: 'node',
	target: 'node18',
})
