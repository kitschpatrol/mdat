import { title } from './title'
// TODO more types
import { type Heading, type Paragraph } from 'mdast'

export type Expander = {
	getNodes: () => [Heading | Paragraph]
}

const expanders: Record<string, Expander> = {
	title,
}

export default expanders
