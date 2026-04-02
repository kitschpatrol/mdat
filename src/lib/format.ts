/* eslint-disable ts/no-restricted-types */

import type Prettier from 'prettier'
import path from 'node:path'
import { log } from './log'

let cachedPrettier: typeof Prettier | undefined
const configCache = new Map<string, null | Prettier.Options>()

/**
 * Format a markdown string with Prettier, using config discovered from the file path.
 * Requires `prettier` to be installed as a peer dependency.
 */
export async function formatWithPrettier(content: string, filePath?: string): Promise<string> {
	if (cachedPrettier === undefined) {
		try {
			cachedPrettier = await import('prettier')
		} catch {
			throw new Error(
				'The --format flag requires `prettier` to be installed. Run: pnpm add -D prettier',
			)
		}
	}

	const configKey = filePath ? path.dirname(filePath) : process.cwd()
	let config = configCache.get(configKey)
	if (config === undefined && !configCache.has(configKey)) {
		config = await cachedPrettier.resolveConfig(filePath ?? process.cwd())
		configCache.set(configKey, config)

		if (config) {
			log.debug(
				`Using Prettier config from "${config.filepath}" for "${filePath ?? process.cwd()}"`,
			)
		}
	}

	return cachedPrettier.format(content, {
		...config,
		filepath: filePath,
		parser: 'markdown',
	})
}
