// Content is union of all mdast node types
import { type Root, type RootContent } from 'mdast'
import type { JsonObject } from 'type-fest'

// Basic interface for comment expanders
export type Expander = {
	/**
	 * The order in which the rule should be applied when used in a preset collection.
	 * Used for validation purposes.
	 * Leave undefined to is application order is inconsequential.
	 */
	applicationOrder?: number
	/**
	 * Gets markdown AST nodes to expand at the comment site.
	 * @param ast matching document tree, necessary for some expanders like TOC. Do not mutate.
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

// Collection of expanders for use as a preset
export type ExpanderPreset = Record<string, Expander>
