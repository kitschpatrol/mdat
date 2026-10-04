---
name: mdat
description: Use and configure mdat, the Markdown Autophagic Template CLI and library that expands HTML comment placeholders such as `<!-- title -->` in Markdown files. Use when a readme or other Markdown file contains mdat comment placeholders, when editing mdat.config.ts or an "mdat" key in package.json, when generating or updating readme boilerplate from project metadata, when `mdat check` fails, or when calling the mdat TypeScript API.
license: MIT
---

# Using mdat

mdat expands HTML comments in Markdown files into generated content. A comment like `<!-- title -->` is a placeholder. Running `mdat` fills it in from a rule and adds a closing tag:

```md
<!-- title -->

# my-project

<!-- /title -->
```

The comments stay in the file, so the content can be regenerated whenever the underlying data changes.

## Ground rules

- **Never hand-edit content between an opening tag and its closing tag.** It is overwritten on the next run. Change the comment's arguments, the rule, or the project metadata the rule reads from (e.g. `package.json`), then re-run `mdat`.
- **Text outside the tags is ordinary Markdown.** Edit it freely.
- **Re-run `mdat` after any change that affects generated content**, such as editing headings (the table of contents), `package.json` fields, or embedded files. Then confirm with `mdat check`.
- `mdat` rewrites files in place. Do not run it on files with uncommitted work you cannot recover.
- To add a placeholder, write only the opening comment. `mdat` adds the closing tag.
- Comments whose first word is not a known rule keyword are left alone, as are code-style comments like `<!-- // note -->`.

## CLI

If mdat is a project dependency, run it through the package manager (`pnpm mdat`, `npx mdat`). Run `mdat <command> --help` for the full option list.

| Command                 | Effect                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `mdat` or `mdat expand` | Expand placeholders. With no files, expands the closest `readme.md`.                   |
| `mdat check`            | Dry-run. Exits with code 1 if any file has stale or unexpanded content. Good for CI.   |
| `mdat collapse`         | Remove generated content, leaving only the opening comments.                           |
| `mdat strip`            | Remove the mdat comments but keep the generated content.                               |
| `mdat create`           | Create a new readme from a bundled template. Interactive unless `--interactive false`. |

Common options:

- `mdat docs/*.md` processes specific files.
- `--config a.ts b.json` (`-c`) loads additional rule files. Available on `expand` and `check`.
- `--format` (`-f`) formats output with Prettier, which must be installed. If the project formats Markdown with Prettier, pass `--format` to both `mdat` and `mdat check` so they agree.
- `--print` writes to stdout instead of the file.
- `--output` (`-o`) and `--name` (`-n`) write to a different directory or file name.

## Comment arguments

Arguments use function-call syntax with a single [JSON5](https://json5.org) value. Parentheses are required:

```md
<!-- install({ headingLevel: 2, dev: true }) -->
```

Only JSON5 values are accepted. No JavaScript is evaluated. Bundled rules validate their arguments and report an error on unknown shapes.

## Bundled rules

These work without any configuration. They read normalized project metadata, so most also work in Python, Rust, Go, and Ruby projects, not only Node.

| Keyword                                               | Output                                                                            | Options                                                    |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `title`                                               | Project name as a heading.                                                        |                                                            |
| `banner`                                              | A banner image found in the project directory.                                    |                                                            |
| `badges`                                              | npm version, license, CI status, and Git LFS badges.                              | `npm: string[]`, `custom: { [name]: { image, link } }`     |
| `description` (alias `short-description`)             | Project description.                                                              |                                                            |
| `table-of-contents` (alias `toc`)                     | Table of contents from the document headings.                                     | `depth` (default `3`), `headingLevel` (default `2`)        |
| `install` (alias `installation`)                      | Install instructions for consumers of the package. Private packages are rejected. | `headingLevel` (default `3`), `dev`, `homebrew`            |
| `dependencies`                                        | Runtime platform requirements and required peer dependencies.                     | `headingLevel` (default `3`)                               |
| `development-dependencies` (alias `dev-dependencies`) | Tools needed to work on the project, from `devEngines` and `packageManager`.      | `headingLevel` (default `3`)                               |
| `contributing`                                        | Invitation to open issues and pull requests.                                      | `headingLevel` (default `2`)                               |
| `license`                                             | License section.                                                                  | `headingLevel` (default `2`)                               |
| `code`                                                | A code block embedded from a file.                                                | `file` (required), `language`, `trim` (default `true`)     |
| `size`                                                | A file's size.                                                                    | `file` (required), `compression`: `none`, `gzip`, `brotli` |
| `size-table`                                          | A table of file sizes with Gzip and Brotli columns.                               | `files` (required), `precision` (default `0`)              |
| `skills`                                              | Agent Skills found in `skills/<name>/SKILL.md` and how to install them.           | `headingLevel` (default `2`)                               |
| `header`                                              | Compound: `title`, `banner`, `badges`, `short-description`.                       | Array, one entry per sub-rule in order.                    |
| `footer`                                              | Compound: `contributing`, `license`.                                              | Array, one entry per sub-rule in order.                    |

File paths in `code`, `size`, and `size-table` resolve from the current working directory.

## Configuration

Custom rules live in a config file found by [cosmiconfig](https://github.com/cosmiconfig/cosmiconfig). `mdat.config.ts` in the project root is the usual choice. The file default-exports a record whose keys become comment keywords:

```ts
import { defineConfig } from 'mdat'

export default defineConfig({
  // Object form: adds processing order
  date: {
    content: () => new Date().toISOString(),
    order: 1,
  },
  // String: static replacement
  greeting: 'Hello, world!',
  // Function: sync or async, receives the comment's arguments, e.g. <!-- repeat(3) -->
  repeat: (options) => 'ha'.repeat(Number(options)),
})
```

- A rule must return non-empty Markdown. Empty content and thrown errors are reported as errors.
- Custom rules merge with the bundled rules. A custom rule with the same keyword as a bundled rule replaces it.
- With multiple config files, the last rule for a keyword wins, and `--config` files take precedence over discovered config.
- JSON files work as rule sets. Nested keys are flattened into dot-notated keywords, so `{ "a": { "b": "x" } }` provides `<!-- a.b -->`.
- `package.json` can hold rules under an `"mdat"` key, or name a shared config package: `"mdat": "@scope/mdat-config"`.
- Rules from a plugin package are spread into the config: `defineConfig({ ...examplePlugin })`.

For rules that take validated arguments, read the document tree, or are shared across projects, use the `mdat-plugin-authoring` skill if it is available.

## Library API

```ts
import { check, expand, expandString } from 'mdat'
import { write } from 'to-vfile'

// Returns VFiles. Writing is the caller's responsibility.
const [file] = await expand('readme.md')
await write(file)

const result = await expandString('<!-- title -->')
console.log(result.toString())
```

- `expand`, `collapse`, `strip`, and `check` take file paths. With no files they find the closest readme.
- `expandString`, `collapseString`, `stripString`, and `checkString` take Markdown strings.
- `create` and `createInteractive` create a readme from a bundled template.
- `loadConfig` discovers and merges config. `defineConfig` and `mergeConfig` build config objects.

## Troubleshooting

- **A comment is not expanding.** The keyword does not match a loaded rule. Check spelling, confirm the config file is discovered or passed with `--config`, and run with `--verbose`.
- **`mdat check` fails.** Run `mdat` (with `--format` if the check used it) and commit the result. If it still fails, the rule output is non-deterministic, e.g. a timestamp.
- **Arguments are ignored or rejected.** Use parentheses: `<!-- keyword({ key: "value" }) -->`. The 1.x form without parentheses is no longer supported.
- **Old commands.** `mdat readme` is now `mdat`, `mdat readme init` is `mdat create`, and `mdat readme check` is `mdat check`. The `--rules`, `--assets`, `--package`, `--meta`, and `--prefix` options were removed in favor of `--config`.
