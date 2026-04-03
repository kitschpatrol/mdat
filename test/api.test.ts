import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { collapseString, expandString, stripString } from '../src/lib/api'

describe('mdat placeholder comment expansion', () => {
	it('should expand comments', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, './test/assets/test-rules.ts')
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should be idempotent', { timeout: 15_000 }, async () => {
		// Note that logging output is not necessarily idempotent
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const firstPass = await expandString(markdown, './test/assets/test-rules.ts')
		const secondPass = await expandString(firstPass.toString(), './test/assets/test-rules.ts')
		expect(firstPass.toString()).toEqual(secondPass.toString())
	})

	it('should report an error and switch to defaults if rule set is invalid', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, './test/assets/test-rules-invalid.js')
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should work with hand-crafted json rules', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, './test/assets/test-rules-json.json')
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should work with arbitrary json files', { timeout: 15_000 }, async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expandedString = await expandString(markdown, './package.json')
		expect(expandedString.toString()).toMatchSnapshot()
	})

	it('should collapse expanded comments', { timeout: 15_000 }, async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expanded = await expandString(markdown, './test/assets/test-rules.ts')
		const collapsed = await collapseString(expanded.toString())
		const result = collapsed.toString()

		// Opening comment tags should remain
		expect(result).toContain('<!-- basic -->')
		// Closing tags and expanded content should be stripped
		expect(result).not.toContain('<!-- /basic -->')
		expect(result).not.toContain('Stale content that will be replaced')
	})

	it('should strip mdat comments from expanded content', { timeout: 15_000 }, async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expanded = await expandString(markdown, './test/assets/test-rules.ts')
		const stripped = await stripString(expanded.toString())
		const result = stripped.toString()

		// Mdat closing comment tags should be removed
		expect(result).not.toContain('<!-- /basic -->')
		expect(result).not.toContain('<!-- /basic-dynamic -->')
		// Expanded content should be preserved
		expect(result).toContain('A bold statement from test-rules.ts')
		expect(result).toContain('# The MDAT sample document')
	})

	it('should strip unexpanded mdat comments', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const stripped = await stripString(markdown)
		const result = stripped.toString()

		// Mdat closing tags should be removed
		expect(result).not.toContain('<!-- /basic -->')
		// Regular content should remain
		expect(result).toContain('# The MDAT sample document')
		expect(result).toContain('Stale content that will be replaced')
	})

	it('should produce snapshot-stable output', { timeout: 15_000 }, async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expanded = await expandString(markdown, './test/assets/test-rules.ts')
		const stripped = await stripString(expanded.toString())
		expect(stripped.toString()).toMatchSnapshot()
	})
})
