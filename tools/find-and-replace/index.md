---
title: "Find and Replace"
seo_title: "Find and Replace — Sergey Romanenko"
description: "Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution."
canonical_url: "https://sergeyromanenko.com/tools/find-and-replace/"
markdown_url: "https://sergeyromanenko.com/tools/find-and-replace/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Find and Replace

# Find and Replace

Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

## At a glance

- **Regular expressions:** Optional
- **Whole-word matching:** Yes
- **Capture groups:** Yes
- **Offline support:** Yes

## What you can do

1. **Literal search by default**
  A dot means a dot. Regular expressions are available and off by default, because a page that greys “.” into a text box is a lesson in metacharacters.
2. **Case and whole-word matching**
  Both switches the reference tools offer, and nothing else to learn.
3. **Replacements are literal**
  Replacing $5.00 with $10.00 gives you $10.00. Capture groups are a separate switch, and $& and $1 work when it is on.
4. **A bad pattern is a message, not a crash**
  An unterminated group is reported with the engine’s own explanation, and your text is left exactly as it was.

## How it works

Find and Replace

Search a document, see what matches, and replace what you choose. Plain text by default, regular expressions one click away.

Everything runs in your browser, and **your text is never overwritten** — the result appears in a separate field you have to accept before it replaces anything.

## Your text is not replaced in place

Every one of the four reference tools for this research replaces directly in the input. That means a reader who pressed the wrong button has to reload, and any work not yet saved is gone.

Here the result goes to its own field. You compare, then press **Apply to input** if you want to work from it. That is one extra click, and it is the difference between a tool you can check and one you have to trust.

## A dot means a dot

Regular expressions are **off by default**, and that is a deliberate choice.

A search box that treats `.` as “any character” is a search box that surprises people: searching for `3.14` finds `3914`, and searching for `e.g.` finds almost everything. Every tool surveyed that offers regex either enables it by default or asks you to learn metacharacters before you can search for a full stop.

So: literal matching by default, the switch beside it, and a note on the switch saying what turning it on does.

## Your replacement is literal too

Replacing `$5.00` with `$10.00` gives you `$10.00`.

JavaScript’s own `String.replace` treats `$1` and `$&` in the *replacement* as references to capture groups. That is useful when you asked for it and a disaster when you did not — a reader searching for a price would get an empty string and a confusing bug report.

So the replacement is inserted verbatim, and **use capture groups** is a separate switch. With it on, `$1`, `$2` … and `$&` work as the reference tool’s conventions say they do. With it off, they are text.

## An invalid pattern is a message, not a crash

Typing `(` is an ordinary thing to do. You get the JavaScript engine’s own explanation — an unterminated group, a bad quantifier — and **your text is left exactly as it was**.

A generic “invalid pattern” would tell you nothing about what to fix. Taking the engine’s message means the person who wrote the parser has already written the sentence that helps you.

## Zero-length matches cannot hang the page

A pattern like `a*` matches the empty string. A naive loop over `RegExp.exec` never advances past it and freezes the tab — this is a real bug in plenty of find-and-replace implementations.

Every scan here steps a whole code point forward when a match is empty, so the loop always terminates and a zero-width match can never land between a surrogate pair.

## Whole word, and case

**Whole word** uses Unicode word boundaries rather than surrounding your term with characters, so `cat` finds `cat` and does not find `concatenate`. **Match case** is off by default, which is what every reference tool does and what you want almost every time.

## The matches are highlighted separately

A `<textarea>` cannot contain markup, so the highlight lives above the input as real elements with the matches wrapped in `<mark>`.

That is also why the highlighting is built from data — a list of “this run is a match, this one is not” — and never by gluing marker characters into a string and parsing it back out of the DOM.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also writing

- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

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
