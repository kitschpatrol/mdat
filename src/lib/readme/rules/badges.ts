import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getPackageJson } from '../../config'

export default {
	badges: {
		async content(options?) {
			const validOptions = z
				.object({
					custom: z
						.record(
							z.object({
								image: z.string(),
								link: z.string(),
							}),
						)
						.optional(),
					npm: z.array(z.string()).optional(),
				})
				.optional()
				.parse(options)

			const packageJson = await getPackageJson()

			const { name } = packageJson
			const badges = []

			// NPM badge if published
			// Unscoped packages are always public
			// Scoped packages are only public if publishConfig.access is set to 'public', default is implicitly 'restricted'
			// See https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/HEAD/docs/rules/no-redundant-publishConfig.md
			// See https://docs.npmjs.com/cli/v8/commands/npm-publish
			if (!packageJson.name.startsWith('@') || packageJson.publishConfig?.access === 'public') {
				badges.push(
					`[![NPM Package ${name}](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
				)
			}

			// Additional NPM badges passed in options
			// Useful for monorepos
			if (validOptions?.npm !== undefined) {
				for (const name of validOptions.npm) {
					badges.push(
						`[![NPM Package ${name}](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
					)
				}
			}

			// License badge
			// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
			const { license } = packageJson
			if (license !== undefined) {
				// TODO support more
				badges.push(
					`[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`,
				)
			}

			// Custom badges
			if (validOptions?.custom !== undefined) {
				for (const [name, { image, link }] of Object.entries(validOptions.custom)) {
					badges.push(`[![${name}](${image})](${link})`)
				}
			}

			return badges.join('\n')
		},
		order: 3,
	},
} satisfies Rules
