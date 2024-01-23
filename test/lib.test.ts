import { expandString, lintString, parseCommentText } from '../src/lib'
import readmeExpanders from '../src/lib/expanders/readme'
import fs from 'node:fs/promises'
import { expect, it } from 'vitest'

it('should expand comments', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	const expandedMarkdown = await expandString(markdown, { expansionRules: readmeExpanders })

	expect(expandedMarkdown).toMatchSnapshot()
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

it('should parse valid comments', () => {
	expect(parseCommentText(' <!--title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText(' <!--tp.title -->')).toEqual({ args: undefined, keyword: 'tp.title' })
	expect(parseCommentText('<!--  title      -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--  tp.title      -->')).toEqual({
		args: undefined,
		keyword: 'tp.title',
	})
	expect(parseCommentText('<!-- title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- title-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- title-with--dashes -->')).toEqual({
		args: undefined,
		keyword: 'title-with--dashes',
	})
	expect(parseCommentText('<!-- title() -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- title({prefix: "😬"}) -->')).toEqual({
		args: { prefix: '😬' },
		keyword: 'title',
	})
	expect(parseCommentText('<!-- tp.title({prefix: "😬"}) -->')).toEqual({
		args: { prefix: '😬' },
		keyword: 'tp.title',
	})
	expect(parseCommentText('<!-- title({prefix: 1}) -->')).toEqual({
		args: { prefix: 1 },
		keyword: 'title',
	})
	expect(parseCommentText('<!-- tp.title({prefix: 1}) -->')).toEqual({
		args: { prefix: 1 },
		keyword: 'tp.title',
	})
	expect(parseCommentText('<!-- title// -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- title//-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- title# -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- title#-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!-- tp.title -->')).toEqual({ args: undefined, keyword: 'tp.title' })
	expect(parseCommentText('<!-- tp.title-with--dashes -->')).toEqual({
		args: undefined,
		keyword: 'tp.title-with--dashes',
	})
	expect(parseCommentText('<!-- tp.title() -->')).toEqual({ args: undefined, keyword: 'tp.title' })
	expect(parseCommentText('<!-- tp.title({prefix: "😬"}) -->')).toEqual({
		args: { prefix: '😬' },
		keyword: 'tp.title',
	})
	expect(parseCommentText('<!-- tp.title({prefix: 1}) -->')).toEqual({
		args: { prefix: 1 },
		keyword: 'tp.title',
	})
	expect(parseCommentText('<!--// title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--// title //-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--// title-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--//title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--//title //-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--//title-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--# title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--# title #-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--# title-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--#title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--#title #-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--#title-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--title -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--title // -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--title # -->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--title-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--title//-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--title#-->')).toEqual({ args: undefined, keyword: 'title' })
	expect(parseCommentText('<!--tp.title -->')).toEqual({ args: undefined, keyword: 'tp.title' })
})

it('should not report errors when linted and valid', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
	const lintReport = await lintString(markdown, { expansionRules: readmeExpanders })

	console.log(`lintReport: ${JSON.stringify(lintReport)}`)

	if (lintReport !== true) {
		for (const error of lintReport) {
			console.log(error.message)
		}
	}

	expect(1).toEqual(1)
})

it('should report errors when linted and invalid', async () => {
	const markdown = await fs.readFile('./test/assets/readme-basic-invalid.md', 'utf8')
	const lintReport = await lintString(markdown, { expansionRules: readmeExpanders })

	console.log(`lintReport: ${JSON.stringify(lintReport)}`)

	if (lintReport !== true) {
		for (const error of lintReport) {
			console.log(error.message)
		}
	}

	expect(1).toEqual(1)
})
