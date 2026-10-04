---
name: mdat-plugin-authoring
description: Write custom mdat expansion rules and publishable mdat rule plugins (mdat-plugin-* packages). Use when creating or debugging rule functions for mdat comment placeholders, validating comment arguments, reading project metadata or the Markdown tree inside a rule, building compound rules, or packaging and testing rules for reuse across projects.
license: MIT
---

# Authoring mdat rules and plugins

An mdat rule maps a comment keyword to generated Markdown. A rule plugin is an npm package whose default export is a record of rules. Start with a rule in the project's `mdat.config.ts`. Move it to a plugin package only when more than one project needs it.

## Rule shapes

```ts
import type { Config } from 'mdat'

export default {
  // String: static replacement for <!-- greeting -->
  greeting: 'Hello, world!',
  // Array: compound rule, each entry is itself a rule
  intro: ['# My Project', () => 'Generated description.'],
  // Object: adds processing order
  summary: {
    content: (_options, context) => `Source: ${context.filePath ?? 'unknown'}`,
    order: 1,
  },
  // Function: sync or async
  time: () => new Date().toDateString(),
} satisfies Config
```

The full signature of a content function:

```ts
type Content = (options: JsonValue, context: RuleContext) => Promise<string> | string

type RuleContext = {
  /** File path of the source document, if known. */
  filePath: string | undefined
  /** Parsed YAML frontmatter from the document, if present. */
  frontmatter: Record<string, unknown> | undefined
  /** The full mdast tree of the document. Do not mutate. */
  tree: Root
}
```

## Requirements for a rule

- **Return a non-empty Markdown string.** Empty output is reported as an error. If there is nothing to output, throw an error that says why.
- **Be deterministic.** `mdat check` compares a fresh expansion against the file on disk, so timestamps, random values, and unstable ordering make the check fail on every run.
- **Fail with a clear message.** Thrown errors are reported against the comment that triggered them. Include what was missing and how to fix it.
- **Resolve relative paths deliberately.** The bundled rules resolve file arguments from `process.cwd()`. Use `context.filePath` to resolve relative to the document instead.
- **Do not include the comment tags in the output.** mdat adds the opening and closing tags.

## Keywords

A keyword consists of letters, numbers, `_`, `$`, `-`, and `.`, and cannot start with `/`, `*`, `#`, `-`, or `.`. Prefer kebab-case, e.g. `cli-help`. Pick a specific keyword. A rule with the same keyword as a bundled rule (`title`, `badges`, `install`, `license`, and so on) replaces it.

## Arguments

A comment passes a single JSON5 value: `<!-- keyword({ file: "./a.ts", trim: false }) -->`. A comment without parentheses passes `{}`. Arguments are untrusted input, so validate them. The bundled rules use [Zod](https://zod.dev):

```ts
import type { Config } from 'mdat'
import fs from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'

const optionsSchema = z.object({
  file: z.string(),
  language: z.string().optional(),
})

export default {
  embed: {
    async content(options) {
      const { file, language } = optionsSchema.parse(options)
      const code = await fs.readFile(path.join(process.cwd(), file), 'utf8')
      return `\`\`\`${language ?? path.extname(file).slice(1)}\n${code.trim()}\n\`\`\``
    },
  },
} satisfies Config
```

Prefer an object argument over a bare primitive so options can be added later without breaking existing comments.

## Project metadata

mdat exports helpers so rules do not need to parse `package.json` themselves. Both are memoized and work across ecosystems (Node, Python, Rust, Go, Ruby) via [metascope](https://github.com/kitschpatrol/metascope):

```ts
import { getContextMetadata, getReadmeMetadata } from 'mdat'

// Normalized fields the bundled readme rules use, e.g. name, description,
// repositoryUrl, issuesUrl, license, author, bin, engines, peerDependencies.
// Any field may be undefined.
const { name, repositoryUrl } = await getReadmeMetadata()

// The full metascope metadata context for anything not covered above.
const metadata = await getContextMetadata()
```

See the exported `ReadmeMetadata` type for the complete field list. Call `resetMetadataCaches()` between tests that change project files on disk.

## Headings

Follow the convention of the bundled rules so that readmes stay consistent:

- A rule that generates a section emits its own heading. A rule that generates inline content, like a badge or a code block, has no heading.
- Accept a `heading` option. `true` is the default and emits the rule's standard heading, a string replaces the heading text, and `false` leaves the heading out.
- Accept a `headingLevel` option (`1`-`6`) for the heading's level. Nest any sub-headings one level deeper, whether or not the heading is shown. Default to the level that suits the section's usual place in a readme.

## Order and compound rules

- `order` defaults to `0`. Rules with a higher order run later. Use it when a rule reads content other rules generate. The bundled `table-of-contents` rule uses `order: 1` so that it sees headings produced by other rules.
- A compound rule is an array of rules whose output is joined under one keyword. Its comment takes an array of arguments, one entry per sub-rule in order: `<!-- footer([{ headingLevel: 3 }, { headingLevel: 3 }]) -->`.
- To reuse a rule from another single-rule record inside a compound rule, use `getSoleRule` from `remark-mdat`.

## Packaging a plugin

- Name the package with the `mdat-plugin-` prefix and add the `mdat-plugin` keyword.
- Publish ESM with a default export of the rule record, typed with `satisfies Config`.
- Declare `mdat` as a peer dependency, and as a dev dependency for tests.
- One package may export several related rules.

```json
{
  "name": "mdat-plugin-example",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "keywords": ["mdat", "mdat-plugin"],
  "peerDependencies": {
    "mdat": "^3.0.0"
  }
}
```

Consumers spread the plugin into their config:

```ts
import { defineConfig } from 'mdat'
import example from 'mdat-plugin-example'

export default defineConfig({ ...example })
```

[mdat-plugin-example](https://github.com/kitschpatrol/mdat-plugin-example) is a minimal template repository. [mdat-plugin-cli-help](https://github.com/kitschpatrol/mdat-plugin-cli-help) and [mdat-plugin-tldraw](https://github.com/kitschpatrol/mdat-plugin-tldraw) are fuller examples with arguments and file output.

## Testing

Test rules through the public API with `expandString`, passing the rule record as config:

```ts
import { expandString } from 'mdat'
import { expect, it } from 'vitest'
import plugin from '../src/index'

it('expands the example rule', async () => {
  const result = await expandString('<!-- example -->', plugin)
  expect(result.toString()).toContain('Hello from')
  expect(result.messages.filter((message) => message.fatal)).toHaveLength(0)
})

it('is stable across runs', async () => {
  const first = await expandString('<!-- example -->', plugin)
  const second = await expandString(first.toString(), plugin)
  expect(second.toString()).toEqual(first.toString())
})
```

Also cover invalid arguments. Rule errors are not thrown. They are reported as messages on the returned VFile with `fatal: true`, alongside informational messages for each successful expansion, so assert on the fatal messages in `result.messages`.

To try a rule file against a real document without touching it, run `mdat --config ./my-rules.ts --print some-file.md`.
