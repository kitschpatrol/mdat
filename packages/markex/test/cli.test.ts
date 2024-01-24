import { $, type ExecaReturnValue } from 'execa'
import { expect, it } from 'vitest'

const $$ = $({ stdio: 'inherit' }) // Setup default output for the script

// TODO real tests

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

it('should run readme command', async () => {
	const result = await $$`./bin/cli.js readme`
	expect(result.exitCode).toEqual(0)
})

it('should run expand command', async () => {
	const { stdout } = await $`./bin/cli.js expand ./test/assets/readme-basic.md`

	console.log(stdout)

	expect('hi').toEqual('hi')
})

// It('should run export command by default', async () => {
// 	const { stdout } = await execaCommand('./bin/cli.js ./test/assets/readme-basic.md')

// 	console.log(stdout)

// 	expect('hi').toEqual('hi')
// })

// it('should run run the export command by default even when passed preset-like filenames', async () => {
// 	const { stdout } = await execaCommand('./bin/cli.js readme.ts')

// 	console.log(stdout)

// 	expect('hi').toEqual('hi')
// })
