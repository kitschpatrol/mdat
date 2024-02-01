/* eslint-disable perfectionist/sort-objects */
import { expandReadmeFile } from './api'
import templates from './templates'
import { findPackage, findReadme } from './utilities'
import { confirm, group, intro, note, outro, select } from '@clack/prompts'
import chalk from 'chalk'
import { deepmerge } from 'deepmerge-ts'
import fs from 'node:fs/promises'
import path from 'node:path'
import { write } from 'to-vfile'

export type Symbolize<T extends Record<string, unknown>> = {
	[x in keyof T]: T[x] | symbol
}

type MdatReadmeInitOptions = {
	compound: boolean
	expand: boolean
	output: string
	overwrite: boolean
	template: 'basic' | 'full'
}

async function getPaths(): Promise<{
	packageDirectory: string | undefined
	readmePath: string | undefined
}> {
	// Defaults, runs silently
	try {
		const readmePath = await findReadme()
		const packageDirectory = path.dirname(path.resolve(await findPackage()))
		return { packageDirectory, readmePath }
	} catch {}

	return { packageDirectory: undefined, readmePath: undefined }
}

export async function initReadmeInteractive(): Promise<string> {
	const { packageDirectory, readmePath } = await getPaths()
	const destination = path.resolve(process.cwd())

	intro(`Running ${chalk.bold('mdat-readme init')} interactively`)

	const initConfig = await group<Symbolize<MdatReadmeInitOptions>>(
		{
			overwrite: async () =>
				readmePath === undefined
					? true
					: (await confirm({
								message: `Found an existing readme at "${chalk.blue(readmePath)}". Do you want to overwrite it?`,
								active: 'Overwrite',
								inactive: 'Exit',
						  }))
						? true
						: (() => {
								throw new Error(
									'`mdat-readme init` was cancelled to avoid an overwrite - no changes were made',
								)
							})(),

			output: async () =>
				packageDirectory !== undefined && packageDirectory !== destination
					? select({
							initialValue: packageDirectory,
							message:
								"There's a root package directory nearby, do you want to create the readme there instead of the current directory?",
							options: [
								{
									label: `Create in the current package root: "${chalk.blue(packageDirectory)}"`,
									value: packageDirectory,
								},
								{
									label: `Create in current working directory: "${chalk.blue(destination)}"`,
									value: destination,
								},
							],
						})
					: destination,

			template: async () =>
				select({
					message: 'How big of a readme are we talking about?',
					options: [
						{
							label: 'Full:  Include all possible sections defined by Standard Readme.',
							value: 'full',
						},
						{
							label: 'Basic: Include only the sections required by Standard Readme.',
							value: 'basic',
						},
					],
				}),

			compound: async () =>
				select({
					message:
						'Do you want to use "compound comments" where possible, which combine several expansions into a single comment block?',
					options: [
						{
							label: `Yes: Combine things like ${chalk.green('<!-- title -->')} and ${chalk.green('<!-- badges -->')} in a single ${chalk.green('<!-- header -->')} comment.`,
							value: true,
						},
						{
							label: 'No:  Use individual `mdat` expansion comments for each section.',
							value: false,
						},
					],
				}),

			expand: async () =>
				packageDirectory === undefined
					? false
					: confirm({
							initialValue: true,
							message:
								'Do you want to run mdat-readme now to expand the template with content from your package.json?',
						}),
		},
		{
			// On Cancel callback that wraps the group
			// So if the user cancels one of the prompts in the group this function will be called
			onCancel() {
				throw new Error('`mdat-readme init` was cancelled - no changes were made')
			},
		},
	)

	// Do the deed
	const newReadmePath = await initReadme(initConfig)

	if (packageDirectory === undefined) {
		note(
			"No package.json was found. Once you've created one, you can run `mdat-readme` to expand the template with content from your package.json.",
		)
	}

	note(`Readme created: "${chalk.bold.blue(newReadmePath)}"`)

	outro('Done!')

	return newReadmePath
}

/**
 * @return Path to the created readme file.
 */
export async function initReadme(options?: Partial<MdatReadmeInitOptions>): Promise<string> {
	const { packageDirectory } = await getPaths()
	const resolvedOptions = deepmerge(
		{
			compound: true,
			output: packageDirectory ?? process.cwd(),
			overwrite: true,
			expand: packageDirectory !== undefined,
			template: 'full',
		},
		options,
	) as Required<MdatReadmeInitOptions>

	// Save the template
	const templateString = getTemplateForConfig(resolvedOptions.template, resolvedOptions.compound)
	const readmePath = path.join(resolvedOptions.output, 'readme.md')
	await fs.writeFile(readmePath, templateString, 'utf8')

	// Run the expansion if requested
	// Maybe better to use execa?
	const results = await expandReadmeFile([{ readmePath, rules: {} }])
	await write(results.result)

	return readmePath
}

// Brittle
function getTemplateForConfig(template: 'basic' | 'full', compound: boolean): string {
	const templateKey = `readme${template === 'basic' ? 'Basic' : 'Full'}${compound ? 'Compound' : ''}`
	const templateString = templates[templateKey as keyof typeof templates]

	if (templateString === undefined || templateString === '') {
		throw new Error(`No template found for "${templateKey}"`)
	}

	return templateString
}
