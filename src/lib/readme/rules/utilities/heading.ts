import { z } from 'zod'

const MAX_HEADING_LEVEL = 6

/**
 * Option schema for the Markdown heading level (1-6) at which a rule emits its
 * section heading. Sub-headings, if any, are nested one level deeper, whether
 * or not the section heading itself is shown. Each rule's default matches its
 * placement in the house readme template.
 */
export const headingLevelSchema = z.number().int().min(1).max(MAX_HEADING_LEVEL).optional()

/**
 * Option schema for a rule's section heading. `true` (the default) emits the
 * rule's standard heading, `false` leaves the heading out, and a string
 * replaces the heading text.
 */
export const headingSchema = z.union([z.boolean(), z.string().trim().min(1)]).optional()

/**
 * The `#` prefix for a Markdown heading, clamped to the maximum level of 6.
 */
export function getHeadingPrefix(level: number): string {
	return '#'.repeat(Math.min(level, MAX_HEADING_LEVEL))
}

/**
 * The lines of a rule's section heading, including the blank line separating it
 * from the section body, or no lines if the heading is suppressed.
 *
 * @param heading - Value of the rule's `heading` option
 * @param level - Markdown heading level
 * @param defaultText - Heading text used unless `heading` overrides it
 */
export function getHeadingLines(
	heading: boolean | string | undefined,
	level: number,
	defaultText: string,
): string[] {
	if (heading === false) {
		return []
	}

	const text = typeof heading === 'string' ? heading : defaultText
	return [`${getHeadingPrefix(level)} ${text}`, '']
}
