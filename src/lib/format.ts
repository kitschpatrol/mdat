import type Prettier from 'prettier'
import { log } from './log'

/**
 * Format a markdown string with Prettier, using config discovered from the file path.
 * Requires `prettier` to be installed as a peer dependency.
 */
export async function formatWithPrettier(content: string, filePath?: string): Promise<string> {
	let prettier: typeof Prettier
	try {
		prettier = await import('prettier')
	} catch {
		throw new Error(
			'The --format flag requires `prettier` to be installed. Run: pnpm add -D prettier',
		)
	}

	const config = await prettier.resolveConfig(filePath ?? process.cwd())

	if (config) {
		log.debug(`Using Prettier config from "${config.filepath}" for "${filePath ?? process.cwd()}"`)
	}

	return prettier.format(content, {
		...config,
		filepath: filePath,
		parser: 'markdown',
	})
}
