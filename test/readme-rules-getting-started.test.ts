import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { expandString } from '../src/lib/api'
import { resetMetadataCaches } from '../src/lib/context'
import { describeVersionRange } from '../src/lib/readme/rules/utilities/version-range'

function useFixture(name: string) {
	const fixtureDirectory = path.resolve(__dirname, 'fixtures', name)
	let originalCwd: string

	beforeAll(() => {
		originalCwd = process.cwd()
		process.chdir(fixtureDirectory)
		resetMetadataCaches()
	})

	afterAll(() => {
		process.chdir(originalCwd)
		resetMetadataCaches()
	})
}

describe('install rule', () => {
	it('should offer CLI and library options for a package with both, and detect the Homebrew tap from the release script', async () => {
		const result = await expandString('<!-- install -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- install -->

			### Installation

			Pick the option that matches how you plan to use it.

			#### CLI

			Run it once without installing:

			\`\`\`sh
			npx mdat
			\`\`\`

			Or install it globally with Homebrew:

			\`\`\`sh
			brew install kitschpatrol/tap/mdat
			\`\`\`

			Or install it globally with npm:

			\`\`\`sh
			npm install --global mdat
			\`\`\`

			#### Library

			Add it to your project to import the TypeScript API. This also puts the \`mdat\` CLI on your project's path:

			\`\`\`sh
			npm install mdat
			\`\`\`

			<!-- /install -->
			"
		`)
	})

	it('should nest headings at the requested level', async () => {
		const result = await expandString('<!-- install({ headingLevel: 2 }) -->')
		const text = result.toString()

		expect(text).toContain('\n## Installation\n')
		expect(text).toContain('\n### CLI\n')
		expect(text).toContain('\n### Library\n')
	})

	it('should install as a development dependency when asked', async () => {
		const result = await expandString('<!-- install({ dev: true }) -->')
		const text = result.toString()

		expect(text).toContain('Add it to your project as a development dependency to import')
		expect(text).toContain('npm install --save-dev mdat')
		expect(text).not.toContain('npm install mdat')
	})

	it('should allow overriding or suppressing the Homebrew formula', async () => {
		const overridden = await expandString("<!-- install({ homebrew: 'example/tap/mdat' }) -->")
		expect(overridden.toString()).toContain('brew install example/tap/mdat')

		const suppressed = await expandString('<!-- install({ homebrew: false }) -->')
		expect(suppressed.toString()).not.toContain('Homebrew')
	})
})

describe('install rule for a CLI-only package', () => {
	useFixture('cli-only')

	it('should skip the library section and normalize the homebrew- tap prefix', async () => {
		const result = await expandString('<!-- install -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- install -->

			### Installation

			Run it once without installing:

			\`\`\`sh
			npx @example/cli-only-fixture
			\`\`\`

			Or install it globally with Homebrew:

			\`\`\`sh
			brew install example/tools/cli-only-fixture
			\`\`\`

			Or install it globally with npm:

			\`\`\`sh
			npm install --global @example/cli-only-fixture
			\`\`\`

			<!-- /install -->
			"
		`)
	})
})

describe('install rule for a library-only package', () => {
	useFixture('library-only')

	it('should emit a single install command', async () => {
		const result = await expandString('<!-- install -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- install -->

			### Installation

			Add it to your project:

			\`\`\`sh
			npm install library-only-fixture
			\`\`\`

			<!-- /install -->
			"
		`)
	})

	it('should emit a development dependency install command when asked', async () => {
		const result = await expandString('<!-- install({ dev: true }) -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- install({ dev: true }) -->

			### Installation

			Add it to your project as a development dependency:

			\`\`\`sh
			npm install --save-dev library-only-fixture
			\`\`\`

			<!-- /install -->
			"
		`)
	})
})

describe('install rule for a private package', () => {
	useFixture('private-package')

	it('should refuse to generate install instructions', async () => {
		const result = await expandString('<!-- install -->')

		expect(result.messages.map((message) => message.reason).join('\n')).toContain(
			'package.json sets "private": true',
		)
		expect(result.toString()).not.toContain('npm install')
	})
})

describe('dependencies rule', () => {
	it('should list the Node.js requirement and optional peer dependencies', async () => {
		const result = await expandString('<!-- dependencies -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- dependencies -->

			### Dependencies

			- [Node.js](https://nodejs.org/) 24.16.0 or newer
			- [prettier](https://www.npmjs.com/package/prettier) \`^3.0.0\` _(optional peer dependency)_

			<!-- /dependencies -->
			"
		`)
	})

	it('should nest the heading at the requested level', async () => {
		const result = await expandString('<!-- dependencies({ headingLevel: 2 }) -->')

		expect(result.toString()).toContain('\n## Dependencies\n')
	})
})

describe('dependencies rule for a library-only package', () => {
	useFixture('library-only')

	it('should spell out compound engine ranges, operating systems, and peer dependencies', async () => {
		const result = await expandString('<!-- dependencies -->')

		expect(result.toString()).toMatchInlineSnapshot(`
			"<!-- dependencies -->

			### Dependencies

			- [Node.js](https://nodejs.org/) 24.16.0 or newer (specifically \`^24.16.0 || >=26.3.0\`)
			- Supported operating systems: macOS, Linux
			- [prettier](https://www.npmjs.com/package/prettier) \`^3.0.0\` _(optional peer dependency)_
			- [vite](https://www.npmjs.com/package/vite) \`^7.0.0\` _(peer dependency)_

			<!-- /dependencies -->
			"
		`)
	})
})

describe('describeVersionRange', () => {
	it.each([
		['>=24.16.0', '24.16.0 or newer'],
		['>= 20', '20 or newer'],
		['24.16.0', '24.16.0'],
		['^24.16.0 || >=26.3.0', '24.16.0 or newer (specifically `^24.16.0 || >=26.3.0`)'],
		['>=20.19.0 <21 || >=22.12.0', '20.19.0 or newer (specifically `>=20.19.0 <21 || >=22.12.0`)'],
		['^3.0.0', '3.0.0 or newer (specifically `^3.0.0`)'],
		['*', '`*`'],
	])('should describe %s as %s', (range, expected) => {
		expect(describeVersionRange(range)).toBe(expected)
	})
})
