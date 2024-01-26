import { $, type ExecaReturnValue } from 'execa'
import { expect, it } from 'vitest'

// TODO real tests
// const $$ = $({ stdio: 'inherit' }) // Setup default output for the script

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
	const { stdout } =
		await $`./bin/cli.js expand ./test/assets/test-document.md --rules ./test/assets/test-rules.js`

	console.log(stdout)

	expect('hi').toEqual('hi')
})

it('should run expand command by default', async () => {
	const { stdout } =
		await $`./bin/cli.js ./test/assets/test-document.md --rules ./test/assets/test-rules.js`

	console.log(stdout)

	expect('hi').toEqual('hi')
})

// Shell expansion doesn't work in test
// it('should run expand command on multiple files', async () => {
// 	const { stdout } = await $`./bin/cli.js ./test/assets/*.md --rules ./test/assets/test-rules.js`

// 	console.log(stdout)

// 	expect('hi').toEqual('hi')
// })
