import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	ignore: ['test/assets/*', 'bin/', '__snapshots__/'],
	ignoreDependencies: ['@types/unist'],
})
