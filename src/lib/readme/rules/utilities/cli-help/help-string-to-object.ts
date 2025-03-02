import { log } from 'remark-mdat'
import parsers from './parsers/index'
import { type ProgramInfo } from './parsers/index'

/**
 * Tries to parse a help string into an object through a process of trial and
 * error with the available parsers.
 *
 * Generally, there's no way to know which framework was used to generate a
 * particular CLI tool without inspecting the output for particular formatting
 * patterns.
 */
export function helpStringToObject(helpString: string): ProgramInfo | undefined {
	for (const [parserName, helpStringToObjectFunction] of Object.entries(parsers)) {
		log.info(`Trying to parse help string with ${parserName} parser...`)

		try {
			return helpStringToObjectFunction(helpString)
		} catch (error) {
			if (error instanceof Error) {
				log.info(`Error in "${parserName}" parser: ${String(error)}`)
			}

			// Try next parser
			continue
		}
	}

	log.error('Could not parse help string with any parser')
	return undefined
}
