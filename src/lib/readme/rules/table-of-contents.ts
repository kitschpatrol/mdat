import { type Root } from 'mdast'
import { toc } from 'mdast-util-toc'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

export default {
	'table-of-contents': {
		// Apply towards the end so any generated headings are available
		applicationOrder: 1,
		// eslint-disable-next-line @typescript-eslint/require-await
		async content(options, tree) {
			const validOptions = z
				.object({
					depth: z
						.union([
							z.literal(1),
							z.literal(2),
							z.literal(3),
							z.literal(4),
							z.literal(5),
							z.literal(6),
						])
						.optional(),
				})
				.optional()
				.parse(options)

			const result = toc(tree, {
				// eslint-disable-next-line unicorn/no-null
				heading: null,
				maxDepth: validOptions?.depth ?? 3,
				tight: true,
			})

			const heading = `## Table of contents`

			if (result.map === undefined) {
				throw new Error('Could not generate table of contents')
			}

			const rootWrapper: Root = {
				children: result.map.children,
				type: 'root',
			}

			// The "tight" option set above on toc() doesn't seem to work unless TOC has nested
			// items, so we strip out blank lines ourselves for non-tested TOCs
			const tocString = remark().use(remarkGfm).stringify(rootWrapper).replaceAll('\n\n', '\n')

			return [heading, tocString].join('\n')
		},
		order: 6,
	},
} satisfies Rules
