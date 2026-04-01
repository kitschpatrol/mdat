import type { VFile } from 'vfile'
import type { RulesToLoad } from '../config'
import { getCleanProcessor, getExpandProcessor, processFiles, processString } from '../processors'
import { loadRulesReadme } from './config'
import { findReadmeThrows } from './utilities'

/**
 * Expands MDAT readme comments in the closest readme.md file
 * Basically an alias to `expandReadmeFiles()` with certain arguments elided.
 * @see `findReadme()` for more details on the search process.
 */
export async function expandReadme(rules?: RulesToLoad): Promise<VFile[]> {
	return expandReadmeFiles(undefined, undefined, undefined, rules)
}

/**
 * Expands MDAT readme comments in one or more Markdown files
 * Searches up for a readme.md file if none is provided.
 * @see `findReadme()` for more details on the search process.
 */
export async function expandReadmeFiles(
	files?: string | string[],
	name?: string,
	output?: string,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadRulesReadme, getExpandProcessor, name, output, rules)
}

/**
 * Expands MDAT readme comments in a Markdown string
 */
export async function expandReadmeString(markdown: string, rules?: RulesToLoad): Promise<VFile> {
	return processString(markdown, loadRulesReadme, getExpandProcessor, rules)
}

/**
 * Collapses MDAT readme comments in the closest readme.md file
 * Basically an alias to `collapseReadmeFiles()` with certain arguments elided.
 * @see `findReadme()` for more details on the search process.
 */
export async function collapseReadme(rules?: RulesToLoad): Promise<VFile[]> {
	return collapseReadmeFiles(undefined, undefined, undefined, rules)
}

/**
 * Collapses MDAT readme comments in one or more Markdown files
 * Searches up for a readme.md file if none is provided.
 * @see `findReadme()` for more details on the search process.
 */
export async function collapseReadmeFiles(
	files?: string | string[],
	name?: string,
	output?: string,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadRulesReadme, getCleanProcessor, name, output, rules)
}
