---
title: "Pseudocode Editor"
seo_title: "Pseudocode Editor — Sergey Romanenko"
description: "Write, run and inspect Cambridge 9618 pseudocode in your browser. Insert ready-made blocks, load 36 examples, and watch output and variables update."
canonical_url: "https://sergeyromanenko.com/tools/pseudocode-editor/"
markdown_url: "https://sergeyromanenko.com/tools/pseudocode-editor/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. Pseudocode Editor

Tools

Tool

# Pseudocode Editor

Write, run and inspect Cambridge 9618 pseudocode in your browser. Insert ready-made blocks, load 36 examples, and watch output and variables update.

## At a glance

- **Dialect:** Cambridge 9618
- **Examples:** 36
- **Building blocks:** 30
- **Offline support:** Yes

## What you can do

1. **Cambridge 9618 dialect**
  Declarations, assignment, selection, loops, arrays, procedures, functions and the built-in functions used in the 9618 specification.
2. **Building blocks**
  30 ready-made templates for declarations, input and output, conditions, loops, arrays, procedures and functions.
3. **CodeMirror editor**
  Syntax highlighting, line numbers, bracket matching, three-space indentation, undo and redo.
4. **Interactive input and output**
  INPUT pauses for a value when the queue is empty, and OUTPUT appears as it is produced.
5. **Variables inspector**
  Every variable in scope, with its type, current value and frame. Arrays display their elements.
6. **Built-in examples**
  36 complete programs across 5 groups, each with a note and expected output.
7. **Execution safeguards**
  Step, iteration, call depth and output limits stop runaway programs.
8. **Runs entirely in your browser**
  The interpreter runs in memory. No server, no uploads and no account required.

## How it works

An in-browser implementation of the Cambridge International AS & A Level Computer Science (9618) pseudocode dialect. Write a program, insert a ready-made block when it helps, run it, and read the output and variables in the same workspace.

The editor opens with Hello, world loaded. Run it with the button or with Ctrl/Cmd and Enter. The program stays on the left, while input, output and variables sit on the right. Nothing is uploaded.

## The Language

This editor implements the core statements and expressions used in the 9618 syllabus and exam inserts:

- **Declarations**: `DECLARE`, `CONSTANT`, typed variables and arrays with custom bounds
- **Assignment**: `←` (or `<-`) with type checking
- **Arithmetic**: `+`, `-`, `*`, `/`, `DIV`, `MOD`, `^`
- **Logic**: `AND`, `OR`, `NOT`
- **Selection**: `IF ... THEN ... ELSE ... ENDIF`, `CASE OF ... OTHERWISE ... ENDCASE`
- **Iteration**: `FOR ... TO ... STEP ... NEXT`, `WHILE ... ENDWHILE`, `REPEAT ... UNTIL ... ENDREPEAT`
- **Procedures and functions**: `PROCEDURE ... ENDPROCEDURE`, `FUNCTION ... RETURNS ... ENDFUNCTION`, with `BYVAL` and `BYREF` parameters
- **Input and output**: `INPUT` with prompts, `OUTPUT` joining items without separators
- **Arrays**: 1- and 2-dimensional with custom lower and upper bounds
- **Strings and characters**: `&` concatenation, `LENGTH`, `LEFT`, `RIGHT`, `MID`, `UCASE`, `LCASE`, `ASC`, `CHR`
- **Numbers and conversions**: `INT`, `RAND`, `SQRT`, `ABS`, `NUM_TO_STR`, `STR_TO_NUM`, `IS_NUM`
- **Dates**: `DAY`, `MONTH`, `YEAR`, `DAYINDEX`, `SETDATE`, `TODAY` in DD/MM/YYYY format

The interpreter works with values in memory. Cambridge file statements such as `OPENFILE`, `READFILE`, `WRITEFILE`, `CLOSEFILE`, `SEEK`, `GETRECORD` and `PUTRECORD` are not implemented.

The editor is **not affiliated with or endorsed by Cambridge International**. It is an independent implementation for educational purposes.

## The Workspace

### Program

The program editor uses CodeMirror with line numbers, syntax highlighting, bracket matching, three-space indentation, undo and redo. It is the source the interpreter runs. Ctrl/Cmd and Enter runs the current program.

### Building Blocks

The Insert bar above the editor offers quick versions of the most common statements. The All blocks button opens the full set, grouped into variables and constants, input and output, assignment, selection, loops, procedures and functions, and arrays. The 30 templates include:

- declarations for each scalar type, constants and arrays
- assignment, counter updates and array element writes
- output with text or values, input with or without a prompt, and comments
- IF, IF/ELSE, IF/ELSEIF/ELSE and CASE OF
- FOR, FOR with STEP, WHILE, and REPEAT/UNTIL
- procedures, procedures with parameters, functions, calls and RETURN
- filling and traversing an array

Every block is valid pseudocode. It is inserted at the cursor, or it replaces the current selection. The editor adds the surrounding line breaks and indentation, then selects the first editable part so you can type over it. The block remains ordinary editable code.

### Input, Output and Variables

The Input panel holds one value per line. Values are consumed in the order the program reaches `INPUT`. When the queue is empty, execution pauses, the panel shows the program’s prompt, and the field takes focus. An invalid value is rejected and the program stays on the same instruction.

Output streams into the Output panel as the program runs. The Variables panel shows each variable in scope with its type, current value and frame. Arrays display their elements. Loop counters are highlighted, and the call stack appears below the table when more than one frame is active.

### Examples

The Examples disclosure below the workspace contains 36 complete programs in five groups: Fundamentals, Control flow, Data structures, Algorithms, and Functions and procedures. Each example includes a short note, its expected output and whether it needs input. Loading an example replaces the program and the input queue, then leaves the editor ready to run.

## Run, Stop, Reset, Clear and Download

- **Run**: Starts a fresh session with the current program and the values in the Input panel. It runs to completion, until `INPUT` needs a value, or until a limit is reached.
- **Stop**: Available while a program is running or waiting for input. It stops the run and leaves the output and variables at the point reached.
- **Reset**: Returns the current program to its first statement. The program and input stay in place; the output clears.
- **Clear**: Empties the program, input and output.
- **Download**: Saves the current editor contents as `pseudocode.txt`.

## Execution Limits

The interpreter enforces finite limits so a runaway program cannot freeze the page:

- 100,000 steps total
- 100,000 iterations per loop
- 1,000 call depth
- 100,000 array elements
- 1,000,000 output characters

Exceeding a limit stops execution with a message that names the limit.

## Privacy and Offline Use

The interpreter runs entirely in your browser. The program, input, output and variables are held in memory and are not uploaded to a server. Closing the tab removes them from the page. No account is required.

## Keyboard Shortcuts

- **Ctrl/Cmd + Enter**: Run the program
- **Tab**: Indent in the editor
- **Ctrl/Cmd + Z**: Undo
- **Ctrl/Cmd + Shift + Z**: Redo

## What It Does Not Do

- **No step debugger**: Programs run to completion, to `INPUT`, or to a limit. Stop is available, but there is no single-statement Step control or trace table.
- **No file I/O**: The Cambridge file statements listed above are not part of this implementation.
- **No persistent storage**: Programs are not saved between visits and there is no share link.
- **No network access**: The interpreter cannot make HTTP requests.
- **No multi-threading**: Execution is single-threaded.
- **Not a compiler**: Code is interpreted, not translated to machine code.
- **Not an IDE**: There is no project management, Git integration or debugger beyond the current run.
- **No Cambridge endorsement**: This is an independent educational tool.

## References

- Cambridge International AS & A Level Computer Science (9618) syllabus
- Cambridge International AS & A Level Computer Science (0478) syllabus
- Cambridge 9618/21 Paper 2 Insert (May/June 2026 examination series onward)
- *This editor is an independent implementation and is not affiliated with or endorsed by Cambridge Assessment International Education.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also editor

- **[Brainfuck Editor](https://sergeyromanenko.com/tools/brainfuck-editor/)**
  Write and execute Brainfuck programs in the browser with an interactive editor, execution controls, and input/output handling. Brainfuck is an esoteric, minimalist programming language with only 8 commands that is Turing complete.

  - interpreter
  - editor
- **[Code Editor](https://sergeyromanenko.com/tools/code-editor/)**
  Write a code snippet in the browser, highlight it in the language you pick, share it as a link that carries the code itself, and save it as a PNG image. Nothing is uploaded.

  - editor
- **[Front Matter Editor](https://sergeyromanenko.com/tools/front-matter-editor/)**
  Extract, edit and convert the Front Matter metadata block at the top of a Markdown document, then rebuild the document around it.

  - editor

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [pseudocode](https://sergeyromanenko.com/tools/?tag=pseudocode)
- [cambridge](https://sergeyromanenko.com/tools/?tag=cambridge)
- [9618](https://sergeyromanenko.com/tools/?tag=9618)
- [education](https://sergeyromanenko.com/tools/?tag=education)
- [algorithms](https://sergeyromanenko.com/tools/?tag=algorithms)
- [editor](https://sergeyromanenko.com/tools/?tag=editor)
- [interpreter](https://sergeyromanenko.com/tools/?tag=interpreter)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
