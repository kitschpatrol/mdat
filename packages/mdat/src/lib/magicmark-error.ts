import { type Rules } from './rules'

export default class MdatError extends Error {
	constructor(
		message: string,
		public severity: 'error' | 'info' | 'warning' = 'error',
		public category:
			| 'empty'
			| 'markdown'
			| 'meta'
			| 'order'
			| 'required'
			| 'rules'
			| 'unknown'
			| 'unused' = 'unknown',
		public documentLine?: number | undefined,
		public relatedRules?: Rules | undefined,
	) {
		super(message)
		this.name = 'MdatError'

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, MdatError)
		}
	}
}
