---
title: "2048"
seo_title: "2048 — Sergey Romanenko"
description: "Slide numbered tiles on a 4x4 grid, merging equal tiles to reach 2048. A free, offline browser game with keyboard, mouse, and touch controls."
canonical_url: "https://sergeyromanenko.com/applications/2048/"
markdown_url: "https://sergeyromanenko.com/applications/2048/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. 2048

( Game · Games & Puzzles )

# 2048

Slide numbered tiles on a 4x4 grid, merging equal tiles to reach 2048. A free, offline browser game with keyboard, mouse, and touch controls.

[Play now](https://app.sergeyromanenko.com/apps/2048/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Grid:** 4x4 (classic)
- **Target tile:** 2048
- **Tile values:** Powers of 2
- **Offline support:** Yes

## What you can do

1. **Classic 4x4 sliding puzzle**
  Combine equal tiles by sliding in four directions to reach the 2048 tile.
2. **Keyboard, mouse, and touch controls**
  Arrow keys and WASD, on-screen directional buttons, and swipe gestures all work.
3. **Score and best score**
  Track your score and keep a persistent best score in your browser.
4. **Undo the last move**
  Step back one move, including the tile that spawned afterwards.
5. **Win and continue**
  Reach 2048 to win, then choose to keep playing for larger tiles.
6. **Works offline**
  Runs entirely in your browser with no network requests after load.

## How it works

Play the classic 2048 sliding puzzle right in your browser. Slide tiles in four directions, merge equal numbers, and try to reach the 2048 tile. No download, no account, and it works offline after the first load.

## How to Play

1. **Move tiles** — Use arrow keys, WASD, the on-screen buttons, or swipe on a touchscreen.
2. **Merge equals** — When two tiles with the same number touch, they merge into one tile with their sum.
3. **New tile appears** — After every valid move a new tile (2 or 4) appears in an empty cell.
4. **Reach 2048** — Combine tiles until a 2048 tile appears to win.
5. **Keep going** — After winning you can continue for 4096, 8192, and beyond.
6. **Game over** — When the board fills and no adjacent tiles can merge, the game ends.

## Rules in Detail

- Tiles slide as far as possible in the chosen direction.
- Each tile merges at most once per move.
- A move that changes nothing does not spawn a new tile and does not count.
- Your score increases by the value of every merge.
- The best score is saved in your browser.

## Strategy and Mathematics

2048 is built entirely on powers of two. Every tile value is 2, 4, 8, 16, and so on, and merging two equal tiles doubles the value. This exponential growth means a single high tile dominates the score, while the board size limits how many tiles can coexist.

Because each move adds a small random tile, play involves probability as well as planning. Advanced players often use search strategies such as expectimax to evaluate future states, weighing the chance of a 2 versus a 4. Common practical heuristics include keeping the largest tile in a corner, building a monotonic chain of decreasing values along an edge, and avoiding moves that fragment the board. These are general explanations of how skilled play works, not guarantees of winning.

## History

2048 was created by Gabriele Cirulli and released in March 2014. It was published as open-source software and became widely popular. The game is conceptually related to earlier sliding and merging games, including Threes and 1024, and its simple rules made it a common subject for algorithmic study and artificial-intelligence experiments. The name comes from the target tile value, 2048 = 2^11.

## Controls

- **Keyboard**: Arrow keys or WASD to move; U to undo; R to restart.
- **Mouse**: Click the on-screen directional buttons.
- **Touch**: Swipe on the board.

## Offline Play

The game runs entirely in your browser. After the first visit it works without a network connection, which makes it suitable for travel.

## Technical Details

- **Grid**: 4x4 by default; 3x3 and 5x5 variants are available.
- **Tiles**: Powers of two from 2 upward.
- **Spawning**: 90% chance of 2, 10% chance of 4.
- **Storage**: Best score and size preference saved to localStorage.
- **Accessibility**: Keyboard navigable, screen-reader friendly labels, visible focus states.
- **No dependencies**: Pure Vue 3 + TypeScript game logic.

## Sources

- Wikipedia, “2048 (video game)” — [https://en.wikipedia.org/wiki/2048_(video_game)](https://en.wikipedia.org/wiki/2048_(video_game))

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
  - puzzle
  - logic
- Game · Games & Puzzles
  ### [Tower of Hanoi](https://sergeyromanenko.com/applications/tower-of-hanoi/)
  Solve the classic Tower of Hanoi puzzle. Move disks between three pegs following the rules. Multiple difficulty levels, move counter, optimal solution tracker, hints, and step-by-step solution mode.

  - games
  - puzzle
  - logic
- Game · Games & Puzzles
  ### [Catch the Cat](https://sergeyromanenko.com/applications/catch-the-cat/)
  The classic trapping puzzle. Place barriers on a hexagonal grid while the cat takes one step per turn toward the edge. Trap it before it escapes, on boards from 7×7 to 13×13.

  - games
  - puzzle

## Tags

Follow a tag below to browse other applications filed under it.

- [games](https://sergeyromanenko.com/applications/?tag=games)
- [puzzle](https://sergeyromanenko.com/applications/?tag=puzzle)
- [numbers](https://sergeyromanenko.com/applications/?tag=numbers)
- [logic](https://sergeyromanenko.com/applications/?tag=logic)

Found this game useful? [Support independent development](https://sergeyromanenko.com/support/)
