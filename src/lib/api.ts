import type { VFile } from 'vfile'
import type { RulesToLoad } from './config'
import { loadRules } from './config'
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
	rules?: RulesToLoad,
): Promise<VFile[]> {
	return processFiles(files, loadRules, getExpandProcessor, name, output, rules)
}

/**
 * Expand MDAT comments in a Markdown string
 */
export async function expandString(markdown: string, rules?: RulesToLoad): Promise<VFile> {
	return processString(markdown, loadRules, getExpandProcessor, rules)
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
	rules?: RulesToLoad,
): Promise<VFile[]> {
	return processFiles(files, loadRules, getCleanProcessor, name, output, rules)
}

/**
 * Collapse MDAT comments in a Markdown string
 */
export async function collapseString(markdown: string, rules?: RulesToLoad): Promise<VFile> {
	return processString(markdown, loadRules, getCleanProcessor, rules)
}
