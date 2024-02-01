import readmeRules from './rules'
import { findPackage, findReadme } from './utilities'
import { type Options as MdatConfig } from 'mdat'
import { loadConfig } from 'mdat'
import { z } from 'zod'

export type MdatReadmeConfig = {
	packageFile?: string
	readmeFile?: string
} & MdatConfig

const mdatReadmeConfigExtensionSchema = z
	.object({
		packageFile: z.string().optional(),
		readmeFile: z.string().optional(),
	})
	.describe('Mdat Readme Config Extension')

async function getReadmeDefaults(): Promise<MdatReadmeConfig> {
	return {
		addMetaComment: true,
		packageFile: await findPackage(),
		readmeFile: await findReadme(),
		rules: readmeRules,
	}
}

// Convenience loader to always include the default readme config
// Note passing config type to loadConfig parameter plucker
type LoadConfigOptions = Parameters<typeof loadConfig<MdatReadmeConfig>>[0]
export async function loadConfigReadme(options?: LoadConfigOptions): Promise<MdatReadmeConfig> {
	const { additionalConfigsOrRules = [], configExtensionSchema, searchFrom } = options ?? {}
	const readmeDefaultConfig = await getReadmeDefaults()

	const result = await loadConfig<MdatReadmeConfig>({
		additionalConfigsOrRules: [readmeDefaultConfig, ...additionalConfigsOrRules],
		configExtensionSchema:
			configExtensionSchema === undefined
				? mdatReadmeConfigExtensionSchema
				: mdatReadmeConfigExtensionSchema.merge(configExtensionSchema),
		searchFrom, // Unchanged
	})

	return result
}
