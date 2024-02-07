import readmeRules from './rules'
import { findPackage, findReadme } from './utilities'
import { type MdatConfig, loadConfig } from 'mdat'
import { z } from 'zod'

export type MdatReadmeConfig = {
	assetsPath?: string
	packageFile?: string
	readmeFile?: string
} & MdatConfig

const mdatReadmeConfigExtensionSchema = z
	.object({
		assetsPath: z.string().optional(),
		packageFile: z.string().optional(),
		readmeFile: z.string().optional(),
	})
	.describe('Mdat Readme Config Extension')

async function getReadmeDefaults(): Promise<MdatReadmeConfig> {
	return {
		addMetaComment: true,
		assetsPath: './assets',
		packageFile: await findPackage(),
		readmeFile: await findReadme(),
		rules: readmeRules,
	}
}

// Convenience loader to always include the default readme config
// Note passing config type to loadConfig parameter plucker, and zod schema to
// represent the additional keys in mdat-readme specific configuration files
type LoadConfigOptions = Parameters<typeof loadConfig<MdatReadmeConfig>>[0]
export async function loadConfigReadme(options?: LoadConfigOptions): Promise<MdatReadmeConfig> {
	const { additionalConfig = [], configExtensionSchema, ...rest } = options ?? {}
	const readmeDefaultConfig = await getReadmeDefaults()
	const additionalConfigArray = Array.isArray(additionalConfig)
		? additionalConfig
		: [additionalConfig]

	const result = await loadConfig<MdatReadmeConfig>({
		additionalConfig: [readmeDefaultConfig, ...additionalConfigArray],
		configExtensionSchema:
			configExtensionSchema === undefined
				? mdatReadmeConfigExtensionSchema
				: mdatReadmeConfigExtensionSchema.merge(configExtensionSchema),
		...rest,
	})

	return result
}
