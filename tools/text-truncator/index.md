---
title: "Text Truncator"
seo_title: "Text Truncator — Sergey Romanenko"
description: "Shorten text to a limit in characters, words, sentences, lines or paragraphs — cutting at a word boundary and counting the suffix inside the limit."
canonical_url: "https://sergeyromanenko.com/tools/text-truncator/"
markdown_url: "https://sergeyromanenko.com/tools/text-truncator/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. Text Truncator

Tools

Tool

# Text Truncator

Shorten text to a limit in characters, words, sentences, lines or paragraphs — cutting at a word boundary and counting the suffix inside the limit.

## At a glance

- **Units:** 5
- **Suffix counted:** Yes
- **Platform limits:** Not hardcoded
- **Offline support:** Yes

## What you can do

1. **Five units to limit**
  Characters, words, sentences, lines or paragraphs. The limit is yours, because published platform limits change and some count differently.
2. **Cuts at a boundary**
  A character cut lands on a word edge where one is available, because text that overruns the budget is a rejected upload.
3. **The suffix counts**
  A 160-character description ending in an ellipsis is 160 characters. The budget is applied to the whole result, suffix included.
4. **Never splits an emoji**
  The limit is measured in grapheme clusters, so a flag is one character and a cut cannot land inside it.

## How it works

Text Truncator

A meta description. A card summary. An excerpt. A caption. All of them have a budget, and the question is always the same: what is the longest version of this that still fits, and where does it have to stop?

Everything runs in your browser.

## No platform limits are hardcoded here

One of the reference tools offers eight platforms’ character limits as a preset dropdown. It is a genuinely useful idea, and it is a trap.

Those numbers change without notice. Several count differently — some count characters, some count UTF-16 units, and at least one weights an emoji as two. A table of them would be confidently wrong within a month while still looking authoritative, and a reader who trusted it would find out at upload time.

So the limit is a field, and it is yours. If you have been told 160, type 160. The page shows you exactly what you get.

## Two figures, and they answer different questions

**Characters** is the number of the result — what has to fit somewhere.

**Percentage kept** tells you what you actually have. Thirty per cent of an article is an excerpt. Three per cent is a fragment with a full stop on the end. No tool can tell you which one you were after, and a tool that claimed to would be making an editorial judgement while claiming to be arithmetic.

## The suffix is counted inside the limit

A 160-character description ending in an ellipsis is **160 characters**, not 161.

The budget is applied to the whole result. This is the off-by-one that costs a reader a rejected upload, so it is stated on the page as well as implemented in the rules.

## It cuts at a word boundary

A character cut in the middle of a word produces `the quick brow`, which cannot be pasted anywhere. Every mode that can find a boundary looks for the nearest one before the limit.

**Cutting short is deliberate.** Text that overruns the budget is a rejection; text that comes in slightly under one is always fine. If there is no boundary — a single very long word, or a URL — the cut lands where the limit is rather than producing nothing.

Strip the punctuation left at the cut if you want to; note that it will not strip an apostrophe, because cutting `the authors'` and returning `the author` silently changes the word.

## Characters are counted correctly

A **character is a grapheme cluster**: one thing a reader would count as one.

`"🇻🇳".length` is 4 in JavaScript — two regional indicators, each a surrogate pair — while you see one flag. A family emoji joined with zero-width joiners is one emoji and many code units. A letter carrying a combining accent is one character and two code units.

Every limit here is applied to grapheme clusters, so a cut can never land inside one and leave you with a broken emoji in a title tag.

## Five ways to measure

**Characters** is the one most publishing budgets are written in. The others — words, sentences, lines, paragraphs — are for when the limit is a word count or a paragraph budget rather than a field width.

Words here are segmented the same way as everywhere else in this collection, and sentences come with the same documented caveat: **“Mr. Smith left.” is two sentences**, because the platform splits on punctuation and does not understand abbreviations.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also writing

- **[Emoji Picker](https://sergeyromanenko.com/tools/emoji-picker/)**
  Search and copy emoji from a set bundled with the page — no API call, no tracking, and the picker keeps working offline once the page has loaded.

  - writing
  - social media
- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - writing
- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [writing](https://sergeyromanenko.com/tools/?tag=writing)
- [limits](https://sergeyromanenko.com/tools/?tag=limits)
- [social media](https://sergeyromanenko.com/tools/?tag=social+media)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
