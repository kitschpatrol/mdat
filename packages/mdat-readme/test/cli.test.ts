import { $ } from 'execa'
import { expect, it } from 'vitest'

it('help', async () => {
	// Ensure the print width is correct
	const { stdout } = await $`./bin/cli.js --help`
	const longestLineLength = stdout
		.split('\n')
		.reduce((a, b) => (a.length > b.length ? a : b)).length
	expect(longestLineLength).toBeGreaterThanOrEqual(120)
})
