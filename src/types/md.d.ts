// ?raw suffix for cross-compatibility with vitest
declare module '*.md?raw' {
	const content: string
	export default content
}
