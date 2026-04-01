import { describe, expect, it } from 'vitest'
import { loadConfig, mergeConfig } from '../src/lib/config'

describe('config loading', () => {
	it('should load from valid cosmicconfig paths', async () => {
		const config = await loadConfig({
			searchFrom: './test/assets',
		})
		// Should include defaults + cosmiconfig config
		expect(config).toBeDefined()
		expect(config.cosmiconfig).toBe('# I was loaded by Cosmiconfig')
		expect(config['dynamic-rule']).toBeDefined()
		// Readme defaults should be present
		expect(config.title).toBeDefined()
		expect(config.badges).toBeDefined()
	})

	it('should load and merge extra config paths', async () => {
		const config = await loadConfig({
			additionalConfig: './test/assets/test-rules.ts',
			searchFrom: './test/assets',
		})
		expect(config).toBeDefined()
		expect(config.basic).toBeDefined()
	})

	it('should load hand-crafted json files as config', async () => {
		const config = await loadConfig({
			additionalConfig: './test/assets/test-rules-json.json',
			searchFrom: './test/assets',
		})
		expect(config).toBeDefined()
		expect(config.basic).toBe('**A bold statement from test-rules-json.json**')
		expect(config['basic-list-required']).toBeDefined()
		// Readme defaults should still be present
		expect(config.title).toBeDefined()
	})

	it('should load arbitrary json files as config', { timeout: 30_000 }, async () => {
		const config = await loadConfig({
			additionalConfig: ['./package.json'],
		})
		expect(config).toBeDefined()
	})

	it('should allow disabling defaults', async () => {
		const config = await loadConfig({
			defaults: {},
			searchFrom: './test/assets',
		})
		expect(config).toBeDefined()
		expect(config.cosmiconfig).toBe('# I was loaded by Cosmiconfig')
		// Should NOT have readme rules when explicitly disabled
		expect(config.title).toBeUndefined()
		expect(config.badges).toBeUndefined()
	})
})

describe('config merging', () => {
	it('should merge two configs with rightmost taking precedence', () => {
		const a = { bar: 'from a', foo: 'from a' }
		const b = { foo: 'from b' }
		const result = mergeConfig(a, b)
		expect(result).toEqual({ bar: 'from a', foo: 'from b' })
	})
})
