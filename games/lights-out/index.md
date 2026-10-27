---
title: "Lights Out"
seo_title: "Lights Out — Sergey Romanenko"
description: "Turn every light off. Tap a light to toggle it and its four orthogonal neighbors. Random solvable puzzles, multiple board sizes, hints, undo, timer, and personal bests."
canonical_url: "https://sergeyromanenko.com/games/lights-out/"
markdown_url: "https://sergeyromanenko.com/games/lights-out/index.md"
section: "Games"
language: "en"
robots: "index, follow"
---

Games

Game

# Lights Out

Turn every light off. Tap a light to toggle it and its four orthogonal neighbors. Random solvable puzzles, multiple board sizes, hints, undo, timer, and personal bests.

## At a glance

- **Board sizes:** 3x3, 4x4, 5x5
- **Difficulties:** 3
- **Hint system:** Yes
- **Offline support:** Yes

## What you can do

1. **Three board sizes**
  Play on 3x3, 4x4, or 5x5 grids.
2. **Three difficulty levels**
  Easy, Medium, and Hard scramble levels.
3. **Hint system**
  Identifies a useful next move toward solving the puzzle.
4. **Undo and restart**
  Undo the previous move or restart the current puzzle.
5. **Personal best records**
  Best moves and time saved per board size in localStorage.
6. **Works offline**
  Runs entirely in your browser with no network requests after load.

## How it works

Lights Out is a classic logic puzzle played on a grid of lights. The grid starts with some lights on and some off. Your goal is to turn every light off. The catch is that pressing a light does not just toggle that one light — it toggles the light you pressed and its four neighbors directly above, below, left, and right (corners and edges toggle fewer neighbors because they have fewer adjacent cells).

## How to Play

1. **Choose a board size** — 3×3, 4×4, or 5×5
2. **Choose a difficulty** — Easy, Medium, or Hard (affects how scrambled the starting puzzle is)
3. **Tap a light** — That light and its four orthogonal neighbors toggle between on and off
4. **Turn all lights off** — You win the moment every light on the board is dark at the same time
5. **Track your progress** — The move counter and timer show how efficiently you solved it
6. **Use Hint** — The game suggests a useful next move
7. **Undo** — Reverse your last move if you want to try a different path
8. **Restart** — Reset the current puzzle to its original state
9. **New Puzzle** — Generate a fresh, guaranteed-solvable puzzle

## Rules

- **Toggle ripple**: Pressing any cell flips that cell and the cells directly above, below, left, and right of it. Edge and corner cells toggle fewer neighbors because some of those positions do not exist.
- **Goal**: Switch all lights off. The puzzle is solved only when the entire grid is completely dark at the same moment.
- **Move counting**: Every press counts as one move, even if it toggles multiple lights. Fewer moves make for a cleaner solve.
- **Order does not matter**: Because toggling is an XOR operation, the sequence of your presses does not change the final result — only which cells you press (and how many times) matters.
- **Pressing twice cancels**: Pressing the same cell twice is the same as not pressing it at all. In a minimal solution, each cell is pressed at most once.

## Tips and Strategies

- **Light chasing**: Work top to bottom. For each row, press the cell directly beneath any light that is still on in the row above. This pushes the lit cells downward until only the bottom row remains to reason about. The pattern left glowing along the bottom row then tells you exactly which cells in the top row you needed to press first.
- **Think in rows, not individual lights**: Reading the board as rows of on/off states makes the light-chasing pattern much easier to follow.
- **Use corners and edges deliberately**: A corner press toggles only three cells and an edge press toggles four, so they disturb fewer neighbors. Use them to fix a single stubborn light without knocking out its neighbors.
- **Avoid re-pressing**: If you find yourself toggling the same cell repeatedly, you have lost the thread. Step back and re-chase from the top.
- **Plan before pressing**: The fewer total presses you make, the better your score, so think through the chase before you start.
- **Start small**: The 3×3 board is small enough to reason out directly, which makes it the perfect place to learn how the toggle ripple behaves before tackling the 5×5 grid.
- **Memorize bottom-row patterns**: On the classic 5×5 there are only a handful of bottom-row patterns after a full chase, and each maps to a specific set of top-row presses. Knowing them turns any solvable board into a two-pass solve.
- **Aim for the fewest presses**: Many boards have more than one valid solution. Once you can solve a board, try to find the one with the fewest moves.

## History

Lights Out was released as a handheld electronic game by Tiger Electronics in 1995. Its 5×5 grid of glowing buttons, where each press rippled out to its neighbors, made it an instant pocket favorite. The concept appeared in earlier games such as Merlin in the 1970s, but Tiger’s version fixed the format that everyone now recognizes and gave it its name.

Beyond the toy aisle, Lights Out became a beloved teaching tool. Mathematicians adopted it as a hands-on introduction to solving systems of equations over binary arithmetic (arithmetic modulo 2), and it remains a classic example in linear algebra courses. Not all starting configurations are solvable, but every puzzle generated in this game is guaranteed to have a solution.

## Keyboard Controls

- **Arrow keys** — Move focus between cells
- **Enter / Space** — Toggle the focused light
- **U** — Undo last move
- **R** — Restart current puzzle
- **N** — New puzzle
- **H** — Request a hint

## Offline Play

The game runs entirely in your browser with no network requests after the initial load. Once you have visited the page, it works offline — on airplanes, trains, or anywhere without connectivity.

## Technical Details

- **Algorithm**: Chase-the-lights solver for hints and solvability
- **Storage**: Best records (moves + time) saved to localStorage per board size
- **Accessibility**: WCAG AA compliant, screen reader friendly, keyboard navigable, reduced-motion support
- **Mobile-first**: Touch-friendly cells with 44px+ tap targets, responsive layout
- **No dependencies**: Pure Vue 3 + TypeScript, no external libraries

## Details

- **Access:** Free to play, no account
- **Runs in:** Web
- **Year:** 2026

## Related — both of these are about games

1. **[Tower of Hanoi](https://sergeyromanenko.com/games/tower-of-hanoi/)**
  Solve the classic Tower of Hanoi puzzle. Move disks between three pegs following the rules. Multiple difficulty levels, move counter, optimal solution tracker, hints, and step-by-step solution mode.

  - [games](https://sergeyromanenko.com/games/?tag=games)
  - [travel](https://sergeyromanenko.com/games/?tag=travel)
  - [entertainment](https://sergeyromanenko.com/games/?tag=entertainment)
  - [puzzle](https://sergeyromanenko.com/games/?tag=puzzle)
  - [logic](https://sergeyromanenko.com/games/?tag=logic)
2. **[Simon](https://sergeyromanenko.com/games/simon/)**
  Watch the colored pads light up in a growing sequence, then repeat it exactly. Each round adds one more step. One wrong tap ends the game. Sounds, mute, and local best scores.

  - [games](https://sergeyromanenko.com/games/?tag=games)
  - [travel](https://sergeyromanenko.com/games/?tag=travel)
  - [entertainment](https://sergeyromanenko.com/games/?tag=entertainment)
  - [memory](https://sergeyromanenko.com/games/?tag=memory)
  - [puzzle](https://sergeyromanenko.com/games/?tag=puzzle)
3. **[2048](https://sergeyromanenko.com/games/2048/)**
  Slide numbered tiles on a 4x4 grid, merging equal tiles to reach 2048. A free, offline browser game with keyboard, mouse, and touch controls.

  - [games](https://sergeyromanenko.com/games/?tag=games)
  - [puzzle](https://sergeyromanenko.com/games/?tag=puzzle)
  - [numbers](https://sergeyromanenko.com/games/?tag=numbers)
  - [logic](https://sergeyromanenko.com/games/?tag=logic)

- [games](https://sergeyromanenko.com/games/?tag=games)
- [travel](https://sergeyromanenko.com/games/?tag=travel)
- [entertainment](https://sergeyromanenko.com/games/?tag=entertainment)
- [puzzle](https://sergeyromanenko.com/games/?tag=puzzle)
- [logic](https://sergeyromanenko.com/games/?tag=logic)

Enjoyed this game? [Support independent development](https://sergeyromanenko.com/support/)
