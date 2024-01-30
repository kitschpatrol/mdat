import badges from './badges'
import banner from './banner'
import shortDescription from './short-description'
import title from './title'
import { type Rules, getSoleRule } from 'mdat'
import { log } from 'mdat'

// Compound expander for standard readme header boilerplate

async function tryWrap(promise: Promise<string>) {
	try {
		return await promise
	} catch (error) {
		if (error instanceof Error) {
			log.warnPrefixed('Header Rule', error.message)
		}

		return ''
	}
}

export default {
	header: {
		async content() {
			return [
				...(await getSoleRule(title).content()),
				...(await tryWrap(getSoleRule(banner).content())),
				...(await getSoleRule(badges).content()),
				...(await getSoleRule(shortDescription).content()),
			].join('\n')
		},

		order: 0, // Always first
		required: false,
	},
} satisfies Rules
