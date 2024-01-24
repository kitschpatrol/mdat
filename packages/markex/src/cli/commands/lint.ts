import { validateString } from '../../lib'
import log from '../../lib/log'
import { getRules } from '../helpers'
import fs from 'node:fs/promises'

export async function lintCommand(options: {
	files: string[]
	meta: boolean
	prefix: string
	preset: string | undefined
	rules: string[] | undefined
}) {
	const { files, meta, prefix, preset, rules } = options
	const finalRules = await getRules(preset, rules)

	for (const input of files) {
		const markdown = await fs.readFile(input, 'utf8')
		const result = await validateString(markdown, {
			expansionRules: finalRules,
			keywordPrefix: prefix,
			meta,
		})

		if (typeof result === 'boolean' && result) {
			log.info(`[lint] ${input}: OK`)
		} else {
			for (const error of result) {
				console.log(`[lint] ${error.message}`)
			}
		}
	}
}
