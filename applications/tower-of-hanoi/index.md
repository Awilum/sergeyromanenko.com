---
title: "Tower of Hanoi"
seo_title: "Tower of Hanoi — Sergey Romanenko"
description: "Solve the classic Tower of Hanoi puzzle. Move disks between three pegs following the rules. Multiple difficulty levels, move counter, optimal solution tracker, hints, and step-by-step solution mode."
canonical_url: "https://sergeyromanenko.com/applications/tower-of-hanoi/"
markdown_url: "https://sergeyromanenko.com/applications/tower-of-hanoi/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. Tower of Hanoi

( Game · Games & Puzzles )

# Tower of Hanoi

Solve the classic Tower of Hanoi puzzle. Move disks between three pegs following the rules. Multiple difficulty levels, move counter, optimal solution tracker, hints, and step-by-step solution mode.

[Play now](https://app.sergeyromanenko.com/tower-of-hanoi/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Disk counts:** 3–8
- **Max moves (8 disks):** 255
- **Algorithm:** Recursive (2ⁿ-1)
- **Offline support:** Yes

## What you can do

1. **Six difficulty levels (3-8 disks)**
  From 3 disks (7 moves) to 8 disks (255 moves) — exponential challenge.
2. **Optimal move tracking**
  Shows theoretical minimum moves (2ⁿ-1) and your efficiency percentage.
3. **Hint system**
  Request the next optimal move without auto-solving the puzzle.
4. **Solution mode**
  Watch the optimal recursive solution play automatically step by step.
5. **Undo and move history**
  Undo last move, view full move history with timestamps.
6. **Best records per difficulty**
  Personal best moves and time saved for each disk count in localStorage.
7. **Works offline**
  Runs entirely in your browser with no network requests after load.

## How it works

The Tower of Hanoi is a classic mathematical puzzle that has fascinated people for over a century. The goal is simple: move a stack of disks from the first peg to the third peg, following two rules: only one disk can be moved at a time, and a larger disk cannot be placed on top of a smaller disk.

## How to Play

1. **Choose your difficulty** — Select 3 to 8 disks (more disks = exponentially harder)
2. **Move disks** — Click a peg to select the top disk, then click another peg to move it there
3. **Follow the rules** — Only one disk at a time; never place a larger disk on a smaller one
4. **Complete the puzzle** — Move all disks to the rightmost peg (peg C)

## Difficulty Levels

| Disks | Minimum Moves | Difficulty |
| --- | --- | --- |
| 3 | 7 | Very Easy |
| 4 | 15 | Easy |
| 5 | 31 | Medium |
| 6 | 63 | Hard |
| 7 | 127 | Very Hard |
| 8 | 255 | Expert |

The minimum number of moves follows the formula: **2ⁿ - 1** where n is the number of disks.

## Features

- **Move Counter** — Track your moves in real-time
- **Optimal Moves Display** — See the theoretical minimum (2ⁿ - 1)
- **Efficiency Score** — Your moves vs. optimal, as a percentage
- **Timer** — Track how long you take
- **Undo** — Reverse your last move (Z key or button)
- **Hints** — Get the next optimal move without solving the puzzle
- **Solution Mode** — Watch the optimal solution play automatically
- **Best Records** — Personal best moves and time saved per disk count
- **Keyboard Controls** — Full keyboard support (1/2/3 for pegs, Z=undo, etc.)

## Game Modes

### Standard Play

Solve at your own pace with full control over every move.

### Solution Mode

Watch the optimal solution play step by step. Great for learning the recursive algorithm.

### Challenge Yourself

Try to achieve 100% efficiency (match the optimal move count) at each difficulty level.

## Keyboard Controls

- **1 / 2 / 3** — Select left / middle / right peg
- **Z** (or Ctrl+Z) — Undo last move
- **R** — Restart current puzzle
- **P** — Pause/Resume timer
- **H** — Request hint (shows next optimal move)
- **S** — Toggle solution mode
- **N** — New game with same settings

## The Algorithm

The Tower of Hanoi is a perfect example of recursion. The optimal solution for n disks:

1. Move n-1 disks from source to auxiliary peg
2. Move the largest disk from source to target peg
3. Move n-1 disks from auxiliary to target peg

This creates the famous 2ⁿ - 1 move sequence. The game’s Solution Mode demonstrates this visually.

## Offline Play

The game runs entirely in your browser with no network requests after the initial load. Once you’ve visited the page, it works offline for travel — on airplanes, trains, or anywhere without connectivity.

## Technical Details

- **Algorithm**: Recursive optimal solution generation
- **Storage**: Best records (moves + time) saved to localStorage per disk count
- **Accessibility**: WCAG AA compliant, screen reader friendly, keyboard navigable
- **Visual Design**: Color-coded disks by size, clear peg labels, high contrast
- **Mobile-first**: Touch-friendly pegs, responsive layout
- **No dependencies**: Pure Vue 3 + TypeScript, no external libraries

## Details

- **Access:** Free to play, no account
- **Category:** Games & Puzzles
- **Kind:** Browser game
- **Runs in:** Web
- **Year:** 2026
- **Workspace:** app.sergeyromanenko.com

## Related also games

- Game · Games & Puzzles
  ### [Lights Out](https://sergeyromanenko.com/applications/lights-out/)
  Turn every light off. Tap a light to toggle it and its four orthogonal neighbors. Random solvable puzzles, multiple board sizes, hints, undo, timer, and personal bests.

  - games
  - travel
  - entertainment
  - puzzle
  - logic
- Game · Games & Puzzles
  ### [Simon](https://sergeyromanenko.com/applications/simon/)
  Watch the colored pads light up in a growing sequence, then repeat it exactly. Each round adds one more step. One wrong tap ends the game. Sounds, mute, and local best scores.

  - games
  - travel
  - entertainment
  - puzzle
- Game · Games & Puzzles
  ### [2048](https://sergeyromanenko.com/applications/2048/)
  Slide numbered tiles on a 4x4 grid, merging equal tiles to reach 2048. A free, offline browser game with keyboard, mouse, and touch controls.

  - games
  - puzzle
  - logic

## Tags

Follow a tag below to browse other applications filed under it.

- [games](https://sergeyromanenko.com/applications/?tag=games)
- [travel](https://sergeyromanenko.com/applications/?tag=travel)
- [entertainment](https://sergeyromanenko.com/applications/?tag=entertainment)
- [puzzle](https://sergeyromanenko.com/applications/?tag=puzzle)
- [logic](https://sergeyromanenko.com/applications/?tag=logic)

Found this game useful? [Support independent development](https://sergeyromanenko.com/support/)
