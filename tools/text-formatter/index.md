---
title: "Text Formatter"
seo_title: "Text Formatter — Sergey Romanenko"
description: "Add line numbers, wrap text at a column, add prefixes and suffixes, indent, and turn lines into a bulleted or numbered list."
canonical_url: "https://sergeyromanenko.com/tools/text-formatter/"
markdown_url: "https://sergeyromanenko.com/tools/text-formatter/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Text Formatter

Add line numbers, wrap text at a column, add prefixes and suffixes, indent, and turn lines into a bulleted or numbered list.

## At a glance

- **Numbering styles:** 3
- **List markers:** 4
- **Third-party libraries:** None
- **Offline support:** Yes

## What you can do

1. **Line numbering three ways**
  Arabic, Roman and spreadsheet-style letters, with a start value, a separator, and a choice of counting every line or only the ones with content.
2. **Word wrap that respects paragraphs**
  A blank line in, a blank line out. Long words overflow by default and are cut only when you ask, because a fixed-width file needs that and prose does not.
3. **Prefixes, suffixes, indent and un-indent**
  Un-indenting removes the common margin rather than all of it, so a nested block keeps its shape.
4. **Bullets and numbered lists**
  Numbering continues across a blank line, because a list interrupted by a paragraph is still one list.

## How it works

Text Formatter

Eight operations that decorate lines which already exist. Number them, wrap them, indent them, mark them as a list, or strip a numbering off them again.

Everything runs in your browser, and your input is never overwritten.

## Line numbers, three ways

Arabic, Roman, and spreadsheet-style letters — `A`, `B`, … `Z`, `AA`, `AB`. The last is the one a reader who has seen a spreadsheet already recognises, which is why it is here rather than a variant of the Roman mode.

The start value, the separator and the uppercase setting are yours. What matters more is the choice underneath them.

**Number every line, or only the lines with content?** These are two different questions and they give different numbers.

- *Every line* counts physical lines. Line 12 is the twelfth line of the file, even if three of the first eleven were blank.
- *Only lines with content* counts what a reader sees. The number matches a citation of “paragraph 3”.

Most people citing a document want the second. Most people preparing a transcript want the first. Both are offered and neither is the default guess.

Blank lines get no number by default — putting `7.` above a paragraph break is noise. That is a switch too.

## Word wrap that respects paragraphs

A blank line in, a blank line out, and a line already shorter than the width is left exactly as it was. That matters because the usual use is a fixed-width document, where an accidental reflow of a deliberate layout would be worse than no wrapping at all.

**A word longer than the column overflows by default.** A URL, a hash, a German compound — cutting it is almost never what you want in prose, and it is exactly what you want in a fixed-width file. So **break words** is a switch, off by default, and the reason is stated here rather than discovered.

Leading indentation is kept on the first line of a block, so an indented passage stays indented.

## Indent and un-indent

Un-indenting removes the **common** margin, not all of it. Given

```plaintext
    a
    b
        c
```

you get back

```plaintext
a
b
    c
```

Flattening the hierarchy is the one thing a reader never wants from an un-indent, and a tool that does it is worse than one that does nothing.

Tabs count as the width you choose, because a tab is one character and several columns. Slicing four characters off a tab-indented line would remove the tab and three letters of the word.

## List markers

Bullets, numbers, letters, or nothing. **Numbering continues across a blank line**, because a list interrupted by a paragraph is still one list — restarting it would renumber the document and change what the numbers refer to.

Removing the markers again works on bullets, dashes, asterisks, `1.` and `a)`, so a list survives a round trip.

## This is not the List Processor

Two different questions, two different tools. This one **decorates lines that already exist** — the line’s content is unchanged and only its surroundings are. The [List Processor](https://sergeyromanenko.com/tools/list-processor/) **changes the set** — sorting it, thinning it, filtering it, setting two of them against each other.

“If I want to clean up my list” and “if I want to number my lines” are different intentions, and putting both behind one control would answer neither.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also text formatting

- **[Text Splitter & Joiner](https://sergeyromanenko.com/tools/text-splitter/)**
  Split text into lines, paragraphs, sentences, batches of characters or words, or a fixed number of parts — then join it back together.

  - lists
  - writing
  - text formatting
- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - writing
  - text formatting
- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing
  - text formatting

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [writing](https://sergeyromanenko.com/tools/?tag=writing)
- [lists](https://sergeyromanenko.com/tools/?tag=lists)
- [text formatting](https://sergeyromanenko.com/tools/?tag=text+formatting)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
