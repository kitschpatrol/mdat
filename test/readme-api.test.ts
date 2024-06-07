import { getConfig } from '../src/lib/config'
import { expandReadme, expandReadmeString } from '../src/lib/readme/api'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

describe('comment expansion', () => {
	it('should expand readme comments', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown)
		expect(result.toString()).toMatchSnapshot()
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, {
			keywordPrefix: 'mm-',
		})

		expect(result.toString()).toMatchSnapshot()
	})

	it('should allow additional rules, and they should override those provided by mdat readme', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, undefined, './test/assets/extra-rules.js')
		expect(result.toString()).toMatchSnapshot()
	})

	it('should exclude the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, {
			addMetaComment: false,
		})
		expect(result.toString()).toMatchSnapshot()
	})

	it('should find the local readme and package.json and expand them', async () => {
		const result = await expandReadme()
		const { packageFile } = await getConfig()
		expect(packageFile).not.toBeUndefined()
		expect(result.toString()).toContain('<!-- /')
	}, 30_000)
})
