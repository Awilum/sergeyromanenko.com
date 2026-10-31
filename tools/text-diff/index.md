---
title: "Text Diff"
seo_title: "Text Diff — Sergey Romanenko"
description: "Compare two texts line by line or word by word, with an accurate diff, ignore options, and differences marked by sign, tint and word."
canonical_url: "https://sergeyromanenko.com/tools/text-diff/"
markdown_url: "https://sergeyromanenko.com/tools/text-diff/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. Text Diff

Tools

Tool

# Text Diff

Compare two texts line by line or word by word, with an accurate diff, ignore options, and differences marked by sign, tint and word.

## At a glance

- **Algorithm:** Myers
- **Granularity:** Line, word
- **Ignore options:** 4
- **Offline support:** Yes

## What you can do

1. **A real diff, not a line count**
  Myers’ algorithm, the same shape as git diff. Insert one line at the top and you are told one line was added — not that every line below it changed.
2. **Word-level detail inside a changed line**
  When a line is edited rather than replaced, the words that differ are marked, and the line reassembles character for character.
3. **Compare on your terms**
  Ignore case, trailing whitespace, all whitespace, or blank lines — and the original text is still shown as it is.
4. **Never colour alone**
  Every row carries a + or − and a word for screen readers, so the difference survives without colour vision.

## How it works

Text Diff

Two texts, and what changed between them. Paste an earlier version on the left and the current one on the right.

Everything runs in your browser. Neither field is modified.

## A real diff, not a line count

The simplest way to compare two texts is to compare line 1 with line 1, line 2 with line 2, and report every mismatch. It is wrong in the way that matters.

Insert one line at the top of a document and **every** line below it is reported as changed. A writer who pasted a new paragraph at the top of a chapter and was told the whole chapter had been rewritten has learned nothing they did not already know, and will not look at the tool again.

This one uses **Myers’ algorithm** — the same shape `git diff` uses — which finds the longest common subsequence and reports only what genuinely differs. One inserted line is reported as one insertion.

## Differences are marked three ways

Every surveyed diff tool distinguishes added from removed with **colour alone**. That means the tool is unusable for a reader with colour vision deficiency, in bright light, in dark mode, and in a black-and-white printout.

Every row here carries three independent signals:

- a **sign** — `+`, `−`, or `=`;
- a **tint** on the row and on the sign;
- a **word** for screen readers — “Added”, “Removed”, “Unchanged”.

Any one of them is enough to read the result, and removing any one of them degrades it rather than breaking it.

## Word-level detail inside a changed line

Switch the comparison from lines to words and a changed line shows *which words* differ rather than the whole line being flagged.

The reassembled line is character-for-character identical to what went in. That matters more than it sounds: a word diff that dropped the space after a changed word would render a line matching neither input, which is the one thing a diff must never do.

## Comparing on your terms

Four switches, each of which changes what “the same” means:

- **Ignore case** — `Colour` and `color` are the same word here.
- **Ignore trailing whitespace** — but the line still *displays* its original spacing. Ignoring a difference in the comparison does not delete it from the text you are shown, because you are looking at the file, not at a normalised copy of it.
- **Ignore all whitespace** — `a b c` and `abc` compare as equal.
- **Ignore blank lines** — for documents where the spacing is decorative.

Line endings are handled too: a CRLF file and an LF file of the same content compare as identical, which is right and is not obvious.

## What it is not

This is a **line and word diff, not a semantic one**. It cannot tell you that “colour” and “color” are the same word in British and American English, or that two differently-phrased sentences say the same thing. It compares characters, and it is honest about the lines it finds.

It is also **not a merge tool**. It will not propose a merge and does not try to reconcile two branches of a file. Two texts in, one difference out.

## Large documents

The comparison is recomputed as you type, and the rendering is capped. Above about four thousand rows the page stops drawing them and says so.

**The counts stay exact** — a forty-thousand-line comparison still reports every addition and removal correctly. It just does not draw them all. A reader who needs to see every row of two enormous files has better tools than a web page, and a browser that has stopped responding helps nobody.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also code

- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - writing
  - code
- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing
  - code
- **[Mermaid Diagram Editor](https://sergeyromanenko.com/tools/mermaid-diagram-editor/)**
  Write Mermaid source, watch it render as a live diagram, and download it as a PNG file, all in your browser.

  - writing
  - code

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [code](https://sergeyromanenko.com/tools/?tag=code)
- [comparison](https://sergeyromanenko.com/tools/?tag=comparison)
- [writing](https://sergeyromanenko.com/tools/?tag=writing)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
