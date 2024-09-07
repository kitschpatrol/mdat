import { type VFile } from 'vfile'
import { type ConfigToLoad, type RulesToLoad } from '../config'
import {
	getCheckProcessor,
	getCleanProcessor,
	getExpandProcessor,
	processFiles,
	processString,
} from '../processors'
import { loadConfigReadme } from './config'
import { findReadmeThrows } from './utilities'

// Just an alias
export async function expandReadme(config?: ConfigToLoad, rules?: RulesToLoad): Promise<VFile[]> {
	return expandReadmeFiles(undefined, undefined, undefined, config, rules)
}

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

export async function expandReadmeString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfigReadme, getExpandProcessor, config, rules)
}

// Just an alias
export async function checkReadme(config?: ConfigToLoad, rules?: RulesToLoad): Promise<VFile[]> {
	return checkReadmeFiles(undefined, undefined, undefined, config, rules)
}

export async function checkReadmeFiles(
	files?: string | string[],
	name?: string,
	output?: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile[]> {
	files ??= await findReadmeThrows()
	return processFiles(files, loadConfigReadme, getCheckProcessor, name, output, config, rules)
}

export async function checkReadmeString(
	markdown: string,
	config?: ConfigToLoad,
	rules?: RulesToLoad,
): Promise<VFile> {
	return processString(markdown, loadConfigReadme, getCheckProcessor, config, rules)
}

// Just an alias
export async function collapseReadme(config?: ConfigToLoad, rules?: RulesToLoad): Promise<VFile[]> {
	return collapseReadmeFiles(undefined, undefined, undefined, config, rules)
}

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
