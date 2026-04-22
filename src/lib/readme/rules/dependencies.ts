/* eslint-disable complexity */

import type { Rules } from 'remark-mdat'
import { getReadmeMetadata } from '../../context'

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

export default {
	dependencies: {
		async content() {
			const { engines, operatingSystem, peerDependencies, runtimePlatform } =
				await getReadmeMetadata()

			// Build platform requirement items
			const platformItems: string[] = []

			// From engines (Node-specific, has separate name and version)
			if (engines !== undefined) {
				for (const [name, version] of Object.entries(engines)) {
					const info = PLATFORM_INFO[name.toLowerCase()]
					// eslint-disable-next-line ts/no-unnecessary-condition
					const display = info ? `[${info.display}](${info.url})` : name
					platformItems.push(`- ${display} ${version}`)
				}
			}

			// From runtimePlatform (cross-ecosystem, version included in string)
			if (runtimePlatform !== undefined) {
				for (const entry of runtimePlatform) {
					const spaceIndex = entry.indexOf(' ')
					const platformKey = spaceIndex > 0 ? entry.slice(0, spaceIndex) : entry
					const version = spaceIndex > 0 ? entry.slice(spaceIndex + 1) : undefined

					// Skip entries already covered by engines
					if (engines?.[platformKey] !== undefined) continue

					const info = PLATFORM_INFO[platformKey.toLowerCase()]
					// eslint-disable-next-line ts/no-unnecessary-condition
					const display = info ? `[${info.display}](${info.url})` : platformKey
					platformItems.push(version ? `- ${display} ${version}` : `- ${display}`)
				}
			}

			// Operating system constraints
			if (operatingSystem !== undefined && operatingSystem.length > 0) {
				platformItems.push(`- Supported platforms: ${operatingSystem.join(', ')}`)
			}

			// Peer dependency items
			const peerItems: string[] = []
			if (peerDependencies !== undefined) {
				for (const { name, optional, version } of peerDependencies) {
					const npmUrl = `https://www.npmjs.com/package/${name}`
					const optionalSuffix = optional ? ' _(optional)_' : ''
					peerItems.push(`- [${name}](${npmUrl}) ${version}${optionalSuffix}`)
				}
			}

			const hasPlatform = platformItems.length > 0
			const hasPeers = peerItems.length > 0

			if (!hasPlatform && !hasPeers) {
				return ''
			}

			const sections: string[] = ['## Dependencies']

			if (hasPlatform && hasPeers) {
				sections.push(
					'',
					'### Platform',
					'',
					...platformItems,
					'',
					'### Peer Dependencies',
					'',
					...peerItems,
				)
			} else if (hasPlatform) {
				sections.push('', ...platformItems)
			} else {
				sections.push('', ...peerItems)
			}

			return sections.join('\n')
		},
	},
} satisfies Rules
