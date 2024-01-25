import { expandString } from '../../lib'
import log from '../../lib/log'
import { getInputOutputPaths, getRules } from '../helpers'
import fs from 'node:fs/promises'

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

	const finalRules = await getRules(preset, rules)
	const inputOutputPaths = getInputOutputPaths(files, output, name)

	for (const { input, output } of inputOutputPaths) {
		const markdown = await fs.readFile(input, 'utf8')
		const { expandedString, report } = await expandString(markdown, {
			expansionRules: finalRules,
			keywordPrefix: prefix,
			meta,
		})

		if (print) {
			// TODO flatten to one line if multiple?
			process.stdout.write(`${expandedString}\n`)
		} else {
			await fs.writeFile(output, expandedString)
		}

		log.info('[readme]', `Expanded:`)
		log.info('[readme]', `  From: ${input}`)
		log.info('[readme]', `  To:   ${print ? 'stdout' : output}`)
		log.info('[readme]', '  Replaced:')
		for (const [i, line] of report.entries()) {
			log.info('[readme]', `    ${i + 1}. ${line}`)
		}
	}
}
