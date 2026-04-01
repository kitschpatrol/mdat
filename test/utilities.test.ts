import { describe, expect, it } from 'vitest'
import { ensureArray, findReadme, loadAmbientRemarkConfig } from '../src/lib/utilities'

describe('ensureArray', () => {
	it('should return empty array for undefined', () => {
		// eslint-disable-next-line unicorn/no-useless-undefined
		expect(ensureArray(undefined)).toEqual([])
	})

	it('should return empty array for null', () => {
		// eslint-disable-next-line unicorn/no-null
		expect(ensureArray(null)).toEqual([])
	})

	it('should wrap a single value in an array', () => {
		expect(ensureArray('hello')).toEqual(['hello'])
	})

	it('should return an array as-is', () => {
		expect(ensureArray(['a', 'b'])).toEqual(['a', 'b'])
	})
})

describe('findReadme', () => {
	it('should find the closest readme', async () => {
		const result = await findReadme()
		expect(result).toBeDefined()
		expect(result).toContain('readme.md')
	})
})

describe('loadAmbientRemarkConfig', () => {
	it('should return a config result object', async () => {
		const result = await loadAmbientRemarkConfig()
		expect(result).toBeDefined()
		expect(result).toHaveProperty('plugins')
	})
})
