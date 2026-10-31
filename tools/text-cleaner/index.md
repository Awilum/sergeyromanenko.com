---
title: "Text Cleaner"
seo_title: "Text Cleaner — Sergey Romanenko"
description: "Clean text pasted from a web page, PDF or spreadsheet — collapse whitespace, fix line endings, find invisible characters and strip HTML."
canonical_url: "https://sergeyromanenko.com/tools/text-cleaner/"
markdown_url: "https://sergeyromanenko.com/tools/text-cleaner/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Text Cleaner

# Text Cleaner

Clean text pasted from a web page, PDF or spreadsheet — collapse whitespace, fix line endings, find invisible characters and strip HTML.

## At a glance

- **Operations:** 17
- **Invisible classes:** 6
- **HTML parsing:** DOMParser
- **Offline support:** Yes

## What you can do

1. **Seventeen named operations**
  Each one is a separate button rather than a checkbox in a stack, because these compose and you should see which step removed what.
2. **Invisible characters, counted**
  Non-breaking spaces, soft hyphens, byte-order marks and zero-width characters are reported with their counts — and never removed without your say-so.
3. **HTML parsed, not pattern-matched**
  Tags are removed with the browser’s own parser, so a pasted script never runs and paragraphs do not run together.
4. **Context-aware quotes**
  Straight quotes become curly ones with the right one chosen from the surrounding text, and contractions and possessives stay straight.
5. **Your line endings survive**
  Cleaning a Windows file does not silently rewrite it as Unix unless you ask for that.

## How it works

Text Cleaner

Text arrives from somewhere else. A web page whose CSS collapsed into a wall of non-breaking spaces. A PDF whose extractor hard-wrapped every line. A spreadsheet that filled one cell with newlines. A CMS that stored a byte-order mark at the front of a file.

Each operation here exists because of one of those. None of them is a general “clean everything” button, and the reason is below.

Everything runs in your browser. Your text is never overwritten, never sent anywhere and never saved.

## There is no “clean everything”

Every cleaner surveyed has a one-click preset. It is the most dangerous control in any of them, because eleven transformations applied at once will eventually remove the one thing you wanted — a blank line that separated two sections, a tab that was indentation in a code listing, a character that was part of a name.

So these are sixteen separate buttons, each saying what it does, each marked **may delete** when it can remove characters. You press them in the order that makes sense for your text, the chain is listed above the result, and nothing is applied until you have seen what happened.

**Order matters and it is yours.** Collapsing spaces first turns each blank line into a line holding a single space — which is not empty, and therefore survives the “remove empty lines” you press next. Dropping the blanks first gives two lines that collapse to a space each. Neither is a bug.

## Invisible characters are counted, not removed

This is the part most worth reading. Text pasted from a web page often contains characters you cannot see, and they are frequently the cause of the problem you are trying to fix — a paragraph that will not wrap, a comparison that says two identical strings differ.

The inspector lists what is in your text, how many of each, and its code point. It removes nothing on its own.

**Two of these classes are functional, and removing them breaks text.** A zero-width non-joiner is how a Persian or Devanagari word is shaped; strip them and the word stops being a word. A zero-width joiner is what makes 👨👩👧👦 one emoji rather than four people standing next to each other. Both are listed separately, with that warning attached, and both need a deliberate click.

Non-breaking spaces are the opposite case: they are almost always damage, and they are **replaced with a real space** rather than deleted — deleting them would weld `a` and `b` together and create a word problem while fixing a wrapping one.

| What you find | What it is | Removing it |
| --- | --- | --- |
| Non-breaking spaces | A space that refuses to wrap | Replaced with a normal space |
| Soft hyphens | A hyphen the layout hid | Safe — they reappear when needed |
| Byte-order marks | An exporter’s signature, invisible | Safe, and it stops two identical texts comparing as different |
| Zero-width spaces | **Functional in Persian and Indic scripts** | Only if your text is not in one |
| Bidirectional marks | Arabic and Hebrew direction overrides | Harmless to Latin text, load-bearing to text that uses them |
| Variation selectors | A request for one particular glyph form | Changes which glyph is shown |

## HTML is parsed, not pattern-matched

The **Remove HTML** operation uses the browser’s own parser rather than a regular expression, and that matters twice.

Once: a regex strips `<[^>]*>`, so `one</p><p>two` becomes `onetwo`. The DOM knows `</p>` is a block boundary and gives you two lines.

Twice, and more importantly: parsing builds a **detached document**. Nothing is inserted into the live page and no event fires, so a `<script>` in your pasted markup cannot execute and a remote image cannot be fetched. That is the reason this is not a tag-stripping regex, and it is also why a textarea with HTML in it is safe to paste here.

`<script>`, `<style>` and `<noscript>` content is dropped first — that is code, not prose, and leaving it in would paste a stylesheet into your document.

## Quotes, in both directions

**Smart quotes** are context-aware: a quote is opening when it follows the start of the text, whitespace or an opening bracket, and closing otherwise. So `He said "hello" and left.` becomes `He said “hello” and left.`

The three cases a naive converter gets wrong are handled explicitly, because they are the reason people distrust the operation:

- **Contractions.** `don't` keeps a straight apostrophe. Curling it puts a typographic character into a text file, where nothing that later reads the file is expecting one.
- **Possessives.** `dogs'` is the same apostrophe wearing a different hat.
- **Decades.** `'90s` and the `'60s` in a citation are apostrophes.

**Straight quotes** goes the other way, flattening curly quotes, guillemets and primes to their plain equivalents — which is what you want before pasting something into a terminal.

## Your line endings survive

Cleaning a file that uses Windows line endings does not silently rewrite it as Unix. The operations that work line by line preserve the terminator the document already used, and a trailing newline stays a trailing newline.

Converting is a separate, explicit operation, because it is a change to the file rather than a cleanup of it.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also text formatting

- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - writing
  - text formatting
- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing
  - text formatting
- **[Text Formatter](https://sergeyromanenko.com/tools/text-formatter/)**
  Add line numbers, wrap text at a column, add prefixes and suffixes, indent, and turn lines into a bulleted or numbered list.

  - writing
  - text formatting

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [writing](https://sergeyromanenko.com/tools/?tag=writing)
- [cleanup](https://sergeyromanenko.com/tools/?tag=cleanup)
- [text formatting](https://sergeyromanenko.com/tools/?tag=text+formatting)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
