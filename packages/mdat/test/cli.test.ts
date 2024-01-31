import { $, type ExecaReturnValue } from 'execa'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { expect, it } from 'vitest'

function getTempPath(): { name: string; output: string; path: string } {
	const thePath = path.join(os.tmpdir(), 'mdat-test-output.md')
	return {
		name: path.basename(thePath),
		output: path.dirname(thePath),
		path: thePath,
	}
}

it('should demand a command', async () => {
	let result: ExecaReturnValue | undefined
	try {
		result = await $`./bin/cli.js`
	} catch (error) {
		if (error) {
			result = error as ExecaReturnValue
		}
	}

	expect(result).toBeDefined()
	const { exitCode, failed } = result!
	expect(exitCode).toEqual(1)
	expect(failed).toEqual(true)
})

it('should run expand command', async () => {
	const { name, output, path } = getTempPath()

	try {
		await $`./bin/cli.js expand ./test/assets/test-document.md --rules ./test/assets/test-rules.js --output ${output} --name ${name}`
	} catch {
		// // Returns 1 because of validation errors, ignore
	}

	const result = await fs.readFile(path, 'utf8')
	expect(result).toMatchSnapshot()
})

it('should run expand command by default', async () => {
	const { name, output, path } = getTempPath()

	try {
		await $`./bin/cli.js ./test/assets/test-document.md --rules ./test/assets/test-rules.js --output ${output} --name ${name}`
	} catch {
		// // Returns 1 because of validation errors, ignore
	}

	const result = await fs.readFile(path, 'utf8')
	expect(result).toMatchSnapshot()
})

it('should handle json rules', async () => {
	const { name, output, path } = getTempPath()

	try {
		await $`./bin/cli.js ./test/assets/test-document.md --rules ./test/assets/test-rules-json.json --output ${output} --name ${name}`
	} catch {
		// // Returns 1 because of validation errors, ignore
	}

	const result = await fs.readFile(path, 'utf8')
	expect(result).toMatchSnapshot()
})

// Shell expansion doesn't work in test
// it('should run expand command on multiple files', async () => {
// 	const { stdout } = await $`./bin/cli.js ./test/assets/*.md --rules ./test/assets/test-rules.js`

// 	console.log(stdout)

// 	expect('hi').toEqual('hi')
// })
