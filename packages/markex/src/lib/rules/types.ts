// Content is union of all mdast node types
import { type Root } from 'mdast'
import type { JsonObject } from 'type-fest'

// Basic interface for comment expanders
export type Rule = {
	/**
	 * The order in which the rule should be applied when used in a preset collection.
	 * Used for validation purposes.
	 * Leave undefined to is application order is inconsequential.
	 */
	applicationOrder?: number
	/**
	 * Gets content to expand at the comment site.
	 * @param ast matching document tree, necessary for some expanders like TOC.
	 * Do not mutate the AST.
	 * @param options JSON object of options passed to the
	 * expander. Options may be defined in the comment as JSON strings, e.g.:
	 * `<!-- keyword({something: true}) -->` or
	 * `<!-- keyword {something: true}-->`
	 * @returns A markdown string with the generated content
	 * not be generated.
	 */
	getContent: (ast: Root, options?: JsonObject) => Promise<string>
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
export type RuleSet = Record<string, Rule>
