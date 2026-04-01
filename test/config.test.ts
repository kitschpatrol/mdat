import { describe, expect, it } from 'vitest'
import { loadRules, mergeRules } from '../src/lib/config'

describe('rules loading', () => {
	it('should load from valid cosmicconfig paths', async () => {
		const rules = await loadRules({
			searchFrom: './test/assets',
		})
		expect(rules).toMatchInlineSnapshot(`
			{
			  "cosmiconfig": "# I was loaded by Cosmiconfig",
			  "dynamic-rule": {
			    "content": [Function],
			  },
			  "dynamic-rule-with-imported-module": {
			    "content": [Function],
			  },
			  "mdat": "Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).",
			}
		`)
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
		expect(rules).toMatchInlineSnapshot(`
			{
			  "basic": "**A bold statement from test-rules-json.json**",
			  "basic-list-required": "- I
			- am
			- a
			- list
			- that
			- must
			- be
			- here",
			  "cosmiconfig": "# I was loaded by Cosmiconfig",
			  "dynamic-rule": {
			    "content": [Function],
			  },
			  "dynamic-rule-with-imported-module": {
			    "content": [Function],
			  },
			  "mdat": "Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).",
			}
		`)
	})

	it('should load arbitrary json files as rules', { timeout: 30_000 }, async () => {
		const rules = await loadRules({
			additionalRules: ['./package.json'],
		})
		expect(rules).toBeDefined()
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
