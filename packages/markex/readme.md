Sacreliege. Not a Good Idea.

A package definition file (e.g. a `package.json`) is the canonical "single source of truth" for a project's metadata. Yet fragments of this metadata end up duplicated elsewhere, most prominently in the readme.

You could set up a template pipeline to generate your readme, but then you have a third file to deal with the clutter of a second half-baked readme in template form in your repo.

`mdex` solves this tedium by committing a minor sacrilege: It allows comments in markdown files to become placeholders for dynamic content. When `mdex` is run against the file, specific comments are expanded with content from elsewhere, the file is updated in-situ.

`mdex` itself is designed to flexibly specify comment templates and their replacement contents, but it comes out of the box with a preset for its most likely use-case: synchronizing `package.json` metadata to your readme.

Add a placeholder or two to your `readme.md`, for example:

```md
<!-- title -->
```

Run `mdex readme`

And behold:

```md
<!-- title -->

# Your Package Name

<!-- /title -->
```

Subsequent executions of `mdex readme` will re-populate the placeholder sections with the latest `package.json` data.

## Usage

### Cli

mdex readme.md --preset readme

mdex readme.md --preset readme --lint

Alternately, you can use a command that acts as a shortcut to apply the built-in "readme" preset, which searches up for the closest `package.json`, finds an adjacent `readme.md`, and populates any comment placeholders in the readme according to the expansion rules in the [preset]().

_Caution: This will write changes directly to readme.md!._

```sh
mdex readme
```

```sh
mdex ./readme.md --preset readme --meta
```

If you want to check the validity of your `readme.md` against the preset rules, you can run the command with the `--lint` flag instead to print a report without touching the file:

```sh
mdex readme --lint
```

This is roughly the equivalent of:

```sh
mdex readme.md --preset readme --lint
```

| Option               | Alias | Description Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--preset <string>`  | `-p`  | Use a bundled set of expansion rules. Currently `readme` is the only option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--rules <string..>` | `-r`  | Path to .js or .ts files with expansion rules. These files must provide an ESM-style default export of a record object containing the expansion rules you'd like to apply. These may stand on their own, or if `--preset` is also provided they can either override or interleave with the preset rule set. If rules are used in addition to a preset, the rules are merged, and the merged set of rules are applied to the document according to their `applicationOrder` field. If a `--rules` provides a rule with a `keyword` field that conflicts with a `keyword` in the preset, then the passed-in rule wins. |
| `--output <string>`  | `-o`  | Output file directory. By default, the folder from which `mdex` is invoked is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--name <string>`    | `-n`  | Output file name. By default the input file name is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--print`            |       | Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--prefix <string>`  |       | Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-mdex comments in your markdown file, or if you're willing to trade some verbosity for safety.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--lint`             |       | Validate the file against any expansion rules in `--preset` and / or `--rules`. Ignores `--output`, `--name`,`--meta`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--meta`             | `-m`  | Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--verbose`          |       | Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Library

### Roadmap

- Support .json rules.
- Additional presets
