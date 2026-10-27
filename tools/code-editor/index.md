---
title: "Code Editor"
seo_title: "Code Editor — Sergey Romanenko"
description: "Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded."
canonical_url: "https://sergeyromanenko.com/tools/code-editor/"
markdown_url: "https://sergeyromanenko.com/tools/code-editor/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Code Editor

Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded.

## At a glance

- **Languages:** 144
- **Share limit:** 2,000 chars
- **Storage:** None
- **Network requests:** None

## What you can do

1. **Share a link, store nothing**
  The whole snippet, compressed into the part of the URL after the #, which no browser ever sends to a server. There is no account, no database and no record of what you shared.
2. **144 languages, one keystroke each**
  CodeMirror's own catalogue with aliases and file extensions attached, filtered as you type. Choosing a language fetches that grammar and nothing else.
3. **The image matches the screen**
  The PNG is drawn from the syntax tree the highlighter already built, out of the same colour table, so the file cannot drift from what you were looking at.
4. **Nothing runs, nothing is kept**
  No Run button, because nothing here executes your code. Close the tab and the only thing left is what you copied or downloaded.
5. **Up to 2,000 characters per link**
  Past that the editor says so and keeps every character. Editing and the PNG export carry on regardless.

## How it works

Code Editor

Write a snippet, pick the language it is written in, and take it somewhere. Three things come out of here: a PNG image you can post, the same image on your clipboard, and a link somebody else can open and land on exactly what you were looking at.

The editor is CodeMirror, the same one the SQL Editor and the Markdown Editor use, so the caret, the selection and the undo history behave the way they do in any other code editor. It opens empty and stays that way: there is no sample snippet and nothing to load. You came here with code, or to paste some, and the box is yours. It starts ten lines tall and grows as you write, so a one-liner does not arrive inside a scrolling panel and a long one does not push the buttons off the page.

The language list is not a hand-picked dozen. It is CodeMirror’s own catalogue, every language it ships a grammar for, with their aliases and file extensions already attached, filtered as you type: `js` finds JavaScript, `py` finds Python, `tsx` finds TSX, and `bash` finds Shell. Choosing one fetches that grammar and nothing else, so a page you never leave JavaScript on never downloads a Python parser.

What is missing is missing on purpose. There is no entry for GraphQL, Solidity, Move or Elixir, because CodeMirror ships no grammar for them, and an entry that highlighted them badly would be worse than an honest absence. JSON with Comments is not here either: the JSON mode does not parse comments, so offering it would have been a promise the grammar does not keep. Search for a language this editor does not have and it tells you the list is the limit.

## What a link carries, and what it does not

A share link is the whole state, compressed into the part of the URL after the `#`. That part is never sent to a server: a browser does not put it in a request line, so opening a link asks this site for a page and nothing else. The code, the language, whether line numbers are on and every export setting all travel in it, and the recipient’s image matches the one you would have made.

What it does not carry is a reference. There is no identifier to look up, no record kept, and nothing to delete later, because nothing was ever stored. The consequence is worth stating plainly: a share link contains the code itself, so anyone who has the link can read the code. Compressed is not encrypted. If a snippet is a secret, send the image.

Sharing is capped at 2,000 characters of source, and a snippet over the cap is told so rather than quietly trimmed. Nothing is ever shortened to make a link fit: the editor keeps every character, the PNG export still works, and the only thing lost is the link.

## The image

The picture is drawn from the editor as it stands, reading the syntax tree the highlighter already built, which is why what you see is what the file contains. The colours in the image and the colours on the screen come from one table, so they cannot drift apart.

Long lines fold onto the next one rather than being cut at the window edge. An image that truncates a line is worse than no image, because nothing in it says the rest exists. The window is the same cream whatever background you pick, so every colour stays readable on every setting.

## What it does not do

There is no Run button, and that is deliberate. Nothing here executes the code you write, on this page or anywhere else. There is no account, no history, no snippet library and no cloud copy either: close the tab and the only thing left is what you copied or downloaded.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also editor

- **[Markdown Editor](https://sergeyromanenko.com/tools/markdown-editor/)**
  Write Markdown, preview beautifully rendered HTML in real time, and export high-quality PNG images with customizable scale, padding, backgrounds, and styling.

  - editing
  - export
  - editor
- **[SQL Editor](https://sergeyromanenko.com/tools/sql-editor/)**
  Write and run SQLite against a database that lives in this tab: build one from a schema script or open a .sqlite file, read results as a table, Markdown, JSON or YAML, and save the database back out as a file.

  - editing
  - editor
- **[Brainfuck Editor](https://sergeyromanenko.com/tools/brainfuck-editor/)**
  Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete.

  - editor

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [code](https://sergeyromanenko.com/tools/?tag=code)
- [editing](https://sergeyromanenko.com/tools/?tag=editing)
- [editor](https://sergeyromanenko.com/tools/?tag=editor)
- [syntax highlighting](https://sergeyromanenko.com/tools/?tag=syntax+highlighting)
- [snippets](https://sergeyromanenko.com/tools/?tag=snippets)
- [export](https://sergeyromanenko.com/tools/?tag=export)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
