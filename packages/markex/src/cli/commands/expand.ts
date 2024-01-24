import { type ExpanderPreset } from '../../lib'
import log from '../../lib/log'
import { expandFile, getRulesForPreset } from '../helpers'
import path from 'node:path'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export async function expandCommand(options: {
	files: string[]
	meta: boolean
	name: string | undefined
	output: string | undefined
	prefix: string
	preset: string | undefined
	print: boolean
	rules: string[] | undefined
}) {
	const { files, meta, name, output, prefix, preset, print, rules } = options

	// Build final rules from presets and any loaded modules
	let finalRules: ExpanderPreset = preset ? getRulesForPreset(preset) : {}

	if (rules) {
		for (const rulePath of rules) {
			const fullPath = resolve(process.cwd(), rulePath)
			const { default: ruleModule } = (await import(
				fileURLToPath(new URL(`file://${fullPath}`))
			)) as unknown as ExpanderPreset

			// Todo validate module
			log.info(`ruleModule: ${JSON.stringify(ruleModule, undefined, 2)}`)
			finalRules = { ...finalRules, ...ruleModule }
		}
	}

	log.info(`finalRules: ${JSON.stringify(finalRules, undefined, 2)}`)

	if (Object.entries(finalRules).length === 0) {
		throw new Error(`No rules found. Did you forget to specify a preset or rules?`)
	}

	for (const [index, file] of files.entries()) {
		// Get base fileName either from input or name option
		const baseName = name
			? path.basename(name, path.extname(name))
			: path.basename(file, path.extname(file))
		const increment = name && files.length > 1 ? `-${index + 1}` : ''
		const outputName = `${baseName}${increment}.md`

		// TODO handle print
		const { expandedFile, report } = await expandFile(file, {
			expansionRules: finalRules,
			keywordPrefix: prefix,
			meta,
			output: path.join(path.dirname(output ?? file), outputName),
		})

		console.log(report)
		console.log(expandedFile)
	}
}
