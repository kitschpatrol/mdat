/* eslint-disable perfectionist/sort-objects */
import { findPackage, findReadme } from '../utilities'
import { expandReadme } from './api'
import templates from './templates'
import { confirm, group, intro, note, outro, select } from '@clack/prompts'
import chalk from 'chalk'
import fs from 'node:fs/promises'
import path from 'node:path'
import { deepMergeDefined } from 'remark-mdat'
import { write } from 'to-vfile'

export type Symbolize<T extends Record<string, unknown>> = {
	[x in keyof T]: T[x] | symbol
}

type MdatReadmeInitOptions = {
	compound: boolean
	expand: boolean
	output: string
	overwrite: boolean
	template: string
}

async function getPaths(): Promise<{
	packageDirectory: string | undefined
	readmePath: string | undefined
}> {
	// Defaults, runs silently
	const readmePath = await findReadme()
	const packagePath = await findPackage()
	const packageDirectory =
		packagePath === undefined ? undefined : path.dirname(path.resolve(packagePath))

	return { packageDirectory, readmePath }
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
				select<TemplateOptions, string>({
					message: 'Which template would you like to use?',
					options: getTemplateOptions(),
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
	const resolvedOptions = deepMergeDefined(
		{
			compound: true,
			output: packageDirectory ?? process.cwd(),
			overwrite: true,
			expand: packageDirectory !== undefined,
			template: Object.keys(templates)[0],
		},
		options ?? {},
	) as Required<MdatReadmeInitOptions>

	// Save the template
	const templateString = getTemplateForConfig(resolvedOptions.template, resolvedOptions.compound)
	const readmePath = path.join(resolvedOptions.output, 'readme.md')
	await fs.writeFile(readmePath, templateString, 'utf8')

	// Run the expansion if requested
	// Maybe better to use execa?
	const results = await expandReadme(undefined, undefined, { readmeFile: readmePath })
	await write(results)

	return readmePath
}

function getTemplateForConfig(templateKey: string, compound: boolean): string {
	const templateObject = templates[templateKey as keyof typeof templates]
	const templateString = templateObject.content[compound ? 'compound' : 'explicit']

	if (templateString === undefined || templateString === '') {
		throw new Error(`No template found for "${templateKey}"`)
	}

	return templateString
}

type TemplateOptions = Array<{ hint?: string; label: string; value: string }>

function getTemplateOptions(): TemplateOptions {
	return Object.entries(templates).map(([key, value]) => ({
		label: key,
		hint: value.description,
		value: key,
	}))
}
