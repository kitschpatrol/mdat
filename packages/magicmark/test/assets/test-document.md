# The MagicMark sample document

## Basic comment expansion

<!-- basic -->

## Prefixed comment

Expansion only happens when `--prefix mm` option is set:

<!-- mm-basic -->

## Comment expansion with dynamic content

Shows the name of the rules file:

<!-- basic-dynamic -->

## Required expansion

Inclusion is validated via `--check` option

<!-- basic-list-required -->

## Expansions with options argument, canonical syntax

<!-- basic-options {prefix: "🪴 ", suffix: " 🪴"} -->

## Expansions with options argument, same expansion with different options

<!-- basic-options {prefix: "🌳 ", suffix: " 🌳"} -->

## Expansions with arguments, syntax forgiveness

<!--- # basic-options({prefix: "🪴 ", suffix: " 🪴"}) -->

## Expansions via dot paths given arbitrary json files as rules

Given e.g. `--rules ./package.json`, allow access to fields in the file:

<!--- name -->

<!--- author.name -->

## Handling empty rule content

This expansion rule always returns an empty string. The comment will not be expanded, MagicMark will report the error.

<!-- basic-empty -->

## Handling non-required rule errors

This expansion rule always throws an error. The comment will not be expanded, and MagicMark will report the error.

<!-- basic-throws -->

## Ordered expansion

Order in the document is validated via `--check` option

<!-- basic-ordered -->
