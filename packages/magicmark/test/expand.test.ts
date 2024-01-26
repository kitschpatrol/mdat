import { expandString } from '../src/lib/expand'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

describe('basic comment expansion', () => {
	it('should expand basic comments', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const { expandedString } = await expandString(markdown, {
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})
})
