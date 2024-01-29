function stripUndefined<T>(options: Record<string, T>): Record<string, T> {
	return Object.fromEntries(Object.entries(options).filter(([, value]) => value !== undefined))
}

export function setDefaults<T extends Record<string, unknown>>(
	options: T,
	defaults: T,
): Required<T> {
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return { ...defaults, ...stripUndefined(options ?? {}) } as Required<T>
}

/**
 * Get the sole entry in a record.
 *
 * Useful for working with Rules records
 * that are only supposed to contain a single rule.
 *
 * @param record The record to get the sole entry from
 * @returns The value of the sole entry in the record
 * @throws If there are no entries or more than one entry
 */
export function getSoleRecord<V>(record: Record<string, V>): V {
	const recordValues = Object.values(record)
	if (recordValues.length === 0) {
		throw new Error('Found no entries in a "sole record" record. This should never happen')
	}

	if (recordValues.length > 1) {
		throw new Error('Found multiple entries in "sole record" record. This should never happen')
	}

	return recordValues[0]
}
