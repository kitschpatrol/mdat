import { expandReadmeString } from '../src/lib/expand'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

describe('comment expansion', () => {
	it('should expand readme comments', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { expandedString } = await expandReadmeString(markdown)
		expect(expandedString).toMatchSnapshot()
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { expandedString } = await expandReadmeString(markdown, {
			prefix: 'mm-',
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should allow additional rules, and they should override those provided my mdat-readme', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { expandedString } = await expandReadmeString(markdown, {
			rules: ['./test/assets/extra-rules.js'],
		})
		expect(expandedString).toMatchSnapshot()
	})

	it('should exclude the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { expandedString } = await expandReadmeString(markdown, {
			meta: false,
		})

		expect(expandedString).toMatchSnapshot()
	})
})
