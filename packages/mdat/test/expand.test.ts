import { expandString } from '../src/lib/api'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

describe('comment expansion', () => {
	it('should expand comments', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, {
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should be idempotent', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const firstPass = await expandString(markdown, {
			rules: ['./test/assets/test-rules.js'],
		})

		const secondPass = await expandString(firstPass, {
			rules: ['./test/assets/test-rules.js'],
		})

		expect(firstPass).toEqual(secondPass)
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, {
			keywordPrefix: 'mm-',
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should include the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, {
			addMetaComment: true,
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should throw an error if rule set is invalid', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')

		await expect(
			expandString(markdown, {
				addMetaComment: true,
				rules: ['./test/assets/test-rules-invalid.js'],
			}),
		).rejects.toThrow()
	})

	it('should work with hand-crafted json rules', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, {
			addMetaComment: true,
			rules: ['./test/assets/test-rules-json.json'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should work with arbitrary json files', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, {
			addMetaComment: true,
			rules: ['./package.json'],
		})

		expect(expandedString).toMatchSnapshot()
	})
})
