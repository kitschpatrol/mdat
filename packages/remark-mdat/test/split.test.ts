import { splitHtmlIntoMdastNodes } from '../src/lib/mdast-utils/mdast-util-mdat-split'
import { type Html } from 'mdast'
import { describe, expect, it } from 'vitest'

function stringToMdastNode(value: string): Html {
	return {
		position: {
			// Might be off by one...
			end: { column: value.length + 1, line: 1, offset: value.length },
			start: { column: 1, line: 1, offset: 0 },
		},
		type: 'html',
		value,
	}
}

describe('multi comment parsing', () => {
	it('parse multi-comment html text', () => {
		expect(splitHtmlIntoMdastNodes(stringToMdastNode('<!-- basic {something: 1} -->')))
			.toMatchInlineSnapshot(`
				[
				  {
				    "position": {
				      "end": {
				        "column": 30,
				        "line": 1,
				        "offset": 29,
				      },
				      "start": {
				        "column": 1,
				        "line": 1,
				        "offset": 0,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic {something: 1} -->",
				  },
				]
			`)
		expect(splitHtmlIntoMdastNodes(stringToMdastNode('<!-- basic --><!-- basic -->Z')))
			.toMatchInlineSnapshot(`
				[
				  {
				    "position": {
				      "end": {
				        "column": 15,
				        "line": 1,
				        "offset": 14,
				      },
				      "start": {
				        "column": 1,
				        "line": 1,
				        "offset": 0,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic -->",
				  },
				  {
				    "position": {
				      "end": {
				        "column": 29,
				        "line": 1,
				        "offset": 28,
				      },
				      "start": {
				        "column": 15,
				        "line": 1,
				        "offset": 14,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic -->",
				  },
				  {
				    "position": {
				      "end": {
				        "column": 30,
				        "line": 1,
				        "offset": 29,
				      },
				      "start": {
				        "column": 29,
				        "line": 1,
				        "offset": 28,
				      },
				    },
				    "type": "text",
				    "value": "Z",
				  },
				]
			`)
		expect(
			splitHtmlIntoMdastNodes(
				stringToMdastNode('<!-- basic({something: "yes"}) --><b>Absolutely</b><!-- basic -->'),
			),
		).toMatchInlineSnapshot(`
			[
			  {
			    "position": {
			      "end": {
			        "column": 35,
			        "line": 1,
			        "offset": 34,
			      },
			      "start": {
			        "column": 1,
			        "line": 1,
			        "offset": 0,
			      },
			    },
			    "type": "html",
			    "value": "<!-- basic({something: "yes"}) -->",
			  },
			  {
			    "position": {
			      "end": {
			        "column": 52,
			        "line": 1,
			        "offset": 51,
			      },
			      "start": {
			        "column": 35,
			        "line": 1,
			        "offset": 34,
			      },
			    },
			    "type": "html",
			    "value": "<b>Absolutely</b>",
			  },
			  {
			    "position": {
			      "end": {
			        "column": 48,
			        "line": 1,
			        "offset": 47,
			      },
			      "start": {
			        "column": 38,
			        "line": 1,
			        "offset": 37,
			      },
			    },
			    "type": "text",
			    "value": "Absolutely",
			  },
			  {
			    "position": {
			      "end": {
			        "column": 66,
			        "line": 1,
			        "offset": 65,
			      },
			      "start": {
			        "column": 52,
			        "line": 1,
			        "offset": 51,
			      },
			    },
			    "type": "html",
			    "value": "<!-- basic -->",
			  },
			]
		`)
		expect(splitHtmlIntoMdastNodes(stringToMdastNode('<!-- basic --><!-- basic -->')))
			.toMatchInlineSnapshot(`
				[
				  {
				    "position": {
				      "end": {
				        "column": 15,
				        "line": 1,
				        "offset": 14,
				      },
				      "start": {
				        "column": 1,
				        "line": 1,
				        "offset": 0,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic -->",
				  },
				  {
				    "position": {
				      "end": {
				        "column": 29,
				        "line": 1,
				        "offset": 28,
				      },
				      "start": {
				        "column": 15,
				        "line": 1,
				        "offset": 14,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic -->",
				  },
				]
			`)
		expect(splitHtmlIntoMdastNodes(stringToMdastNode(' <!-- basic --><!-- basic -->')))
			.toMatchInlineSnapshot(`
				[
				  {
				    "position": {
				      "end": {
				        "column": 2,
				        "line": 1,
				        "offset": 1,
				      },
				      "start": {
				        "column": 1,
				        "line": 1,
				        "offset": 0,
				      },
				    },
				    "type": "text",
				    "value": " ",
				  },
				  {
				    "position": {
				      "end": {
				        "column": 16,
				        "line": 1,
				        "offset": 15,
				      },
				      "start": {
				        "column": 2,
				        "line": 1,
				        "offset": 1,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic -->",
				  },
				  {
				    "position": {
				      "end": {
				        "column": 30,
				        "line": 1,
				        "offset": 29,
				      },
				      "start": {
				        "column": 16,
				        "line": 1,
				        "offset": 15,
				      },
				    },
				    "type": "html",
				    "value": "<!-- basic -->",
				  },
				]
			`)
		expect(splitHtmlIntoMdastNodes(stringToMdastNode(' <!-- basic -->'))).toMatchInlineSnapshot(`
			[
			  {
			    "position": {
			      "end": {
			        "column": 2,
			        "line": 1,
			        "offset": 1,
			      },
			      "start": {
			        "column": 1,
			        "line": 1,
			        "offset": 0,
			      },
			    },
			    "type": "text",
			    "value": " ",
			  },
			  {
			    "position": {
			      "end": {
			        "column": 16,
			        "line": 1,
			        "offset": 15,
			      },
			      "start": {
			        "column": 2,
			        "line": 1,
			        "offset": 1,
			      },
			    },
			    "type": "html",
			    "value": "<!-- basic -->",
			  },
			]
		`)
		expect(splitHtmlIntoMdastNodes(stringToMdastNode(' <!-- basic -->'))).toMatchInlineSnapshot(`
			[
			  {
			    "position": {
			      "end": {
			        "column": 2,
			        "line": 1,
			        "offset": 1,
			      },
			      "start": {
			        "column": 1,
			        "line": 1,
			        "offset": 0,
			      },
			    },
			    "type": "text",
			    "value": " ",
			  },
			  {
			    "position": {
			      "end": {
			        "column": 16,
			        "line": 1,
			        "offset": 15,
			      },
			      "start": {
			        "column": 2,
			        "line": 1,
			        "offset": 1,
			      },
			    },
			    "type": "html",
			    "value": "<!-- basic -->",
			  },
			]
		`)
	})
})
