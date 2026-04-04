import fs from 'node:fs/promises'
import { beforeAll, bench, describe } from 'vitest'
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

// Shared fixtures loaded once before benchmarks run
let testDocument: string

// Pre-expand for collapse benchmarks
let expandedDocument: string

beforeAll(async () => {
	testDocument = await fs.readFile('./test/assets/test-document.md', 'utf8')
	const result = await expandString(testDocument, './test/assets/test-rules.ts')
	expandedDocument = result.toString()
})

// ---------------------------------------------------------------------------
// Configuration loading
// ---------------------------------------------------------------------------

describe('loadConfig', () => {
	bench('defaults', async () => {
		await loadConfig()
	})

	bench('with .ts additional config', async () => {
		await loadConfig({ additionalConfig: './test/assets/test-rules.ts' })
	})

	bench('with inline config object', async () => {
		await loadConfig({ additionalConfig: { custom: 'inline content' } })
	})
})

describe('loadAmbientRemarkConfig', () => {
	bench('cached', async () => {
		await loadAmbientRemarkConfig()
	})

	bench('cold', async () => {
		resetAmbientRemarkConfigCache()
		await loadAmbientRemarkConfig()
	})
})

// ---------------------------------------------------------------------------
// String expansion
// ---------------------------------------------------------------------------

describe('expandString', () => {
	bench('single comment', async () => {
		await expandString('<!-- title -->')
	})

	bench('three comments', async () => {
		await expandString('<!-- title -->\n\n<!-- badges -->\n\n<!-- description -->')
	})

	bench('test document with custom rules', async () => {
		await expandString(testDocument, './test/assets/test-rules.ts')
	})

	bench('passthrough (no comments)', async () => {
		await expandString('# Just a heading\n\nSome body text with no MDAT comments.')
	})
})

// ---------------------------------------------------------------------------
// String collapse
// ---------------------------------------------------------------------------

describe('collapseString', () => {
	bench('expanded document', async () => {
		await collapseString(expandedDocument)
	})

	bench('already collapsed (no-op)', async () => {
		await collapseString('<!-- title -->\n\n<!-- badges -->')
	})
})

// ---------------------------------------------------------------------------
// String strip
// ---------------------------------------------------------------------------

describe('stripString', () => {
	bench('expanded document', async () => {
		await stripString(expandedDocument)
	})

	bench('already stripped (no comments)', async () => {
		await stripString('# Just a heading\n\nSome body text with no MDAT comments.')
	})
})

// ---------------------------------------------------------------------------
// String check
// ---------------------------------------------------------------------------

describe('checkString', () => {
	bench('up-to-date document', async () => {
		await checkString(expandedDocument, './test/assets/test-rules.ts')
	})

	bench('stale document', async () => {
		await checkString(testDocument, './test/assets/test-rules.ts')
	})
})

// ---------------------------------------------------------------------------
// Expand → collapse round trip
// ---------------------------------------------------------------------------

describe('round trip', () => {
	bench('expand then collapse', async () => {
		const expanded = await expandString(testDocument, './test/assets/test-rules.ts')
		await collapseString(expanded.toString())
	})
})

// ---------------------------------------------------------------------------
// File-based operations (readme in project root)
// ---------------------------------------------------------------------------

describe('file operations', () => {
	bench(
		'expand',
		async () => {
			await expand()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	bench(
		'check',
		async () => {
			await check()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	bench(
		'collapse',
		async () => {
			await collapse()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	bench(
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
	bench(
		'getContextMetadata (cold)',
		async () => {
			resetMetadataCaches()
			await getContextMetadata()
		},
		{ iterations: 5, warmupIterations: 1 },
	)

	bench(
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
	bench('title', async () => {
		await expandString('<!-- title -->')
	})

	bench('badges', async () => {
		await expandString('<!-- badges -->')
	})

	bench('banner', async () => {
		await expandString('<!-- banner -->')
	})

	bench('short-description', async () => {
		await expandString('<!-- short-description -->')
	})

	bench('description (alias)', async () => {
		await expandString('<!-- description -->')
	})

	bench('contributing', async () => {
		await expandString('<!-- contributing -->')
	})

	bench('license', async () => {
		await expandString('<!-- license -->')
	})

	bench('table-of-contents', async () => {
		await expandString(
			'<!-- table-of-contents -->\n\n# One\n## Two A\n### Three A\n## Two B\n### Three B\n#### Four B',
		)
	})

	bench('toc (alias)', async () => {
		await expandString(
			'<!-- toc -->\n\n# One\n## Two A\n### Three A\n## Two B\n### Three B\n#### Four B',
		)
	})

	bench('code', async () => {
		await expandString('<!-- code({file: "./test/assets/test-rules-json.json"}) -->')
	})

	bench('size', async () => {
		await expandString('<!-- size({file: "./test/assets/size-test-file-1.txt"}) -->')
	})

	bench('size-table', async () => {
		await expandString(
			'<!-- size-table({files: ["./test/assets/size-test-file-1.txt", "./test/assets/size-test-file-2.txt"]}) -->',
		)
	})
})

describe('rules: compound', () => {
	bench('header', async () => {
		await expandString('<!-- header -->')
	})

	bench('footer', async () => {
		await expandString('<!-- footer -->')
	})
})
