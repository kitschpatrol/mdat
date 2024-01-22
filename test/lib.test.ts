import { toc } from '../dist'
import fs from 'node:fs/promises'
import { expect, it } from 'vitest'

it('should generate a table of contents', async () => {
	const doc = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	const value = await toc(doc)

	expect(value).toMatchSnapshot()
})
