---
title: "JSON Formatter"
seo_title: "JSON Formatter — Sergey Romanenko"
description: "Validate, format and minify JSON in your browser, with syntax errors reported as a line and a column you can find."
canonical_url: "https://sergeyromanenko.com/tools/json-formatter/"
markdown_url: "https://sergeyromanenko.com/tools/json-formatter/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. JSON Formatter

# JSON Formatter

Validate, format and minify JSON in your browser, with syntax errors reported as a line and a column you can find.

## At a glance

- **Indent options:** 2 · 4
- **Actions:** 3
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **Format, minify, validate**
  Three actions over one editor: pretty-print at the indentation you choose, strip every legal space, or just check that it parses.
2. **Errors converted to line and column**
  A character position is useless against a config file, so every error is turned into somewhere a reader can actually look.
3. **The source survives a failure**
  A document that does not parse is left in the editor untouched, so the error describes text you can still fix.
4. **Two indents, both of them real**
  Two spaces for a repository, four for a document a person is going to read.
5. **Runs entirely in your browser**
  No request to make and nothing to upload — JSON.parse and JSON.stringify are the browser's own.

## How it works

JSON Formatter

Paste JSON, press one button, and get it back either prettified at the indentation you chose or minified to a single line. Validation runs on every action, so the same paste that formats is also the paste that is checked.

Everything runs in your browser. Nothing is uploaded, and nothing is stored.

## What each button does

- **Format** — parses the text and writes it back indented. Parsing is what makes this the same as validating: a document that does not parse has no indentation to apply.
- **Minify** — removes every legal space between tokens and keeps the data. Comments are not inserted by this process because JSON has none to begin with.
- **Validate** — parses and reports only whether it parsed, without changing the document.

Indentation is yours: 2 spaces for source control, 4 spaces for a document that is going to be read by a person.

## Errors that point at something

`JSON.parse` reports a character *position*, which is useless when you are looking at the fifth line of a config file. Every error raised here is converted to a line and a column first, so:

```plaintext
Unexpected token } in JSON at position 148 (line 12, column 3)
```

The source is never replaced when parsing fails — the text you pasted stays in the editor exactly as it was, so the error describes a document you can still read and fix.

## What it is not

It is not a schema validator: `{"port": "8080"}` where `"8080"` should be a number is valid JSON and this tool accepts it. Checking what a document *means* is a different job from checking that it parses.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also data

- **[YAML Formatter](https://sergeyromanenko.com/tools/yaml-formatter/)**
  Validate and format YAML in your browser, with parser errors reported as a line and a column you can find.

  - formatter
  - validator
  - data
- **[JSON YAML Converter](https://sergeyromanenko.com/tools/json-yaml-converter/)**
  Convert JSON to YAML and YAML to JSON in your browser, with configurable indentation and errors that say where to look.

  - json
  - data
- **[XML to JSON Converter](https://sergeyromanenko.com/tools/xml-to-json/)**
  Convert XML documents to JSON in your browser, with a documented mapping for attributes, repeated elements and mixed content.

  - json
  - data

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [json](https://sergeyromanenko.com/tools/?tag=json)
- [formatter](https://sergeyromanenko.com/tools/?tag=formatter)
- [validator](https://sergeyromanenko.com/tools/?tag=validator)
- [minifier](https://sergeyromanenko.com/tools/?tag=minifier)
- [data](https://sergeyromanenko.com/tools/?tag=data)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
