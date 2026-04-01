import type { VFile } from 'vfile'
import type { RulesToLoad } from './config'
import { loadRules } from './config'
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
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadRules, getExpandProcessor, name, output, rules)
}

/**
 * Expand MDAT comments in a Markdown string.
 */
export async function expandString(markdown: string, rules?: RulesToLoad): Promise<VFile> {
	return processString(markdown, loadRules, getExpandProcessor, rules)
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
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadRules, getCleanProcessor, name, output, rules)
}

/**
 * Collapse MDAT comments in a Markdown string.
 */
export async function collapseString(markdown: string, rules?: RulesToLoad): Promise<VFile> {
	return processString(markdown, loadRules, getCleanProcessor, rules)
}

/**
 * Dry-run expand and compare with file on disk.
 * If no files are provided, auto-finds the closest readme.md.
 * @returns sync status and expanded VFiles
 */
export async function check(
	files?: string | string[],
	rules?: RulesToLoad,
): Promise<{ inSync: boolean; results: VFile[] }> {
	files ??= await findReadmeThrows()

	// Read original content, then expand in memory
	const { read } = await import('to-vfile')
	const resolvedFiles = Array.isArray(files) ? files : [files]
	const originals = await Promise.all(resolvedFiles.map(async (f) => read(f)))
	const originalContents = originals.map((f) => f.toString())

	// Expand
	const results = await processFiles(
		files,
		loadRules,
		getExpandProcessor,
		undefined,
		undefined,
		rules,
	)
	const expandedContents = results.map((f) => f.toString())

	let inSync = true
	for (let i = 0; i < results.length; i++) {
		const fileInSync = originalContents[i] === expandedContents[i]
		if (!fileInSync) {
			inSync = false
		}
	}

	return { inSync, results }
}

export { initReadme as create, initReadmeInteractive as createInteractive } from './readme/init'
