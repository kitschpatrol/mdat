import content from '../src/lib/templates/readme-full.md?raw'
import { describe, expect, it } from 'vitest'

describe('template access', () => {
	it('should load template markdown correctly', () => {
		expect(content).toMatchInlineSnapshot(`
			"# Full

			<!-- title -->
			"
		`)
	})
})
