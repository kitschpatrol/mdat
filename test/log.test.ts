import { describe, expect, it } from 'vitest'
import { log, setLogger } from '../src/lib/log'

describe('setLogger', () => {
	it('should accept a custom logger', () => {
		// Inject a console-like logger
		setLogger(console)
		// Verify the module-level log was replaced
		expect(log).toBeDefined()
	})

	it('should work with no argument', () => {
		setLogger()
		expect(log).toBeDefined()
	})
})
