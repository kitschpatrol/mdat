import remarkMdat, { type Options } from '../src/lib/remark-mdat'
import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { describe, expect, it } from 'vitest'

async function expandStringToString(markdown: string, options: Options): Promise<string> {
	const result = await remark().use(remarkGfm).use(remarkMdat, options).process(markdown)
	return result.toString()
}

async function expandFileToString(file: string, options: Options): Promise<string> {
	const buffer = await fs.readFile(file)
	const result = await remark().use(remarkGfm).use(remarkMdat, options).process(buffer)
	return result.toString()
}

describe('comment expansion', () => {
	it('should expand comments', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			rules: ['./test/assets/test-rules.js'],
		})
		expect(expandedString).toMatchSnapshot()
	})

	it('should be idempotent', async () => {
		const firstPass = await expandFileToString('./test/assets/test-document.md', {
			rules: ['./test/assets/test-rules.js'],
		})

		const secondPass = await expandStringToString(firstPass, {
			rules: ['./test/assets/test-rules.js'],
		})

		expect(firstPass).toEqual(secondPass)
	})

	it('should expand prefixed comments only', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			keywordPrefix: 'mm-',
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should include the meta tag if asked', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			addMetaComment: true,
			rules: ['./test/assets/test-rules.js'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should throw an error if rule set is invalid', async () => {
		await expect(
			expandFileToString('./test/assets/test-document.md', {
				rules: ['./test/assets/test-rules-invalid.js'],
			}),
		).rejects.toThrow()
	})

	it('should work with hand-crafted json rules', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			rules: ['./test/assets/test-rules-json.json'],
		})

		expect(expandedString).toMatchSnapshot()
	})

	it('should work with arbitrary json files', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			rules: ['./package.json'],
		})

		expect(expandedString).toMatchSnapshot()
	})
})
