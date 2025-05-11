import type { Rules } from 'remark-mdat'
import path from 'node:path'
import { z } from 'zod'
import type { SizeReport } from './utilities/size/size-report'
import { createSizeReport } from './utilities/size/size-report'

const fileSchema = z.union([z.string(), z.array(z.string())]).transform((files) =>
	// Normalize to array internally
	Array.isArray(files) ? files : [files],
)

const optionsSchema = z
	.union([
		z.object({
			brotli: z.boolean().optional().default(true),
			file: fileSchema,
			gzip: z.boolean().optional().default(true),
			original: z.boolean().optional().default(true),
			showPercentage: z.boolean().optional().default(false),
		}),
		z.object({
			brotli: z.boolean().optional().default(true),
			files: fileSchema,
			gzip: z.boolean().optional().default(true),
			original: z.boolean().optional().default(true),
			showPercentage: z.boolean().optional().default(false),
		}),
	])
	.transform((options) => {
		// Normalize to using 'files' key internally with array value
		if ('file' in options) {
			const { file, ...rest } = options
			return { files: file, ...rest }
		}

		return options
	})

function formatMarkdownTable(
	reports: Array<[string, SizeReport]>,
	options: {
		brotli: boolean
		gzip: boolean
		original: boolean
		showPercentage: boolean
	},
) {
	// Build header
	const headers: string[] = ['File']
	if (options.original) headers.push('Original')
	if (options.gzip) headers.push('Gzip')
	if (options.brotli) headers.push('Brotli')

	// Build separator
	const separators = headers.map(() => '---')

	// Build rows
	const rows = reports.map(([file, report]) => {
		const row = [path.basename(file)]
		if (options.original) row.push(report.original.bytesPretty)
		if (options.gzip) {
			row.push(
				options.showPercentage
					? `${report.gzip.bytesPretty} (${report.gzip.percentPretty})`
					: report.gzip.bytesPretty,
			)
		}

		if (options.brotli) {
			row.push(
				options.showPercentage
					? `${report.brotli.bytesPretty} (${report.brotli.percentPretty})`
					: report.brotli.bytesPretty,
			)
		}

		return row
	})

	// Combine all parts
	return [
		`| ${headers.join(' | ')} |`,
		`| ${separators.join(' | ')} |`,
		...rows.map((row) => `| ${row.join(' | ')} |`),
	].join('\n')
}

export default {
	'size-table': {
		async content(options) {
			// Check options, throws if invalid
			const validOptions = optionsSchema.parse(options)

			// Now validOptions.files is guaranteed to be an array
			const sizeReports = await Promise.all(
				validOptions.files.map(async (file) => {
					const fullPath = path.join(process.cwd(), file)
					const report = await createSizeReport(fullPath)
					return [file, report] as [string, SizeReport]
				}),
			)

			return formatMarkdownTable(sizeReports, {
				brotli: validOptions.brotli,
				gzip: validOptions.gzip,
				original: validOptions.original,
				showPercentage: validOptions.showPercentage,
			})
		},
	},
} satisfies Rules
