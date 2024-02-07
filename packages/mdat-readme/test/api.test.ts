import { expandReadmeFile, expandReadmeString } from '../src/lib/api'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

// Replace matched dates with the placeholder text for stable snapshots
function stripDynamic(text: string): string {
	return text.replaceAll(/\s\d{4}-\d{2}-\d{2}\s/g, ' ****-**-** ')
}

describe('comment expansion', () => {
	it('should expand readme comments', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { result } = await expandReadmeString(markdown)
		expect(stripDynamic(result.toString())).toMatchSnapshot()
	})

	it('should expand prefixed comments only', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { result } = await expandReadmeString(markdown, {
			keywordPrefix: 'mm-',
		})

		expect(stripDynamic(result.toString())).toMatchSnapshot()
	})

	it('should allow additional rules, and they should override those provided my mdat-readme', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { result } = await expandReadmeString(markdown, undefined, './test/assets/extra-rules.js')
		expect(stripDynamic(result.toString())).toMatchSnapshot()
	})

	it('should exclude the meta tag if asked', async () => {
		const markdown = await fs.readFile('./test/assets/readme-test.md', 'utf8')
		const { result } = await expandReadmeString(markdown, {
			addMetaComment: false,
		})
		expect(result.toString()).toMatchSnapshot()
	})

	it('should find the local readme and package.json and expand them', async () => {
		const { packageFile, readmeFile, result } = await expandReadmeFile()
		expect(packageFile).not.toBeUndefined()
		expect(readmeFile).not.toBeUndefined()
		expect(result.toString()).toContain('<!-- /')
	}, 30_000)
})
