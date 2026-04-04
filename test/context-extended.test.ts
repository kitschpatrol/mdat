import { describe, expect, it } from 'vitest'
import {
	getContextMetadata,
	getReadmeMetadata,
	resetContextMetadata,
	resetMetadataCaches,
	resetReadmeMetadata,
} from '../src/lib/context'

describe('context metadata caching', () => {
	it('should return memoized result on second call', async () => {
		resetContextMetadata()
		const first = await getContextMetadata()
		const second = await getContextMetadata()
		expect(first).toBe(second)
	})

	it('should return fresh result after reset', async () => {
		const first = await getContextMetadata()
		resetContextMetadata()
		const second = await getContextMetadata()
		// Different object references after reset
		expect(first).not.toBe(second)
	})
})

describe('readme metadata caching', () => {
	it('should return memoized result on second call', async () => {
		resetReadmeMetadata()
		const first = await getReadmeMetadata()
		const second = await getReadmeMetadata()
		expect(first).toBe(second)
	})

	it('should return fresh result after reset', async () => {
		const first = await getReadmeMetadata()
		resetReadmeMetadata()
		const second = await getReadmeMetadata()
		expect(first).not.toBe(second)
	})
})

describe('resetMetadataCaches', () => {
	it('should reset both caches', async () => {
		const contextBefore = await getContextMetadata()
		const readmeBefore = await getReadmeMetadata()
		resetMetadataCaches()
		const contextAfter = await getContextMetadata()
		const readmeAfter = await getReadmeMetadata()
		expect(contextBefore).not.toBe(contextAfter)
		expect(readmeBefore).not.toBe(readmeAfter)
	})
})
