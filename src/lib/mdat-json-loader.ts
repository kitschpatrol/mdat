import { defaultLoaders, type LoaderResult } from 'cosmiconfig'
import { type JsonObject } from 'type-fest'

/**
 * Lets arbitrary JSON objects (like from package.json) become reasonably good mdat rule sets
 * HOWEVER cosmiconfig treats package.json as a special case and will always load only specific keys from it
 * So we have to intercept and load them manually in config.ts
 */
export function mdatJsonLoader(filePath: string, content: string): LoaderResult {
	const defaultJsonLoader = defaultLoaders['.json']
	const jsonObject = defaultJsonLoader(filePath, content) as JsonObject
	return flattenJson(jsonObject)
}

// Turns a nested json object into a flat object with dot notation keys
function flattenJson(
	jsonObject: JsonObject,
	parentKey: keyof JsonObject = '',
	result: Record<string, string> = {},
): Record<string, string> {
	for (const [key, value] of Object.entries(jsonObject)) {
		const fullPath = parentKey ? `${parentKey}.${key}` : key

		// TODO load rule configs as well?
		if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
			flattenJson(value as JsonObject, fullPath, result)
		} else if (value === null) {
			result[fullPath] = 'null'
		} else {
			// eslint-disable-next-line ts/no-base-to-string
			result[fullPath] = value.toString()
		}
	}

	return result
}
