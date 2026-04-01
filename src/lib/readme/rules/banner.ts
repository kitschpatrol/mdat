import type { Rules } from 'remark-mdat'
import { globby } from 'globby'
import path from 'node:path'
import { isFile } from 'path-type'
import { z } from 'zod'
import { getPackageJson } from '../../config'
import { findPackage } from '../../utilities'

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

			// Try to find the src in various places
			const src = validOptions?.src ?? (await getBannerSrc())

			if (src === undefined) {
				throw new Error(
					'Banner image not found at any typical location, consider adding something at ./assets/banner.webp',
				)
			} else if (!isUrl(src) && !(await isFile(src))) {
				throw new Error(`Banner image not found at "${src}"`)
			}

			// Try to find the alt, otherwise derive it from the package name
			let alt = validOptions?.alt
			if (alt === undefined) {
				const { name: packageName } = await getPackageJson()
				// eslint-disable-next-line ts/no-unnecessary-condition
				if (packageName === undefined) {
					throw new Error('Banner image alt text not available')
				}

				alt = `${packageName} banner`
			}

			return `![${alt}](${src})`
		},
	},
} satisfies Rules

// Helpers

async function getBannerSrc(): Promise<string | undefined> {
	const packageFile = await findPackage()
	if (packageFile === undefined) {
		throw new Error('No package.json found')
	}

	const packageDirectory = path.dirname(packageFile)

	const typicalLocations = [
		'.',
		'assets',
		'media',
		'readme-assets',
		'readme-media',
		'readme',
		'images',
		'.github/assets',
	]

	const typicalNames = [
		'banner',
		'cover',
		'demo',
		'header',
		'hero',
		'image',
		'logo',
		'overview',
		'readme',
		'screenshot',
		'screenshots',
		'splash',
	]
	const typicalExtensions = ['png', 'gif', 'jpg', 'jpeg', 'svg', 'webp']

	const paths = await globby(
		typicalLocations.map((location) => path.join(packageDirectory, location)),
		{
			deep: 1,
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

// Via https://github.com/sindresorhus/is-url-superb
function isUrl(text: string, lenient = true): boolean {
	if (typeof text !== 'string') {
		throw new TypeError('Expected a string')
	}

	text = text.trim()
	if (text.includes(' ')) {
		return false
	}

	try {
		new URL(text) // eslint-disable-line no-new
		return true
	} catch {
		if (lenient) {
			return isUrl(`https://${text}`, false)
		}

		return false
	}
}
