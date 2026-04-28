import { describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'

describe('badges rule', () => {
	it('should show license and npm badges by default', async () => {
		const result = await expandString('<!-- badges -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges -->

			[![NPM Package mdat](https://img.shields.io/npm/v/mdat.svg)](https://npmjs.com/package/mdat)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)
			[![CI](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml)

			<!-- /badges -->
			"
		`)
	})

	it('should allow arbitrary npm package badges', async () => {
		const result = await expandString(
			"<!-- badges({npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli']}) -->",
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges({npm: ['svelte-tweakpane-ui', '@kitschpatrol/tldraw-cli']}) -->

			[![NPM Package svelte-tweakpane-ui](https://img.shields.io/npm/v/svelte-tweakpane-ui.svg)](https://npmjs.com/package/svelte-tweakpane-ui)
			[![NPM Package @kitschpatrol/tldraw-cli](https://img.shields.io/npm/v/@kitschpatrol/tldraw-cli.svg)](https://npmjs.com/package/@kitschpatrol/tldraw-cli)
			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)
			[![CI](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml)

			<!-- /badges -->
			"
		`)
	})

	it('should allow removal of npm package badges', async () => {
		const result = await expandString('<!-- badges({npm: []}) -->')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- badges({npm: []}) -->

			[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)
			[![CI](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/mdat/actions/workflows/ci.yml)

			<!-- /badges -->
			"
		`)
	})
})

describe('banner rule', () => {
	it('should not expand if there is no easily-found banner image', async () => {
		const result = await expandString('<!-- banner -->')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner -->
			"
		`)
	})

	it('should allow custom banner images via options and use package name as alt text', async () => {
		const result = await expandString(
			"<!-- banner({src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top'}) -->",
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner({src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top'}) -->

			![mdat banner](https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80\\&w=1920\\&h=1200\\&fit=crop\\&crop=top)

			<!-- /banner -->
			"
		`)
	})

	it('should allow custom banner images and alt text via options', async () => {
		const result = await expandString(
			"<!-- banner({src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top', alt: 'kitten'}) -->",
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- banner({src: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1920&h=1200&fit=crop&crop=top', alt: 'kitten'}) -->

			![kitten](https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80\\&w=1920\\&h=1200\\&fit=crop\\&crop=top)

			<!-- /banner -->
			"
		`)
	})
})

describe('description rule', () => {
	it('should show description from package.json', async () => {
		const result = await expandString('<!-- short-description -->')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- short-description -->

			**CLI tool and TypeScript library implementing the Markdown Autophagic Template (MDAT) system. MDAT lets you use comments as dynamic content templates in Markdown files, making it easy to generate and update readme boilerplate.**

			<!-- /short-description -->
			"
		`)
	})

	it('should work with "description" rule alias', async () => {
		const result = await expandString('<!-- description -->')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- description -->

			**CLI tool and TypeScript library implementing the Markdown Autophagic Template (MDAT) system. MDAT lets you use comments as dynamic content templates in Markdown files, making it easy to generate and update readme boilerplate.**

			<!-- /description -->
			"
		`)
	})
})

describe('table of contents rule', () => {
	const testMarkdown = '# One\n## Two A\n### Three A\n## Two B\n### Three B\n#### Four B'

	it('should generate a table of contents', async () => {
		const result = await expandString(`<!-- table-of-contents -->\n\n${testMarkdown}`)
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
		const result = await expandString(`<!-- table-of-contents({depth: 2}) -->\n\n${testMarkdown}`)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- table-of-contents({depth: 2}) -->

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
		const result = await expandString(`<!-- toc -->\n\n${testMarkdown}`)
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
		const result = await expandString(`<!-- toc({depth: 2}) -->\n\n${testMarkdown}`)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- toc({depth: 2}) -->

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
		const result = await expandString(
			'<!-- size-table({file: "./test/assets/size-test-file-1.txt"}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table({file: "./test/assets/size-test-file-1.txt"}) -->

			| File                 | Original | Gzip  | Brotli |
			| -------------------- | -------- | ----- | ------ |
			| size-test-file-1.txt | 335 B    | 223 B | 217 B  |

			<!-- /size-table -->
			"
		`)
	})

	it('should accept an array of files', async () => {
		const result = await expandString(
			'<!-- size-table({files: ["./test/assets/size-test-file-1.txt", "./test/assets/size-test-file-2.txt"]}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table({files: ["./test/assets/size-test-file-1.txt", "./test/assets/size-test-file-2.txt"]}) -->

			| File                 | Original | Gzip  | Brotli |
			| -------------------- | -------- | ----- | ------ |
			| size-test-file-1.txt | 335 B    | 223 B | 217 B  |
			| size-test-file-2.txt | 1.3 kB   | 294 B | 276 B  |

			<!-- /size-table -->
			"
		`)
	})

	it('should allow disabling specific columns', async () => {
		const result = await expandString(
			'<!-- size-table({file: "./test/assets/size-test-file-1.txt", brotli: false, gzip: false}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table({file: "./test/assets/size-test-file-1.txt", brotli: false, gzip: false}) -->

			| File                 | Original |
			| -------------------- | -------- |
			| size-test-file-1.txt | 335 B    |

			<!-- /size-table -->
			"
		`)
	})

	it('should allow showing compression percentages', async () => {
		const result = await expandString(
			'<!-- size-table({file: "./test/assets/size-test-file-1.txt", showPercentage: true}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table({file: "./test/assets/size-test-file-1.txt", showPercentage: true}) -->

			| File                 | Original | Gzip        | Brotli      |
			| -------------------- | -------- | ----------- | ----------- |
			| size-test-file-1.txt | 335 B    | 223 B (33%) | 217 B (35%) |

			<!-- /size-table -->
			"
		`)
	})

	it('should handle custom column combinations', async () => {
		const result = await expandString(
			'<!-- size-table({file: "./test/assets/size-test-file-1.txt", original: false, brotli: true, gzip: true, showPercentage: true}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size-table({file: "./test/assets/size-test-file-1.txt", original: false, brotli: true, gzip: true, showPercentage: true}) -->

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
		const result = await expandString('<!-- size({file: "./test/assets/size-test-file-1.txt"}) -->')
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size({file: "./test/assets/size-test-file-1.txt"}) -->

			335 B

			<!-- /size -->
			"
		`)
	})

	it('should show brotli compressed size when specified', async () => {
		const result = await expandString(
			'<!-- size({file: "./test/assets/size-test-file-1.txt", compression: "brotli"}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size({file: "./test/assets/size-test-file-1.txt", compression: "brotli"}) -->

			217 B

			<!-- /size -->
			"
		`)
	})

	it('should show gzip compressed size when specified', async () => {
		const result = await expandString(
			'<!-- size({file: "./test/assets/size-test-file-1.txt", compression: "gzip"}) -->',
		)
		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- size({file: "./test/assets/size-test-file-1.txt", compression: "gzip"}) -->

			223 B

			<!-- /size -->
			"
		`)
	})
})

describe('title rule', () => {
	it('should show package name as heading', async () => {
		const result = await expandString('<!-- title -->')
		expect(result.toString()).toContain('# mdat')
		expect(result.toString()).toContain('<!-- /title -->')
	})

	it('should apply titleCase option', async () => {
		const result = await expandString('<!-- title({titleCase: true}) -->')
		expect(result.toString()).toContain('# Mdat')
	})

	it('should apply prefix and postfix options', async () => {
		const result = await expandString('<!-- title({prefix: ">> ", postfix: " <<"}) -->')
		const text = result.toString()
		expect(text).toContain('>> mdat <<')
	})
})

describe('contributing rule', () => {
	it('should show contributing section with issues link', async () => {
		const result = await expandString('<!-- contributing -->')
		const text = result.toString()
		expect(text).toContain('## Contributing')
		expect(text).toContain('Issues')
		expect(text).toContain('github.com/kitschpatrol/mdat/issues')
		expect(text).toContain('<!-- /contributing -->')
	})
})

describe('license rule', () => {
	it('should show license section from package.json', async () => {
		const result = await expandString('<!-- license -->')
		const text = result.toString()
		expect(text).toContain('## License')
		expect(text).toContain('MIT')
		expect(text).toContain('Eric Mika')
		expect(text).toContain('<!-- /license -->')
	})
})

describe('code rule', () => {
	it('should embed file contents in a code block', async () => {
		const result = await expandString('<!-- code({file: "./test/assets/test-rules-json.json"}) -->')
		const text = result.toString()
		expect(text).toContain('```json')
		expect(text).toContain('A bold statement')
		expect(text).toContain('<!-- /code -->')
	})

	it('should not trim when trim is false', async () => {
		const result = await expandString(
			'<!-- code({file: "./test/assets/test-rules-json.json", trim: false}) -->',
		)
		const text = result.toString()
		expect(text).toContain('```json')
		expect(text).toContain('}\n\n```')
		expect(text).toContain('<!-- /code -->')
	})
})

describe('header compound rule', () => {
	it('should expand to title, badges, and description', async () => {
		const result = await expandString('<!-- header -->')
		const text = result.toString()
		// Should contain title content
		expect(text).toContain('# mdat')
		// Should contain badges
		expect(text).toContain('img.shields.io')
		// Should contain description
		expect(text).toContain('Markdown Autophagic Template')
		expect(text).toContain('<!-- /header -->')
	})
})

describe('footer compound rule', () => {
	it('should expand to contributing and license', async () => {
		const result = await expandString('<!-- footer -->')
		const text = result.toString()
		// Should contain contributing
		expect(text).toContain('## Contributing')
		expect(text).toContain('Issues')
		// Should contain license
		expect(text).toContain('## License')
		expect(text).toContain('MIT')
		expect(text).toContain('<!-- /footer -->')
	})
})

describe('install rule', () => {
	it('should generate pnpm install instructions for a node package', async () => {
		const result = await expandString('<!-- install -->')
		const text = result.toString()
		expect(text).toContain('## Install')
		expect(text).toContain('pnpm add mdat')
		expect(text).toContain('<!-- /install -->')
	})

	it('should show direct run command for CLI packages', async () => {
		const result = await expandString('<!-- install -->')
		const text = result.toString()
		expect(text).toContain('pnpx mdat')
	})
})

describe('dependencies rule', () => {
	it('should show platform requirements and peer dependencies', async () => {
		const result = await expandString('<!-- dependencies -->')
		const text = result.toString()
		expect(text).toContain('## Dependencies')
		expect(text).toContain('Node.js')
		expect(text).toContain('>=22.17.0')
		expect(text).toContain('<!-- /dependencies -->')
	})

	it('should show peer dependencies with optional flag', async () => {
		const result = await expandString('<!-- dependencies -->')
		const text = result.toString()
		expect(text).toContain('prettier')
		expect(text).toContain('^3.0.0')
		expect(text).toContain('_(optional)_')
	})

	it('should use sub-headings when both platform and peer deps exist', async () => {
		const result = await expandString('<!-- dependencies -->')
		const text = result.toString()
		expect(text).toContain('### Platform')
		expect(text).toContain('### Peer Dependencies')
	})
})
