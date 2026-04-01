import { describe, expect, it } from 'vitest'
import { collapseString, expand, expandString } from '../src/lib/api'

describe('comment expansion', () => {
	it('should expand readme comments', async () => {
		const markdown = '<!-- title -->\n\n<!-- description -->'
		const result = await expandString(markdown)
		expect(result.toString()).toContain('# mdat')
		expect(result.toString()).toContain('<!-- /title -->')
	})

	it('should allow additional rules, and they should override those provided by mdat readme', async () => {
		const markdown = '<!-- title -->'
		const result = await expandString(markdown, './test/assets/extra-rules.js')
		expect(result.toString()).toContain('extra-rules.js')
	})

	it('should find the local readme and package.json and expand them', async () => {
		const result = await expand()
		expect(result.toString()).toContain('<!-- /')
	}, 30_000)

	it('should collapse expanded readme content', { timeout: 15_000 }, async () => {
		const markdown = '<!-- title -->\n\n<!-- description -->'
		const expanded = await expandString(markdown)
		const collapsed = await collapseString(expanded.toString())
		const result = collapsed.toString()

		// Opening tags should remain
		expect(result).toContain('<!-- title -->')
		expect(result).toContain('<!-- description -->')
		// Closing tags and expanded content should be stripped
		expect(result).not.toContain('<!-- /title -->')
		expect(result).not.toContain('<!-- /description -->')
	})

	it(
		'should round-trip expand then collapse back to placeholders',
		{ timeout: 15_000 },
		async () => {
			const markdown = '<!-- title -->\n\n<!-- badges -->\n\n<!-- description -->'
			const expanded = await expandString(markdown)
			// Expanded content should have closing tags
			expect(expanded.toString()).toContain('<!-- /title -->')

			const collapsed = await collapseString(expanded.toString())
			const result = collapsed.toString()
			// Should be back to just opening tags
			expect(result).toContain('<!-- title -->')
			expect(result).toContain('<!-- badges -->')
			expect(result).toContain('<!-- description -->')
			expect(result).not.toContain('<!-- /title -->')
		},
	)
})
