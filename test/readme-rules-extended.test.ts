import { describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'

describe('header compound rule import', () => {
	it('should expand header with all sub-rules', async () => {
		const result = await expandString('<!-- header -->')
		const text = result.toString()
		expect(text).toContain('# mdat')
		expect(text).toContain('img.shields.io')
		expect(text).toContain('<!-- /header -->')
	})
})

describe('footer compound rule import', () => {
	it('should expand footer with contributing and license', async () => {
		const result = await expandString('<!-- footer -->')
		const text = result.toString()
		expect(text).toContain('## Contributing')
		expect(text).toContain('## License')
		expect(text).toContain('<!-- /footer -->')
	})
})

describe('short-description alias', () => {
	it('should expand short-description as alias for description', async () => {
		const result = await expandString('<!-- short-description -->')
		const text = result.toString()
		expect(text).toContain('Markdown Autophagic Template')
		expect(text).toContain('<!-- /short-description -->')
	})
})

describe('toc alias', () => {
	it('should expand toc as alias for table-of-contents', async () => {
		const result = await expandString('<!-- toc -->\n\n# Heading\n## Sub')
		const text = result.toString()
		expect(text).toContain('Table of contents')
		expect(text).toContain('<!-- /toc -->')
	})
})

describe('title with titleCase', () => {
	it('should title-case hyphenated names', async () => {
		const result = await expandString('<!-- title({titleCase: true}) -->')
		const text = result.toString()
		expect(text).toContain('# Mdat')
	})
})

describe('badges with custom badges', () => {
	it('should render custom badges', async () => {
		const result = await expandString(
			'<!-- badges({custom: {"My Badge": {image: "https://img.shields.io/badge/custom-badge-blue", link: "https://example.com"}}}) -->',
		)
		const text = result.toString()
		expect(text).toContain('My Badge')
		expect(text).toContain('custom-badge-blue')
	})
})

describe('readme rules index re-export', () => {
	it('should include all expected rules', async () => {
		const rules = await import('../src/lib/readme/rules/index')
		const ruleNames = Object.keys(rules.default)
		expect(ruleNames).toContain('title')
		expect(ruleNames).toContain('badges')
		expect(ruleNames).toContain('banner')
		expect(ruleNames).toContain('description')
		expect(ruleNames).toContain('contributing')
		expect(ruleNames).toContain('license')
		expect(ruleNames).toContain('header')
		expect(ruleNames).toContain('footer')
		expect(ruleNames).toContain('toc')
		expect(ruleNames).toContain('short-description')
		expect(ruleNames).toContain('table-of-contents')
		expect(ruleNames).toContain('code')
		expect(ruleNames).toContain('size')
		expect(ruleNames).toContain('size-table')
	})
})

describe('templates index', () => {
	it('should export template definitions with compound and explicit variants', async () => {
		const templates = await import('../src/lib/readme/templates/index')
		const entries = Object.values(templates.default)
		expect(entries.length).toBeGreaterThan(0)

		for (const template of entries) {
			expect(template.content.compound).toBeTruthy()
			expect(template.content.explicit).toBeTruthy()
			expect(template.description).toBeTruthy()
		}
	})
})
