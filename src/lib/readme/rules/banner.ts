import type { Rules } from 'remark-mdat'
import { globby } from 'globby'
import { isFile } from 'path-type'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'

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
			}

			if (!isUrl(src) && !(await isFile(src))) {
				throw new Error(`Banner image not found at "${src}"`)
			}

			// Try to find the alt, otherwise derive it from the package name
			let alt = validOptions?.alt
			if (alt === undefined) {
				const { name: packageName } = await getReadmeMetadata()

				if (packageName === undefined) {
					// Defensive: requires a project with no detectable name
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
	const { projectDirectory } = await getReadmeMetadata()
	if (projectDirectory === undefined) {
		throw new Error('No project directory found')
	}

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

	// Glob relative to cwd so platform-specific separators and glob syntax in
	// the project path never become part of a pattern. Search each location
	// separately because fast-glob merges patterns into a single task rooted at
	// '.' when any pattern is '.', which would apply `deep` from the root.
	const pathsByLocation = await Promise.all(
		typicalLocations.map(async (location) =>
			globby(location, {
				cwd: projectDirectory,
				deep: 1,
				expandDirectories: {
					extensions: typicalExtensions,
					files: typicalNames,
				},
			}),
		),
	)

	const [firstPath] = pathsByLocation.flat()
	return firstPath
}

// Via https://github.com/sindresorhus/is-url-superb
function isUrl(text: string, lenient = true): boolean {
	if (typeof text !== 'string') {
		// Defensive: TypeScript enforces string input
		throw new TypeError('Expected a string')
	}

	text = text.trim()
	return !text.includes(' ') && (URL.canParse(text) || (lenient && URL.canParse(`https://${text}`)))
}
