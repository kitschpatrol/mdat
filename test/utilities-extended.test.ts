import { describe, expect, it } from 'vitest'
import {
	findReadmeThrows,
	getInputOutputPaths,
	loadAmbientRemarkConfig,
	resetAmbientRemarkConfigCache,
} from '../src/lib/utilities'

describe('findReadmeThrows', () => {
	it('should return the readme path when it exists', async () => {
		const result = await findReadmeThrows()
		expect(result).toContain('readme.md')
	})
})

describe('getInputOutputPaths', () => {
	it('should return correct paths for a single file', async () => {
		const result = await getInputOutputPaths(['./test/assets/test-document.md'])
		expect(result).toHaveLength(1)
		expect(result[0].input).toContain('test-document.md')
		expect(result[0].name).toBe('test-document.md')
	})

	it('should number outputs for multiple files with a name', async () => {
		const result = await getInputOutputPaths(
			['./test/assets/test-document.md', './test/assets/readme-test.md'],
			undefined,
			'output.md',
		)
		expect(result).toHaveLength(2)
		expect(result[0].name).toBe('output-1.md')
		expect(result[1].name).toBe('output-2.md')
	})

	it('should throw for non-existent input file', async () => {
		await expect(getInputOutputPaths(['./nonexistent-file.md'])).rejects.toThrow(
			'Input file not found',
		)
	})

	it('should use custom extension', async () => {
		const result = await getInputOutputPaths(
			['./test/assets/test-document.md'],
			undefined,
			undefined,
			'html',
		)
		expect(result[0].name).toBe('test-document.html')
	})
})

describe('loadAmbientRemarkConfig caching', () => {
	it('should return memoized result on second call', async () => {
		resetAmbientRemarkConfigCache()
		const first = await loadAmbientRemarkConfig()
		const second = await loadAmbientRemarkConfig()
		expect(first).toBe(second)
	})
})
