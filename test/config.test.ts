import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
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

describe('shared config via package.json string', () => {
	let tempDirectory: string

	beforeAll(async () => {
		tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'mdat-shared-config-'))
		const rulesPath = path.join(tempDirectory, 'shared-rules.js')
		await fs.writeFile(
			rulesPath,
			"export default { 'shared-rule': '# Loaded from shared config' };\n",
			'utf8',
		)
		// Use absolute path — import() in config.ts resolves relative to its own
		// location, not the package.json, so relative paths don't work here.
		await fs.writeFile(
			path.join(tempDirectory, 'package.json'),
			JSON.stringify({ mdat: rulesPath, name: 'shared-config-test' }),
			'utf8',
		)
	})

	afterAll(async () => {
		await fs.rm(tempDirectory, { force: true, recursive: true })
	})

	it('should resolve a string mdat key in package.json as a shared config module', async () => {
		const config = await loadConfig({
			searchFrom: tempDirectory,
		})
		expect(config).toBeDefined()
		expect(config['shared-rule']).toBe('# Loaded from shared config')
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
