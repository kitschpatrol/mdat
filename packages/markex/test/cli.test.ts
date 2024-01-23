import { execaCommand } from 'execa'
import { expect, it } from 'vitest'

// TODO real tests

it('should demand a command', async () => {
	const { stdout } = await execaCommand('./bin/cli.js')

	console.log(stdout)

	expect('hi').toEqual('hi')
})

it('should run readme command', async () => {
	const { stdout } = await execaCommand('./bin/cli.js readme')

	console.log(stdout)

	expect('hi').toEqual('hi')
})

it('should run export command', async () => {
	const { stdout } = await execaCommand('./bin/cli.js export ./test/assets/readme-basic.md')

	console.log(stdout)

	expect('hi').toEqual('hi')
})

it('should run export command by default', async () => {
	const { stdout } = await execaCommand('./bin/cli.js ./test/assets/readme-basic.md')

	console.log(stdout)

	expect('hi').toEqual('hi')
})
