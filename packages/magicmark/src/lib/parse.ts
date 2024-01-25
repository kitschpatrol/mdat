import json5 from 'json5'
import type { JsonObject } from 'type-fest'

export function parseCommentText(
	text: string,
): { args: JsonObject | undefined; keyword: string } | undefined {
	// Get the keyword with args
	const match = /^\s*<!--\/*[\s#-]*(.+)\s*-->\s*$/.exec(text)?.at(1)?.trim()
	if (match === undefined) return undefined

	// Get the args
	const parts = /^([^\s({]+)[\s()]*({.+})?\)?$/g.exec(match)
	if (parts === null) return undefined

	const keyword = parts.at(1)
	if (keyword === undefined) return undefined

	const rawArgs = parts.at(2)

	// Use json5 so we can be more forgiving about unquoted keys
	const args = rawArgs ? json5.parse<JsonObject>(rawArgs) : undefined

	return { args, keyword }
}
