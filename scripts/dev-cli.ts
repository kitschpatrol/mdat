import esbuild from 'esbuild'
import { execaCommandSync } from 'execa'

const context = await esbuild.context({
	bundle: true,
	entryPoints: ['src/cli/cli.ts'], // Replace with your entry point
	format: 'esm',
	minify: false,
	outfile: 'bin/cli.js', // Replace with your output file
	platform: 'node',
	plugins: [
		{
			name: 'rebuild-notify',
			setup(build) {
				build.onEnd(() => {
					// Run tests after each rebuild
					try {
						execaCommandSync('pnpm run test', { stdio: 'inherit' })
					} catch {}
				})
			},
		},
	],
	target: 'node18',
})

await context.watch()

console.log('Watching...')
