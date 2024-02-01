/* eslint-disable unicorn/no-await-expression-member */
import { getPackageJson, getPackagePath } from '../utilities'
import { globby } from 'globby'
import type { Rules } from 'remark-mdat'
import path from 'node:path'
import { z } from 'zod'

async function getBannerSrc() {
	// Check some typical locations
	const packagePath = await getPackagePath()
	const packageDirectory = path.dirname(packagePath)

	const typicalLocations = [
		'.',
		'assets',
		'media',
		'readme-assets',
		'readme-media',
		'readme',
		'images',
	]

	const typicalNames = [
		'banner',
		'header',
		'logo',
		'readme',
		'cover',
		'screenshot',
		'screenshots',
		'demo',
		'overview',
		'image',
		'hero',
	]
	const typicalExtensions = ['png', 'gif', 'jpg', 'jpeg', 'svg', 'webp']

	const paths = await globby(
		typicalLocations.map((location) => path.join(packageDirectory, location)),
		{
			expandDirectories: {
				extensions: typicalExtensions,
				files: typicalNames,
			},
		},
	)

	// TODO re-enable
	if (paths.length > 0) {
		return path.relative(process.cwd(), paths[0])
	}

	throw new Error(
		'No banner image found at typical locations, adding "./assets/banner.webp" is suggested.',
	)
}

export default {
	banner: {
		async content(options?) {
			// Check options, throws if invalid
			const validOptions = z
				.object({
					alt: z.string().optional(),
					src: z.string().optional(),
				})
				.optional()
				.parse(options)

			const {
				// Use the package name as the default alt text
				alt = `${(await getPackageJson()).name} banner`,
				// Check for banner in typical locations
				src = await getBannerSrc(),
			} = validOptions ?? {}

			return `![${alt}](${src})`
		},
		order: 2,
	},
} satisfies Rules
