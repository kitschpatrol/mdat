import { deepmerge } from 'deepmerge-ts'

// Discussion:
// https://github.com/RebeccaStevens/deepmerge-ts/discussions/25
// https://github.com/voodoocreation/ts-deepmerge/issues/28
// https://github.com/voodoocreation/ts-deepmerge/releases/tag/6.2.0

// Objects only
// export function stripUndefined<T extends Record<string, unknown>>(object: T): T {
// 	return Object.entries(object)
// 		.map(([k, v]) => [
// 			k,
// 			v && typeof v === 'object' ? stripUndefined(v as Record<string, unknown>) : v,
// 		])
// 		.reduce(
// 			(acc: Record<string, unknown>, [k, v]) =>
// 				v === undefined ? acc : { ...acc, [k as string]: v },
// 			{},
// 		) as T
// }

// Objects + Arrays
export function stripUndefinedDeep<T>(object: T | T[]): T | T[] {
	if (Array.isArray(object)) {
		return object
			.map((v) => (v && typeof v === 'object' ? stripUndefinedDeep(v) : v))
			.filter((v) => v !== undefined) as T[]
	}

	return Object.entries(object as Record<string, unknown>)
		.map(([k, v]) => [k, v && typeof v === 'object' ? stripUndefinedDeep(v) : v])
		.reduce(
			(acc: Record<string, unknown>, [k, v]) =>
				v === undefined ? acc : { ...acc, [k as string]: v },
			{},
		) as T
}

export function deepMergeDefined<T extends Record<string, unknown>>(...objects: T[]): T {
	// Maybe faster to skip stripping the first arg?
	const stripped = objects.map((v, i) => (i === 0 ? v : stripUndefinedDeep<T>(v)))
	return deepmerge(...stripped) as T
}
