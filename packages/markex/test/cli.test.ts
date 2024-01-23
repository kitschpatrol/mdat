import { execaCommand } from 'execa'
import { expect, it } from 'vitest'

// TODO real tests
it('should echo blah', async () => {
	const { stdout } = await execaCommand('./bin/cli.js')
	expect(stdout).toEqual('hi')
})
