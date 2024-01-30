import { dependencies } from '../package.json'
import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	entryPoints: ['src/index.ts'], // Replace with your entry point
	external: Object.keys(dependencies),
	format: 'esm',
	minify: true,
	outfile: 'dist/index.js', // Replace with your output file
	platform: 'node',
	target: 'node16',
})
