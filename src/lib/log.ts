import type { ILogBasic, ILogLayer } from 'lognow'
import { createLogger, getChildLogger, injectionHelper } from 'lognow'
import { setLogger as setLoggerMetascope } from 'metascope'
import { setLogger as setLoggerRemarkMdat } from 'remark-mdat'
import { name } from '../../package.json' with { type: 'json' }

/**
 * The default logger instance for the library.
 */
export let log = createLogger({
	logToConsole: {
		showTime: false,
	},
	name,
})

// Wiring child loggers into dependencies must happen at import time so their
// logs are captured even if the consumer never calls setLogger
// eslint-disable-next-line unicorn/no-top-level-side-effects
setLoggerRemarkMdat(getChildLogger(log, 'remark-mdat'))
// eslint-disable-next-line unicorn/no-top-level-side-effects
setLoggerMetascope(getChildLogger(log, 'metascope'))

/**
 * Set the logger instance for the module. Export this for library consumers to
 * inject their own logger.
 *
 * @param logger - Accepts either a LogLayer instance or a Console- or
 *   Stream-like log target
 */
export function setLogger(logger?: ILogBasic | ILogLayer<unknown>) {
	log = injectionHelper(logger)
	setLoggerRemarkMdat(getChildLogger(log, 'remark-mdat'))
	setLoggerMetascope(getChildLogger(log, 'metascope'))
}
