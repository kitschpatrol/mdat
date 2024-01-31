import { loadConfig } from '../src/lib/config'
import { describe, expect, it } from 'vitest'

describe('configuration loading', () => {
	it('should load from valid cosmicconfig paths', async () => {
		await loadConfig({ searchFrom: './test/assets' })

		expect(true).toBe(true)
	})

	it('should load and merge extra config paths and rule object', async () => {
		await loadConfig({
			additionalConfigsOrRules: ['./test/assets/test-rules.ts'],
			searchFrom: './test/assets',
		})

		expect(true).toBe(true)
	})

	it('should load hand-crafted json files as rules', async () => {
		await loadConfig({
			additionalConfigsOrRules: ['./test/assets/test-rules-json.json'],
			searchFrom: './test/assets',
		})

		expect(true).toBe(true)
	})

	it('should load arbitrary json files', async () => {
		await loadConfig({
			additionalConfigsOrRules: ['./package.json'],
		})

		expect(true).toBe(true)
	})
})
