# The MDAT sample document

## Basic comment expansion

<!-- basic -->

## Basic comment clean up

<!-- basic -->

Stale content that will be replaced

<!-- /basic -->

## Prefixed comment

Expansion only happens when `--prefix mm-` option is set:

<!-- mm-basic -->

## Comment expansion with dynamic content

Shows the name of the rules file:

<!-- basic-dynamic -->

## Required expansion

Inclusion is validated via `--check` option

<!-- basic-list-required -->

## Expansions with options argument, canonical syntax

<!-- basic-options {prefix: "🪴 ", suffix: " 🪴"} -->

## Same expansion with different options

<!-- basic-options {prefix: "🌳 ", suffix: " 🌳"} -->

## Expansions with arguments, syntax forgiveness

<!--- basic-options {prefix: "🪴 ", suffix: " 🪴"} -->

## Expansions via dot paths given arbitrary json files as rules

Given e.g. `--rules ./package.json`, allow access to fields in the file:

<!--- name -->

<!--- author.name -->

## Handling empty rule content

This expansion rule always returns an empty string. The comment will not be expanded, MDAT will report the error.

<!-- basic-empty -->

## Handling non-required rule errors

This expansion rule always throws an error. The comment will not be expanded, and MDAT will report the error.

<!-- basic-throws -->

## Ordered expansion

Order in the document is validated via `--check` option

<!-- basic-ordered-2 -->

<!-- basic-ordered-1 -->

## Inline expansions with paragraph elements

This is a sentence with a "_<!-- basic-inline -->_" inside of it.

## Multiple paragraphs

<!-- basic-multiple-paragraphs -->

## Multiple paragraphs blockquote

> <!-- basic-multiple-paragraphs -->

## Tags in code fence

Should not expand

```html
<!-- basic -->
```

## Stacked expansions

<!-- basic -->

<!-- basic -->

The following required an extra step to split html statements that were being interpreted as contiguous

## Adjacent inline expansions

A<!-- basic --><!-- /basic --><!-- basic --><!-- /basic -->Z

## Adjacent top-level expansions

<!-- basic --><!-- basic -->Z

## Adjacent top-level expansions

<!-- basic --><b>Absolutely</b><!-- basic -->

## Adjacent top-level expansions with options

<!-- basic-options {prefix: "🪴 ", suffix: " 🪴"} --><!-- basic-options {prefix: "🪴 ", suffix: " 🪴"} -->

## Adjacent top-level expansions

<!-- basic --><!-- basic -->

## Adjacent top-level expansions with leading space

 <!-- basic --><!-- basic -->

## Expansion with leading space

 <!-- basic -->
