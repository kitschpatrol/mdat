import type { Result } from 'execa'
import { $ } from 'execa'
import { nanoid } from 'nanoid'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

function getTempPath(): { name: string; output: string; path: string } {
	const thePath = path.join(os.tmpdir(), `mdat-test-${nanoid()}.md`)
	return {
		name: path.basename(thePath),
		output: path.dirname(thePath),
		path: thePath,
	}
}

describe('mdat cli tool', () => {
	it('should demand a command', async () => {
		let result: Result | undefined
		try {
			result = await $`./dist/bin/cli.js`
		} catch (error) {
			if (error) {
				result = error as Result
			}
		}

		expect(result).toBeDefined()
		const { exitCode, failed } = result!
		expect(exitCode).toEqual(1)
		expect(failed).toEqual(true)
	})

	it('should run expand command', { timeout: 30_000 }, async () => {
		const { name, output, path } = getTempPath()

		try {
			await $`./dist/bin/cli.js expand ./test/assets/test-document.md --rules ./test/assets/test-rules.ts --output ${output} --name ${name}`
		} catch {
			// May return non-zero exit code, ignore
		}

		const result = await fs.readFile(path, 'utf8')
		expect(result).toMatchSnapshot()
	})

	it('should run expand command by default', { timeout: 30_000 }, async () => {
		const { name, output, path } = getTempPath()

		try {
			await $`./dist/bin/cli.js ./test/assets/test-document.md --rules ./test/assets/test-rules.ts --output ${output} --name ${name}`
		} catch {
			// May return non-zero exit code, ignore
		}

		const result = await fs.readFile(path, 'utf8')
		expect(result).toMatchSnapshot()
	})

	it('should handle json rules', { timeout: 30_000 }, async () => {
		const { name, output, path } = getTempPath()

		try {
			await $`./dist/bin/cli.js ./test/assets/test-document.md --rules ./test/assets/test-rules-json.json --output ${output} --name ${name}`
		} catch {
			// May return non-zero exit code, ignore
		}

		const result = await fs.readFile(path, 'utf8')
		expect(result).toMatchSnapshot()
	})

	it('help', async () => {
		// Ensure the print width is correct
		const { stdout } = await $`./dist/bin/cli.js --help`
		const longestLineLength = stdout
			.split('\n')
			// eslint-disable-next-line unicorn/no-array-reduce
			.reduce((a, b) => (a.length > b.length ? a : b)).length
		expect(longestLineLength).toBeGreaterThanOrEqual(120)
	})

	it('should write collapse output to --output and --name path', { timeout: 30_000 }, async () => {
		const { name, output, path } = getTempPath()

		try {
			await $`./dist/bin/cli.js collapse ./test/assets/test-document.md --output ${output} --name ${name}`
		} catch {
			// May return non-zero exit code, ignore
		}

		const result = await fs.readFile(path, 'utf8')
		// Collapsed output should retain comment tags but strip expanded content
		expect(result).toContain('<!-- basic -->')
		expect(result).not.toContain('Stale content that will be replaced')
	})
})

// Shell expansion doesn't work in test
// it('should run expand command on multiple files', async () => {
// 	const { stdout } = await $`./dist/bin/cli.js ./test/assets/*.md --rules ./test/assets/test-rules.ts`
//
// 	console.log(stdout)
//
// 	expect('hi').toEqual('hi')
// })
