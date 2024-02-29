<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->

# MDAT Monorepo

<!-- badges { npm: ["mdat"] } -->

[![NPM Package mdat](https://img.shields.io/npm/v/mdat.svg)](https://npmjs.com/package/mdat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- /badges -->

<!-- description -->

**Use comments as dynamic content templates in Markdown files.**

<!-- /description -->

## Overview

MDAT stands for the **Markdown Autophagic Template** system. So-named because of its ouroboros-like approach to expanding comment placeholders in-place.

It turns HTML comments in Markdown files like this:

```md
<!-- title -->
```

Into this:

```md
<!-- title -->

# mdat

<!-- /title -->
```

It uses sets of customizable rules to decide what to replace with what. The rule to generate the title above looks like this:

`rules.ts`

```ts
import type { Rules } from 'remark-mdat'
import { readPackage } from 'read-pkg'

export default {
  title: `# ${(await readPackage()).title}`,
} satisfies Rules
```

The `mdat readme` command bundles over a dozen useful rules for taking care of readme boilerplate, and adding more of your own is as easy as creating additional rules in an `.mdatrc.ts` file.

## Packages

This repository includes two packages:

### [mdat](./packages/mdat/)

<!-- mdat-description -->

_**CLI tool and library implementing the Markdown Autophagic Template (MDAT) system. MDAT lets you use comments as dynamic content templates in Markdown files, making it easy to generate and update readme boilerplate.**_

<!-- /mdat-description -->

This is the best place to get started. **See the [mdat readme file](./packages/mdat/readme.md) for much more information.** It explains how to use mdat comment templates with any Markdown file, how to create your own expansion rule sets, outlines available configuration options, and documents the `mdat readme` which bundles handy rules for expanding common content in readme.md files.

### [remark-mdat](./packages/remark-mdat/)

<!-- remark-mdat-description -->

_**A remark plugin implementing the Markdown Autophagic Template (MDAT) system.**_

<!-- /remark-mdat-description -->

See the [remark-mdat readme file](./packages/remark-mdat/readme.md) for more. It demonstrates how to integrate an mdat template comment expansion step in more complex remark processing pipelines. Lower-level [unified](https://unifiedjs.com) [mdast](https://github.com/syntax-tree/mdast) utility functions are also available in the `remark-mdat` package for surgical work on Markdown ASTs.

## The future

This project will remain under major [version zero](https://semver.org/#spec-item-4) until it's clear that the rule structures and so forth make sense. Breaking changes may be introduced with any point release until 1.0.

## Maintainers

[@kitschpatrol](https://github.com/kitschpatrol)

<!-- footer -->

## Contributing

[Issues](https://github.com/kitschpatrol/mdat/issues) and pull requests are welcome.

## License

[MIT](license.txt) © Eric Mika

<!-- /footer -->
