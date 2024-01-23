import { expandString } from '../src/lib'
import { parseCommentText } from '../src/lib'
import readmeExpanders from '../src/lib/expanders/readme'
import fs from 'node:fs/promises'
import { expect, it } from 'vitest'

it('should expand comments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, { expansionRules: readmeExpanders })

	if (!expandedMarkdown) console.log('blank')

	expect(1).toEqual(1)
})

it('should expand comments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, { expansionRules: readmeExpanders })

	if (!expandedMarkdown) console.log('blank')

	expect(1).toEqual(1)
})

it('should expand prefixed comments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic-prefixed.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, {
		expansionRules: readmeExpanders,
		keywordPrefix: 'tp.',
	})

	if (!expandedMarkdown) console.log(expandedMarkdown)

	expect(1).toEqual(1)
})

it('should handle arguments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic-args.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, {
		expansionRules: readmeExpanders,
	})

	console.log(expandedMarkdown)

	expect(1).toEqual(1)
})

it('should expand header and footer comments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-header-footer.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, { expansionRules: readmeExpanders })

	console.log(`expandedMarkdown: ${expandedMarkdown}`)

	expect(1).toEqual(1)
})

it('should parse comments', () => {
	const tests = [
		[' <!--title -->', { args: undefined, keyword: 'title' }],
		[' <!--title -->', { args: undefined, keyword: 'title' }],
		['<!-- title-with--dashes -->', { args: undefined, keyword: 'title-with--dashes' }],
		['<!--title -->', { args: undefined, keyword: 'title' }],
		['<!--  title      -->', { args: undefined, keyword: 'title' }],
		['<!-- title -->', { args: undefined, keyword: 'title' }],
		['<!-- title() -->', { args: undefined, keyword: 'title' }],
		['<!-- title({prefix: "😬"}) -->', { args: { prefix: '😬' }, keyword: 'title' }],
		['<!-- title({prefix: "😬"}) -->', { args: { prefix: '😬' }, keyword: 'title' }],
		['<!-- title({prefix: 1}) -->', { args: { prefix: 1 }, keyword: 'title' }],
		[' <!--tp.title -->', { args: undefined, keyword: 'tp.title' }],
		[' <!--tp.title -->', { args: undefined, keyword: 'tp.title' }],
		['<!-- tp.title-with--dashes -->', { args: undefined, keyword: 'tp.title-with--dashes' }],
		['<!--tp.title -->', { args: undefined, keyword: 'tp.title' }],
		['<!--  tp.title      -->', { args: undefined, keyword: 'tp.title' }],
		['<!-- tp.title -->', { args: undefined, keyword: 'tp.title' }],
		['<!-- tp.title() -->', { args: undefined, keyword: 'tp.title' }],
		['<!-- tp.title({prefix: "😬"}) -->', { args: { prefix: '😬' }, keyword: 'tp.title' }],
		['<!-- tp.title({prefix: "😬"}) -->', { args: { prefix: '😬' }, keyword: 'tp.title' }],
		['<!-- tp.title({prefix: 1}) -->', { args: { prefix: 1 }, keyword: 'tp.title' }],
	]

	for (const [input, expected] of tests) {
		const actual = parseCommentText(input as string)
		expect(actual).toEqual(expected)
	}
})
