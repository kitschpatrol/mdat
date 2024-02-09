import { type Config } from './packages/mdat/dist'
import mdatPackage from './packages/mdat/package.json' with { type: 'json' }
import remarkMdatPackage from './packages/remark-mdat/package.json' with { type: 'json' }

export default {
	rules: {
		'mdat-description': `_**${mdatPackage.description}**_`,
		'remark-mdat-description': `_**${remarkMdatPackage.description}**_`,
	},
} satisfies Config
