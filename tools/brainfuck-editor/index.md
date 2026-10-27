---
title: "Brainfuck Editor"
seo_title: "Brainfuck Editor — Sergey Romanenko"
description: "Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete."
canonical_url: "https://sergeyromanenko.com/tools/brainfuck-editor/"
markdown_url: "https://sergeyromanenko.com/tools/brainfuck-editor/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Brainfuck Editor

Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete.

## At a glance

- **Access:** Free
- **Runs in:** Web
- **Tags:** 5
- **Offline support:** Yes

## What you can do

1. **Eight commands**
  Standard Brainfuck instruction set.
2. **Runs offline**
  Everything runs in your browser.
3. **Input/output**
  Supports program input and output.
4. **Safe limits**
  Execution safeguards prevent runaway programs.
5. **Example programs**
  Ready-made Brainfuck programs to explore.
6. **Interactive**
  Run and inspect examples directly.

## How it works

## Brainfuck Editor

Write and run Brainfuck programs in the browser. The interpreter runs entirely client-side in JavaScript, with execution limits to prevent browser hangs. No data is sent to any server.

## What Brainfuck is

Brainfuck is an esoteric, minimalist programming language created in 1993 by Swiss student Urban Müller. The design goal was the smallest possible compiler (the original Amiga compiler was 240 bytes). Despite containing only eight single-character commands, Brainfuck is Turing complete: in principle it can compute any computable function, given unbounded memory and time. Urban Müller released it as a challenge to programmers; it is not intended for practical software production.

A Brainfuck program operates on a one-dimensional tape of memory cells, indexed from zero and extending to the right. In the canonical abstract machine the tape is unbounded; practical implementations (including this one) allocate a fixed finite array, commonly at least 30,000 cells of one byte each. Each cell holds an unsigned 8-bit value (0–255) and is initialised to zero. Arithmetic wraps modulo 256, so incrementing 255 produces 0 and decrementing 0 produces 255. A single data pointer starts at cell 0. All input and output uses the ASCII character encoding. Every character in a source file that is not one of the eight commands is ignored, which is how comments are written.

## Commands

| Command | Effect |
| --- | --- |
| `>` | Increment the data pointer (move right one cell). |
| `<` | Decrement the data pointer (move left one cell). Undefined behaviour moving left from cell 0. |
| `+` | Increment the current byte, wrapping at 256. |
| `-` | Decrement the current byte, wrapping at 256. |
| `.` | Output the current byte (as an ASCII character). |
| `,` | Read one byte of input and store it in the current cell. If no input remains, the cell is set to 0 (this is an implementation choice; the language does not fix EOF behaviour). |
| `[` | If the current byte is zero, jump the instruction pointer forward to the command after the matching `]`. |
| `]` | If the current byte is nonzero, jump the instruction pointer backward to the command after the matching `[`. |

`[` and `]` must be properly matched; the interpreter reports an error for unmatched brackets.

## How to use

### 1. Writing a program

Enter Brainfuck source into the left-hand editor. Non-command characters are comments and are ignored. Example:

```plaintext
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
```

Click **Run** to execute. The interpreter stops automatically at 100,000 operations to prevent infinite loops from freezing the browser, and reports an error if the pointer leaves the 0–29,999 cell range.

### 2. Supplying input

Programs that use `,` read from the **Input** panel on the right. Bytes are consumed one at a time in ASCII order; when input runs out the cell is set to 0. Drag-style input is not supported: paste or type the entire byte sequence, then run.

### 3. Reading output

The **Output** panel shows the characters printed by `.` as the program runs. The execution details panel below reports the number of operations executed, completion status, and any error.

### 4. Loading examples

The examples panel below lists verified programs. Clicking a button loads its source (and, where needed, its input) into the editor, and shows the program’s expected output. All built-in examples have been executed through this project’s interpreter and produce their documented results.

## Built-in examples

- **Hello World**: Prints “Hello World!” followed by a newline. The canonical introduction to Brainfuck.
- **Echo Input**: Reads input byte by byte and writes it straight back, until end-of-input.
- **Counting Digits**: Prints the digits 0 through 9 using a loop and an incrementing character cell.
- **Add Two Values (5 + 3)**: Reads two bytes, adds one to the other, and prints the resulting byte value (8).
- **Add Values (Wikipedia: 2 + 5 = 7)**: Demonstrates an addition loop followed by a second loop to build the printable ASCII digit.
- **Copy and Print Twice**: Reads one byte and prints it twice, demonstrating data movement between cells.
- **Cell Overflow (255 + 1)**: A cell incremented past 255 wraps to 0, illustrating modulo-256 arithmetic.
- **Cell Underflow (0 − 1)**: A cell decremented below 0 wraps to 255.
- **Memory Initialisation**: Sets three adjacent cells to the character codes for A, B and C, then prints them.
- **Repeat a Character**: Prints the letter A five times, reinitialising the output cell each iteration.

## Why use this editor

- **Everything runs locally**: Programs execute in your browser; nothing is sent to a server and no account is required.
- **Safe by default**: A 100,000-operation cap and a 30,000-cell, 8-bit memory model prevent runaway programs from freezing the tab. Pointer out-of-bounds access produces a clear error instead of silently corrupting memory.
- **Verifiable examples**: Each built-in program was run through this interpreter against its documented output; unmatched brackets, out-of-bounds access, and execution-limit breaches raise readable errors.
- **Correct semantics on paper**: Cell size, wraparound, pointer bounds, and EOF handling are documented above so what you run matches what the Brainfuck language is, rather than an undocumented variant.

## Privacy

No network requests are made. Programs and input never leave your device, and nothing is stored server-side. Clearing the browser clears your work.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also editor

- **[Lua Editor](https://sergeyromanenko.com/tools/lua-editor/)**
  Write and run Lua 5.4 programs directly in your browser using WebAssembly. Features a full code editor with syntax highlighting, interactive stdin/stdout console, 15+ built-in examples, local snippet persistence, and execution limits for safety. No server, no account, nothing uploaded.

  - programming
  - editor
- **[Pseudocode Editor](https://sergeyromanenko.com/tools/pseudocode-editor/)**
  Write, run and inspect Cambridge 9618 pseudocode in your browser. Insert ready-made blocks, load 36 examples, and watch output and variables update.

  - editor
  - interpreter
- **[Code Editor](https://sergeyromanenko.com/tools/code-editor/)**
  Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded.

  - editor

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [brainfuck](https://sergeyromanenko.com/tools/?tag=brainfuck)
- [esoteric](https://sergeyromanenko.com/tools/?tag=esoteric)
- [programming](https://sergeyromanenko.com/tools/?tag=programming)
- [interpreter](https://sergeyromanenko.com/tools/?tag=interpreter)
- [editor](https://sergeyromanenko.com/tools/?tag=editor)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
