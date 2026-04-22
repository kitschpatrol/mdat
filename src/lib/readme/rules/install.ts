import type { Rules } from 'remark-mdat'
import { getReadmeMetadata } from '../../context'

export default {
	install: {
		async content() {
			const { bin, engines, isPublicNpmPackage, name, runtimePlatform, usesPnpm } =
				await getReadmeMetadata()

			if (name === undefined) {
				throw new Error('Could not find project name')
			}

			const lines: string[] = ['## Install']

			const isNode =
				isPublicNpmPackage || engines?.node !== undefined || runtimePlatform?.includes('node')

			if (isNode) {
				const pmAdd = usesPnpm ? 'pnpm add' : 'npm install'
				const pmx = usesPnpm ? 'pnpx' : 'npx'

				lines.push('', '```sh', `${pmAdd} ${name}`, '```')

				if (bin !== undefined && bin.length > 0) {
					lines.push('', 'Or run it directly:', '', '```sh', `${pmx} ${name}`, '```')
				}
			} else if (runtimePlatform?.some((p) => p.startsWith('python'))) {
				lines.push('', '```sh', `pip install ${name}`, '```')
			} else if (runtimePlatform?.some((p) => p.startsWith('rust'))) {
				lines.push('', '```sh', `cargo install ${name}`, '```')
			} else if (runtimePlatform?.some((p) => p.startsWith('go'))) {
				lines.push('', '```sh', `go install ${name}@latest`, '```')
			} else if (runtimePlatform?.some((p) => p.startsWith('ruby'))) {
				lines.push('', '```sh', `gem install ${name}`, '```')
			} else {
				throw new Error('Could not determine project ecosystem for install instructions')
			}

			return lines.join('\n')
		},
	},
} satisfies Rules
