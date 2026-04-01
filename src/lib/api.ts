import type { VFile } from 'vfile'
import type { ConfigToLoad, RulesToLoad } from './config'
import { loadConfig } from './config'
import { getCleanProcessor, getExpandProcessor, processFiles, processString } from './processors'

/**
 * Expand MDAT comments in one or more Markdown files
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 * @returns an array of VFiles (Even if you only pass a single file path!)
 */
export async function expandFiles(
	files: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	return processFiles(files, loadConfig, getExpandProcessor, name, output, config, rules)
}

/**
 * Expand MDAT comments in a Markdown string
 */
export async function expandString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfig, getExpandProcessor, config, rules)
}

/**
 * Collapse MDAT comments in one or more Markdown files
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
 * @returns an array of VFiles (Even if you only pass a single file path!)
 */
export async function collapseFiles(
	files: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	return processFiles(files, loadConfig, getCleanProcessor, name, output, config, rules)
}

/**
 * Collapse MDAT comments in a Markdown string
 */
export async function collapseString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfig, getCleanProcessor, config, rules)
}
