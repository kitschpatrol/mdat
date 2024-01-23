export type ExpandFileOptions = ExpandStringOptions & {
	name?: string
	output?: PathLike
}
export async function expandFile(sourcePath: PathLike, options: ExpandFileOptions) {
	const { name, output, ...rest } = options

	const markdown = await fs.readFile(sourcePath, 'utf8')
	const expandedMarkdown = await expandString(markdown, rest)
	const outputPath = output ?? sourcePath
	console.log(`TODO name: ${name}`)
	await fs.writeFile(outputPath, expandedMarkdown)
}
