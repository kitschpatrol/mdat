import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'

const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

function codeBlock(command: string): string[] {
	return ['```sh', command, '```']
}

/**
 * Install instructions for command-line use: run once with `npx`, or install
 * globally with Homebrew (if published to a tap) or npm.
 */
function getCliLines(name: string, homebrewFormula: string | undefined): string[] {
	return [
		'Run it once without installing:',
		'',
		...codeBlock(`npx ${name}`),
		...(homebrewFormula === undefined
			? []
			: [
					'',
					'Or install it globally with Homebrew:',
					'',
					...codeBlock(`brew install ${homebrewFormula}`),
				]),
		'',
		'Or install it globally with npm:',
		'',
		...codeBlock(`npm install --global ${name}`),
	]
}

/**
 * Install instructions for use as a project dependency.
 */
function getLibraryLines(
	name: string,
	bin: string[] | undefined,
	hasTypes: boolean,
	dev: boolean,
): string[] {
	const lead = dev ? 'Add it to your project as a development dependency' : 'Add it to your project'
	const command = `npm install ${dev ? '--save-dev ' : ''}${name}`

	if (bin === undefined || bin.length === 0) {
		return [`${lead}:`, '', ...codeBlock(command)]
	}

	const api = hasTypes ? 'TypeScript API' : 'API'
	const binList = listFormatter.format(bin.map((binName) => `\`${binName}\``))
	const cliNoun = bin.length === 1 ? 'CLI' : 'CLIs'

	return [
		`${lead} to import the ${api}. This also puts the ${binList} ${cliNoun} on your project's path:`,
		'',
		...codeBlock(command),
	]
}

export default {
	install: {
		async content(options) {
			const validOptions = z
				.object({
					dev: z.boolean().optional(),
					headingLevel: headingLevelSchema,
					homebrew: z.union([z.string(), z.literal(false)]).optional(),
				})
				.optional()
				.parse(options)

			const {
				bin,
				hasTypes,
				homebrewFormula,
				isLibrary,
				isNodePackage,
				isPublicNpmPackage,
				name,
				runtimePlatform,
			} = await getReadmeMetadata()

			if (name === undefined) {
				throw new Error('Could not find project name')
			}

			const headingLevel = validOptions?.headingLevel ?? 3
			const heading = `${getHeadingPrefix(headingLevel)} Installation`
			const subheading = getHeadingPrefix(headingLevel + 1)

			if (isNodePackage) {
				if (!isPublicNpmPackage) {
					throw new Error(
						'Install instructions require a publishable package, but package.json sets "private": true',
					)
				}

				const homebrew =
					validOptions?.homebrew === undefined
						? homebrewFormula
						: validOptions.homebrew === false
							? undefined
							: validOptions.homebrew
				const hasCli = bin !== undefined && bin.length > 0
				const cliLines = getCliLines(name, homebrew)
				const libraryLines = getLibraryLines(name, bin, hasTypes, validOptions?.dev ?? false)

				if (hasCli && isLibrary) {
					return [
						heading,
						'',
						'Pick the option that matches how you plan to use it.',
						'',
						`${subheading} CLI`,
						'',
						...cliLines,
						'',
						`${subheading} Library`,
						'',
						...libraryLines,
					].join('\n')
				}

				return [heading, '', ...(hasCli ? cliLines : libraryLines)].join('\n')
			}

			const platform = (prefix: string) => runtimePlatform?.some((p) => p.startsWith(prefix))
			const command = platform('python')
				? `pip install ${name}`
				: platform('rust')
					? `cargo install ${name}`
					: platform('go')
						? `go install ${name}@latest`
						: platform('ruby')
							? `gem install ${name}`
							: undefined

			if (command === undefined) {
				throw new Error('Could not determine project ecosystem for install instructions')
			}

			return [heading, '', ...codeBlock(command)].join('\n')
		},
	},
} satisfies Rules
