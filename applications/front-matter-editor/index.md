---
title: "Front Matter Editor"
seo_title: "Front Matter Editor — Sergey Romanenko"
description: "Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it."
canonical_url: "https://sergeyromanenko.com/applications/front-matter-editor/"
markdown_url: "https://sergeyromanenko.com/applications/front-matter-editor/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. Front Matter Editor

( Tool · Data & Formats )

# Front Matter Editor

Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it.

[Open application](https://app.sergeyromanenko.com/front-matter-editor/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Metadata formats:** YAML · JSON
- **Body preserved:** Exactly
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **Extract, edit, rebuild**
  Split the metadata block off a Markdown document, edit it as YAML or JSON, and get the document back with valid delimiters.
2. **The body does not move**
  Everything after the closing delimiter is preserved byte for byte, including CRLF endings, headings, fences and a --- used as a rule.
3. **Convert the metadata alone**
  YAML to JSON and back, or extract the metadata block as its own file, without rebuilding the document around it.
4. **A metadata error does not eat the document**
  An invalid edit keeps the last value that compiled, so the rebuilt pane never blanks while you are mid-edit.
5. **Runs entirely in your browser**
  Parsing, rebuilding and downloading are local — no request to make and nothing to upload.

## How it works

Front Matter Editor

Markdown documents carry their metadata in a block delimited by `---` lines at the very top of the file. This tool splits that block out so you can edit it, then puts the document back together around it.

Three panes: the whole document, the metadata on its own, and the rebuilt document. The metadata pane is the one you edit, in YAML or JSON.

Everything runs in your browser. Your document is never sent anywhere, and nothing is stored.

## What the delimiters have to be

A `---` on the first line is not enough on its own. It has to be closed by another `---` line, and only then is the text between them metadata. A document that opens a block and never closes it is reported as malformed rather than treated as a horizontal rule, because a forgotten delimiter is far more likely than somebody opening a file with a horizontal rule.

A `---` inside the body is untouched. Only delimiters between the first line and the first closing `---` are metadata; everything after them is the document.

## The body does not move

Extraction takes the body exactly as it was written and reconstruction puts it back unchanged. The first heading, leading blank lines, fenced code blocks and a `---` used as a horizontal rule three paragraphs in all survive, and so do CRLF line endings if your document uses them.

## What formatting does not survive

The metadata is parsed and written back out, which means it is a value by the time it comes back. YAML comments, quoting style and the order of mapping keys live in the source, not in the value, so they are resolved away. A reader who wrote:

```yaml
tags:  # keep this list short
  - travel
```

gets back:

```yaml
tags:
  - travel
```

This is stated here rather than left to be discovered, and the tool says so while you work.

## What you can do with it

- **Extract** a metadata block from a full Markdown document and read it as JSON or YAML.
- **Edit** the metadata and rebuild the document with valid delimiters.
- **Convert** the metadata between YAML and JSON without touching the body.
- **Extract the metadata alone** — as a standalone YAML or JSON file — for the pages that live in a separate file.
- **Go the other way:** paste standalone JSON or YAML metadata and get a valid Front Matter block back.
- **Download** the rebuilt document, the metadata block, or the body on its own.

## Examples

The chips below the editor load six shapes: a blog post, a travel article, a documentation page, an Astro content collection entry, SEO metadata, and a draft held back by a single `draft: true` key. Each one is a real shape rather than a synthetic demo.

## What it is not

It edits YAML Front Matter, which is what Astro, Jekyll and Hugo read. TOML Front Matter — delimited by `+++` — is not supported, because the parser here is the YAML 1.2 core schema and a TOML document would be silently misread as a YAML string rather than rejected. JSON Front Matter delimited by `{` is likewise not supported.

It also does not validate against a schema. An Astro collection has its own required keys; this tool checks that the block parses, not that it satisfies yours.

## Details

- **Access:** Free to use, no account
- **Category:** Data & Formats
- **Kind:** Browser tool
- **Runs in:** Web
- **Year:** 2026
- **Workspace:** app.sergeyromanenko.com

## Related also yaml

- Tool · Text & Writing
  ### [Markdown Editor](https://sergeyromanenko.com/applications/markdown-editor/)
  Write Markdown, preview beautifully rendered HTML in real time, and export high-quality PNG images with customizable scale, padding, backgrounds, and styling.

  - markdown
  - editor
- Tool · Data & Formats
  ### [JSON YAML Converter](https://sergeyromanenko.com/applications/json-yaml-converter/)
  Convert JSON to YAML and YAML to JSON in your browser, with configurable indentation and errors that say where to look.

  - yaml
- Tool · Data & Formats
  ### [YAML Formatter](https://sergeyromanenko.com/applications/yaml-formatter/)
  Validate and format YAML in your browser, with parser errors reported as a line and a column you can find.

  - yaml

## Tags

Follow a tag below to browse other applications filed under it.

- [markdown](https://sergeyromanenko.com/applications/?tag=markdown)
- [front matter](https://sergeyromanenko.com/applications/?tag=front+matter)
- [yaml](https://sergeyromanenko.com/applications/?tag=yaml)
- [metadata](https://sergeyromanenko.com/applications/?tag=metadata)
- [astro](https://sergeyromanenko.com/applications/?tag=astro)
- [editor](https://sergeyromanenko.com/applications/?tag=editor)

Found this application useful? [Support independent development](https://sergeyromanenko.com/support/)
