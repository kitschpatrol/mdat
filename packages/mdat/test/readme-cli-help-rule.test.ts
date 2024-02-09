import cliHelpRule from '../src/lib/readme/rules/cli-help'
import { getHelpMarkdown } from '../src/lib/readme/rules/cli-help/utilities/get-help-markdown'
import { helpObjectToMarkdown } from '../src/lib/readme/rules/cli-help/utilities/help-object-to-markdown'
import { helpStringToObject } from '../src/lib/readme/rules/cli-help/utilities/help-string-to-object'
import fs from 'node:fs'
import path from 'node:path'
import { getSoleRule } from 'remark-mdat'
import { describe, expect, it } from 'vitest'

// Load all --help command output samples in ./assets/help
const helpSamples = fs
	.readdirSync(`${import.meta.dirname}/assets/help`)
	.filter((file) => file.endsWith('.txt'))
	.reduce<Record<string, string>>((acc, file) => {
		const name = path.basename(file, '.txt')
		const content = fs.readFileSync(`${import.meta.dirname}/assets/help/${file}`, 'utf8')
		return { ...acc, [name]: content }
	}, {})

describe('cli help string to object', () => {
	for (const [name, helpText] of Object.entries(helpSamples)) {
		it(`should convert "${name}" to a valid program info object`, () => {
			const object = helpStringToObject(helpText)
			expect(object).toBeDefined()
			expect(object).toMatchSnapshot()
		})
	}
})

describe('cli help object to markdown', () => {
	for (const [name, helpText] of Object.entries(helpSamples)) {
		it(`should convert a help object or "${name}" to valid markdown`, () => {
			const object = helpStringToObject(helpText)

			expect(object).toBeDefined()
			const markdown = helpObjectToMarkdown(
				object!,
				object?.subcommandName === undefined && object?.commands?.length
					? object?.commands?.length > 0
					: false,
			)

			expect(markdown).toMatchSnapshot()
		})
	}
})

describe('cli help invocation', () => {
	it('should get help markdown directly from the output of a command', async () => {
		const helpMarkdown = await getHelpMarkdown('./bin/cli.js')
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should fall back to a basic code block if the help output cannot be parsed', async () => {
		const helpMarkdown = await getHelpMarkdown('git')
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should try to infer the binary to get help from based on package.json', async () => {
		const helpMarkdown = await getSoleRule(cliHelpRule).content()
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should correctly identify executables', async () => {
		const helpMarkdown = await getSoleRule(cliHelpRule).content({ cliCommand: 'git' })
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should correctly identify non-executables', async () => {
		await expect(getSoleRule(cliHelpRule).content({ cliCommand: '/dev/null' })).rejects.toThrow()
	})

	it('should correctly resolve binary names that are in package.json but not on the path', async () => {
		const helpMarkdown = await getSoleRule(cliHelpRule).content({ cliCommand: 'mdat' })
		expect(helpMarkdown).toMatchSnapshot()
	})
})
