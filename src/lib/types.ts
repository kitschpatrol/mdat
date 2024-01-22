// Content is union of all mdast node types
import { type Root, type RootContent } from 'mdast'
import type { JsonObject } from 'type-fest'

export type Expander = {
	/**
	 * Gets markdown AST nodes to expand at the comment site.
	 * @param ast full markdown document AST, necessary for some expanders like TOC. Do not mutate the ast. TODO pass a copy?
	 * @param options JSON object of options passed to the expander. Options may
	 * be defined in the comment as JSON strings, e.g.:
	 * `<!-- keyword({something: true}) -->` or
	 * `<!-- keyword {something: true} -->`
	 * @returns An array of mdast nodes to splice into the
	 * AST. @throws {Error} If the nodes could not be generated.
	 */
	getNodes: (ast: Root, options?: JsonObject) => Promise<RootContent[]>
	/**
	 * The keyword to match in the comment.
	 * `<!-- keyword -->`
	 */
	keyword: string
	/**
	 * The expected order of the keyword in the document relative to other expander comments.
	 * Used for validation purposes.
	 * Leave undefined to order skip validation.
	 */
	order?: number
	/**
	 * Whether the presence of the keyword comment in the document is required.
	 * Used for validation purposes.
	 * Leave undefined to skip presence validation.
	 */
	required?: boolean
}
