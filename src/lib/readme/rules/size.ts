import type { Rules } from 'remark-mdat'
import path from 'node:path'
import { z } from 'zod'
import { createSizeReport } from './utilities/size/size-report'

const optionsSchema = z.object({
	compression: z.enum(['none', 'brotli', 'gzip']).optional().default('none'),
	file: z.string(),
})

function getSizeForCompression(
	report: Awaited<ReturnType<typeof createSizeReport>>,
	compression: 'brotli' | 'gzip' | 'none',
): string {
	switch (compression) {
		case 'brotli': {
			return report.brotli.bytesPretty
		}

		case 'gzip': {
			return report.gzip.bytesPretty
		}

		case 'none': {
			return report.original.bytesPretty
		}
	}
}

export default {
	size: {
		async content(options) {
			// Check options, throws if invalid
			const validOptions = optionsSchema.parse(options)

			const fullPath = path.join(process.cwd(), validOptions.file)
			const report = await createSizeReport(fullPath)

			return getSizeForCompression(report, validOptions.compression)
		},
	},
} satisfies Rules
