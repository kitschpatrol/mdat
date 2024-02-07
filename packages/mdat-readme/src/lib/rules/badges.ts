import { getPackageJson } from '../api'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

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
				})
				.optional()
				.parse(options)

			const packageJson = await getPackageJson()
			const { name } = packageJson
			const badges = []

			// NPM badge if published
			if (
				!packageJson.private &&
				// eslint-disable-next-line unicorn/consistent-destructuring
				packageJson.publishConfig?.access === 'public'
			) {
				badges.push(
					`[![NPM Package](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
				)
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
		required: false,
	},
} satisfies Rules
