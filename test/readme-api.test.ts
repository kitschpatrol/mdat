import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { collapseString } from '../src/lib/api'
import { getConfig } from '../src/lib/config'
import { checkReadmeString, expandReadme, expandReadmeString } from '../src/lib/readme/api'

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

	it('should check expanded readme content without errors', async () => {
		const markdown = '<!-- title -->\n\n<!-- description -->'
		const expanded = await expandReadmeString(markdown, { addMetaComment: false })
		const checked = await checkReadmeString(expanded.toString(), { addMetaComment: false })
		const errors = checked.messages.filter((m) => m.fatal)
		expect(errors).toHaveLength(0)
	})

	it('should collapse expanded readme content', async () => {
		const markdown = '<!-- title -->\n\n<!-- description -->'
		const expanded = await expandReadmeString(markdown, { addMetaComment: false })
		const collapsed = await collapseString(expanded.toString())
		const result = collapsed.toString()

		// Opening tags should remain
		expect(result).toContain('<!-- title -->')
		expect(result).toContain('<!-- description -->')
		// Closing tags and expanded content should be stripped
		expect(result).not.toContain('<!-- /title -->')
		expect(result).not.toContain('<!-- /description -->')
	})

	it('should round-trip expand then collapse back to placeholders', async () => {
		const markdown = '<!-- title -->\n\n<!-- badges -->\n\n<!-- description -->'
		const expanded = await expandReadmeString(markdown, { addMetaComment: false })
		// Expanded content should have closing tags
		expect(expanded.toString()).toContain('<!-- /title -->')

		const collapsed = await collapseString(expanded.toString())
		const result = collapsed.toString()
		// Should be back to just opening tags
		expect(result).toContain('<!-- title -->')
		expect(result).toContain('<!-- badges -->')
		expect(result).toContain('<!-- description -->')
		expect(result).not.toContain('<!-- /title -->')
	})
})
