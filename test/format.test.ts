import { describe, expect, it, vi } from 'vitest'
import { formatWithPrettier, resetPrettierConfigCache } from '../src/lib/format'
import { log } from '../src/lib/log'

describe('formatWithPrettier', () => {
	it('should format markdown content', async () => {
		const ugly = '#    Hello   World\n\nSome   content   here.'
		const result = await formatWithPrettier(ugly)
		expect(result).toContain('Hello')
		// Should be valid markdown output
		expect(typeof result).toBe('string')
	})

	it('should accept a file path for config resolution', async () => {
		const content = '# Test\n\nParagraph.'
		const result = await formatWithPrettier(content, './test/assets/test-document.md')
		expect(result).toContain('Test')
	})

	it('should use cached prettier on second call', async () => {
		const content = '# Test'
		const first = await formatWithPrettier(content)
		const second = await formatWithPrettier(content)
		expect(first).toBe(second)
	})

	it('should log resolved config directory on cache miss', async () => {
		resetPrettierConfigCache()
		const debugSpy = vi.spyOn(log, 'debug')

		await formatWithPrettier('# Test', './test/assets/test-document.md')

		const calls = debugSpy.mock.calls.map((args) => args.map(String).join(' '))
		expect(calls.some((m) => m.includes('Resolved Prettier config for'))).toBe(true)
		expect(calls.some((m) => m.includes('test/assets'))).toBe(true)

		debugSpy.mockRestore()
	})
})
