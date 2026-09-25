import type { Rules } from 'remark-mdat'
import { z } from 'zod'
import { getReadmeMetadata } from '../../context'
import { getHeadingPrefix, headingLevelSchema } from './utilities/heading'
import { describeVersionRange } from './utilities/version-range'

const PLATFORM_INFO: Record<string, { display: string; url: string }> = {
	bun: { display: 'Bun', url: 'https://bun.sh/' },
	deno: { display: 'Deno', url: 'https://deno.land/' },
	go: { display: 'Go', url: 'https://go.dev/' },
	java: { display: 'Java', url: 'https://www.java.com/' },
	node: { display: 'Node.js', url: 'https://nodejs.org/' },
	python: { display: 'Python', url: 'https://www.python.org/' },
	ruby: { display: 'Ruby', url: 'https://www.ruby-lang.org/' },
	rust: { display: 'Rust', url: 'https://www.rust-lang.org/' },
}

const OPERATING_SYSTEM_NAMES: Record<string, string> = {
	darwin: 'macOS',
	linux: 'Linux',
	win32: 'Windows',
}

function getPlatformDisplay(key: string): string {
	const info = PLATFORM_INFO[key.toLowerCase()]
	return info ? `[${info.display}](${info.url})` : key
}

function getPlatformItem(key: string, version: string | undefined): string {
	const display = getPlatformDisplay(key)
	return version === undefined || version.trim() === ''
		? `- ${display}`
		: `- ${display} ${describeVersionRange(version)}`
}

export default {
	dependencies: {
		async content(options) {
			const validOptions = z
				.object({
					headingLevel: headingLevelSchema,
				})
				.optional()
				.parse(options)

			const { engines, operatingSystem, peerDependencies, runtimePlatform } =
				await getReadmeMetadata()

			const items: string[] = []
			const engineEntries = Object.entries(engines ?? {})
			const runtimePlatformEntries = runtimePlatform ?? []
			// Optional peers are noise for most readers, they're documented where the
			// feature that needs them is described
			const peerDependencyEntries = (peerDependencies ?? []).filter(({ optional }) => !optional)

			// From engines (Node-specific, has separate name and version)
			for (const [name, version] of engineEntries) {
				items.push(getPlatformItem(name, version))
			}

			// From runtimePlatform (cross-ecosystem, version included in string)
			for (const entry of runtimePlatformEntries) {
				const [platformKey = entry, ...versionParts] = entry.split(' ')

				// Skip entries already covered by engines
				if (engines?.[platformKey] !== undefined) {
					continue
				}

				items.push(getPlatformItem(platformKey, versionParts.join(' ')))
			}

			if (operatingSystem !== undefined && operatingSystem.length > 0) {
				const names = operatingSystem.map((os) => OPERATING_SYSTEM_NAMES[os] ?? os)
				items.push(`- Supported operating systems: ${names.join(', ')}`)
			}

			for (const { name, version } of peerDependencyEntries) {
				const npmUrl = `https://www.npmjs.com/package/${name}`
				items.push(`- [${name}](${npmUrl}) \`${version}\` _(peer dependency)_`)
			}

			if (items.length === 0) {
				return ''
			}

			const heading = `${getHeadingPrefix(validOptions?.headingLevel ?? 3)} Dependencies`
			return [heading, '', ...items].join('\n')
		},
	},
} satisfies Rules
