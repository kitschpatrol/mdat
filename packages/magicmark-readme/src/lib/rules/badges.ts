import type { Rules } from 'magicmark'
import { readPackageUp } from 'read-package-up'
import { z } from 'zod'

export default {
	badges: {
		async content(options?) {
			const validOptions = z
				.object({
					custom: z.record(
						z.object({
							image: z.string(),
							link: z.string(),
						}),
					),
				})
				.optional()
				.parse(options)

			const normalizedPackageJson = await readPackageUp()

			if (normalizedPackageJson === undefined) {
				throw new Error('Could not find package.json')
			}

			const { name } = normalizedPackageJson.packageJson

			const badges = []

			// NPM badge if published
			if (
				!normalizedPackageJson.packageJson.private &&
				// eslint-disable-next-line unicorn/consistent-destructuring
				normalizedPackageJson.packageJson.publishConfig?.access === 'public'
			) {
				badges.push(
					`[![NPM Package](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
				)
			}

			// License badge
			// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
			const { license } = normalizedPackageJson.packageJson
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
		order: 2,
		required: false,
	},
} satisfies Rules
