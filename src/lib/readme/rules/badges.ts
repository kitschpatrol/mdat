import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'

export default {
	badges: {
		async content(options?) {
			const validOptions = z
				.object({
					custom: z
						.record(
							z.string(),
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

			const metadata = await getReadmeMetadata()

			const { ciActionFileName, license, licenseUrl, name, repositoryUrl } = metadata
			const badges = []

			if (validOptions?.npm === undefined) {
				if (metadata.isPublicNpmPackage) {
					badges.push(
						`[![NPM Package ${name}](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
					)
				}
			} else {
				// Custom behavior where NPM badge(s) are explicitly specified by package name
				// Useful for monorepos, or for removing npm badge if npm = []
				for (const name of validOptions.npm) {
					badges.push(
						`[![NPM Package ${name}](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
					)
				}
			}

			// License badge
			// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
			if (license !== undefined && licenseUrl !== undefined) {
				badges.push(
					`[![License: ${license}](https://img.shields.io/badge/License-${license.replaceAll('-', '--')}-yellow.svg)](${licenseUrl})`,
				)
			}

			if (ciActionFileName !== undefined && repositoryUrl !== undefined) {
				badges.push(
					`[![CI](${repositoryUrl}/actions/workflows/${ciActionFileName}/badge.svg)](${repositoryUrl}/actions/workflows/${ciActionFileName})`,
				)
			}

			// Custom badges
			if (validOptions?.custom !== undefined) {
				for (const [name, { image, link }] of Object.entries(validOptions.custom)) {
					badges.push(`[![${name}](${image})](${link})`)
				}
			}

			// TODO PyPi
			// TODO Obsidian

			return badges.join('\n')
		},
	},
} satisfies Rules
