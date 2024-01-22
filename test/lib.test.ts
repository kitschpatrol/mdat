import { expandString } from '../src/lib'
import readmeExpanders from '../src/lib/expanders/readme'
import fs from 'node:fs/promises'
import { expect, it } from 'vitest'

it('should expand comments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, { expansionRules: readmeExpanders })

	console.log(expandedMarkdown)

	expect(1).toEqual(1)
})
