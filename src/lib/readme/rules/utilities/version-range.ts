const BARE_VERSION_REGEX = /^v?\d+(?:\.\d+){0,2}$/v
const MINIMUM_ONLY_REGEX = /^>=\s*v?(?<version>\d+(?:\.\d+){0,2})$/v
// Versions that act as lower bounds: `>=1.2.3`, `^1.2.3`, `~1.2.3`, or bare `1.2.3`
const LOWER_BOUND_REGEX = /(?:^|[\s\|\(^~]|>=)\s*v?(?<version>\d+(?:\.\d+){0,2})/gv

function compareVersions(a: string, b: string): number {
	const partsA = a.split('.').map(Number)
	const partsB = b.split('.').map(Number)
	for (let index = 0; index < Math.max(partsA.length, partsB.length); index++) {
		const difference = (partsA[index] ?? 0) - (partsB[index] ?? 0)
		if (difference !== 0) {
			return difference
		}
	}

	return 0
}

/**
 * Describe a semver range in plain language for readme prose.
 *
 * @example
 * 	`>=24.16.0` → `24.16.0 or newer`
 * 	`^24.16.0 || >=26.3.0` → `24.16.0 or newer (specifically \`^24.16.0 || >=26.3.0\`)`
 * 	`3.13` → `3.13`
 */
export function describeVersionRange(range: string): string {
	const trimmed = range.trim()

	if (BARE_VERSION_REGEX.test(trimmed)) {
		return trimmed
	}

	const minimumOnly = MINIMUM_ONLY_REGEX.exec(trimmed)?.groups?.version
	if (minimumOnly !== undefined) {
		return `${minimumOnly} or newer`
	}

	const lowerBounds = trimmed
		.matchAll(LOWER_BOUND_REGEX)
		.map((match) => match.groups?.version)
		.filter((version) => version !== undefined)
		.toArray()
		.toSorted(compareVersions)

	const floor = lowerBounds[0]
	return floor === undefined ? `\`${trimmed}\`` : `${floor} or newer (specifically \`${trimmed}\`)`
}
