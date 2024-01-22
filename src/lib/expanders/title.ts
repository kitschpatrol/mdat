import type { Expander } from './index'

const titleFound = 'bla bla bla'

export const title: Expander = {
	getNodes() {
		return [
			{
				children: [
					{
						type: 'text',
						value: titleFound,
					},
				],
				depth: 1,
				type: 'heading',
			},
		]
	},
}
