import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'

describe('mdat placeholder comment expansion', () => {
	it('should expand comments', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, undefined, './test/assets/test-rules.ts')
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should be idempotent', async () => {
		// Note that logging output is not necessarily idempotent
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const firstPass = await expandString(markdown, undefined, './test/assets/test-rules.ts')
		const secondPass = await expandString(
			firstPass.toString(),
			undefined,
			'./test/assets/test-rules.ts',
		)
		expect(firstPass.toString()).toEqual(secondPass.toString())
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(
			markdown,
			{ keywordPrefix: 'mm-' },
			'./test/assets/test-rules.ts',
		)
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should include the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(
			markdown,
			{ addMetaComment: true },
			'./test/assets/test-rules.ts',
		)
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should report an error and switch to defaults if rule set is invalid', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(
			markdown,
			undefined,
			'./test/assets/test-rules-invalid.js',
		)
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should work with hand-crafted json rules', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(
			markdown,
			undefined,
			'./test/assets/test-rules-json.json',
		)
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should work with arbitrary json files', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, undefined, './package.json')
		expect(expandedString.toString()).toMatchSnapshot()
	})
})
