---
title: "JSON YAML Converter"
seo_title: "JSON YAML Converter — Sergey Romanenko"
description: "Convert JSON to YAML and YAML to JSON in your browser, with configurable indentation and errors that say where to look."
canonical_url: "https://sergeyromanenko.com/tools/json-yaml-converter/"
markdown_url: "https://sergeyromanenko.com/tools/json-yaml-converter/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. JSON YAML Converter

Tools

Tool

# JSON YAML Converter

Convert JSON to YAML and YAML to JSON in your browser, with configurable indentation and errors that say where to look.

## At a glance

- **Directions:** Both
- **YAML schema:** 1.2 core
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **Both directions, one workspace**
  JSON to YAML and YAML to JSON without a page load, with a swap button that takes the output as the next source.
2. **YAML 1.2 core schema**
  yes and no stay strings, and dates stay text — the variant that agrees with JSON, so nothing changes type on the way through.
3. **Errors that say where to look**
  A broken paste reports a line and a column, and your source stays in the editor exactly as it was.
4. **Indentation is yours**
  Two or four spaces for either side, chosen before the conversion rather than fixed after it.
5. **Runs entirely in your browser**
  The parser and the serialiser ship with the page — no request to make and nothing to upload.

## How it works

JSON YAML Converter

Two formats, one workspace. Paste JSON and get YAML, or paste YAML and get JSON. Swap the direction without losing your work, set the indentation, and copy or download whichever side you need.

Everything runs in your browser. Your config is never sent anywhere, and nothing is stored.

## What the converter does about types

JSON and YAML are both widely used and neither is a superset of the other, so some conversions cannot be perfect. This tool is explicit about which ones.

**Preserved both ways**

- Strings, numbers, booleans and null
- Objects (mappings) and arrays (sequences), nested to any depth
- Unicode, escapes and characters that need quoting — `"true"` stays a string rather than becoming the boolean `true`
- Multi-line strings, through YAML’s block scalars
- Date-like text (`2026-10-14`) stays text, because neither format has a date type

**Resolved away**

- **Comments.** YAML has them, JSON does not. A YAML comment is gone after conversion.
- **Anchors, aliases and merge keys.** They describe how a document is written, not what it says, so they are replaced by the values they pointed at.
- **Number notation.** JSON has one number type. `1.0`, `001`, `1e3`, `0x1F` and `0o17` all arrive as `1`, `1`, `1000`, `31` and `15`, because JSON has no way to tell `1.0` from `1`.

**The YAML dialect.** This converter uses the YAML 1.2 *core* schema, which is the variant that agrees with JSON most closely: `yes` and `no` are strings rather than booleans, and a bare date stays text. That choice is what keeps everything listed above intact.

## Why an editor rather than a converter

A converter takes one file and gives you another. This is an editor, because the loop that matters is the small one: change two keys in a config, check the YAML still reads the way you meant, copy it back. The output updates as you type, so that loop costs no page loads and no round trip.

## What it is not

It is not a schema validator and it does not know about Kubernetes, Docker Compose or any other tool’s expectations. It converts between two formats and reports what it lost, which is the part that is usually done by hand.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also data

- **[XML to JSON Converter](https://sergeyromanenko.com/tools/xml-to-json/)**
  Convert XML documents to JSON in your browser, with a documented mapping for attributes, repeated elements and mixed content.

  - json
  - converter
  - data
- **[YAML Formatter](https://sergeyromanenko.com/tools/yaml-formatter/)**
  Validate and format YAML in your browser, with parser errors reported as a line and a column you can find.

  - yaml
  - data
  - configuration
- **[JSON Formatter](https://sergeyromanenko.com/tools/json-formatter/)**
  Validate, format and minify JSON in your browser, with syntax errors reported as a line and a column you can find.

  - json
  - data

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [json](https://sergeyromanenko.com/tools/?tag=json)
- [yaml](https://sergeyromanenko.com/tools/?tag=yaml)
- [converter](https://sergeyromanenko.com/tools/?tag=converter)
- [data](https://sergeyromanenko.com/tools/?tag=data)
- [configuration](https://sergeyromanenko.com/tools/?tag=configuration)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
