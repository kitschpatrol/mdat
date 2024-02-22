import { expandReadmeString } from '../src/lib/readme/api'
import os from 'node:os'
import { describe, expect, it } from 'vitest'

describe('badges rule', () => {
	it('should show license and npm badges by default', async () => {
		const result = await expandReadmeString('<!-- badges -->', { addMetaComment: false })
		expect(stripDynamic(result.toString())).toMatchInlineSnapshot(`
			"<!-- badges -->

			[![NPM Package mdat](https://img.shields.io/npm/v/mdat.svg)](https://npmjs.com/package/mdat)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

			<!-- /badges -->
			"
		`)
	})

	it('should allow arbitrary NPM package badges', async () => {
		const result = await expandReadmeString(
			"<!-- badges { npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli'] } -->",
			{ addMetaComment: false },
		)
		expect(stripDynamic(result.toString())).toMatchInlineSnapshot(`
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
			assetsPath: `${os.tmpdir()}/assets`,
		})
		expect(stripDynamic(result.toString())).toMatchSnapshot()
	}, 30_000)

	it('should expand tldraw images from remote URLs', async () => {
		const markdown = `<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->`
		const result = await expandReadmeString(markdown, {
			assetsPath: `${os.tmpdir()}/assets`,
		})
		expect(stripDynamic(result.toString())).toMatchSnapshot()
	}, 30_000)
})

// TODO <!-- contributing --> rule test
// TODO <!-- code --> rule test
// TODO <!-- footer --> rule test
// TODO <!-- header --> rule test
// TODO <!-- license --> rule test
// TODO <!-- short-description --> rule test
// TODO <!-- table-of-contents --> rule test
// TODO <!-- toc --> rule test
// TODO <!-- title --> rule test

// Helpers

// Replace matched dates with the placeholder text for stable snapshots
function stripDynamic(text: string): string {
	return text.replaceAll(/\s\d{4}-\d{2}-\d{2}\s/g, ' ****-**-** ')
}
