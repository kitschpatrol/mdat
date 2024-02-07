import { getReadmeConfig } from '../api'
import { globby } from 'globby'
import path from 'node:path'
import { isFile } from 'path-type'
import { readPackage } from 'read-pkg'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

async function getBannerSrc(specificPath?: string): Promise<string | undefined> {
	// Check some typical locations
	const { packageFile } = await getReadmeConfig()
	const packageDirectory = path.dirname(packageFile)

	// Limit search to specific path if provided
	const typicalLocations =
		specificPath === undefined
			? ['.', 'assets', 'media', 'readme-assets', 'readme-media', 'readme', 'images']
			: [specificPath]

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

	if (paths.length > 0) {
		return path.relative(process.cwd(), paths[0])
	}

	return undefined
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

			const { assetsPath, packageFile } = await getReadmeConfig()

			// Try to find the src in various places

			const src = validOptions?.src ?? (await getBannerSrc(assetsPath)) ?? (await getBannerSrc())
			if (src === undefined || !(await isFile(src))) {
				throw new Error(
					`Banner image not found at ${src === undefined ? 'any typical location, consider adding something at ./assets/banner.webp' : `"${src}"`}`,
				)
			}

			// Try to find the alt, otherwise derive it from the package name
			const alt =
				validOptions?.alt ??
				// eslint-disable-next-line unicorn/no-await-expression-member
				`${(await readPackage({ cwd: path.dirname(packageFile) })).name} banner`
			if (alt === undefined || alt === 'undefined banner') {
				throw new Error(`Banner image alt text not available`)
			}

			return `![${alt}](${src})`
		},
		order: 2,
	},
} satisfies Rules
