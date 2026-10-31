---
title: "Lua Editor"
seo_title: "Lua Editor — Sergey Romanenko"
description: "Write and run Lua 5.4 programs directly in your browser using WebAssembly. Features a full code editor with syntax highlighting, interactive stdin/stdout console, 15+ built-in examples, local snippet persistence, and execution limits for safety. No server, no account, nothing uploaded."
canonical_url: "https://sergeyromanenko.com/tools/lua-editor/"
markdown_url: "https://sergeyromanenko.com/tools/lua-editor/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. Lua Editor

Tools

Tool

# Lua Editor

Write and run Lua 5.4 programs directly in your browser using WebAssembly. Features a full code editor with syntax highlighting, interactive stdin/stdout console, 15+ built-in examples, local snippet persistence, and execution limits for safety. No server, no account, nothing uploaded.

## At a glance

- **Lua version:** 5.4
- **Examples:** 16
- **Runtime:** wasmoon (WASM)
- **Offline support:** Yes

## What you can do

1. **Lua 5.4 via WebAssembly**
  Official Lua 5.4 compiled to WASM using wasmoon — real interpreter, not a transpiler.
2. **Interactive stdin/stdout**
  Real io.read() pauses execution, waits for your input, then resumes. print() and io.write() stream to console.
3. **CodeMirror 6 editor**
  Syntax highlighting, line numbers, bracket matching, auto-indent, Tab support, undo/redo.
4. **15 built-in examples**
  Hello World through coroutines — categorized by difficulty with sample input.
5. **Local snippet library**
  Save named programs to localStorage, load/rename/delete, persists across reloads.
6. **Execution safeguards**
  100k operation limit, Stop button, worker isolation — infinite loops cannot freeze the page.
7. **Runs entirely in your browser**
  No server, no account, no uploads. WASM + Worker + localStorage only.

## How it works

Lua Editor

A complete Lua 5.4 programming environment that runs entirely in your browser via WebAssembly. Write code, run it, interact with it through stdin/stdout, and save your work locally — all without a server.

## The Editor

The editor is built on CodeMirror 6, the same engine that powers the SQL Editor and Code Editor on this site. It provides:

- Lua 5.4 syntax highlighting with the site’s colour palette
- Line numbers and bracket matching
- Automatic indentation (2 spaces) with Tab support
- Undo/redo, find/replace, and standard editor shortcuts
- Monospace font (IBM Plex Mono) at a readable size

The editor starts with a Hello World example so you can run something immediately. Click **Run** (or press Ctrl/Cmd+Enter) to execute.

## Interactive Console

This is not a simple `print()` capture — it’s a real stdin/stdout bridge:

1. Your program runs in a Web Worker, keeping the UI responsive
2. When Lua calls `io.read()`, execution pauses and the **Input** tab shows a prompt
3. Type your value and press **Submit** (or Enter) — the program resumes
4. Output from `print()` and `io.write()` appears in the **Output** tab in real time
5. `io.stderr` is also captured and shown separately

Try the **Interactive Greeting** example to see it in action.

## Execution Safety

- **Operation limit**: 100,000 operations per run (prevents infinite loops)
- **Stop button**: Terminates a running program immediately
- **Reset button**: Clears output and resets the Lua state
- **Worker isolation**: Heavy computation never blocks the main thread

## Built-in Examples

15 curated programs across 6 categories:

**Basics**: Hello World, Interactive Greeting, Calculator **Control Flow**: Number Guessing Game, FizzBuzz, Fibonacci Sequence **Data Structures**: Tables & Arrays, String Utilities **Algorithms**: Sorting Algorithms, Prime Number Checker **Interactive**: Simple Inventory System, Text Adventure **Advanced**: Random Number Generator, Error Handling, Coroutines, Modules & Closures

Each example includes a description, difficulty badge, and sample input where applicable. Load one with a click — it won’t run until you press **Run**.

## Local Persistence

- **Auto-save**: Your current program and input are saved to `localStorage` automatically
- **Named snippets**: Save any program with a custom name, then load/rename/delete from the **Snippets** tab
- **Survives reload**: Close the tab and come back tomorrow — your work is still there
- **No cloud**: Everything stays in your browser; nothing is ever uploaded

## Lua 5.4 Compatibility

The runtime is [wasmoon](https://github.com/ceifa/wasmoon) — the official Lua 5.4 source compiled to WebAssembly with a JavaScript bridge. Supported standard libraries:

- `base` (print, type, pairs, ipairs, etc.)
- `coroutine` (create, resume, yield, status, wrap)
- `math` (all functions, including random with `math.randomseed`)
- `string` (all functions, pattern matching with `%` escapes)
- `table` (insert, remove, sort, concat, pack, unpack, move)
- `utf8` (char, codes, len, offset, codepoint)
- `io` (stdin/stdout/stderr via custom bridge; **file I/O disabled**)
- `os` (clock, date, time, difftime, getenv; **execute/remove/rename disabled**)
- `package` (module loading; **file loading disabled**)
- `debug` (traceback, getinfo, getlocal, setupvalue, etc.)

**Intentionally restricted** for sandbox safety:

- `io.open`, `io.lines`, `io.popen`, `io.tmpfile`, `loadfile`, `dofile` → disabled
- `os.execute`, `os.remove`, `os.rename` → disabled
- File system access → not available

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl/Cmd + Enter` | Run program |
| `Ctrl/Cmd + S` | Save snippet (browser default) |
| `Tab` / `Shift+Tab` | Indent / unindent selection |
| Standard editor keys | Copy, paste, undo, redo, find, select all |

## What It Does Not Do

- No network access, no file system, no child processes
- No package manager (`require` only works for built-in modules)
- No debugger, no step-through, no REPL history
- No multi-user, no sharing links (snippets are local only)
- No mobile app — this is a web page that works on mobile browsers

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also editor

- **[Brainfuck Editor](https://sergeyromanenko.com/tools/brainfuck-editor/)**
  Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete.

  - programming
  - editor
- **[Code Editor](https://sergeyromanenko.com/tools/code-editor/)**
  Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded.

  - editor
- **[Front Matter Editor](https://sergeyromanenko.com/tools/front-matter-editor/)**
  Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it.

  - editor

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [lua](https://sergeyromanenko.com/tools/?tag=lua)
- [programming](https://sergeyromanenko.com/tools/?tag=programming)
- [code editor](https://sergeyromanenko.com/tools/?tag=code+editor)
- [webassembly](https://sergeyromanenko.com/tools/?tag=webassembly)
- [playground](https://sergeyromanenko.com/tools/?tag=playground)
- [learning](https://sergeyromanenko.com/tools/?tag=learning)
- [developer tools](https://sergeyromanenko.com/tools/?tag=developer+tools)
- [editor](https://sergeyromanenko.com/tools/?tag=editor)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
