/* eslint-disable perfectionist/sort-objects */
import { confirm, group, intro, note, outro, select } from '@clack/prompts'
import fs from 'node:fs/promises'
import path from 'node:path'
import picocolors from 'picocolors'
import { write } from 'to-vfile'
import { expand } from '../api'
import { deepMergeDefined } from '../deep-merge-defined'
import { findReadme } from '../utilities'
import templates from './templates'

type Symbolize<T extends Record<string, unknown>> = {
	[x in keyof T]: symbol | T[x]
}

type MdatReadmeCreateOptions = {
	compound: boolean
	expand: boolean
	output: string
	overwrite: boolean
	template: string
}

type MdatReadmeCreateInteractiveOptions = Omit<MdatReadmeCreateOptions, 'output'>

/**
 * Creates a new readme file interactively.
 *
 * @returns Path to the created readme file.
 */
export async function createReadmeInteractive(): Promise<string> {
	const readmePath = await findReadme()

	intro(`Running ${picocolors.bold('mdat create')} interactively`)

	const readmeConfig = await group<Symbolize<MdatReadmeCreateInteractiveOptions>>(
		{
			async overwrite() {
				if (readmePath === undefined) {
					return true
				}

				const confirmed = await confirm({
					message: `Found an existing readme at "${picocolors.blue(readmePath)}". Do you want to overwrite it?`,
					active: 'Overwrite',
					inactive: 'Exit',
				})

				if (confirmed === false) {
					throw new Error(
						'`mdat create` was cancelled to avoid an overwrite - no changes were made',
					)
				}

				return true
			},

			template: async () =>
				select({
					message: 'Which template would you like to use?',
					options: getTemplateOptions(),
				}),

			compound: async () =>
				select({
					message:
						'Do you want to use "compound comments" where possible, which combine several expansions into a single comment block?',
					options: [
						{
							label: `Yes: Combine things like ${picocolors.green('<!-- title -->')} and ${picocolors.green('<!-- badges -->')} in a single ${picocolors.green('<!-- header -->')} comment.`,
							value: true,
						},
						{
							label: 'No:  Use individual MDAT expansion comments for each section.',
							value: false,
						},
					],
				}),

			expand: async () =>
				confirm({
					initialValue: true,
					message:
						'Do you want to run `mdat expand` now to expand the template with content from your project metadata?',
				}),
		},
		{
			onCancel() {
				throw new Error('`mdat create` was cancelled - no changes were made')
			},
		},
	)

	const newReadmePath = await createReadme(readmeConfig)

	note(`Readme created: "${picocolors.blue(picocolors.bold(newReadmePath))}"`)

	outro('Done!')

	return newReadmePath
}

/**
 * Creates a new readme file with the given options.
 *
 * @returns Path to the created readme file.
 */
export async function createReadme(options?: Partial<MdatReadmeCreateOptions>): Promise<string> {
	const resolvedOptions = deepMergeDefined(
		{
			compound: true,
			output: process.cwd(),
			overwrite: true,
			expand: true,
			template: Object.keys(templates)[0],
		},
		options ?? {},
	) as Required<MdatReadmeCreateOptions>

	// Save the template
	const templateString = getTemplateForConfig(resolvedOptions.template, resolvedOptions.compound)
	const readmePath = path.join(resolvedOptions.output, 'readme.md')

	// Check for existing file if overwrite is disabled
	if (!resolvedOptions.overwrite) {
		let exists = true
		try {
			await fs.access(readmePath)
		} catch {
			exists = false
		}

		if (exists) {
			throw new Error(
				`Readme already exists at "${readmePath}". Use the overwrite option to replace it.`,
			)
		}
	}

	await fs.writeFile(readmePath, templateString, 'utf8')

	// Run the expansion if requested
	if (resolvedOptions.expand) {
		const [result] = await expand(readmePath)
		if (result === undefined) {
			// Defensive: expand always returns one result per input file
			throw new Error(`Failed to expand readme at "${readmePath}"`)
		}

		await write(result)
	}

	return readmePath
}

function getTemplateForConfig(templateKey: string, compound: boolean): string {
	if (!Object.hasOwn(templates, templateKey)) {
		throw new Error(
			`Unknown template "${templateKey}". Available templates: ${Object.keys(templates).join(', ')}`,
		)
	}

	return templates[templateKey as keyof typeof templates].content[
		compound ? 'compound' : 'explicit'
	]
}

type TemplateOptions = Array<{ hint?: string; label: string; value: string }>

function getTemplateOptions(): TemplateOptions {
	return Object.entries(templates).map(([key, value]) => ({
		label: key,
		hint: value.description,
		value: key,
	}))
}
