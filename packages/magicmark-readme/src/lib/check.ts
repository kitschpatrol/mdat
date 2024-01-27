import readmeRules from './rules'
import { findPackage, findReadme, setPackageFile } from './utilities'
import { type CheckOptions, type CheckReport, checkFile, checkString } from 'magicmark'
import { type Simplify } from 'type-fest'
import { type SetOptional } from 'type-fest'

// Check a string
export type CheckReadmeStringOptions = Simplify<
	SetOptional<CheckOptions, 'rules'> & {
		packageFile?: string
	}
>
export type CheckReadmeStringReport = {
	packageFile: string
	report: CheckReport
}
export async function checkReadmeString(
	markdown: string,
	options?: CheckReadmeStringOptions,
): Promise<CheckReadmeStringReport> {
	const { meta = true, packageFile = await findPackage(), prefix, rules = [] } = options ?? {}

	// Set package file for the readme rules
	// TODO better way to pass global config to rules?
	setPackageFile(packageFile)

	const report = await checkString(markdown, {
		meta,
		prefix,
		rules: [readmeRules, ...rules],
	})

	return {
		packageFile,
		report,
	}
}

// Check a file
export type CheckReadmeFileOptions = Simplify<
	CheckReadmeStringOptions & {
		readmeFile?: string
	}
>
export type CheckReadmeFileReport = CheckReadmeStringReport & {
	readmeFile: string
}
export async function checkReadmeFile(
	options?: CheckReadmeFileOptions,
): Promise<CheckReadmeFileReport> {
	const {
		meta = true,
		packageFile = await findPackage(),
		prefix,
		readmeFile = await findReadme(),
		rules = [],
	} = options ?? {}

	// Set package file for the readme rules
	// TODO better way to pass global config to rules?
	setPackageFile(packageFile)

	const { report } = await checkFile(readmeFile, {
		meta,
		prefix,
		rules: [readmeRules, ...rules],
	})

	return {
		packageFile,
		readmeFile,
		report,
	}
}
