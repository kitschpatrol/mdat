import { expandReadmeString } from '../src/lib/api'
import os from 'node:os'
import { describe, expect, it } from 'vitest'

// These have long timeouts because going through puppeteer is slow

describe('tldraw image rule', () => {
	it('should expand tldraw images from local files', async () => {
		const markdown = `<!-- tldraw { src: "./test/assets/tldraw-sketch.tldr" } -->`
		const result = await expandReadmeString(markdown, {
			assetsPath: `${os.tmpdir()}/assets`,
		})
		expect(result).toMatchSnapshot()
	}, 30_000)

	it('should expand tldraw images from remote URLs', async () => {
		const markdown = `<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->`
		const result = await expandReadmeString(markdown, {
			assetsPath: `${os.tmpdir()}/assets`,
		})
		expect(result).toMatchSnapshot()
	}, 30_000)
})
