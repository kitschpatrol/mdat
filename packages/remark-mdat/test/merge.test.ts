import { deepMergeDefined } from '../src/lib/mdat/deep-merge-defined'
import { type Options as MdatOptions } from '../src/lib/remark-mdat'
import { describe, expect, it } from 'vitest'

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

	it('should not overwrite defined values in more complex mdat objects', () => {
		const a: MdatOptions = {
			addMetaComment: true,
			rules: {
				one: 'bla',
				two: 'hmm',
			},
		}

		const b: MdatOptions = {
			addMetaComment: undefined,
			rules: {
				three: 'argh',
				two: 'huh',
			},
		}

		const result = deepMergeDefined(a, b)

		expect(result).toMatchInlineSnapshot(`
			{
			  "addMetaComment": true,
			  "rules": {
			    "one": "bla",
			    "three": "argh",
			    "two": "huh",
			  },
			}
		`)
	})

	it('should overwrite defined values with null', () => {
		type Test = {
			// eslint-disable-next-line @typescript-eslint/ban-types
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
