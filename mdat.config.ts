import { type MdatReadmeConfig } from './packages/mdat-readme/dist'
import mdatReadmePackage from './packages/mdat-readme/package.json' with { type: 'json' }
import mdatPackage from './packages/mdat/package.json' with { type: 'json' }
import remarkMdatPackage from './packages/remark-mdat/package.json' with { type: 'json' }

export default {
	rules: {
		'mdat-description': () => `_**${mdatPackage.description}**_`,
		'mdat-readme-description': `_**${mdatReadmePackage.description}**_`,
		'remark-mdat-description': `_**${remarkMdatPackage.description}**_`,
	},
} satisfies MdatReadmeConfig
