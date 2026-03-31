import { describe, expect, it } from 'vitest'
import { deepMergeDefined } from '../src/lib/deep-merge-defined'

describe('deep merge of defined values only', () => {
	it('should not overwrite defined values with undefined in simple objects', () => {
		type Test = {
			baz: number | undefined
			foo: string
		}

		const a: Test = {
			baz: 1,
			foo: 'bar',
		}

		const b: Test = {
			baz: undefined,
			foo: 'erm',
		}

		const result = deepMergeDefined(a, b)

		expect(result).toEqual({
			baz: 1,
			foo: 'erm',
		})
	})

	it('should deep merge nested objects', () => {
		type Test = {
			nested: Record<string, string>
			top: boolean | undefined
		}

		const a: Test = {
			nested: {
				one: 'bla',
				two: 'hmm',
			},
			top: true,
		}

		const b: Test = {
			nested: {
				three: 'argh',
				two: 'huh',
			},
			top: undefined,
		}

		const result = deepMergeDefined(a, b)

		expect(result).toMatchInlineSnapshot(`
			{
			  "nested": {
			    "one": "bla",
			    "three": "argh",
			    "two": "huh",
			  },
			  "top": true,
			}
		`)
	})

	it('should overwrite defined values with null', () => {
		type Test = {
			// eslint-disable-next-line ts/no-restricted-types
			baz: null | number
			foo: string
		}

		const a: Test = {
			baz: 1,
			foo: 'bar',
		}

		const b: Test = {
			// eslint-disable-next-line unicorn/no-null
			baz: null,
			foo: 'erm',
		}

		const result = deepMergeDefined(a, b)

		expect(result).toEqual({
			// eslint-disable-next-line unicorn/no-null
			baz: null,
			foo: 'erm',
		})
	})
})
