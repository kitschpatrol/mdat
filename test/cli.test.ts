import { execaCommand } from 'execa'
import { expect, it } from 'vitest'

it('should echo blah', async () => {
	const { stdout } = await execaCommand('echo blah')

	expect(stdout).toEqual('blah')
})
