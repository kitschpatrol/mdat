import { describe, expect, it } from 'vitest'
import content from '../src/lib/readme/templates/standard-readme-full.md?raw'

describe('template access', () => {
	it('should load template markdown correctly', () => {
		expect(content).toMatchInlineSnapshot(`
			"<!-- title -->

			<!-- banner -->

			<!-- badges -->

			<!-- short-description -->

			_Long description goes here._

			_No heading. Cover the main reasons for building the repository. This should describe your module in broad terms, generally in just a few paragraphs; more detail of the module's routines or methods, lengthy code examples, or other in-depth material should be given in subsequent sections._

			<!-- table-of-contents -->

			## Background

			_Cover motivation. Cover abstract dependencies. Cover intellectual provenance: A See Also section is also fitting._

			### See also

			## Install

			\`\`\`sh
			# Code block illustrating how to install.
			\`\`\`

			### Dependencies

			_Required if there are unusual dependencies or dependencies that must be manually installed._

			## Usage

			\`\`\`ts
			// Code block illustrating common usage.
			// Consider using the <!-- code { src: "path/to/example.ts" } --> comment as well.
			\`\`\`

			\`\`\`ts
			// If importable, code block indicating both import functionality and usage.
			\`\`\`

			### CLI

			\`\`\`ts
			// If CLI compatible, code block indicating common usage.
			\`\`\`

			## _Extra Sections (Rename)_

			## Security

			## API

			_Describe exported functions and objects._

			- _Describe signatures, return types, callbacks, and events._
			- _Cover types covered where not obvious._
			- _Describe caveats._
			- _If using an external API generator (like go-doc, js-doc, or so on), point to an external API.md file. This can be the only item in the section, if present._

			## Maintainers

			_List maintainer(s) for a repository, along with one way of contacting them (e.g. GitHub link or email)._

			## Thanks

			_State anyone or anything that significantly helped with the development of your project. State public contact hyper-links if applicable._

			<!-- contributing -->

			<!-- license -->
			"
		`)
	})
})
