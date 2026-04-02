import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { check, collapse, collapseString, expand, expandString } from '../src/lib/api'
import { loadConfig } from '../src/lib/config'
import { loadAmbientRemarkConfig } from '../src/lib/utilities'

/**
 * Performance tests — run these before and after optimizations to measure impact.
 * Not benchmarks (no statistical rigor), just timed operations for comparison.
 */

async function time<T>(fn: () => Promise<T>): Promise<{ duration: number; result: T }> {
	const start = performance.now()
	const result = await fn()
	return { duration: performance.now() - start, result }
}

describe('performance: loadConfig', () => {
	it('should load config with defaults', async () => {
		const { duration } = await time(async () => loadConfig())
		console.log(`loadConfig (defaults): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(10_000)
	})

	it('should load config with additional .ts file', async () => {
		const { duration } = await time(async () =>
			loadConfig({ additionalConfig: './test/assets/test-rules.ts' }),
		)
		console.log(`loadConfig (with .ts additional): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(10_000)
	})

	it('should load config twice in sequence', async () => {
		const { duration: first } = await time(async () => loadConfig())
		const { duration: second } = await time(async () => loadConfig())
		console.log(`loadConfig sequential: first=${first.toFixed(1)}ms, second=${second.toFixed(1)}ms`)
		expect(first).toBeLessThan(10_000)
		expect(second).toBeLessThan(10_000)
	})
})

describe('performance: loadAmbientRemarkConfig', () => {
	it('should load ambient remark config', async () => {
		const { duration } = await time(async () => loadAmbientRemarkConfig())
		console.log(`loadAmbientRemarkConfig: ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(5000)
	})

	it('should load ambient remark config twice in sequence', async () => {
		const { duration: first } = await time(async () => loadAmbientRemarkConfig())
		const { duration: second } = await time(async () => loadAmbientRemarkConfig())
		console.log(
			`loadAmbientRemarkConfig sequential: first=${first.toFixed(1)}ms, second=${second.toFixed(1)}ms`,
		)
		expect(first).toBeLessThan(5000)
		expect(second).toBeLessThan(5000)
	})
})

describe('performance: expandString', () => {
	it('should expand a simple comment', async () => {
		const { duration } = await time(async () => expandString('<!-- title -->'))
		console.log(`expandString (simple): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})

	it('should expand multiple comments', async () => {
		const { duration } = await time(async () =>
			expandString('<!-- title -->\n\n<!-- badges -->\n\n<!-- description -->'),
		)
		console.log(`expandString (3 comments): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})

	it('should expand the test document', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const { duration } = await time(async () =>
			expandString(markdown, './test/assets/test-rules.ts'),
		)
		console.log(`expandString (test document): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})

	it('should expand the test document twice in sequence', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const { duration: first } = await time(async () =>
			expandString(markdown, './test/assets/test-rules.ts'),
		)
		const { duration: second } = await time(async () =>
			expandString(markdown, './test/assets/test-rules.ts'),
		)
		console.log(
			`expandString sequential: first=${first.toFixed(1)}ms, second=${second.toFixed(1)}ms`,
		)
		expect(first).toBeLessThan(15_000)
		expect(second).toBeLessThan(15_000)
	})
})

describe('performance: collapseString', () => {
	it('should collapse an expanded document', async () => {
		const markdown = await fs.readFile('./test/assets/test-document.md', 'utf8')
		const expanded = await expandString(markdown, './test/assets/test-rules.ts')
		const { duration } = await time(async () => collapseString(expanded.toString()))
		console.log(`collapseString: ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})
})

describe('performance: file-based operations', () => {
	it('should expand readme', async () => {
		const { duration } = await time(async () => expand())
		console.log(`expand (readme): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})

	it('should check readme', async () => {
		const { duration } = await time(async () => check())
		console.log(`check (readme): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})

	it('should collapse readme', async () => {
		const { duration } = await time(async () => collapse())
		console.log(`collapse (readme): ${duration.toFixed(1)}ms`)
		expect(duration).toBeLessThan(15_000)
	})
})
