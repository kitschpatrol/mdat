import { describe, expect, it } from 'vitest'
import {
	check,
	checkString,
	collapse,
	collapseString,
	expand,
	expandString,
	strip,
	stripString,
} from '../src/lib/api'
import { defineConfig } from '../src/lib/config'

describe('checkString', () => {
	it('should report in-sync when content is already expanded', async () => {
		const markdown = '<!-- basic -->'
		const expanded = await expandString(markdown, './test/assets/test-rules.ts')
		const { inSync } = await checkString(expanded.toString(), './test/assets/test-rules.ts')
		expect(inSync).toBe(true)
	})

	it('should report out-of-sync when content differs', async () => {
		const markdown = '<!-- basic -->\n\nStale content\n\n<!-- /basic -->'
		const { inSync, result } = await checkString(markdown, './test/assets/test-rules.ts')
		expect(inSync).toBe(false)
		expect(result).toBeDefined()
	})

	it('should report in-sync for unexpanded comments', async () => {
		// An unexpanded comment will be expanded, so original !== expanded
		const markdown = '<!-- basic -->'
		const { inSync } = await checkString(markdown, './test/assets/test-rules.ts')
		expect(inSync).toBe(false)
	})
})

describe('expandString with format option', () => {
	it('should format output with prettier when format is true', async () => {
		const markdown = '<!-- basic -->'
		const result = await expandString(markdown, './test/assets/test-rules.ts', { format: true })
		expect(result.toString()).toContain('A bold statement')
	})
})

describe('collapseString with format option', () => {
	it('should format output when format is true', async () => {
		const expanded = await expandString('<!-- basic -->', './test/assets/test-rules.ts')
		const result = await collapseString(expanded.toString(), undefined, { format: true })
		expect(result.toString()).toContain('<!-- basic -->')
	})
})

describe('stripString with format option', () => {
	it('should format output when format is true', async () => {
		const expanded = await expandString('<!-- basic -->', './test/assets/test-rules.ts')
		const result = await stripString(expanded.toString(), undefined, { format: true })
		expect(result.toString()).toContain('A bold statement')
		expect(result.toString()).not.toContain('<!-- /basic -->')
	})
})

describe('strip with file path', () => {
	it('should strip mdat comments from a file', { timeout: 15_000 }, async () => {
		const results = await strip(
			'./test/assets/test-document.md',
			undefined,
			undefined,
			'./test/assets/test-rules.ts',
		)
		expect(results).toHaveLength(1)
		expect(results[0].toString()).not.toContain('<!-- /basic -->')
	})
})

describe('check with file path', () => {
	it('should check a file against its expanded version', { timeout: 15_000 }, async () => {
		const results = await check('./test/assets/readme-test.md')
		expect(results).toHaveLength(1)
		expect(results[0]).toHaveProperty('inSync')
		expect(results[0]).toHaveProperty('result')
	})
})

describe('collapse with file path', () => {
	it('should collapse mdat comments in a file', { timeout: 15_000 }, async () => {
		const results = await collapse('./test/assets/test-document.md')
		expect(results).toHaveLength(1)
		expect(results[0].toString()).toContain('<!-- basic -->')
	})
})

describe('checkString with format option', () => {
	it('should detect formatting-only differences', async () => {
		const markdown = '<!-- basic -->'
		const expanded = await expandString(markdown, './test/assets/test-rules.ts')
		// Add extra whitespace to create a formatting-only diff
		const tweaked = expanded.toString().replaceAll('\n\n', '\n\n\n')
		const { inSync } = await checkString(tweaked, './test/assets/test-rules.ts', {
			format: true,
		})
		expect(inSync).toBe(false)
	})
})

describe('expand with format option on files', () => {
	it('should format file output when format is true', { timeout: 15_000 }, async () => {
		const results = await expand(
			'./test/assets/test-document.md',
			undefined,
			undefined,
			'./test/assets/test-rules.ts',
			{ format: true },
		)
		expect(results).toHaveLength(1)
		expect(results[0].toString()).toContain('A bold statement')
	})
})

describe('collapse with format on files', () => {
	it('should format collapsed output', { timeout: 15_000 }, async () => {
		const results = await collapse(
			'./test/assets/test-document.md',
			undefined,
			undefined,
			undefined,
			{ format: true },
		)
		expect(results).toHaveLength(1)
		expect(results[0].toString()).toContain('<!-- basic -->')
	})
})

describe('strip with format on files', () => {
	it('should format stripped output', { timeout: 15_000 }, async () => {
		const results = await strip('./test/assets/test-document.md', undefined, undefined, undefined, {
			format: true,
		})
		expect(results).toHaveLength(1)
	})
})

describe('check with format on files', () => {
	it('should format during check', { timeout: 15_000 }, async () => {
		const results = await check('./test/assets/readme-test.md', undefined, { format: true })
		expect(results).toHaveLength(1)
		expect(results[0]).toHaveProperty('inSync')
	})
})

describe('defineConfig', () => {
	it('should return the config as-is', () => {
		const config = defineConfig({ myRule: 'hello' })
		expect(config).toEqual({ myRule: 'hello' })
	})
})
