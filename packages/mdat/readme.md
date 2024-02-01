<!-- title -->

# mdat

<!-- /title -->

<!-- table-of-contents -->

## Table of contents

- [Usage](#usage)
  - [CLI](#cli)
  - [Library](#library)
  - [Roadmap](#roadmap)

<!-- /table-of-contents -->

Sacrilege. Not a Good Idea.

A package definition file (e.g. a `package.json`) is the canonical "single source of truth" for a project's metadata. Yet fragments of this metadata end up duplicated elsewhere, most prominently in the readme.

You could set up a template pipeline to generate your readme, but then you have a third file to deal with the clutter of a second half-baked readme in template form in your repo.

`mdat` solves this tedium by committing a minor sacrilege: It allows comments in markdown files to become placeholders for dynamic content. When `mdat` is run against the file, specific comments are expanded with content from elsewhere, the file is updated in-situ.

`mdat` itself is designed to flexibly specify comment templates and their replacement contents, but it comes out of the box with a preset for its most likely use-case: synchronizing `package.json` metadata to your readme.

Add a placeholder or two to your `readme.md`, for example:

```md
<!-- title -->
```

Run `mdat readme`

And behold:

```md
<!-- title -->

# Your Package Name

<!-- /title -->
```

Subsequent executions of `mdat readme` will re-populate the placeholder sections with the latest `package.json` data.

## Usage

### CLI

mdat readme.md --preset readme

mdat readme.md --preset readme --lint

Alternately, you can use a command that acts as a shortcut to apply the built-in "readme" preset, which searches up for the closest `package.json`, finds an adjacent `readme.md`, and populates any comment placeholders in the readme according to the expansion rules in the [preset](https://www.example.com/TODO).

_Caution: This will write changes directly to readme.md!._

```sh
mdat readme
```

```sh
mdat expand ./readme.md --rules readme --meta
```

If you want to check the validity of your `readme.md` against the preset rules, you can run the command with the `--lint` flag instead to print a report without touching the file:

```sh
mdat readme --lint
```

This is roughly the equivalent of:

```sh
mdat expand readme.md --rules readme --lint --meta
```

| Option               | Alias | Description Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--rules <string..>` | `-r`  | Path to .js or .ts files with expansion rules. These files must provide an ESM-style default export of a record object containing the expansion rules you'd like to apply. (See the `mdat` project readme for more details.) These may stand on their own, or if `--preset` is also provided they can either override or interleave with the preset rule set. If both `--preset` and `--rules` are present, their rules are merged, and the merged set of rules is applied to the document according to their `applicationOrder` field. If `--rules` provides a rule with a `keyword` field that conflicts with a `keyword` in the preset, then the `--rules` take precedent over the `--preset`. |
| `--output <string>`  | `-o`  | Output file directory. By default, the folder from which `mdat` is invoked is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--name <string>`    | `-n`  | Output file name. By default the input file name is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--print`            |       | Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--prefix <string>`  |       | Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-mdat comments in your markdown file, or if you're willing to trade some verbosity for safety.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--check`            |       | Validate the file against any expansion rules in `--preset` and / or `--rules`. Ignores `--output`, `--name`,`--meta`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--meta`             | `-m`  | Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--verbose`          |       | Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Library

### Roadmap

- Additional rule presets
- Auto-fix lint errors