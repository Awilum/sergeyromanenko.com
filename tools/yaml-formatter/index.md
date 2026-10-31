---
title: "YAML Formatter"
seo_title: "YAML Formatter — Sergey Romanenko"
description: "Validate and format YAML in your browser, with parser errors reported as a line and a column you can find."
canonical_url: "https://sergeyromanenko.com/tools/yaml-formatter/"
markdown_url: "https://sergeyromanenko.com/tools/yaml-formatter/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. YAML Formatter

Tools

Tool

# YAML Formatter

Validate and format YAML in your browser, with parser errors reported as a line and a column you can find.

## At a glance

- **YAML schema:** 1.2 core
- **Duplicate keys:** Error
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **Format and validate in one action**
  A document that does not parse has no indentation to apply, so the same button tells you whether it parses and re-indents it if it does.
2. **Duplicate keys are an error**
  Two keys of the same name are reported with their line, rather than silently merged into last-one-wins.
3. **YAML 1.2 core schema**
  yes and no are strings, not booleans, and a bare date stays text — so nothing changes type while it is formatted.
4. **Order and meaning kept**
  Indentation and quoting change; key order in a mapping is a property of the document and is preserved.
5. **Runs entirely in your browser**
  The parser ships with the page — no request to make and nothing to upload.

## How it works

YAML Formatter

Paste a YAML document, press one button, and get it back with consistent indentation. Formatting and validating are the same operation here: a document that does not parse has no indentation to apply, so the same button tells you whether it parses and re-indents it if it does.

Everything runs in your browser. Nothing is uploaded, and nothing is stored.

## Errors that point at something

The parser reports the line and the column, not a character position, so an error tells you where to look:

```plaintext
Map keys must be unique at line 4, column 1
```

Duplicate keys are an error rather than a last-one-wins merge, because two keys with the same name in a document written by hand is a mistake far more often than it is an override.

Your document is never replaced when parsing fails. The text you pasted stays in the editor exactly as it was, so the error describes a document you can still read and fix.

## The YAML dialect

This formatter uses the YAML 1.2 *core* schema, the variant that agrees with JSON most closely. Two consequences worth knowing:

- `yes` and `no` are **strings**, not booleans. They were booleans in YAML 1.1, which is what a lot of older tooling still assumes.
- A bare `2026-10-14` is **text**, not a date. Converting it to a date is something the parser can only do by picking a timezone, and a timezone it cannot know.

If your tooling expects the 1.1 behaviour, quote those values yourself and this formatter will keep them quoted.

## What formatting changes

Indentation, and nothing else about the meaning. Key order in a mapping is a property of the document, so it is preserved. Sequence markers, block scalars and quoting are rewritten to the canonical form the parser produces, which is why `tags: [a, b]` comes back as a block sequence — the two are equivalent documents, and one of them is what this tool writes.

## What it is not

It is not a converter. Turn a YAML document into JSON with the [JSON ↔ YAML Converter](https://sergeyromanenko.com/tools/json-yaml-converter/).

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also data

- **[JSON Formatter](https://sergeyromanenko.com/tools/json-formatter/)**
  Validate, format and minify JSON in your browser, with syntax errors reported as a line and a column you can find.

  - formatter
  - validator
  - data
- **[JSON YAML Converter](https://sergeyromanenko.com/tools/json-yaml-converter/)**
  Convert JSON to YAML and YAML to JSON in your browser, with configurable indentation and errors that say where to look.

  - yaml
  - data
  - configuration
- **[Front Matter Editor](https://sergeyromanenko.com/tools/front-matter-editor/)**
  Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it.

  - yaml

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [yaml](https://sergeyromanenko.com/tools/?tag=yaml)
- [formatter](https://sergeyromanenko.com/tools/?tag=formatter)
- [validator](https://sergeyromanenko.com/tools/?tag=validator)
- [data](https://sergeyromanenko.com/tools/?tag=data)
- [configuration](https://sergeyromanenko.com/tools/?tag=configuration)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
