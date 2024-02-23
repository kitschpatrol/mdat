import remarkMdat, { type MdatCheckOptions, type Options, mdatCheck } from '../src'
import { type Root } from 'mdast'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { type VFile } from 'vfile'
import { describe, expect, it } from 'vitest'

async function expandStringToVfile(markdown: string, options: Options): Promise<VFile> {
	return remark().use(remarkGfm).use(remarkMdat, options).process(markdown)
}

async function checkMarkdown(markdown: string, options: MdatCheckOptions): Promise<VFile> {
	return remark()
		.use(remarkGfm)
		.use(
			() =>
				// eslint-disable-next-line unicorn/consistent-function-scoping
				async function (tree, file) {
					await mdatCheck(tree as Root, file, options)
				},
		)
		.process(markdown)
}

function stripAnsiEscapeCodes(text: string): string {
	// This regex matches the escape sequences and removes them
	// eslint-disable-next-line no-control-regex
	const ansiEscapeRegex = /\u001B\[[\d;]*m/g
	return text.replaceAll(ansiEscapeRegex, '')
}

const options: Options = {
	rules: {
		'optional-expansion': {
			content: 'This is optional',
		},
		'required-first-expansion': {
			content: 'This is required first',
			order: 1,
			required: true,
		},
		'required-second-expansion': {
			content: 'This is required last',
			order: 3,
			required: true,
		},
	},
}

describe('check validation', () => {
	it('should not report errors when valid', async () => {
		const markdown = `<!-- required-first-expansion -->\n<!-- optional-expansion -->\n<!-- required-second-expansion -->`
		const result = await expandStringToVfile(markdown, options)
		const foundError = result.messages.some((message) => message.fatal === true)
		expect(foundError).toBeFalsy()
	})

	it('should report errors when required comments are missing', async () => {
		const markdown = `<!-- required-first-expansion -->\n<!-- optional-expansion -->`
		const result = await expandStringToVfile(markdown, options)
		const foundError = result.messages.some((message) => message.fatal === true)
		expect(foundError).toBeTruthy()
	})

	it('should report errors when required comments are out of order', async () => {
		const markdown = `<!-- required-second-expansion -->\n<!-- required-first-expansion -->\n<!-- optional-expansion -->\n`
		const result = await expandStringToVfile(markdown, options)
		const errorMessage = result.messages.find((message) => message.fatal === true)
		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(`
			"Out of order:
			┌───────────────────────────────────────┬───────────────────────────────────────┐
			│ Current Order                         │ Required Order                        │
			├───────────────────────────────────────┼───────────────────────────────────────┤
			│ 1. <!-- required-second-expansion --> │ 1. <!-- required-first-expansion -->  │
			│ 2. <!-- required-first-expansion -->  │ 2. <!-- required-second-expansion --> │
			└───────────────────────────────────────┴───────────────────────────────────────┘"
		`)
	})

	it('should report errors when required comments are missing', async () => {
		const markdown = `<!-- required-first-expansion -->\n<!-- optional-expansion -->\n`
		const result = await expandStringToVfile(markdown, options)
		const errorMessage = result.messages.find((message) => message.fatal === true)
		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Missing required: <!-- required-second-expansion -->"`,
		)
	})

	it('should report errors when rules return nothing', async () => {
		const badOptions: Options = {
			...options,
			rules: {
				...options.rules,
				'rule-that-returns-nothing': '',
			},
		}
		const markdown = `<!-- required-first-expansion -->\n<!-- rule-that-returns-nothing -->\n<!-- optional-expansion -->\n<!-- required-second-expansion -->`
		const result = await expandStringToVfile(markdown, badOptions)
		const errorMessage = result.messages.find((message) => message.fatal === true)
		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Got empty content when expanding <!-- rule-that-returns-nothing -->"`,
		)
	})

	it('should report errors when rules throw errors', async () => {
		const badOptions: Options = {
			...options,
			rules: {
				...options.rules,
				'rule-that-throws'() {
					throw new Error('This rule throws')
				},
			},
		}
		const markdown = `<!-- rule-that-throws -->\n<!-- required-first-expansion -->\n<!-- optional-expansion -->\n<!-- required-second-expansion -->`
		const result = await expandStringToVfile(markdown, badOptions)
		const errorMessage = result.messages.find((message) => message.fatal === true)
		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Caught error expanding <!-- rule-that-throws -->, Error message: "Failed to expand content""`,
		)
	})

	it('should report missing meta comments', async () => {
		const metaOptions: MdatCheckOptions = {
			addMetaComment: true,
			closingPrefix: '/',
			keywordPrefix: '',
			metaCommentIdentifier: '+',
			paranoid: false,
			rules: { placeholder: 'This is a placeholder' },
		}
		const markdown = `<!-- placeholder -->\nThis is a placeholder\n<!-- /placeholder -->\n`
		const result = await checkMarkdown(markdown, metaOptions)
		const errorMessage = result.messages.find((message) => message.fatal === true)

		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Missing meta comment"`,
		)
	})

	it('should report unwelcome meta comments', async () => {
		const metaOptions: MdatCheckOptions = {
			addMetaComment: false,
			closingPrefix: '/',
			keywordPrefix: '',
			metaCommentIdentifier: '+',
			paranoid: false,
			rules: { placeholder: 'This is a placeholder' },
		}
		const markdown = `<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->\n<!-- placeholder -->\nThis is a placeholder\n<!-- /placeholder -->\n`
		const result = await checkMarkdown(markdown, metaOptions)
		const errorMessage = result.messages.find((message) => message.fatal === true)

		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Unexpected meta comment"`,
		)
	})

	it('should report multiple meta comments when none are wanted', async () => {
		const metaOptions: MdatCheckOptions = {
			addMetaComment: false,
			closingPrefix: '/',
			keywordPrefix: '',
			metaCommentIdentifier: '+',
			paranoid: false,
			rules: { placeholder: 'This is a placeholder' },
		}
		const markdown = `<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->\n<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->\n<!-- placeholder -->\nThis is a placeholder\n<!-- /placeholder -->\n`
		const result = await checkMarkdown(markdown, metaOptions)
		const errorMessage = result.messages.find(
			(message) => message.message === 'Multiple meta comments',
		)

		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Multiple meta comments"`,
		)
	})

	it('should report multiple meta comments when a single one is wanted', async () => {
		const metaOptions: MdatCheckOptions = {
			addMetaComment: true,
			closingPrefix: '/',
			keywordPrefix: '',
			metaCommentIdentifier: '+',
			paranoid: false,
			rules: { placeholder: 'This is a placeholder' },
		}
		const markdown = `<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->\n<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->\n<!-- placeholder -->\nThis is a placeholder\n<!-- /placeholder -->\n`
		const result = await checkMarkdown(markdown, metaOptions)
		const errorMessage = result.messages.find(
			(message) => message.message === 'Multiple meta comments',
		)

		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Multiple meta comments"`,
		)
	})

	it('should warn about missing rules', async () => {
		const markdown = `<!-- mystery-comment -->\n<!-- required-first-expansion -->\n<!-- optional-expansion -->\n<!-- required-second-expansion -->`
		const result = await expandStringToVfile(markdown, options)
		const errorMessage = result.messages.find((message) => message.fatal === false) // "warn" level

		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Missing rule for: <!-- mystery-comment -->"`,
		)
	})

	it('should warn about missing prefixes', async () => {
		const keywordOptions: Options = {
			...options,
			keywordPrefix: 'mm-',
		}
		const markdown = `<!-- mm-required-first-expansion -->\n<!-- optional-expansion -->\n<!-- mm-required-second-expansion -->`
		const result = await expandStringToVfile(markdown, keywordOptions)
		const errorMessage = result.messages.find((message) => message.fatal === false) // "warn" level

		expect(errorMessage).toBeDefined()
		expect(stripAnsiEscapeCodes(errorMessage!.message)).toMatchInlineSnapshot(
			`"Missing prefix: <!-- optional-expansion -->"`,
		)
	})

	it('should not warn about missing prefixes in non-rules', async () => {
		const keywordOptions: Options = {
			...options,
			keywordPrefix: 'mm-',
		}
		const markdown = `<!-- mm-required-first-expansion -->\n<!-- not-a-rule -->\n<!-- mm-required-second-expansion -->`
		const result = await expandStringToVfile(markdown, keywordOptions)
		const errorMessage = result.messages.find((message) => message.fatal === false) // "warn" level

		expect(errorMessage).not.toBeDefined()
	})
})
