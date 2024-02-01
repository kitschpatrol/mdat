import { parseComment } from '../src/lib/mdat/parse'
import { describe, expect, it } from 'vitest'

// TODO
// describe('expandString', () => {
// 	it('should expand comments and handle arguments', async () => {
// 		const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
// 		const { expanded: expandedString } = await expandString(markdown, {
// 			expansionRules: presets.readme,
// 		})
// 		expect(expandedString).toMatchSnapshot()
// 	})

// 	it('should expand special header and footer comments', async () => {
// 		const markdown = await fs.readFile('./test/assets/readme-header-footer.md', 'utf8')
// 		const { expanded: expandedString } = await expandString(markdown, {
// 			expansionRules: presets.readme,
// 		})
// 		expect(expandedString).toMatchSnapshot()
// 	})

// 	it('should expand prefixed comments', async () => {
// 		const markdown = await fs.readFile('./test/assets/readme-basic-prefixed.md', 'utf8')
// 		const { expanded: expandedString } = await expandString(markdown, {
// 			expansionRules: presets.readme,
// 			keywordPrefix: 'tp.',
// 		})
// 		expect(expandedString).toMatchSnapshot()
// 	})
// })

describe('basic comment keyword parsing', () => {
	const basicOptions = {
		closingPrefix: '/',
		keywordPrefix: '',
		metaCommentIdentifier: '+',
	}

	it('should not parse non-comments', () => {
		expect(parseComment('<!- title', basicOptions)).toBeUndefined()
		expect(parseComment('<!!-- title() -->', basicOptions)).toBeUndefined()
		expect(parseComment('title() -->', basicOptions)).toBeUndefined()
	})

	it('should parse basic comments', () => {
		expect(parseComment('<!-- title -->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title() -->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title() -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
	})

	it('should forgive spacing variations', () => {
		expect(parseComment('<!--     title -->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--     title -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title-->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title -->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title-->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title()-->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title()-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title (  )-->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title (  )-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title (  )  -->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title (  )  -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!--     title-->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--     title-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title-->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
	})

	it('should forgive extra garbage in basic comments', () => {
		expect(parseComment('<!------ title -->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!------ title -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!---- title ----->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!---- title ----->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
		expect(parseComment('<!---title--->', basicOptions)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!---title--->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {},
			  "type": "open",
			}
		`)
	})

	const basicOptionsPrefixed = {
		closingPrefix: '/',
		keywordPrefix: 'tp.',
		metaCommentIdentifier: '+',
	}

	it('should parse prefixed comments', () => {
		expect(parseComment('<!-- tp.title -->', basicOptionsPrefixed)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- tp.title -->",
			  "keyword": "title",
			  "keywordPrefix": "tp.",
			  "parameters": {},
			  "type": "open",
			}
		`)
	})

	// TODO case handling
})

describe('keyword option argument parsing', () => {
	const options = {
		closingPrefix: '/',
		keywordPrefix: '',
		metaCommentIdentifier: '+',
	}

	it('should parse basic options', () => {
		expect(parseComment('<!-- title({prefix: "😬"}) -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title({prefix: "😬"}) -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)

		expect(parseComment('<!-- title({prefix: 1}) -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title({prefix: 1}) -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": 1,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title({prefix: true}) -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title({prefix: true}) -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": true,
			  },
			  "type": "open",
			}
		`)
	})

	it('should parse without parentheses', () => {
		expect(parseComment('<!-- title{prefix: "😬"} -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title{prefix: "😬"} -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)

		expect(parseComment('<!-- title{prefix: 1} -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title{prefix: 1} -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": 1,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title{prefix: true} -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title{prefix: true} -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": true,
			  },
			  "type": "open",
			}
		`)
	})

	it('should parse bare json', () => {
		expect(parseComment('<!-- title prefix: "😬" -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title prefix: "😬" -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title prefix: 1 -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title prefix: 1 -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": 1,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title prefix: true -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title prefix: true -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": true,
			  },
			  "type": "open",
			}
		`)
	})

	it('should parse bare json with wonky spacing', () => {
		expect(parseComment('<!-- title prefix:   "😬"-->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title prefix:   "😬"-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title  prefix  : 1-->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title  prefix  : 1-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": 1,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title   prefix :     true    -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title   prefix :     true    -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": true,
			  },
			  "type": "open",
			}
		`)
	})

	it('should forgive spacing variations', () => {
		expect(parseComment('<!-- title{prefix: "😬"} -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title{prefix: "😬"} -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title{  prefix:   "😬" }-->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title{  prefix:   "😬" }-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)

		expect(parseComment('<!-- title {prefix: 1}-->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title {prefix: 1}-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": 1,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title   {prefix: true} -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title   {prefix: true} -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": true,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title({prefix: "😬"}) -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title({prefix: "😬"}) -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title({  prefix:   "😬" })-->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title({  prefix:   "😬" })-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": "😬",
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!-- title ({prefix: 1})-->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!-- title ({prefix: 1})-->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": 1,
			  },
			  "type": "open",
			}
		`)
		expect(parseComment('<!--title   ({prefix: true}) -->', options)).toMatchInlineSnapshot(`
			{
			  "closingPrefix": "/",
			  "html": "<!--title   ({prefix: true}) -->",
			  "keyword": "title",
			  "keywordPrefix": "",
			  "parameters": {
			    "prefix": true,
			  },
			  "type": "open",
			}
		`)
	})
})

describe('comment type detection', () => {
	const options = {
		closingPrefix: '/',
		keywordPrefix: '',
		metaCommentIdentifier: '+',
	}

	it('should identify opening comments', () => {
		expect(parseComment('<!-- some-keyword -->', options)).toEqual({
			closingPrefix: '/',
			html: '<!-- some-keyword -->',
			keyword: 'some-keyword',
			keywordPrefix: '',
			parameters: {},
			type: 'open',
		})
	})

	it('should identify snug opening comments', () => {
		expect(parseComment('<!--some-keyword-->', options)).toEqual({
			closingPrefix: '/',
			html: '<!--some-keyword-->',
			keyword: 'some-keyword',
			keywordPrefix: '',
			parameters: {},
			type: 'open',
		})
	})

	it('should identify closing comments', () => {
		expect(parseComment('<!-- /some-keyword -->', options)).toEqual({
			closingPrefix: '/',
			html: '<!-- /some-keyword -->',
			keyword: 'some-keyword',
			keywordPrefix: '',
			parameters: {},
			type: 'close',
		})
	})

	it('should identify snug closing comments', () => {
		expect(parseComment('<!--/some-keyword-->', options)).toEqual({
			closingPrefix: '/',
			html: '<!--/some-keyword-->',
			keyword: 'some-keyword',
			keywordPrefix: '',
			parameters: {},
			type: 'close',
		})
	})

	it('should identify meta comments', () => {
		expect(parseComment('<!--+ I am a meta comment +-->', options)).toEqual({
			content: ' I am a meta comment ',
			html: '<!--+ I am a meta comment +-->',
			type: 'meta',
		})
	})

	const nativeOptions = {
		closingPrefix: '/',
		keywordPrefix: 'tp.',
		metaCommentIdentifier: '+',
	}

	it('should identify native comments', () => {
		expect(parseComment('<!-- I am a native comment -->', nativeOptions)).toEqual({
			content: 'I am a native comment',
			html: '<!-- I am a native comment -->',
			type: 'native',
		})
	})
})

// TODO
// describe('linting', () => {
// 	it('should not report errors when linted and valid', async () => {
// 		const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
// 		const lintReport = await checkString(markdown, { expansionRules: presets.readme })

// 		expect(lintReport).toEqual(true)
// 	})

// 	it('should report errors when linted and invalid', async () => {
// 		const markdown = await fs.readFile('./test/assets/readme-basic-invalid.md', 'utf8')
// 		const lintReport = await checkString(markdown, { expansionRules: presets.readme })

// 		expect(lintReport).not.toBe(true)
// 		expect(lintReport).toHaveLength(7)
// 	})
// })
