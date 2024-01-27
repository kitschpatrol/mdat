import { expandString } from '../src/lib/expand'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

describe('comment expansion', () => {
	it('should expand basic comments', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const { expandedString } = await expandString(markdown, {
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const { expandedString } = await expandString(markdown, {
			prefix: 'mm-',
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should include the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const { expandedString } = await expandString(markdown, {
			meta: true,
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should throw an error if rule set is invalid', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')

		await expect(
			expandString(markdown, {
				meta: true,
				rules: ['./test/assets/test-rules-invalid.js'],
			}),
		).rejects.toThrow()
	})
})
