import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { getConfig } from '../src/lib/config'
import { expandReadme, expandReadmeString } from '../src/lib/readme/api'

describe('comment expansion', () => {
	it('should expand readme comments', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		// Explicitly set addMetaComment to get consistent behavior regardless of root config
		const result = await expandReadmeString(markdown, { addMetaComment: true })
		expect(result.toString()).toMatchSnapshot()
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, {
			addMetaComment: true,
			keywordPrefix: 'mm-',
		})

		expect(result.toString()).toMatchSnapshot()
	})

	it('should allow additional rules, and they should override those provided by mdat readme', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(
			markdown,
			{ addMetaComment: true },
			'./test/assets/extra-rules.js',
		)
		expect(result.toString()).toMatchSnapshot()
	})

	it('should exclude the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, {
			addMetaComment: false,
		})
		expect(result.toString()).toMatchSnapshot()
	})

	it('should respect config file setting of addMetaComment: false', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		// Use the test config that has addMetaComment set to a custom message
		const result = await expandReadmeString(markdown, './test/assets/test-config-with-meta.ts')
		const resultString = result.toString()
		// Should use the config file's custom message
		expect(resultString).toContain('<!--+ Config file meta comment +-->')
		expect(resultString).not.toContain('Warning: Content inside HTML comment blocks')
	})

	it('should find the local readme and package.json and expand them', async () => {
		const result = await expandReadme()
		const { packageFile } = await getConfig()
		expect(packageFile).not.toBeUndefined()
		expect(result.toString()).toContain('<!-- /')
	}, 30_000)
})
