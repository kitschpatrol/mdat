import test from 'ava'
import { execaCommand } from 'execa'

test('blah', async (t) => {
	await execaCommand('echo blah', { stdio: 'inherit' })
	t.is(1, 1)
})
