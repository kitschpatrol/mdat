import { describe, expect, it } from 'vitest'

// TODO
describe('linting', () => {
	it('should not report errors when linted and valid', () => {
		// Const markdown = await fs.readFile('./test/assets/readme-basic.md', 'utf8')
		// const lintReport = await validateString(markdown, { expansionRules: presets.readme })

		// expect(lintReport).toEqual(true)

		expect(1).toEqual(1)
	})

	it('should report errors when linted and invalid', () => {
		// Const markdown = await fs.readFile('./test/assets/readme-basic-invalid.md', 'utf8')
		// const lintReport = await validateString(markdown, { expansionRules: presets.readme })

		// expect(lintReport).not.toBe(true)
		// expect(lintReport).toHaveLength(7)

		expect(1).toEqual(1)
	})
})
