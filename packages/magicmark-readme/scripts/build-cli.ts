import esbuild from 'esbuild'

// Read-package-up has dynamic imports and can not be bundled.
await esbuild.build({
	bundle: true,
	entryPoints: ['src/cli/cli.ts'],
	external: ['read-package-up', 'magicmark'],
	format: 'esm',
	minify: true,
	outfile: 'bin/cli.js',
	platform: 'node',
	target: 'node18',
})
