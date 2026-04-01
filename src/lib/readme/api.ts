import type { VFile } from 'vfile'
import type { ConfigToLoad, RulesToLoad } from '../config'
import { getCleanProcessor, getExpandProcessor, processFiles, processString } from '../processors'
import { loadConfigReadme } from './config'
import { findReadmeThrows } from './utilities'

/**
 * Expands MDAT readme comments in the closest readme.md file
 * Basically an alias to `expandReadmeFiles()` with certain arguments elided.
 * @see `findReadme()` for more details on the search process.
 */
export async function expandReadme(config?: ConfigToLoad, rules?: RulesToLoad): Promise<VFile[]> {
	return expandReadmeFiles(undefined, undefined, undefined, config, rules)
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
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadConfigReadme, getExpandProcessor, name, output, config, rules)
}

/**
 * Expands MDAT readme comments in a Markdown string
 */
export async function expandReadmeString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfigReadme, getExpandProcessor, config, rules)
}

/**
 * Collapses MDAT readme comments in the closest readme.md file
 * Basically an alias to `collapseReadmeFiles()` with certain arguments elided.
 * @see `findReadme()` for more details on the search process.
 */
export async function collapseReadme(config?: ConfigToLoad, rules?: RulesToLoad): Promise<VFile[]> {
	return collapseReadmeFiles(undefined, undefined, undefined, config, rules)
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
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadConfigReadme, getCleanProcessor, name, output, config, rules)
}
