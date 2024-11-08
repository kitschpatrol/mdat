import os from 'node:os'
import { describe, expect, it } from 'vitest'
import { expandReadmeString } from '../src/lib/readme/api'

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
		expect(stripHashes(stripTempPath(result.toString()))).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "./test/assets/tldraw-sketch.tldr" } -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="assets/tldraw-sketch-XXXXXXXX-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="assets/tldraw-sketch-XXXXXXXX-light.svg">
			  <img alt="tldraw diagram" src="assets/tldraw-sketch-XXXXXXXX-light.svg">
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

		expect(stripHashes(stripTempPath(result.toString()))).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="assets/v2_c_JsxJk8dag6QsrqExukis4-XXXXXXXX-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="assets/v2_c_JsxJk8dag6QsrqExukis4-XXXXXXXX-light.svg">
			  <img alt="tldraw diagram" src="assets/v2_c_JsxJk8dag6QsrqExukis4-XXXXXXXX-light.svg">
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

describe('size-table rule', () => {
	it('should show original, brotli, and gzip sizes by default for a single file', async () => {
		const result = await expandReadmeString(
			'<!-- size-table { file: "./test/assets/size-test-file-1.txt" } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table { file: "./test/assets/size-test-file-1.txt" } -->

			| File                 | Original | Gzip  | Brotli |
			| -------------------- | -------- | ----- | ------ |
			| size-test-file-1.txt | 335 B    | 223 B | 217 B  |

			<!-- /size-table -->
			"
		`)
	})

	it('should accept an array of files', async () => {
		const result = await expandReadmeString(
			'<!-- size-table { files: ["./test/assets/size-test-file-1.txt", "./test/assets/size-test-file-2.txt"] } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table { files: ["./test/assets/size-test-file-1.txt", "./test/assets/size-test-file-2.txt"] } -->

			| File                 | Original | Gzip  | Brotli |
			| -------------------- | -------- | ----- | ------ |
			| size-test-file-1.txt | 335 B    | 223 B | 217 B  |
			| size-test-file-2.txt | 1.3 kB   | 294 B | 276 B  |

			<!-- /size-table -->
			"
		`)
	})

	it('should allow disabling specific columns', async () => {
		const result = await expandReadmeString(
			'<!-- size-table { file: "./test/assets/size-test-file-1.txt", brotli: false, gzip: false } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table { file: "./test/assets/size-test-file-1.txt", brotli: false, gzip: false } -->

			| File                 | Original |
			| -------------------- | -------- |
			| size-test-file-1.txt | 335 B    |

			<!-- /size-table -->
			"
		`)
	})

	it('should allow showing compression percentages', async () => {
		const result = await expandReadmeString(
			'<!-- size-table { file: "./test/assets/size-test-file-1.txt", showPercentage: true } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table { file: "./test/assets/size-test-file-1.txt", showPercentage: true } -->

			| File                 | Original | Gzip        | Brotli      |
			| -------------------- | -------- | ----------- | ----------- |
			| size-test-file-1.txt | 335 B    | 223 B (33%) | 217 B (35%) |

			<!-- /size-table -->
			"
		`)
	})

	it('should handle custom column combinations', async () => {
		const result = await expandReadmeString(
			'<!-- size-table { file: "./test/assets/size-test-file-1.txt", original: false, brotli: true, gzip: true, showPercentage: true } -->',
			{ addMetaComment: false },
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table { file: "./test/assets/size-test-file-1.txt", original: false, brotli: true, gzip: true, showPercentage: true } -->

			| File                 | Gzip        | Brotli      |
			| -------------------- | ----------- | ----------- |
			| size-test-file-1.txt | 223 B (33%) | 217 B (35%) |

			<!-- /size-table -->
			"
		`)
	})
})

describe('size rule', () => {
	it('should show original size by default', async () => {
		const result = await expandReadmeString(
			'<!-- size { file: "./test/assets/size-test-file-1.txt" } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size { file: "./test/assets/size-test-file-1.txt" } -->

			335 B

			<!-- /size -->
			"
		`)
	})

	it('should show brotli compressed size when specified', async () => {
		const result = await expandReadmeString(
			'<!-- size { file: "./test/assets/size-test-file-1.txt", compression: "brotli" } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size { file: "./test/assets/size-test-file-1.txt", compression: "brotli" } -->

			217 B

			<!-- /size -->
			"
		`)
	})

	it('should show gzip compressed size when specified', async () => {
		const result = await expandReadmeString(
			'<!-- size { file: "./test/assets/size-test-file-1.txt", compression: "gzip" } -->',
			{
				addMetaComment: false,
			},
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size { file: "./test/assets/size-test-file-1.txt", compression: "gzip" } -->

			223 B

			<!-- /size -->
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

function stripHashes(text: string): string {
	return text.replaceAll(/-[\da-f]{8}/g, '-XXXXXXXX')
}
