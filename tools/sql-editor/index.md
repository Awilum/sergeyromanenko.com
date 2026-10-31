---
title: "SQL Editor"
seo_title: "SQL Editor — Sergey Romanenko"
description: "Write and run SQLite against a database that lives in this tab: build one from a schema script or open a .sqlite file, read results as a table, Markdown, JSON or YAML, and save the database back out as a file."
canonical_url: "https://sergeyromanenko.com/tools/sql-editor/"
markdown_url: "https://sergeyromanenko.com/tools/sql-editor/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. SQL Editor

Tools

Tool

# SQL Editor

Write and run SQLite against a database that lives in this tab: build one from a schema script or open a .sqlite file, read results as a table, Markdown, JSON or YAML, and save the database back out as a file.

## At a glance

- **Engine:** SQLite
- **Result formats:** 6
- **Database:** In memory
- **Network requests:** None

## What you can do

1. **SQLite, in this tab**
  The engine is compiled to WebAssembly and starts when the page does. The database is in memory, and closing the tab is what deletes it.
2. **A schema that keeps up**
  Tables, columns, types and primary keys are read back from the database after every run, so an object created a moment ago is in the explorer before you have looked for it.
3. **Four formats, one result**
  A table to read, Markdown for a document, JSON or YAML for whatever will be parsed. Switching between them re-runs nothing.
4. **The database goes out as a file**
  The download writes the database itself rather than the script that built it, so the tables, indexes, views and triggers are in the file and it opens in any SQLite application. Import reads one back in.
5. **A query, or a whole session**
  A query link carries your SQL. A session link also carries the script that rebuilds the database, which runs only when you press the button.
6. **Nothing leaves the tab**
  There is no server, no account and no upload: the engine, the database and the sharing are all here.

## How it works

SQL Editor

SQLite runs here as it does anywhere else, in a database that lives in this tab and is never uploaded. Write a query, run it, and read what came back.

The page opens with a small dataset already loaded, so the first query has something to answer. Run SQL from the button or with Ctrl/Cmd and Enter, and the result arrives as a table you can switch to Markdown, JSON or YAML. The explorer under the editor lists every table in the database with its columns, types and keys, and puts a query for any of them at your cursor.

## Building and emptying the database

The Database section holds the script the database was built from. Press Build database and it runs against a new empty database rather than the live one, so running it twice gives you one database instead of two copies of the rows.

A statement that fails stops its own run and leaves the statements before it applied, which is what SQLite has already done by the time it reports the error. The message appears beside the results, and the editor, the database and the other controls all stay where they were.

Reset database empties it. Load sample data puts the sample dataset back. Both say what they are about to discard before they do it, because a browser dialog cannot be styled and cannot be reached from the button that opened it.

## Taking the database with you

Import SQLite file opens a database you already have. The schema script is replaced with a dump of it afterwards, so the script on screen always builds the database that is running.

Download SQLite Database goes the other way. It writes the database itself rather than the script that built it, so the tables, the rows, the primary and foreign keys, the indexes, the views and the triggers are all in the file, and any SQLite application can open it. Name it and choose `.sqlite` or `.db` before you press the button; both are the names the tool reads and writes.

## Sharing a query, or a whole session

A query can be shared as a link that carries your SQL, compressed into the address bar the same way the other tools on this site do it. A database cannot travel in a URL, so a session link carries the SQL plus the script that rebuilds the database it was written against. The script arrives as text and runs only when you press the button: nothing in a shared link executes on its own.

## What it does not do

SQLite runs here as it does anywhere, with two limits worth naming. A BLOB is summarised by size rather than dumped into a table, and integers past 2^53 lose precision, because that is how the engine hands numbers to JavaScript. A query that runs forever will hold this tab while it runs: there is no worker and no query timeout, so a heavy query is on you.

The download is a snapshot of the moment you press the button. Nothing else can write to the database while the tab is closed, because closing the tab is what deletes it.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also editor

- **[Code Editor](https://sergeyromanenko.com/tools/code-editor/)**
  Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded.

  - editing
  - editor
- **[Markdown Editor](https://sergeyromanenko.com/tools/markdown-editor/)**
  Write Markdown, preview beautifully rendered HTML in real time, and export high-quality PNG images with customizable scale, padding, backgrounds, and styling.

  - editing
  - editor
- **[Brainfuck Editor](https://sergeyromanenko.com/tools/brainfuck-editor/)**
  Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete.

  - editor

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [sql](https://sergeyromanenko.com/tools/?tag=sql)
- [databases](https://sergeyromanenko.com/tools/?tag=databases)
- [editing](https://sergeyromanenko.com/tools/?tag=editing)
- [query](https://sergeyromanenko.com/tools/?tag=query)
- [editor](https://sergeyromanenko.com/tools/?tag=editor)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
