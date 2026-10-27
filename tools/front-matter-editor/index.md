---
title: "Front Matter Editor"
seo_title: "Front Matter Editor — Sergey Romanenko"
description: "Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it."
canonical_url: "https://sergeyromanenko.com/tools/front-matter-editor/"
markdown_url: "https://sergeyromanenko.com/tools/front-matter-editor/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Front Matter Editor

Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it.

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

The metadata is parsed and written back out, which means it is a *value* by the time it comes back. YAML comments, quoting style and the order of mapping keys live in the source, not in the value, so they are resolved away. A reader who wrote:

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
- **Runs in:** Web
- **Year:** 2026

## Related also editor

- **[Markdown Editor](https://sergeyromanenko.com/tools/markdown-editor/)**
  Write Markdown, preview beautifully rendered HTML in real time, and export high-quality PNG images with customizable scale, padding, backgrounds, and styling.

  - markdown
  - editor
- **[Brainfuck Editor](https://sergeyromanenko.com/tools/brainfuck-editor/)**
  Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete.

  - editor
- **[Code Editor](https://sergeyromanenko.com/tools/code-editor/)**
  Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded.

  - editor

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [markdown](https://sergeyromanenko.com/tools/?tag=markdown)
- [front matter](https://sergeyromanenko.com/tools/?tag=front+matter)
- [yaml](https://sergeyromanenko.com/tools/?tag=yaml)
- [metadata](https://sergeyromanenko.com/tools/?tag=metadata)
- [astro](https://sergeyromanenko.com/tools/?tag=astro)
- [editor](https://sergeyromanenko.com/tools/?tag=editor)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
