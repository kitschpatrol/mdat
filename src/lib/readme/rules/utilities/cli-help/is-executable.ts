/**
 * This file is vendored with modification from https://github.com/sindresorhus/is-executable
 * to work around a "[DEP0176] DeprecationWarning: fs.X_OK is deprecated, use fs.constants.X_OK instead"
 * error from Node.
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const isWindows: boolean = process.platform === 'win32'

const pathExtensions: Set<string> = isWindows
	? new Set(process.env.PATHEXT?.split(';').map((extension) => extension.toLowerCase()) ?? [])
	: new Set()

/**
 * Check if a file is executable (async).
 */
export async function isExecutable(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath, fs.constants.X_OK)
		return isWindows ? pathExtensions.has(path.extname(filePath).toLowerCase()) : true
	} catch {
		return false
	}
}
