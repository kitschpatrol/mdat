import type { VFile } from 'vfile'
import type { ConfigToLoad } from './config'
import { loadConfig } from './config'
import { formatWithPrettier } from './format'
import { getCleanProcessor, getExpandProcessor, processFiles, processString } from './processors'
import { findReadmeThrows } from './utilities'

/**
 * Expand MDAT comments in one or more Markdown files.
 * If no files are provided, auto-finds the closest readme.md.
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 * @returns an array of VFiles
 */
export async function expand(
	files?: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	const results = await processFiles(files, loadConfig, getExpandProcessor, name, output, config)

	if (options?.format) {
		await formatResults(results)
	}

	return results
}

/**
 * Expand MDAT comments in a Markdown string.
 */
export async function expandString(
	markdown: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile> {
	const result = await processString(markdown, loadConfig, getExpandProcessor, config)

	if (options?.format) {
		await formatResults([result])
	}

	return result
}

/**
 * Collapse MDAT comments in one or more Markdown files.
 * If no files are provided, auto-finds the closest readme.md.
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 * @returns an array of VFiles
 */
export async function collapse(
	files?: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	const results = await processFiles(files, loadConfig, getCleanProcessor, name, output, config)

	if (options?.format) {
		await formatResults(results)
	}

	return results
}

/**
 * Collapse MDAT comments in a Markdown string.
 */
export async function collapseString(
	markdown: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile> {
	const result = await processString(markdown, loadConfig, getCleanProcessor, config)

	if (options?.format) {
		await formatResults([result])
	}

	return result
}

/**
 * Dry-run expand and compare with file on disk.
 * If no files are provided, auto-finds the closest readme.md.
 * @returns sync status and expanded VFiles
 */
export async function check(
	files?: string | string[],
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<{ inSync: boolean; results: VFile[] }> {
	files ??= await findReadmeThrows()

	// Read original content, then expand in memory
	const { read } = await import('to-vfile')
	const resolvedFiles = Array.isArray(files) ? files : [files]
	const originals = await Promise.all(resolvedFiles.map(async (f) => read(f)))

	// Expand
	const results = await processFiles(
		files,
		loadConfig,
		getExpandProcessor,
		undefined,
		undefined,
		config,
	)

	if (options?.format) {
		await formatResults(results)
	}

	const originalContents = originals.map((f) => f.toString())
	const expandedContents = results.map((f) => f.toString())

	let inSync = true
	for (let i = 0; i < results.length; i++) {
		if (originalContents[i] !== expandedContents[i]) {
			inSync = false
		}
	}

	return { inSync, results }
}

export {
	createReadme as create,
	createReadmeInteractive as createInteractive,
} from './readme/create'

// Helpers

async function formatResults(results: VFile[]): Promise<void> {
	for (const file of results) {
		const formatted = await formatWithPrettier(file.toString(), file.path || undefined)
		file.value = formatted
	}
}
