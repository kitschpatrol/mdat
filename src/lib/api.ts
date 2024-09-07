import { type VFile } from 'vfile'
import { type ConfigToLoad, loadConfig, type RulesToLoad } from './config'
import {
	getCheckProcessor,
	getCleanProcessor,
	getExpandProcessor,
	processFiles,
	processString,
} from './processors'

/**
 * Writing is the responsibility of the caller (e.g. via `await write(result)`)
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

export async function expandString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfig, getExpandProcessor, config, rules)
}

export async function checkFiles(
	files: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	return processFiles(files, loadConfig, getCheckProcessor, name, output, config, rules)
}

export async function checkString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfig, getCheckProcessor, config, rules)
}

export async function collapseFiles(
	files: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	return processFiles(files, loadConfig, getCleanProcessor, name, output, config, rules)
}

export async function collapseString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfig, getCleanProcessor, config, rules)
}
