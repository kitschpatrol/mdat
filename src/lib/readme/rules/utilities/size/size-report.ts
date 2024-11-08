import fs from 'node:fs/promises'
import { promisify } from 'node:util'
import { brotliCompress, gzip } from 'node:zlib'
import prettyBytes from 'pretty-bytes'

const brotliCompressAsync = promisify(brotliCompress)
const gzipCompressAsync = promisify(gzip)

type SizeInfo = {
	bytes: number
	bytesPretty: string
	percent: number
	percentPretty: string
}

export type SizeReport = {
	brotli: SizeInfo
	gzip: SizeInfo
	original: SizeInfo
}

/**
 * Creates a SizeInfo object with formatted values
 * @param bytes - Size in bytes
 * @param originalSize - Original file size for percentage calculation
 */
function createSizeInfo(bytes: number, originalSize: number): SizeInfo {
	const percent = originalSize === 0 ? 0 : ((originalSize - bytes) / originalSize) * 100

	return {
		bytes,
		bytesPretty: prettyBytes(bytes, { maximumFractionDigits: 1 }),
		percent,
		percentPretty: `${Math.round(percent)}%`,
	}
}

/**
 * Analyzes a file's size and its compressed sizes using Brotli and Gzip
 * @param filePath - Path to the file to analyze
 * @returns Promise containing detailed size report
 * @throws Error if file cannot be read or compressed
 */
export async function createSizeReport(filePath: string): Promise<SizeReport> {
	try {
		// Read the file
		const fileContent = await fs.readFile(filePath)
		const originalSize = fileContent.length

		// Compress with brotli and gzip
		const [brotliCompressed, gzipCompressed] = await Promise.all([
			brotliCompressAsync(fileContent),
			gzipCompressAsync(fileContent),
		])

		return {
			brotli: createSizeInfo(brotliCompressed.length, originalSize),
			gzip: createSizeInfo(gzipCompressed.length, originalSize),
			original: createSizeInfo(originalSize, originalSize),
		}
	} catch (error) {
		throw new Error(
			`Failed to analyze file: ${error instanceof Error ? error.message : 'Unknown error'}`,
		)
	}
}
