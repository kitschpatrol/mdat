# The MagicMark sample document

## Basic comment expansion

<!-- basic -->

**A bold statement from test-rules.js**

<!-- /basic -->

## Prefixed comment

Expansion only happens when `--prefix mm` option is set:

<!-- mm-basic -->

## Comment expansion with dynamic content

Shows the name of the rules file:

<!-- basic-dynamic -->

I was generated from test-rules.js

<!-- /basic-dynamic -->

## Required expansion

Inclusion is validated via `--check` option

<!-- basic-list-required -->

* I
* am
* a
* list
* that
* must
* be
* here

<!-- /basic-list-required -->

## Expansions with options argument, canonical syntax

<!-- basic-options {prefix: "🪴 ", suffix: " 🪴"} -->

🪴 I am between two ferns 🪴

<!-- /basic-options -->

## Expansions with arguments, syntax forgiveness

<!--- # basic-options({prefix: "🪴 ", suffix: " 🪴"}) -->

🪴 I am between two ferns 🪴

<!-- /basic-options -->

## Ordered expansion

Order in the document is validated via `--check` option

<!-- basic-ordered -->

I had to be last

<!-- /basic-ordered -->
