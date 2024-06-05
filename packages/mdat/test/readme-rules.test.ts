import { expandReadmeString } from '../src/lib/readme/api'
import os from 'node:os'
import { describe, expect, it } from 'vitest'

describe('badges rule', () => {
	it('should show license and npm badges by default', async () => {
		const result = await expandReadmeString('<!-- badges -->', { addMetaComment: false })
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges -->

			[![NPM Package mdat](https://img.shields.io/npm/v/mdat.svg)](https://npmjs.com/package/mdat)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

			<!-- /badges -->
			"
		`)
	})

	it('should allow arbitrary npm package badges', async () => {
		const result = await expandReadmeString(
			"<!-- badges { npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli'] } -->",
			{ addMetaComment: false },
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges { npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli'] } -->

			[![NPM Package mdat](https://img.shields.io/npm/v/mdat.svg)](https://npmjs.com/package/mdat)
			[![NPM Package svelte-tweakpane-ui](https://img.shields.io/npm/v/svelte-tweakpane-ui.svg)](https://npmjs.com/package/svelte-tweakpane-ui)
			[![NPM Package @kitschpatrol/tldraw-cli](https://img.shields.io/npm/v/@kitschpatrol/tldraw-cli.svg)](https://npmjs.com/package/@kitschpatrol/tldraw-cli)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

			<!-- /badges -->
			"
		`)
	})
})

describe('banner rule', () => {
	it('should not expand if there is no easily-found banner image', async () => {
		const result = await expandReadmeString('<!-- banner -->', { addMetaComment: false })
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner -->
			"
		`)
	})

	it('should allow custom banner images via options and use package name as alt text', async () => {
		const result = await expandReadmeString(
			"<!-- banner {src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top' } -->",
			{ addMetaComment: false },
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner {src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top' } -->

			![mdat banner](https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80\\&w=1920\\&h=1200\\&fit=crop\\&crop=top)

			<!-- /banner -->
			"
		`)
	})

	it('should allow custom banner images and alt text via options', async () => {
		const result = await expandReadmeString(
			"<!-- banner {src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top', alt: 'kitten' } -->",
			{ addMetaComment: false },
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner {src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top', alt: 'kitten' } -->

			![kitten](https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80\\&w=1920\\&h=1200\\&fit=crop\\&crop=top)

			<!-- /banner -->
			"
		`)
	})
})

// These have long timeouts because going through puppeteer is slow
describe('tldraw image rule', () => {
	it('should expand tldraw images from local files', async () => {
		const markdown = `<!-- tldraw { src: "./test/assets/tldraw-sketch.tldr" } -->`
		const result = await expandReadmeString(markdown, {
			addMetaComment: false,
			assetsPath: `${os.tmpdir()}/assets`,
		})
		expect(stripTempPath(result.toString())).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "./test/assets/tldraw-sketch.tldr" } -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="assets/tldraw-sketch-132cbdb8-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="assets/tldraw-sketch-132cbdb8-light.svg">
			  <img alt="tldraw diagram" src="assets/tldraw-sketch-132cbdb8-light.svg">
			</picture>

			<!-- /tldraw -->
			"
		`)
	}, 30_000)

	it('should expand tldraw images from remote urls', async () => {
		const markdown = `<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->`
		const result = await expandReadmeString(markdown, {
			addMetaComment: false,
			assetsPath: `${os.tmpdir()}/assets`,
		})

		// TODO maybe ignore the hash?
		expect(stripTempPath(result.toString())).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="assets/v2_c_JsxJk8dag6QsrqExukis4-4104893b-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="assets/v2_c_JsxJk8dag6QsrqExukis4-4104893b-light.svg">
			  <img alt="tldraw diagram" src="assets/v2_c_JsxJk8dag6QsrqExukis4-4104893b-light.svg">
			</picture>

			<!-- /tldraw -->
			"
		`)
	}, 30_000)
})

describe('description rule', () => {
	it('should show description from package.json', async () => {
		const result = await expandReadmeString('<!-- short-description -->', { addMetaComment: false })
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- short-description -->

			**CLI tool and library implementing the Markdown Autophagic Template (MDAT) system. MDAT lets you use comments as dynamic content templates in Markdown files, making it easy to generate and update readme boilerplate.**

			<!-- /short-description -->
			"
		`)
	})

	it('should work with "description" rule alias', async () => {
		const result = await expandReadmeString('<!-- description -->', { addMetaComment: false })
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- description -->

			**CLI tool and library implementing the Markdown Autophagic Template (MDAT) system. MDAT lets you use comments as dynamic content templates in Markdown files, making it easy to generate and update readme boilerplate.**

			<!-- /description -->
			"
		`)
	})
})

describe('table of contents rule', () => {
	const testMarkdown = '# One\n## Two A\n### Three A\n## Two B\n### Three B\n#### Four B'

	it('should generate a table of contents', async () => {
		const result = await expandReadmeString(`<!-- table-of-contents -->\n\n${testMarkdown}`, {
			addMetaComment: false,
		})
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- table-of-contents -->

			## Table of contents

			- [One](#one)
			  - [Two A](#two-a)
			    - [Three A](#three-a)
			  - [Two B](#two-b)
			    - [Three B](#three-b)

			<!-- /table-of-contents -->

			# One

			## Two A

			### Three A

			## Two B

			### Three B

			#### Four B
			"
		`)
	})

	it('should respect the depth limit option', async () => {
		const result = await expandReadmeString(
			`<!-- table-of-contents { depth: 2 } -->\n\n${testMarkdown}`,
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- table-of-contents { depth: 2 } -->

			## Table of contents

			- [One](#one)
			  - [Two A](#two-a)
			  - [Two B](#two-b)

			<!-- /table-of-contents -->

			# One

			## Two A

			### Three A

			## Two B

			### Three B

			#### Four B
			"
		`)
	})

	it('should work with the toc alias', async () => {
		const result = await expandReadmeString(`<!-- toc -->\n\n${testMarkdown}`, {
			addMetaComment: false,
		})
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- toc -->

			## Table of contents

			- [One](#one)
			  - [Two A](#two-a)
			    - [Three A](#three-a)
			  - [Two B](#two-b)
			    - [Three B](#three-b)

			<!-- /toc -->

			# One

			## Two A

			### Three A

			## Two B

			### Three B

			#### Four B
			"
		`)
	})

	it('should work with the toc alias and an option argument', async () => {
		const result = await expandReadmeString(`<!-- toc { depth: 2 } -->\n\n${testMarkdown}`, {
			addMetaComment: false,
		})
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- toc { depth: 2 } -->

			## Table of contents

			- [One](#one)
			  - [Two A](#two-a)
			  - [Two B](#two-b)

			<!-- /toc -->

			# One

			## Two A

			### Three A

			## Two B

			### Three B

			#### Four B
			"
		`)
	})
})

// TODO <!-- contributing --> rule test
// TODO <!-- code --> rule test
// TODO <!-- footer --> rule test
// TODO <!-- header --> rule test
// TODO <!-- license --> rule test
// TODO <!-- title --> rule test

// Helpers

// Replace matched dates with the placeholder text for stable snapshots
function stripTempPath(text: string): string {
	return text.replaceAll(os.tmpdir(), '').replaceAll('../', '')
}
