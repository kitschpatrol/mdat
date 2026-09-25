import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'

const TOOL_INFO: Record<string, { display: string; url: string }> = {
	bun: { display: 'Bun', url: 'https://bun.sh/' },
	deno: { display: 'Deno', url: 'https://deno.land/' },
	node: { display: 'Node.js', url: 'https://nodejs.org/' },
	npm: { display: 'npm', url: 'https://www.npmjs.com/' },
	pnpm: { display: 'pnpm', url: 'https://pnpm.io/' },
	yarn: { display: 'Yarn', url: 'https://yarnpkg.com/' },
}

export default {
	'development-dependencies': {
		async content(options) {
			const validOptions = z
				.object({
					headingLevel: headingLevelSchema,
				})
				.optional()
				.parse(options)

			const { developmentDependencies } = await getReadmeMetadata()

			if (developmentDependencies === undefined) {
				return ''
			}

			const { packageManagers, runtimes } = developmentDependencies
			const items: string[] = []

			for (const { name, version } of [...(runtimes ?? []), ...(packageManagers ?? [])]) {
				const info = TOOL_INFO[name.toLowerCase()]

				const display = info ? `[${info.display}](${info.url})` : name
				items.push(
					version === undefined || version === '' ? `- ${display}` : `- ${display} ${version}`,
				)
			}

			const heading = `${getHeadingPrefix(validOptions?.headingLevel ?? 3)} Development dependencies`
			return [heading, '', ...items].join('\n')
		},
	},
} satisfies Rules
