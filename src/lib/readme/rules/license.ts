import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'

export default {
	license: {
		async content(options) {
			const validOptions = z
				.object({
					headingLevel: headingLevelSchema,
				})
				.optional()
				.parse(options)

			const { author, authorUrl, license, licenseFilePath } = await getReadmeMetadata()

			if (author === undefined) {
				// Defensive: requires a project with no detectable author
				throw new Error('Could not find author name in project')
			}

			if (license === undefined || licenseFilePath === undefined) {
				// Defensive: requires a project with no detectable license
				throw new Error('Could not find license for project')
			}

			const authorDisplay = authorUrl === undefined ? author : `[${author}](${authorUrl})`

			const heading = `${getHeadingPrefix(validOptions?.headingLevel ?? 2)} License`
			return `${heading}\n[${license}](${licenseFilePath}) © ${authorDisplay}`
		},
	},
} satisfies Rules
