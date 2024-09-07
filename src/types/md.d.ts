// ?raw suffix for cross-compatibility with vitest
declare module '*.md?raw' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const content: string
	export default content
}
