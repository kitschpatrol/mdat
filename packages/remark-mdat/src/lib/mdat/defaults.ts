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
