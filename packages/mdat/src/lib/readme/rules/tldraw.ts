import { getConfig } from '../../config'
import { tldrawToImage } from '@kitschpatrol/tldraw-cli'
import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { isFile } from 'path-type'
import type { Rules } from 'remark-mdat'
import { z } from 'zod'

export default {
	tldraw: {
		async content(options?) {
			// Src is required, may be a path to a local tldr file or a URL
			const { alt = 'tldraw diagram', src } = z
				.object({
					alt: z.string().optional(),
					src: z.string(),
				})
				.parse(options)

			// Save the tldr svg to assets in both light and dark mode, with a hash
			const { assetsPath } = await getConfig()

			if (assetsPath === undefined) {
				throw new Error('No assets path found')
			}

			// Make assets path if necessary
			await fs.mkdir(assetsPath, { recursive: true })

			// If it's a file, check the source file for changes...
			// If it's a URL, we have to download it every time
			let sourceHash = (await isFile(src)) ? await getFileHash(src) : undefined

			if (sourceHash !== undefined) {
				// If we used a file source, we can check to see if the generated files need to be updated
				// If not, just return the picture element and don't regenerate the SVGs
				const fileName = path.basename(src, path.extname(src))
				const possibleLightPath = path.join(assetsPath, `${fileName}-${sourceHash}-light.svg`)
				const possibleDarkPath = path.join(assetsPath, `${fileName}-${sourceHash}-dark.svg`)
				if ((await isFile(possibleLightPath)) && (await isFile(possibleDarkPath))) {
					return getPictureElement(possibleLightPath, possibleDarkPath, alt)
				}
			}

			const [lightPath] = await tldrawToImage(src, {
				dark: false,
				format: 'svg',
				output: assetsPath,
				transparent: true,
			})

			// Generate hash if it was a url, will be used for both light and dark filenames
			sourceHash ??= await getFileHash(lightPath)

			const lightPathHashed = `${stripExtension(lightPath)}-${sourceHash}-light.svg`
			await fs.rename(lightPath, lightPathHashed)

			const [darkPath] = await tldrawToImage(src, {
				dark: true,
				format: 'svg',
				output: assetsPath,
				transparent: true,
			})

			const darkPathHashed = `${stripExtension(darkPath)}-${sourceHash}-dark.svg`
			await fs.rename(darkPath, darkPathHashed)

			// Clean up stale files
			// For the url case, check if there are old source files that need to be deleted
			if (sourceHash !== undefined) {
				const darkPathHashedName = path.basename(darkPathHashed)
				const lightPathHashedName = path.basename(lightPathHashed)

				// Turns "tldraw-sketch-132cbdb8-light.svg"
				// into just "tldraw-sketch-" so we can find stale versions of the current file
				const filePrefix = lightPathHashedName.replace(`${sourceHash}-light.svg`, '')

				const currentAssets = await fs.readdir(assetsPath)
				for (const asset of currentAssets) {
					const assetName = path.basename(asset)
					if (
						assetName !== darkPathHashedName &&
						assetName !== lightPathHashedName &&
						assetName.startsWith(filePrefix) &&
						assetName.endsWith('.svg')
					) {
						await fs.rm(path.join(assetsPath, assetName))
					}
				}
			}

			return getPictureElement(lightPathHashed, darkPathHashed, alt)
		},
	},
} satisfies Rules

// Helpers

async function getPictureElement(
	lightPath: string,
	darkPath: string,
	alt: string,
): Promise<string> {
	const { readmeFile } = await getConfig()

	if (readmeFile === undefined) {
		throw new Error('No readme file found')
	}

	const basePath = path.dirname(readmeFile)

	const relativeLightPath = path.relative(basePath, lightPath)
	const relativeDarkPath = path.relative(basePath, darkPath)

	// https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#specifying-the-theme-an-image-is-shown-to
	return `<picture>
  <source media="(prefers-color-scheme: dark)" srcset="${relativeDarkPath}">
  <source media="(prefers-color-scheme: light)" srcset="${relativeLightPath}">
  <img alt="${alt}" src="${relativeLightPath}">
</picture>`
}

async function getFileHash(filePath: string): Promise<string> {
	const fileBuffer = await fs.readFile(filePath)
	const hash = crypto.createHash('sha1')
	hash.update(fileBuffer)
	return hash.digest('hex').slice(0, 8)
}

function stripExtension(file: string): string {
	return file.replace(/\.[^./]+$/, '')
}
