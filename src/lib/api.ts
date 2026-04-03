import type { VFile } from 'vfile'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { mdatDiff, mdatSplit } from 'remark-mdat'
import type { ConfigToLoad } from './config'
import { loadConfig } from './config'
import { formatWithPrettier } from './format'
import {
	getCollapseProcessor,
	getExpandProcessor,
	getStripProcessor,
	processFiles,
	processString,
} from './processors'
import { findReadmeThrows } from './utilities'

/**
 * Expand MDAT comments in one or more Markdown files. If no files are provided,
 * auto-finds the closest readme.md. Writing is the responsibility of the caller
 * (e.g. via `await write(result)`)
 *
 * @returns An array of VFiles
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
 * Collapse MDAT comments in one or more Markdown files. If no files are
 * provided, auto-finds the closest readme.md. Writing is the responsibility of
 * the caller (e.g. via `await write(result)`)
 *
 * @returns An array of VFiles
 */
export async function collapse(
	files?: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	const results = await processFiles(files, loadConfig, getCollapseProcessor, name, output, config)

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
	const result = await processString(markdown, loadConfig, getCollapseProcessor, config)

	if (options?.format) {
		await formatResults([result])
	}

	return result
}

/**
 * Strips MDAT comments in one or more Markdown files without touching other
 * content. Does _not_ automatically expand Mdat content before stripping the
 * tags. If no files are provided, auto-finds the closest readme.md. Writing is
 * the responsibility of the caller (e.g. via `await write(result)`)
 *
 * @returns An array of VFiles
 */
export async function strip(
	files?: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	const results = await processFiles(files, loadConfig, getStripProcessor, name, output, config)

	if (options?.format) {
		await formatResults(results)
	}

	return results
}

/**
 * Strip MDAT comments from a Markdown string.
 */
export async function stripString(
	markdown: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<VFile> {
	const result = await processString(markdown, loadConfig, getStripProcessor, config)

	if (options?.format) {
		await formatResults([result])
	}

	return result
}

/**
 * Dry-run expand and compare with file on disk. If no files are provided,
 * auto-finds the closest readme.md.
 *
 * @returns Per-file sync status and expanded VFiles
 */
export async function check(
	files?: string | string[],
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<Array<{ inSync: boolean; result: VFile }>> {
	files ??= await findReadmeThrows()

	// Read originals and expand concurrently — they share no mutable state
	const { read } = await import('to-vfile')
	const resolvedFiles = Array.isArray(files) ? files : [files]
	const [originals, results] = await Promise.all([
		Promise.all(resolvedFiles.map(async (f) => read(f))),
		processFiles(files, loadConfig, getExpandProcessor, undefined, undefined, config),
	])

	if (options?.format) {
		await formatResults(results)
	}

	return results.map((result, i) => compareWithDiff(originals[i], result, options))
}

/**
 * Check if MDAT comments in a Markdown string are up to date by expanding and
 * comparing per-tag.
 */
export async function checkString(
	markdown: string,
	config?: ConfigToLoad,
	options?: { format?: boolean },
): Promise<{ inSync: boolean; result: VFile }> {
	const { VFile: VF } = await import('vfile')
	const original = new VF(markdown)
	const result = await processString(markdown, loadConfig, getExpandProcessor, config)

	if (options?.format) {
		await formatResults([result])
	}

	return compareWithDiff(original, result, options)
}

export {
	createReadme as create,
	createReadmeInteractive as createInteractive,
} from './readme/create'

// Helpers

function compareWithDiff(
	original: VFile,
	result: VFile,
	options?: { format?: boolean },
): { inSync: boolean; result: VFile } {
	const inSync = original.toString().replaceAll('\r\n', '\n') === result.toString()

	if (!inSync) {
		const parser = remark().use(remarkGfm)

		const originalTree = parser.parse(original.toString())
		mdatSplit(originalTree, original)

		const expandedTree = parser.parse(result.toString())
		mdatSplit(expandedTree, result)

		const diffResults = mdatDiff(originalTree, original, expandedTree, result)

		// All tags match but file content differs — formatting-only difference
		if (options?.format && diffResults.every((r: { status: string }) => r.status === 'ok')) {
			const message = result.message('Formatting differences outside mdat tags', { source: 'diff' })
			message.fatal = false
		}
	}

	return { inSync, result }
}

async function formatResults(results: VFile[]): Promise<void> {
	for (const file of results) {
		const formatted = await formatWithPrettier(file.toString(), file.path || undefined)
		file.value = formatted
	}
}
