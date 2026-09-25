import { z } from 'zod'

/**
 * Option schema for the Markdown heading level (1-6) at which a rule emits its
 * section heading. Sub-headings, if any, are nested one level deeper. Rules
 * default to level 3, matching their placement under a level 2 section like
 * "Getting started" in the house readme template.
 */
export const headingLevelSchema = z.number().int().min(1).max(6).optional()

/**
 * The `#` prefix for a Markdown heading, clamped to the maximum level of 6.
 */
export function getHeadingPrefix(level: number): string {
	return '#'.repeat(Math.min(level, 6))
}
