import { type RuleSet, expandString } from '../../lib'
import log from '../../lib/log'
import { getRulesForPreset } from '../helpers'
import fs from 'node:fs/promises'
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
	let finalRules: RuleSet = preset ? getRulesForPreset(preset) : {}

	if (rules) {
		for (const rulePath of rules) {
			const fullPath = resolve(process.cwd(), rulePath)
			const { default: ruleModule } = (await import(
				fileURLToPath(new URL(`file://${fullPath}`))
			)) as { default: RuleSet }

			// TODO validate module
			// TODO support TS? See SystemJS and SystemJS babel plugin
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
		const outputPath = path.join(path.dirname(output ?? file), outputName)

		const markdown = await fs.readFile(file, 'utf8')
		const { expandedString, report } = await expandString(markdown, {
			expansionRules: finalRules,
			keywordPrefix: prefix,
			meta,
		})

		if (print) {
			// TODO flatten to one line if multiple?
			process.stdout.write(`${expandedString}\n`)
		} else {
			await fs.writeFile(outputPath, expandedString)
		}

		log.info('[readme]', `Expanded:`)
		log.info('[readme]', `  From: ${file}`)
		log.info('[readme]', `  To:   ${print ? 'stdout' : outputPath}`)
		log.info('[readme]', '  Replaced:')
		for (const [i, line] of report.entries()) {
			log.info('[readme]', `    ${i + 1}. ${line}`)
		}
	}
}
