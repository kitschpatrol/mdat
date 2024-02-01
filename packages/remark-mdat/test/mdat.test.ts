import remarkMdat, { type MdatCleanOptions, type Options, mdatClean, mdatSplit } from '../src'
import testRules from './assets/test-rules'
// @ts-expect-error - Intentionally invalid for testing purposes
import testRulesInvalid from './assets/test-rules-invalid'
import { type Root } from 'mdast'
import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { type VFile } from 'vfile'
import { describe, expect, it } from 'vitest'

// Replace matched dates with the placeholder text for stable snapshots
function stripDynamic(text: string): string {
	return text.replaceAll(/\s\d{4}-\d{2}-\d{2}\s/g, ' ****-**-** ')
}

async function expandStringToString(markdown: string, options: Options): Promise<string> {
	const result = await remark().use(remarkGfm).use(remarkMdat, options).process(markdown)
	return result.toString()
}

// Export for linter
export async function cleanString(markdown: string, options: MdatCleanOptions): Promise<string> {
	const result = await remark()
		.use(remarkGfm)
		.use(
			() =>
				// eslint-disable-next-line unicorn/consistent-function-scoping
				function (tree: Root, file: VFile) {
					mdatSplit(tree, file)
					mdatClean(tree, file, options)
				},
		)
		.process(markdown)
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
			rules: testRules,
		})
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should be idempotent', async () => {
		const firstPass = await expandFileToString('./test/assets/test-document.md', {
			rules: testRules,
		})

		const secondPass = await expandStringToString(firstPass, {
			rules: testRules,
		})

		expect(firstPass.toString()).toEqual(secondPass.toString())
	})

	it('should expand prefixed comments only', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			keywordPrefix: 'mm-',
			rules: testRules,
		})

		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should include the meta tag if asked', async () => {
		const expandedString = await expandFileToString('./test/assets/test-document.md', {
			addMetaComment: true,
			rules: testRules,
		})

		expect(stripDynamic(expandedString.toString())).toMatchSnapshot()
	})

	it('should throw an error if rule set is invalid', async () => {
		await expect(
			expandFileToString('./test/assets/test-document.md', {
				rules: testRulesInvalid,
			}),
		).rejects.toThrow()
	})
})