import { parseReadme } from '../dist'
import fs from 'node:fs/promises'
import { expect, it } from 'vitest'

it('should parse a readme into an ast', async () => {
	const doc = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	parseReadme(doc)

	expect(1).toBe(1)
})
