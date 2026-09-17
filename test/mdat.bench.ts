/* eslint-disable test/expect-expect, test/valid-title -- Benchmarks report timings, and bench.compare accepts registrations instead of a title. */

import type { BaselineData, BenchFn, BenchRunOptions } from 'vitest'
import fs from 'node:fs/promises'
import { afterAll, beforeAll, describe, test } from 'vitest'
import {
	check,
	checkString,
	collapse,
	collapseString,
	expand,
	expandString,
	strip,
	stripString,
} from '../src/lib/api'
import { loadConfig } from '../src/lib/config'
import { getContextMetadata, getReadmeMetadata, resetMetadataCaches } from '../src/lib/context'
import { loadAmbientRemarkConfig, resetAmbientRemarkConfigCache } from '../src/lib/utilities'

const baselineFile = new URL('benchmarks/baseline.json', import.meta.url)
// Package managers set this for both scripts, including on Windows.
const updateBaseline = process.env.npm_lifecycle_event === 'bench:baseline'
const baselines = JSON.parse(await fs.readFile(baselineFile, 'utf8')) as Record<
	string,
	BaselineData
>

// Each case gets a regular test context so it can use Vitest 5's bench fixture.
function benchmark(name: string, fn: BenchFn, options: BenchRunOptions = {}) {
	test(name, async ({ bench, task }) => {
		if (updateBaseline) {
			const { latency, period, throughput, totalTime } = await bench('baseline', fn).run(options)
			baselines[task.fullTestName] = { latency, period, throughput, totalTime }
		} else {
			const baseline = baselines[task.fullTestName]
			if (!baseline) {
				throw new Error(`Missing baseline for "${task.fullTestName}". Run pnpm bench:baseline.`)
			}

			await bench.compare(
				bench('current', fn),
				bench.from('baseline', () => baseline),
				options,
			)
		}
	})
}

// Shared fixtures loaded once before benchmarks run
let testDocument: string

// Pre-expand for collapse benchmarks
let expandedDocument: string

beforeAll(async () => {
	testDocument = await fs.readFile('./test/assets/test-document.md', 'utf8')
	const result = await expandString(testDocument, './test/assets/test-rules.ts')
	expandedDocument = result.toString()
})

afterAll(async () => {
	if (updateBaseline) {
		await fs.writeFile(baselineFile, `${JSON.stringify(baselines, undefined, '\t')}\n`)
	}
})

// ---------------------------------------------------------------------------
// Configuration loading
// ---------------------------------------------------------------------------

describe('loadConfig', () => {
	benchmark('defaults', async () => {
		await loadConfig()
	})

	benchmark('with .ts additional config', async () => {
		await loadConfig({ additionalConfig: './test/assets/test-rules.ts' })
	})

	benchmark('with inline config object', async () => {
		await loadConfig({ additionalConfig: { custom: 'inline content' } })
	})
})

describe('loadAmbientRemarkConfig', () => {
	benchmark('cached', async () => {
		await loadAmbientRemarkConfig()
	})

	benchmark('cold', async () => {
		resetAmbientRemarkConfigCache()
		await loadAmbientRemarkConfig()
	})
})

// ---------------------------------------------------------------------------
// String expansion
// ---------------------------------------------------------------------------

describe('expandString', () => {
	benchmark('single comment', async () => {
		await expandString('<!-- title -->')
	})

	benchmark('three comments', async () => {
		await expandString('<!-- title -->\n\n<!-- badges -->\n\n<!-- description -->')
	})

	benchmark('test document with custom rules', async () => {
		await expandString(testDocument, './test/assets/test-rules.ts')
	})

	benchmark('passthrough (no comments)', async () => {
		await expandString('# Just a heading\n\nSome body text with no MDAT comments.')
	})
})

// ---------------------------------------------------------------------------
// String collapse
// ---------------------------------------------------------------------------

describe('collapseString', () => {
	benchmark('expanded document', async () => {
		await collapseString(expandedDocument)
	})

	benchmark('already collapsed (no-op)', async () => {
		await collapseString('<!-- title -->\n\n<!-- badges -->')
	})
})

// ---------------------------------------------------------------------------
// String strip
// ---------------------------------------------------------------------------

describe('stripString', () => {
	benchmark('expanded document', async () => {
		await stripString(expandedDocument)
	})

	benchmark('already stripped (no comments)', async () => {
		await stripString('# Just a heading\n\nSome body text with no MDAT comments.')
	})
})

// ---------------------------------------------------------------------------
// String check
// ---------------------------------------------------------------------------

describe('checkString', () => {
	benchmark('up-to-date document', async () => {
		await checkString(expandedDocument, './test/assets/test-rules.ts')
	})

	benchmark('stale document', async () => {
		await checkString(testDocument, './test/assets/test-rules.ts')
	})
})

// ---------------------------------------------------------------------------
// Expand → collapse round trip
// ---------------------------------------------------------------------------

describe('round trip', () => {
	benchmark('expand then collapse', async () => {
		const expanded = await expandString(testDocument, './test/assets/test-rules.ts')
		await collapseString(expanded.toString())
	})
})

// ---------------------------------------------------------------------------
// File-based operations (readme in project root)
// ---------------------------------------------------------------------------

describe('file operations', () => {
	benchmark(
		'expand',
		async () => {
			await expand()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	benchmark(
		'check',
		async () => {
			await check()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	benchmark(
		'collapse',
		async () => {
			await collapse()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	benchmark(
		'strip',
		async () => {
			await strip()
		},
		{ iterations: 5, warmupIterations: 1 },
	)
})

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

describe('metadata', () => {
	benchmark(
		'getContextMetadata (cold)',
		async () => {
			resetMetadataCaches()
			await getContextMetadata()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	benchmark(
		'getReadmeMetadata (cold)',
		async () => {
			resetMetadataCaches()
			await getReadmeMetadata()
		},
		{ iterations: 5, warmupIterations: 1 },
	)
})

// ---------------------------------------------------------------------------
// Individual readme rules
// ---------------------------------------------------------------------------

describe('rules: standalone', () => {
	benchmark('title', async () => {
		await expandString('<!-- title -->')
	})

	benchmark('badges', async () => {
		await expandString('<!-- badges -->')
	})

	benchmark('banner', async () => {
		await expandString('<!-- banner -->')
	})

	benchmark('short-description', async () => {
		await expandString('<!-- short-description -->')
	})

	benchmark('description (alias)', async () => {
		await expandString('<!-- description -->')
	})

	benchmark('contributing', async () => {
		await expandString('<!-- contributing -->')
	})

	benchmark('license', async () => {
		await expandString('<!-- license -->')
	})

	benchmark('table-of-contents', async () => {
		await expandString(
			'<!-- table-of-contents -->\n\n# One\n## Two A\n### Three A\n## Two B\n### Three B\n#### Four B',
		)
	})

	benchmark('toc (alias)', async () => {
		await expandString(
			'<!-- toc -->\n\n# One\n## Two A\n### Three A\n## Two B\n### Three B\n#### Four B',
		)
	})

	benchmark('code', async () => {
		await expandString('<!-- code({file: "./test/assets/test-rules-json.json"}) -->')
	})

	benchmark('size', async () => {
		await expandString('<!-- size({file: "./test/assets/size-test-file-1.txt"}) -->')
	})

	benchmark('size-table', async () => {
		await expandString(
			'<!-- size-table({files: ["./test/assets/size-test-file-1.txt", "./test/assets/size-test-file-2.txt"]}) -->',
		)
	})
})

describe('rules: compound', () => {
	benchmark('header', async () => {
		await expandString('<!-- header -->')
	})

	benchmark('footer', async () => {
		await expandString('<!-- footer -->')
	})
})
