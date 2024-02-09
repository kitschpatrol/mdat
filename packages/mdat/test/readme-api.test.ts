import { getConfig } from '../src/lib/config'
import { expandReadme, expandReadmeString } from '../src/lib/readme/api'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

// Replace matched dates with the placeholder text for stable snapshots
function stripDynamic(text: string): string {
	return text.replaceAll(/\s\d{4}-\d{2}-\d{2}\s/g, ' ****-**-** ')
}

describe('comment expansion', () => {
	it('should expand readme comments', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown)
		expect(stripDynamic(result.toString())).toMatchSnapshot()
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, {
			keywordPrefix: 'mm-',
		})

		expect(stripDynamic(result.toString())).toMatchSnapshot()
	})

	it('should allow additional rules, and they should override those provided by mdat readme', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const result = await expandReadmeString(markdown, undefined, './test/assets/extra-rules.js')
		expect(stripDynamic(result.toString())).toMatchSnapshot()
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
