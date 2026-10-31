---
title: "Case Converter"
seo_title: "Case Converter — Sergey Romanenko"
description: "Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once."
canonical_url: "https://sergeyromanenko.com/tools/case-converter/"
markdown_url: "https://sergeyromanenko.com/tools/case-converter/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Case Converter

# Case Converter

Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

## At a glance

- **Formats:** 17
- **Naming conventions:** 9
- **Locale-aware:** No
- **Offline support:** Yes

## What you can do

1. **Seventeen formats, one input**
  Plain text forms, the naming conventions a developer needs, and the deliberately odd ones — all live at once.
2. **Never overwrites your capitalisation**
  Title Case leaves any word you capitalised yourself untouched, so NATO and iPhone survive. Capitalize Every Word is the mode that normalises.
3. **Splits on case humps**
  quickBrownFox becomes quick_brown_fox, because a naming convention is only useful if it accepts camelCase as input.
4. **Unicode throughout**
  Accented Latin, Cyrillic and Vietnamese all convert. CJK has no case, so those formats return the text unchanged — correctly.

## How it works

Case Converter

Every string has a form it is supposed to be in: a heading in Title Case, a function in camelCase, an environment variable in CONSTANT_CASE, a filename in kebab-case. There are seventeen common answers to that question and this page shows all of them at once, because choosing between them is the work.

Everything runs in your browser. Nothing is sent anywhere and nothing is stored.

## Why all seventeen at once

The alternative is a dropdown with one format selected, which is what half the tools surveyed do. It is worse, because a reader arriving wanting `kebab-case` wants to see that `camelCase`, `PascalCase` and `snake_case` are the same three words arranged differently — that comparison is the reason the tool exists.

So the input is at the top, your chosen format is shown large beneath it, and every format is listed below for comparison. Click any of them to copy it.

## Title Case does not overwrite what you typed

This is the decision worth explaining, because every other implementation gets it wrong in one direction or the other.

**A word that already contains a capital letter is left exactly as it is.** So `NATO` stays `NATO`, `iPhone` stays `iPhone`, and `JavaScript` stays `JavaScript`. A tool that returned `Nato` and `Iphone` from those would be corrupting the one thing it was asked to leave alone — and if you have ever written a heading about an API, you have been bitten by exactly that.

The cost is honest and worth stating: a heading pasted in as `THE QUICK BROWN FOX` comes back unchanged, because nothing here can tell shouting from an acronym. That is the safer failure. The reader who wants it normalised presses **Capitalize Every Word**, which is the mode whose name promises to do exactly that and which does not claim to preserve anything.

## The conventions, and what they do to your input

`camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `CONSTANT_CASE`, `dot.case`, `path/case`, `Train-Case` and `Header-Case` all split on any character that is not a letter, a number or a combining mark. That handles spaces, underscores, hyphens, dots, slashes and punctuation in one rule.

They also **split on case humps**, which is the part most converters miss:

| You paste | snake_case gives |
| --- | --- |
| `quick brown fox` | `quick_brown_fox` |
| `quick-brown-fox` | `quick_brown_fox` |
| `quickBrownFox` | `quick_brown_fox` |
| `HTTPServerError` | `http_server_error` |

A naming convention is only useful if it accepts camelCase as input, because that is what most of the code you are converting is written in.

## What it cannot do

**There is no locale-aware casing.** Every conversion here uses English rules. JavaScript has no API for title-casing in Turkish, where `I` and `ı` are different letters and the two swap under the right rules, and adding a library would not make it correct either.

**Title Case follows the common English convention, not any one style guide.** Articles, short prepositions and coordinating conjunctions stay lowercase unless they open or close the title — “The Quick Brown Fox Jumps over the Lazy Dog”. The BBC, the Chicago Manual and the AP all disagree about which words those are, and languages that do not capitalise at all are not modelled.

**Acronyms are never invented.** `nato` becomes `Nato`, not `NATO`. Only what you typed is preserved; nothing is guessed.

**CJK has no case.** Every format returns Japanese, Chinese and Korean text unchanged, which is correct rather than a failure — those scripts have no upper and lower forms, so there is nothing to convert.

Accented Latin, Cyrillic and Vietnamese all convert normally: `café` becomes `CAFÉ`, and `привет мир` becomes `Привет Мир`.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also writing

- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing
  - text formatting
  - code
- **[Mermaid Diagram Editor](https://sergeyromanenko.com/tools/mermaid-diagram-editor/)**
  Write Mermaid source, watch it render as a live diagram, and download it as a PNG file, all in your browser.

  - writing
  - code
- **[Text Cleaner](https://sergeyromanenko.com/tools/text-cleaner/)**
  Clean text pasted from a web page, PDF or spreadsheet — collapse whitespace, fix line endings, find invisible characters and strip HTML.

  - writing
  - text formatting

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [writing](https://sergeyromanenko.com/tools/?tag=writing)
- [text formatting](https://sergeyromanenko.com/tools/?tag=text+formatting)
- [code](https://sergeyromanenko.com/tools/?tag=code)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
