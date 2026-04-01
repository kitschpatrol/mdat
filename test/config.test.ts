import { describe, expect, it } from 'vitest'
import { loadRules, mergeRules } from '../src/lib/config'

describe('rules loading', () => {
	it('should load from valid cosmicconfig paths', async () => {
		const rules = await loadRules({
			searchFrom: './test/assets',
		})
		// Should include readme defaults + cosmiconfig rules
		expect(rules).toBeDefined()
		expect(rules.cosmiconfig).toBe('# I was loaded by Cosmiconfig')
		expect(rules['dynamic-rule']).toBeDefined()
		// Readme defaults should be present
		expect(rules.title).toBeDefined()
		expect(rules.badges).toBeDefined()
	})

	it('should load and merge extra rule paths', async () => {
		const rules = await loadRules({
			additionalRules: './test/assets/test-rules.ts',
			searchFrom: './test/assets',
		})
		expect(rules).toBeDefined()
		expect(rules.basic).toBeDefined()
	})

	it('should load hand-crafted json files as rules', async () => {
		const rules = await loadRules({
			additionalRules: './test/assets/test-rules-json.json',
			searchFrom: './test/assets',
		})
		expect(rules).toBeDefined()
		expect(rules.basic).toBe('**A bold statement from test-rules-json.json**')
		expect(rules['basic-list-required']).toBeDefined()
		// Readme defaults should still be present
		expect(rules.title).toBeDefined()
	})

	it('should load arbitrary json files as rules', { timeout: 30_000 }, async () => {
		const rules = await loadRules({
			additionalRules: ['./package.json'],
		})
		expect(rules).toBeDefined()
	})

	it('should allow disabling readme defaults', async () => {
		const rules = await loadRules({
			readmeDefaults: {},
			searchFrom: './test/assets',
		})
		expect(rules).toBeDefined()
		expect(rules.cosmiconfig).toBe('# I was loaded by Cosmiconfig')
		// Should NOT have readme rules when explicitly disabled
		expect(rules.title).toBeUndefined()
		expect(rules.badges).toBeUndefined()
	})
})

describe('rules merging', () => {
	it('should merge two rule sets with rightmost taking precedence', () => {
		const a = { bar: 'from a', foo: 'from a' }
		const b = { foo: 'from b' }
		const result = mergeRules(a, b)
		expect(result).toEqual({ bar: 'from a', foo: 'from b' })
	})
})
