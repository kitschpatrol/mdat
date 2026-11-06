# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

(Node.js support requirements have sometimes increased in minor or patch releases.)

## [3.6.7] - 2026-11-01

### Fixed

- Resolve project directories as filesystem paths and search banner locations independently so platform separators, glob characters, and search depth do not prevent image discovery.

### Maintenance

- Refresh declared dependencies and dependency-update automation, build before lint/fix commands, and simplify contributor configuration.

## [3.6.6] - 2026-10-27

### Documentation

- Update generated skill installation guidance to recommend `pnpm approve` with pnpm 12.11 or newer while retaining skills CLI alternatives.

### Maintenance

- Replace prepare-time skills synchronization with pnpm-managed skill linking and simplify published directory patterns.
- Refresh runtime/build/test dependencies and add tslib as a temporary workaround for contributor eslint-mdx tooling.

## [3.6.5] - 2026-10-19

### Maintenance

- Update the Metascope requirement to 0.13.5 with upstream fixes.

## [3.6.4] - 2026-10-19

### Fixed

- Update Metascope to the 0.13.3 requirement to incorporate license-detection fixes.

## [3.6.3] - 2026-10-19

### Fixed

- Escape underscores and other special characters correctly in static license badge labels.

### Documentation

- Document JSON/YAML metadata fallbacks for projects without manifests and clarify 1.x, 2.x, and 3.x migration/plugin compatibility.
- Mention shared-config in generated contribution guidance only when installed, and improve missing-description/issue-tracker diagnostics for multiple metadata sources.

### Maintenance

- Refresh dependencies and release/CI/update workflows, and add metadata-file precedence and fallback regression tests.

## [3.6.2] - 2026-10-06

### Maintenance

- Refresh runtime/contributor dependencies and stabilize readme-rule tests in CI.
- Add scheduled dependency-update automation and synchronize contributor Agent Skills during repository preparation.

## [3.6.1] - 2026-10-04

### Fixed

- Use consistent forward-slash relative paths in invalid-skill diagnostics across platforms.

### Documentation

- Clarify the project description, update the flow diagram for Metascope metadata, and explain the MDAT name.

### Maintenance

- Fix badge tests and CI installation configuration.

## [3.6.0] - 2026-10-04

### Added

- Add a `heading` option to section rules for custom heading text or suppressing headings while retaining nested heading levels.
- Extend badges with VS Code Marketplace, Homebrew, GitHub release, npm downloads, Obsidian downloads, and bundle-size badges.
- Allow individual badges to be hidden or required, reporting missing metadata for explicitly requested badges and supporting package/formula overrides.

### Changed

- **Breaking:** Reject empty npm badge package lists; use `npm: false` instead of `npm: []` to hide the version badge.

### Documentation

- Document heading/badge options and revise generated skill guides with first-sentence descriptions, linked subheadings, and global installation commands.

### Maintenance

- Refresh Metascope, shared configuration, and CLI-help plugin requirements and simplify lint exceptions.

## [3.5.0] - 2026-10-03

### Added

- Add a `skills` rule that discovers Agent Skills, validates their frontmatter, links their descriptions, and generates installation guidance.
- Automatically insert a skills placeholder when creating a readme for a project containing skills.
- Add `installation` as an alias for the install rule.

### Documentation

- Bundle Agent Skills for using mdat and authoring rule plugins in the published package.
- Document mdat-plugin-api and update Standard Readme templates with generated installation/dependency sections and corrected code-rule examples.

### Maintenance

- Refresh dependencies and fix repository rule configuration and test snapshots for CI.

## [3.4.1] - 2026-09-26

### Documentation

- Clarify the generated installation introduction for packages offering both CLI and library usage.

## [3.4.0] - 2026-09-26

### Added

- Add `headingLevel` controls to bundled section rules, including installation, dependencies, contributing, license, and tables of contents.
- Add installation options for development dependencies and explicit or suppressed Homebrew formulas.

### Changed

- Generate installation sections appropriate to CLI-only, library-only, and combined Node packages; detect Homebrew formulas and reject private packages.
- **Breaking:** Set supported Node.js versions to `^24.16.0 || >=26.3.0`.

### Fixed

- Replace compound-rule arrays during configuration merging instead of concatenating them and duplicating generated content.

### Documentation

- Improve generated installation/dependency guidance with npm commands, readable version ranges, OS names, and required peers; use generated getting-started sections in house templates.

### Maintenance

- Refresh contributor Node.js types and pnpm configuration.

## [3.3.0] - 2026-09-23

### Changed

- Ignore HTML comments whose keywords do not match configured MDAT rules through the remark-mdat 3.1 update.

### Maintenance

- Correct sitemap-discovery error capture in CI and remove obsolete dependency overrides and installation exceptions.

## [3.2.2] - 2026-09-21

### Added

- Support installing the CLI through the `kitschpatrol/tap/mdat` Homebrew formula.

### Documentation

- Add the Homebrew installation command to the readme.

### Maintenance

- Add brewpub to release automation and refresh runtime/contributor dependencies.

## [3.2.1] - 2026-09-17

### Documentation

- Document benchmark comparison and baseline refresh commands for Vitest 5, including filtered runs.

### Maintenance

- Build CLI and library entry points together so they share implementation output.
- Refresh dependencies and workflow actions, migrate to pnpm 12 and Vitest 5, and adapt benchmark registration and baseline persistence.

## [3.2.0] - 2026-09-02

### Added

- Add a `precision` option to `size-table`, defaulting displayed sizes to zero decimal places.

### Maintenance

- Refresh declared dependencies and overrides and update release authentication and website sitemap checking.

## [3.1.0] - 2026-08-05

### Added

- Detect Git LFS usage and include a Git LFS badge automatically.
- Add `development-dependencies` and `dev-dependencies` rules for development runtimes and package managers from `devEngines` and `packageManager`.

### Documentation

- Document the new metadata rules and correct repository/source links.

### Maintenance

- Refresh dependencies, retain Jiti loading with cosmiconfig 10, and add contributor editor tasks.
- Fix Windows CI tests and repository link checks and simplify release workflow automation.

## [3.0.0] - 2026-07-24

### Changed

- **Breaking:** Require Node.js 24.16.0 or newer.

### Fixed

- Use canonical npm package URLs in generated badges to avoid redirects.

### Maintenance

- Add scheduled repository/website link checks and refresh CI actions.
- Refresh runtime/contributor dependencies, adopt TypeScript 6, and update lint/build configuration.

## [2.3.6] - 2026-06-11

### Maintenance

- Refresh declared runtime/development dependencies and pnpm.
- Declare the repository root as a workspace package so local mdat tooling resolves correctly and restore Markdown checks in lint scripts.

## [2.3.5] - 2026-05-17

### Fixed

- Handle proprietary or unrecognized license files without failing metadata resolution, leaving unavailable license URLs undefined.

### Maintenance

- Add proprietary-license regression coverage and refresh contributor dependencies and development runtime requirements.

## [2.3.4] - 2026-05-17

### Maintenance

- Roll contributor TypeScript back to 5.9, pin fflate for type-validation tooling compatibility, and refresh Metascope.

## [2.3.3] - 2026-05-16

### Fixed

- Read detected license URLs from Metascope's updated license-match structure.

### Maintenance

- Refresh dependencies and workflow actions, migrate contributor installs to pnpm 11, and update build-permission configuration.

## [2.3.2] - 2026-04-30

### Fixed

- Restore metadata processing with Zod 4.4 by updating Metascope to the 0.7.2 requirement.

### Maintenance

- Refresh prompt, remark-mdat, and Zod requirements.

## [2.3.1] - 2026-04-28

### Fixed

- Use Metascope's detected SPDX license URL for license badges instead of synthesizing a URL.

### Maintenance

- Refresh contributor configuration, rule plugins, and build dependencies.

## [2.3.0] - 2026-04-22

### Added

- Add an `install` rule generating ecosystem-specific installation instructions and direct-run commands for CLI packages.
- Add a `dependencies` rule documenting runtime requirements, operating systems, and peer dependencies.
- Link the author name in generated license sections when an author URL is available.

### Fixed

- Respect private package metadata when deciding whether to generate npm badges.

### Documentation

- Document the new rules, revise generated contribution guidance, and expand related-project references.

### Maintenance

- Refresh dependencies, move contributor TypeScript to version 6, and update installation and release workflows.

## [2.2.1] - 2026-04-07

### Fixed

- Disable recursive Metascope scanning so project metadata does not include nested projects.

### Maintenance

- Refresh Metascope, logging, contributor tooling, and test dependencies.

## [2.2.0] - 2026-04-03

### Added

- Add `checkString` and per-tag diagnostics identifying stale or unexpanded content in checking APIs and CLI output.

### Fixed

- Validate template names and report available choices instead of failing on an undefined template.

### Documentation

- Correct checking API return descriptions and document per-tag diagnostics.

### Maintenance

- Expand API/rule/configuration tests, add V8 coverage reporting, and fix Windows CI through the development tldraw plugin update.

## [2.1.0] - 2026-04-03

### Added

- Add the `strip` command and `strip`/`stripString` APIs to remove MDAT tags while preserving their content.

### Documentation

- Document stripping generated documents and clarify expansion/collapse API behavior.

### Maintenance

- Update Metascope, remark-mdat, and shared contributor configuration.

## [2.0.1] - 2026-04-02

### Added

- Export `resetMetadataCaches` for refreshing cached project metadata between operations.

### Changed

- Cache configuration, metadata, and formatter discovery and process files concurrently to reduce repeated expansion work.
- Skip ambient remark lint and link-validation plugins during Markdown processing.
- **Breaking:** Replace `ReadmeMetadata.repositoryOwner` with a normalized `repositoryUrl` field.
- Simplify CLI log prefixes and report stale check results as warnings while keeping successful checks quiet by default.

### Fixed

- Normalize Windows CRLF line endings before checking whether generated content is current.
- Build CI badge URLs from the actual repository URL rather than the package name.

### Maintenance

- Add benchmark suites and baseline scripts, restore repository rule plugins, and refresh declared dependencies.

## [2.0.0] - 2026-04-01

### Added

- Add `--format`/`-f` and API formatting options using local Prettier configuration, with Prettier 3 as an optional peer dependency.
- Generate readme content from cross-ecosystem Metascope metadata and expose `getContextMetadata`, `getReadmeMetadata`, and `ReadmeMetadata` for plugins.
- Automatically include a CI badge when a GitHub Actions workflow named CI is detected.
- Export `setLogger` so library consumers can supply their own logger.

### Changed

- **Breaking:** Flatten the CLI: replace `mdat readme` with the default `mdat` workflow and rename `mdat readme init` to `mdat create`.
- **Breaking:** Replace file/readme-specific library exports with unified `expand`, `collapse`, `check`, `create`, and `createInteractive` APIs; remove the old `checkString` interface.
- **Breaking:** Make configuration a flat record of rules, include bundled readme rules by default, add `defineConfig`, and rename `mergeConfigs` to `mergeConfig`.
- **Breaking:** Require parenthesized function-call syntax for comment arguments.
- **Breaking:** Pass a `RuleContext` instead of a raw AST to rule functions and rename processing priority from `applicationOrder` to `order`.
- **Breaking:** Redefine `check` as a dry-run expansion comparison returning per-file sync status, with CLI exit code 1 for stale content.
- **Breaking:** Discover README variants in the current directory instead of searching ancestor directories, and create new readmes in the current directory by default.
- **Breaking:** Require Node.js 22.17.0 or newer.
- Reduce normal CLI logging and expose detailed configuration and timing output through verbose logging.

### Removed

- **Breaking:** Remove `--assets`, `--package`, `--meta`, `--prefix`, and `--rules`; load additional rule records through `--config`/`-c`.
- **Breaking:** Remove required-placeholder validation, document-order constraints, configurable comment delimiters, and generation metadata comments.

### Documentation

- Rewrite CLI/API/configuration examples and add a 1.x migration guide covering the new commands, rule shape, metadata sources, and argument syntax.

### Maintenance

- Migrate to remark-mdat 2, Zod 4, and lognow; refresh build/test/CI tooling and stop bundling CLI dependencies.

## [1.4.2] - 2026-03-31

### Maintenance

- Add build/lint/test CI and tighten workflow action pinning, credentials, and permissions.
- Implement defined-value merging locally with tests, refresh dependencies, and make configuration snapshots portable in CI.

## [1.4.1] - 2026-03-05

### Fixed

- Work around Jiti's lazy Babel loading failure in the bundled CLI so TypeScript configurations can load.

### Maintenance

- Update tsdown and interactive prompt dependencies.

## [1.4.0] - 2026-03-02

### Added

- Add the code rule's `trim` option, trimming embedded source by default while allowing `trim: false` to preserve whitespace.

### Documentation

- Clarify the AutoMD comparison in the related-projects section.

### Maintenance

- Bundle CLI dependencies, leave library output unminified, declare side-effect-free packaging, and refresh dependencies and workflow actions.

## [1.3.5] - 2026-02-23

### Fixed

- Escape hyphens in license badge labels correctly for shields.io.
- Honor `--name` and `--output` in both collapse commands.
- Avoid extra spaces when title-casing names with consecutive delimiters.
- Reset cached configuration and package metadata on each configuration load to prevent stale results between operations.
- Respect readme initialization's `expand` and `overwrite` options.
- Handle missing package names and package-file paths safely in banner generation and readme CLI logging.
- Correct zero-padding width for numbered multi-file outputs.
- Fall back to an empty remark configuration after loading errors and report failures through the configured logger.
- Preserve the public `Rules` type name in generated declarations.

### Documentation

- Correct malformed CLI/API examples and readme wording, and add AutoMD to related projects.

### Maintenance

- Modernize package exports and distribution layout, stop bundling runtime dependencies, and refresh dependencies and package validation tooling.
- Broaden API/rule/CLI test coverage and use asynchronous output-directory creation.

## [1.3.4] - 2026-01-19

### Maintenance

- Refresh runtime/build/test dependencies and update contributor editor configuration.

## [1.3.3] - 2025-12-08

### Maintenance

- Refresh declared dependencies and move pnpm hoisting configuration into `pnpm-workspace.yaml` to restore contributor tooling resolution.

## [1.3.2] - 2025-11-25

### Added

- Allow `npm: []` to suppress npm badges and explicit package lists to replace the automatically detected package.

### Maintenance

- Update shared contributor configuration.

## [1.3.1] - 2025-11-25

### Fixed

- Show npm version badges for unscoped packages without requiring explicit public publish configuration.

### Maintenance

- Refresh type definitions and contributor build/test dependencies.

## [1.3.0] - 2025-11-12

### Added

- Accept custom metadata-comment text through `addMetaComment` and the `--meta`/`-m` CLI options, alongside boolean enable/disable values.

### Fixed

- Apply configuration precedence consistently so discovered settings override readme defaults and explicit configuration/CLI values take final precedence.

### Documentation

- Document custom metadata comments and clarify plugin definitions.

### Maintenance

- Refresh runtime, build, and shared-configuration dependencies.

## [1.2.3] - 2025-11-07

### Maintenance

- Override `normalize-package-data` in repository installs to avoid `url.parse()` deprecation warnings, and refresh development dependencies.

## [1.2.2] - 2025-11-05

### Fixed

- Preserve the library's `.js` output extension so package entry points resolve correctly.

## [1.2.1] - 2025-11-05

### Fixed

- Preserve the CLI's `.js` output extension so the published executable matches its package bin path.

### Maintenance

- Update tsdown and contributor dependencies and configure the repository's extracted rule plugins explicitly.

## [1.2.0] - 2025-11-03

### Removed

- **Breaking:** Remove bundled `cli-help`/`cli` and `tldraw` rules; install and configure `mdat-plugin-cli-help` and `mdat-plugin-tldraw` separately.

### Documentation

- Add plugin installation, configuration, and authoring guides with an example plugin.

### Maintenance

- Refresh declared dependencies and update release authentication tooling.

## [1.1.0] - 2025-09-29

### Changed

- **Breaking:** Require Node.js 20.19.0 or newer.

### Maintenance

- Migrate builds from tsup to tsdown while retaining tsc declaration generation, and refresh runtime/contributor dependencies.

## [1.0.4] - 2025-09-01

### Fixed

- Avoid Node.js `fs.X_OK` deprecation warnings when checking CLI executables.

### Maintenance

- Refresh dependencies and replace `pkg-dir` with `package-directory`.

## [1.0.3] - 2025-09-01

### Maintenance

- Update the GitHub metadata synchronization action to v3.
- Refresh declared dependencies and add a Yanki CLI help parsing fixture.

## [1.0.2] - 2025-05-11

### Maintenance

- Replace Chalk with picocolors, refresh runtime/development dependencies, and update affected tests and snapshots.

## [1.0.1] - 2025-03-04

### Changed

- Remove the package's pnpm engine requirement.

### Documentation

- Clarify that mdat provides a TypeScript library and correct the package repository URL.

### Maintenance

- Refresh declared runtime and shared-configuration dependencies.

## [1.0.0] - 2025-03-01

### Added

- Export the `expandReadme`, `collapseReadme`, and `checkReadme` convenience functions.

### Changed

- **Breaking:** Set supported Node.js versions to `^18.19.0 || >=20.11.0`.

### Fixed

- Resolve package-local executables when a CLI help command is unavailable on PATH.

### Documentation

- Correct library usage examples, rule definitions, and starter-template code blocks.

### Maintenance

- Migrate contributor tooling to shared-config 5 and pnpm 10, update lint configuration, and refresh runtime/build/test dependencies.

## [0.10.0] - 2025-02-02

### Added

- Apply ambient remark configuration from `.remarkrc` files or `package.json` to Markdown expansion, checking, and collapse operations.

### Documentation

- Explain how ambient remark settings affect generated Markdown and preserve GitHub alert examples.

### Maintenance

- Refresh build/release tooling and add the dependencies needed for remark configuration loading.

## [0.9.0] - 2025-01-22

### Added

- Load a shared configuration module named by the `mdat` string field in `package.json`.

### Fixed

- Install remark-mdat, VFile, and type-fest as consumer dependencies so exported types resolve correctly.
- Prefer Yargs parsing over Meow and preserve array-valued positional defaults in generated CLI help.

### Documentation

- Add shared-configuration and static-rule examples for `package.json`.

### Maintenance

- Refresh declared dependencies and rename the GitHub metadata workflow.

## [0.8.1] - 2024-11-09

### Fixed

- Remove the leading dot from inferred code-fence language annotations.

### Maintenance

- Update the TypeScript configuration loader and remove its obsolete explicit ESM-resolution option; refresh shared tooling dependencies.

## [0.8.0] - 2024-11-07

### Added

- Add `size` and `size-table` rules for original, Gzip, and Brotli file sizes, with configurable table columns and compression percentages.

### Documentation

- Document file-size rules with usage examples and update links after reorganizing rule utilities.

### Maintenance

- Refresh dependencies and reorganize shared rule utilities.

## [0.7.6] - 2024-09-28

### Fixed

- Resolve tldraw-cli integration issues by updating `@kitschpatrol/tldraw-cli` to the 4.6.19 requirement.

### Maintenance

- Refresh the remaining runtime, build, release, and shared-configuration dependencies.

## [0.7.5] - 2024-09-14

### Maintenance

- Refresh dependencies, simplify lint/release scripts, and update package repository metadata and contributor configuration.

## [0.7.4] - 2024-09-07

### Maintenance

- Refresh declared runtime/development dependencies and adapt source lint conventions to the updated shared configuration.

## [0.7.3] - 2024-08-14

### Changed

- **Breaking:** Require Node.js `^18.19.0 || >=20.5.0`.

### Documentation

- Correct runtime requirements, source links, and code/tldraw usage examples in the readme.

### Maintenance

- Refresh runtime/development dependencies, move contributor tooling to pnpm 9, and stabilize asset snapshots by removing hashes.

## [0.7.2] - 2024-06-14

### Fixed

- Render Yargs number types, choices, option aliases, and positional requiredness correctly in generated CLI documentation.

### Maintenance

- Allow manual metadata workflow runs and extend CLI help fixtures.

## [0.7.1] - 2024-06-09

### Documentation

- Correct the acknowledgments heading in bundled readme templates.

### Maintenance

- Update shared lint configuration and GitHub release/metadata workflow dependencies.

## [0.7.0] - 2024-06-07

### Documentation

- Move the mdat usage guide to the repository root and document the separate remark-mdat repository.

### Maintenance

- Split the monorepo into a standalone mdat project, using published remark-mdat dependencies and adapting workspace build/release tooling.

## [0.6.16] - 2024-06-07

### Maintenance

- Update the GitHub release action and explicitly build packages before publishing.

## [0.6.15] - 2024-06-04

### Fixed

- Separate CLI and library declaration builds so published library type definitions are emitted correctly.

## [0.6.14] - 2024-06-04

### Maintenance

- Bundle additional runtime dependencies and adjust TypeScript declaration build coverage.

## [0.6.13] - 2024-06-04

### Added

- Add `cli` as an alias for the `cli-help` rule.

### Fixed

- Make `--version` report the mdat package version explicitly.
- Include external type dependencies in consumer installations rather than development dependencies alone.

### Documentation

- Document the `cli` alias and correct the `cliCommand` example in help-generation diagnostics.

### Maintenance

- Refresh declared dependencies and extend tests for unsupported CLI help output.

## [0.6.12] - 2024-05-19

### Fixed

- Enable ESM resolution in TypeScript configuration loading to prevent Chevrotain's “no exports main defined” import failure.

## [0.6.11] - 2024-05-19

### Fixed

- Use a TypeScript configuration loader that supports importing modules through local file paths.

## [0.6.10] - 2024-05-19

### Documentation

- Link repository package listings directly to their readme files.

### Maintenance

- Refresh declared runtime and contributor dependencies.

## [0.6.9] - 2024-04-26

### Documentation

- Document Yargs and Meow help parsing, its plain-text fallback, and the related jc project.

### Maintenance

- Refresh runtime dependencies, TypeScript/Vitest tooling, shared configuration, and pnpm.

## [0.6.8] - 2024-03-17

### Changed

- Expand automatic banner discovery to conventional project folders, `.github/assets`, and splash images while limiting search depth.

### Maintenance

- Refresh runtime and development dependencies and pin the contributor pnpm version.

## [0.6.7] - 2024-02-29

### Maintenance

- Add GitHub repository metadata synchronization and update release workflow actions and shared configuration.

## [0.6.6] - 2024-02-29

### Added

- Add `description` as an alias for the short-description rule.

### Changed

- **Breaking:** Rename the built-in `Mdat Readme` template choice to `MDAT Readme`.

### Fixed

- Pass table-of-contents options correctly through the `toc` alias.

### Documentation

- Standardize MDAT terminology and update rule, CLI, and package descriptions.

### Maintenance

- Refresh contributor dependencies and add coverage for description aliases and table-of-contents arguments.

## [0.6.5] - 2024-02-24

### Changed

- Make all bundled readme rules optional rather than requiring title, description, contribution, and license placeholders.

## [0.6.4] - 2024-02-23

### Maintenance

- Update tldraw-cli, development type definitions, and shared lint configuration.

## [0.6.3] - 2024-02-23

### Changed

- Remove generation dates from optional metadata comments so unchanged documents no longer receive daily timestamp changes.

## [0.6.2] - 2024-02-22

### Fixed

- Include CLI options when a command has multiple subcommands but no named default subcommand.

## [0.6.1] - 2024-02-22

### Fixed

- Avoid emitting an undefined default command in generated CLI help.

### Maintenance

- Correct the Vitest file-parallelism flag and refresh CLI help fixtures.

## [0.6.0] - 2024-02-22

### Added

- Accept remote image URLs in the banner rule.
- Allow the badges rule to include explicitly named npm packages, including packages from a monorepo.

### Changed

- **Breaking:** Rename the table-of-contents rule's `maxDepth` argument to `depth`.

### Fixed

- Allow `cli-help` without explicit options and remove duplicated subcommand names from generated default-command notices.
- Restore remote tldraw sketch loading by updating `@kitschpatrol/tldraw-cli`.

### Documentation

- Correct readme command examples, default-command documentation, and configuration-file guidance.

### Maintenance

- Refresh runtime/development dependencies and expand readme-rule test coverage.

## [0.5.2] - 2024-02-10

### Changed

- **Breaking:** Constrain `mergeConfigs` to two `Config` arguments and a `Config` return value, replacing the generic variadic merge signature.

## [0.5.1] - 2024-02-10

### Added

- Export `mergeConfigs` for deeply merging configuration objects while preserving defined values.

## [0.5.0] - 2024-02-10

### Added

- Parse Meow help output in the `cli-help` rule.
- Add `helpFlag` and `depth` options for customizing CLI help invocation and limiting subcommand recursion.

### Documentation

- Add a custom-rule example showing how to generate a title from package metadata.

## [0.4.0] - 2024-02-09

### Added

- Export file/string checking APIs and support processing multiple readmes through the readme APIs and commands.

### Changed

- **Breaking:** Rename the `clean` commands to `collapse` and replace cleanup APIs with `collapseFiles` and `collapseString`.
- **Breaking:** Replace `--readme` and `readmeFile` configuration with positional readme paths; use plural file APIs returning VFile arrays instead of the removed single-file exports.

### Fixed

- Make checking validate existing document content without expanding it first.

### Documentation

- Update command help and configuration examples for positional readme paths and collapse commands.

## [0.3.2] - 2024-02-08

### Documentation

- Update the architecture diagram to remove the obsolete standalone `mdat-readme` package boundary.

## [0.3.1] - 2024-02-08

### Documentation

- Fix the unclosed example code fence in the repository readme.

## [0.3.0] - 2024-02-08

### Changed

- **Breaking:** Fold the standalone `mdat-readme` package into `mdat`; invoke its workflow through `mdat readme` and import readme APIs from `mdat`.
- **Breaking:** Replace expansion's `--check` option with dedicated `mdat check` and `mdat readme check` commands.
- **Breaking:** Replace the specialized configuration aliases with `Config` and simplify `loadConfig`, removing its generic schema-extension interface.

### Fixed

- Make `mdat clean` write collapsed files or print their content when `--print` is requested.
- Correct parsing and rendering of nested CLI subcommand help.

### Documentation

- Update installation, API, and command documentation for the consolidated two-package workspace.

## [0.2.0] - 2024-02-08

### Added

- Add `clean` commands and library APIs to collapse expanded Markdown and readme sections back to placeholders.

### Maintenance

- Update Node.js development type definitions across the packages.

## [0.1.1] - 2024-02-07

### Fixed

- Detect the package directory during readme initialization even when no existing readme is found.

## [0.1.0] - 2024-02-07

### Added

- Expand HTML comment placeholders using static, synchronous, asynchronous, and compound rules, with JSON5 arguments, configurable prefixes, and processing order.
- Provide the `mdat` CLI for single-file and batch expansion, with configuration/rule loading, in-place or redirected output, stdout printing, validation-only operation, and optional generation notices.
- Export `expandString`, `expandFile`, `expandFiles`, configuration loaders, readme expansion APIs, and metadata helpers; expansion APIs return VFiles for callers to save.
- Discover and merge configuration from package metadata and standalone configuration files; load arbitrary JSON as dot-notation replacement rules.
- Provide `mdat-readme` with automatic package/readme discovery, configurable asset locations, and interactive starter templates with explicit or compound placeholders.
- Bundle readme rules for customizable titles, banners, badges, descriptions, depth-limited tables of contents, contribution/license sections, and compound headers/footers.
- Embed source files as fenced code blocks and convert Yargs CLI help, including subcommands, into Markdown tables with a plain-text fallback.
- Embed local or remote tldraw sketches as themed light/dark SVGs, caching local exports by content hash and removing stale generated assets.
- Ship `remark-mdat` with a remark plugin, AST expansion/collapse/check utilities, rule types and schemas, and VFile diagnostics for missing, misordered, or unsuccessful rules.
- Distribute ESM packages with TypeScript declarations and locally or globally installed npm CLIs requiring Node.js 18 or newer.

### Documentation

- Document installation, CLI/library usage, configuration, custom rules, bundled templates, and the relationships between the three packages.

### Maintenance

- Establish the pnpm workspace, builds and declaration generation, Vitest coverage, shared lint configuration, and release automation.

[0.1.0]: https://github.com/kitschpatrol/mdat/releases/tag/v0.1.0
[0.1.1]: https://github.com/kitschpatrol/mdat/compare/v0.1.0...v0.1.1
[0.2.0]: https://github.com/kitschpatrol/mdat/compare/v0.1.1...v0.2.0
[0.3.0]: https://github.com/kitschpatrol/mdat/compare/v0.2.0...v0.3.0
[0.3.1]: https://github.com/kitschpatrol/mdat/compare/v0.3.0...v0.3.1
[0.3.2]: https://github.com/kitschpatrol/mdat/compare/v0.3.1...v0.3.2
[0.4.0]: https://github.com/kitschpatrol/mdat/compare/v0.3.2...v0.4.0
[0.5.0]: https://github.com/kitschpatrol/mdat/compare/v0.4.0...v0.5.0
[0.5.1]: https://github.com/kitschpatrol/mdat/compare/v0.5.0...v0.5.1
[0.5.2]: https://github.com/kitschpatrol/mdat/compare/v0.5.1...v0.5.2
[0.6.0]: https://github.com/kitschpatrol/mdat/compare/v0.5.2...v0.6.0
[0.6.1]: https://github.com/kitschpatrol/mdat/compare/v0.6.0...v0.6.1
[0.6.2]: https://github.com/kitschpatrol/mdat/compare/v0.6.1...v0.6.2
[0.6.3]: https://github.com/kitschpatrol/mdat/compare/v0.6.2...v0.6.3
[0.6.4]: https://github.com/kitschpatrol/mdat/compare/v0.6.3...v0.6.4
[0.6.5]: https://github.com/kitschpatrol/mdat/compare/v0.6.4...v0.6.5
[0.6.6]: https://github.com/kitschpatrol/mdat/compare/v0.6.5...v0.6.6
[0.6.7]: https://github.com/kitschpatrol/mdat/compare/v0.6.6...v0.6.7
[0.6.8]: https://github.com/kitschpatrol/mdat/compare/v0.6.7...v0.6.8
[0.6.9]: https://github.com/kitschpatrol/mdat/compare/v0.6.8...v0.6.9
[0.6.10]: https://github.com/kitschpatrol/mdat/compare/v0.6.9...v0.6.10
[0.6.11]: https://github.com/kitschpatrol/mdat/compare/v0.6.10...v0.6.11
[0.6.12]: https://github.com/kitschpatrol/mdat/compare/v0.6.11...v0.6.12
[0.6.13]: https://github.com/kitschpatrol/mdat/compare/v0.6.12...v0.6.13
[0.6.14]: https://github.com/kitschpatrol/mdat/compare/v0.6.13...v0.6.14
[0.6.15]: https://github.com/kitschpatrol/mdat/compare/v0.6.14...v0.6.15
[0.6.16]: https://github.com/kitschpatrol/mdat/compare/v0.6.15...v0.6.16
[0.7.0]: https://github.com/kitschpatrol/mdat/compare/v0.6.16...v0.7.0
[0.7.1]: https://github.com/kitschpatrol/mdat/compare/v0.7.0...v0.7.1
[0.7.2]: https://github.com/kitschpatrol/mdat/compare/v0.7.1...v0.7.2
[0.7.3]: https://github.com/kitschpatrol/mdat/compare/v0.7.2...v0.7.3
[0.7.4]: https://github.com/kitschpatrol/mdat/compare/v0.7.3...v0.7.4
[0.7.5]: https://github.com/kitschpatrol/mdat/compare/v0.7.4...v0.7.5
[0.7.6]: https://github.com/kitschpatrol/mdat/compare/v0.7.5...v0.7.6
[0.8.0]: https://github.com/kitschpatrol/mdat/compare/v0.7.6...v0.8.0
[0.8.1]: https://github.com/kitschpatrol/mdat/compare/v0.8.0...v0.8.1
[0.9.0]: https://github.com/kitschpatrol/mdat/compare/v0.8.1...v0.9.0
[0.10.0]: https://github.com/kitschpatrol/mdat/compare/v0.9.0...v0.10.0
[1.0.0]: https://github.com/kitschpatrol/mdat/compare/v0.10.0...v1.0.0
[1.0.1]: https://github.com/kitschpatrol/mdat/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/mdat/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/mdat/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/mdat/compare/v1.0.3...v1.0.4
[1.1.0]: https://github.com/kitschpatrol/mdat/compare/v1.0.4...v1.1.0
[1.2.0]: https://github.com/kitschpatrol/mdat/compare/v1.1.0...v1.2.0
[1.2.1]: https://github.com/kitschpatrol/mdat/compare/v1.2.0...v1.2.1
[1.2.2]: https://github.com/kitschpatrol/mdat/compare/v1.2.1...v1.2.2
[1.2.3]: https://github.com/kitschpatrol/mdat/compare/v1.2.2...v1.2.3
[1.3.0]: https://github.com/kitschpatrol/mdat/compare/v1.2.3...v1.3.0
[1.3.1]: https://github.com/kitschpatrol/mdat/compare/v1.3.0...v1.3.1
[1.3.2]: https://github.com/kitschpatrol/mdat/compare/v1.3.1...v1.3.2
[1.3.3]: https://github.com/kitschpatrol/mdat/compare/v1.3.2...v1.3.3
[1.3.4]: https://github.com/kitschpatrol/mdat/compare/v1.3.3...v1.3.4
[1.3.5]: https://github.com/kitschpatrol/mdat/compare/v1.3.4...v1.3.5
[1.4.0]: https://github.com/kitschpatrol/mdat/compare/v1.3.5...v1.4.0
[1.4.1]: https://github.com/kitschpatrol/mdat/compare/v1.4.0...v1.4.1
[1.4.2]: https://github.com/kitschpatrol/mdat/compare/v1.4.1...v1.4.2
[2.0.0]: https://github.com/kitschpatrol/mdat/compare/v1.4.2...v2.0.0
[2.0.1]: https://github.com/kitschpatrol/mdat/compare/v2.0.0...v2.0.1
[2.1.0]: https://github.com/kitschpatrol/mdat/compare/v2.0.1...v2.1.0
[2.2.0]: https://github.com/kitschpatrol/mdat/compare/v2.1.0...v2.2.0
[2.2.1]: https://github.com/kitschpatrol/mdat/compare/v2.2.0...v2.2.1
[2.3.0]: https://github.com/kitschpatrol/mdat/compare/v2.2.1...v2.3.0
[2.3.1]: https://github.com/kitschpatrol/mdat/compare/v2.3.0...v2.3.1
[2.3.2]: https://github.com/kitschpatrol/mdat/compare/v2.3.1...v2.3.2
[2.3.3]: https://github.com/kitschpatrol/mdat/compare/v2.3.2...v2.3.3
[2.3.4]: https://github.com/kitschpatrol/mdat/compare/v2.3.3...v2.3.4
[2.3.5]: https://github.com/kitschpatrol/mdat/compare/v2.3.4...v2.3.5
[2.3.6]: https://github.com/kitschpatrol/mdat/compare/v2.3.5...v2.3.6
[3.0.0]: https://github.com/kitschpatrol/mdat/compare/v2.3.6...v3.0.0
[3.1.0]: https://github.com/kitschpatrol/mdat/compare/v3.0.0...v3.1.0
[3.2.0]: https://github.com/kitschpatrol/mdat/compare/v3.1.0...v3.2.0
[3.2.1]: https://github.com/kitschpatrol/mdat/compare/v3.2.0...v3.2.1
[3.2.2]: https://github.com/kitschpatrol/mdat/compare/v3.2.1...v3.2.2
[3.3.0]: https://github.com/kitschpatrol/mdat/compare/v3.2.2...v3.3.0
[3.4.0]: https://github.com/kitschpatrol/mdat/compare/v3.3.0...v3.4.0
[3.4.1]: https://github.com/kitschpatrol/mdat/compare/v3.4.0...v3.4.1
[3.5.0]: https://github.com/kitschpatrol/mdat/compare/v3.4.1...v3.5.0
[3.6.0]: https://github.com/kitschpatrol/mdat/compare/v3.5.0...v3.6.0
[3.6.1]: https://github.com/kitschpatrol/mdat/compare/v3.6.0...v3.6.1
[3.6.2]: https://github.com/kitschpatrol/mdat/compare/v3.6.1...v3.6.2
[3.6.3]: https://github.com/kitschpatrol/mdat/compare/v3.6.2...v3.6.3
[3.6.4]: https://github.com/kitschpatrol/mdat/compare/v3.6.3...v3.6.4
[3.6.5]: https://github.com/kitschpatrol/mdat/compare/v3.6.4...v3.6.5
[3.6.6]: https://github.com/kitschpatrol/mdat/compare/v3.6.5...v3.6.6
[3.6.7]: https://github.com/kitschpatrol/mdat/compare/v3.6.6...v3.6.7
