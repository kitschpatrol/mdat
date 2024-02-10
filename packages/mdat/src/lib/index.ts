export {
	checkFiles,
	checkString,
	collapseFiles,
	collapseString,
	expandFiles,
	expandString,
} from './api'
export { type Config, loadConfig } from './config'
export {
	checkReadmeFiles,
	checkReadmeString,
	collapseReadmeFiles,
	expandReadmeFiles,
	expandReadmeString,
} from './readme/api'
export { loadConfigReadme } from './readme/config'

export { type Rules, deepMergeDefined as mergeConfigs } from 'remark-mdat'
