import { loadConfig } from '../src/lib/config'
import { describe, expect, it } from 'vitest'

describe('configuration loading', () => {
	it('should load from valid cosmicconfig paths', async () => {
		const config = await loadConfig({
			searchFrom: './test/assets',
		})
		expect(config).toMatchInlineSnapshot(`
			{
			  "addMetaComment": false,
			  "assetsPath": "./assets",
			  "closingPrefix": "/",
			  "keywordPrefix": "",
			  "metaCommentIdentifier": "+",
			  "packageFile": "/Users/mika/Code/mdat/packages/mdat/package.json",
			  "rules": {
			    "cosmiconfig": "# I was loaded by Cosmiconfig",
			    "dynamic-rule": {
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
		expect(config).toMatchInlineSnapshot(`
			{
			  "addMetaComment": false,
			  "assetsPath": "./assets",
			  "closingPrefix": "/",
			  "keywordPrefix": "",
			  "metaCommentIdentifier": "+",
			  "packageFile": "/Users/mika/Code/mdat/packages/mdat/package.json",
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
			    "mdat": "Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).",
			  },
			}
		`)
	})

	it('should load arbitrary json files as rules', async () => {
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
		expect(config.rules).toMatchInlineSnapshot(`
			{
			  "mdat": "Powered by the Markdown Autophagic Template system: [mdat](https://github.com/kitschpatrol/mdat).",
			}
		`)
	})
})
