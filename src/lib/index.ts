export {
	checkFiles,
	checkString,
	collapseFiles,
	collapseString,
	expandFiles,
	expandString,
} from './api'
export { type Config, loadConfig, mergeConfigs } from './config'
export {
	checkReadme,
	checkReadmeFiles,
	checkReadmeString,
	collapseReadme,
	collapseReadmeFiles,
	expandReadme,
	expandReadmeFiles,
	expandReadmeString,
} from './readme/api'
export { loadConfigReadme } from './readme/config'

export { type Rules } from 'remark-mdat'
