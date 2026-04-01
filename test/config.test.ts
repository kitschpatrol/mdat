import { describe, expect, it } from 'vitest'
import { loadConfig, mergeConfigs } from '../src/lib/config'

describe('configuration loading', () => {
	it('should load from valid cosmicconfig paths', async () => {
		const config = await loadConfig({
			searchFrom: './test/assets',
		})
		expect(config.packageFile).toMatch(/package\.json$/)
		const { packageFile: _, ...rest } = config
		expect(rest).toMatchInlineSnapshot(`
			{
			  "assetsPath": "./assets",
			  "rules": {
			    "cosmiconfig": "# I was loaded by Cosmiconfig",
			    "dynamic-rule": {
			      "content": [Function],
			    },
			    "dynamic-rule-with-imported-module": {
			      "content": [Function],
			    },
			    "mdat": "Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).",
			  },
			}
		`)
	})

	it('should load and merge extra config paths and rule object', async () => {
		const config = await loadConfig({
			additionalRules: './test/assets/test-rules.ts',
			searchFrom: './test/assets',
		})
		expect(config.rules).toBeDefined()
	})

	it('should load hand-crafted json files as rules', async () => {
		const config = await loadConfig({
			additionalRules: './test/assets/test-rules-json.json',
			searchFrom: './test/assets',
		})
		expect(config.packageFile).toMatch(/package\.json$/)
		const { packageFile: _, ...rest } = config
		expect(rest).toMatchInlineSnapshot(`
			{
			  "assetsPath": "./assets",
			  "rules": {
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
			  },
			}
		`)
	})

	it('should load arbitrary json files as rules', { timeout: 30_000 }, async () => {
		const config = await loadConfig({
			additionalRules: ['./package.json'],
		})
		expect(config.rules).toBeDefined()
	})

	it('should load arbitrary json files as config', async () => {
		// This will be an empty object because package.json does not contain a valid mdat config
		const config = await loadConfig({
			additionalConfig: ['./package.json'],
		})

		// Default only because no mdat config is set in package.json
		expect(config.rules).toBeDefined()
	})
})

describe('config merging', () => {
	it('should merge two configs with rightmost taking precedence', () => {
		const a = { assetsPath: './custom-assets', rules: { foo: 'from a' } }
		const b = { rules: { foo: 'from b' } }
		const result = mergeConfigs(a, b)
		expect(result.rules?.foo).toBe('from b')
		expect(result.assetsPath).toBe('./custom-assets')
	})

	it('should deep merge nested rules', () => {
		const a = { rules: { bar: 'from a', foo: 'from a' } }
		const b = { rules: { foo: 'from b' } }
		const result = mergeConfigs(a, b)
		expect(result.rules).toEqual({ bar: 'from a', foo: 'from b' })
	})
})
