---
title: "List Processor"
seo_title: "List Processor — Sergey Romanenko"
description: "Sort, deduplicate, filter and compare a list of items — alphabetically, naturally, by length, numerically, and against a second list."
canonical_url: "https://sergeyromanenko.com/applications/list-processor/"
markdown_url: "https://sergeyromanenko.com/applications/list-processor/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. List Processor

( Tool · Text & Writing )

# List Processor

Sort, deduplicate, filter and compare a list of items — alphabetically, naturally, by length, numerically, and against a second list.

[Open application](https://app.sergeyromanenko.com/apps/list-processor/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Sort modes:** 7
- **Comparison modes:** 3
- **Natural sorting:** Yes
- **Offline support:** Yes

## What you can do

1. **Seven ways to order**
  Alphabetical, reverse, by length, numeric, and a natural order that puts item2 before item10.
2. **Deduplicate, keeping first or last**
  The right one depends on the list: first for links read in order, last when a later line corrected an earlier one.
3. **Filter and compare**
  Keep or remove lines matching a pattern, and set two lists against each other to find what is common and what is missing.
4. **Literal delimiters**
  Split on the text you choose, taken literally. A reader who types a dot means a full stop, not any character.

## How it works

List Processor

A list of things — links, names, tags, filenames, keywords, rows — and the four operations you actually want on one: order it, thin it, filter it, and set it against another one.

Everything runs in your browser. Your input is never overwritten.

## How the list is read

Items are separated by something you choose — a newline, a comma, a tab, a semicolon. The delimiter is taken **literally**: a reader who types a dot means a full stop, not “any character in a regular expression”.

An empty delimiter falls back to lines rather than splitting between every character, which is what `String.split('')` does and is not what anyone meant.

The two buttons below the field fill it in for you, because a newline is one character and typing it into a text field is not obvious.

## Seven ways to order

The one worth explaining is **natural order**. Plain alphabetical sorting puts `item10` before `item2`, because it compares `1` against `2` character by character. Natural order splits each item into runs of digits and non-digits and compares the numeric runs as numbers:

```plaintext
item1, item2, item10
```

That is what every list with numbers in it needs, and it is what none of the simple sorts give you.

**Sort by number** is for lists that are all numbers. If an item is not a number it goes to the end rather than becoming `NaN` and scrambling the whole list.

Ties are broken alphabetically, so a list cannot reshuffle itself between two otherwise identical runs.

## Deduplicate: keep the first, or keep the last

Both are offered because the right one depends on the list.

**Keep the first** is for lists read in order — the order you encountered the links in is the order you want them in.

**Keep the last** is for lists where a later line corrected an earlier one, which is common in a file that has been appended to over time.

Comparison ignores case and surrounding whitespace by default, so `Apple` and `apple` are one entry unless you turn that off.

## Filter, and set two lists against each other

**Filter** keeps the items matching a pattern or removes them — the same pattern box, inverted by a checkbox. An invalid pattern is reported with the JavaScript engine’s own message, which names the actual problem, and your list is left alone rather than emptied.

**Comparison** takes a second list and reports what is in both, what is only in the first, and what is only in the second. Comparison follows the same case rule, and an item appearing twice in one list is reported once.

## This is not the Text Formatter

The [Text Formatter](https://sergeyromanenko.com/applications/text-formatter/) decorates lines that already exist — numbering them, indenting them, turning them into a bulleted list. This tool **changes the set**: which items are in it, and in what order.

## Details

- **Access:** Free to use, no account
- **Category:** Text & Writing
- **Kind:** Browser tool
- **Runs in:** Web
- **Year:** 2026
- **Workspace:** app.sergeyromanenko.com

## Related also code

- Tool · Text & Writing
  ### [Case Converter](https://sergeyromanenko.com/applications/case-converter/)
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - code
- Tool · Text & Writing
  ### [Find and Replace](https://sergeyromanenko.com/applications/find-and-replace/)
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - code
- Tool · Text & Writing
  ### [Text Diff](https://sergeyromanenko.com/applications/text-diff/)
  Compare two texts line by line or word by word, with an accurate diff, ignore options, and differences marked by sign, tint and word.

  - code

## Tags

Follow a tag below to browse other applications filed under it.

- [lists](https://sergeyromanenko.com/applications/?tag=lists)
- [data cleanup](https://sergeyromanenko.com/applications/?tag=data+cleanup)
- [code](https://sergeyromanenko.com/applications/?tag=code)

Found this application useful? [Support independent development](https://sergeyromanenko.com/support/)
