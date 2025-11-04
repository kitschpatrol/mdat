import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	ignore: ['test/assets/*', 'bin/', '__snapshots__/'],
	ignoreDependencies: [
		'@types/unist',
		'mdat-plugin-cli-help',
		'mdat-plugin-example',
		'mdat-plugin-tldraw',
	],
})
