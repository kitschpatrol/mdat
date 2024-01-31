import { type Options as MdatConfig } from 'mdat'
import { z } from 'zod'

export type MdatReadmeConfig = {
	packageFile?: string
	readmeFile?: string
} & MdatConfig

export const configExtensionSchema = z.object({
	packageFile: z.string().optional(),
	readmeFile: z.string().optional(),
})
