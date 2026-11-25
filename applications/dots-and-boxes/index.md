---
title: "Dots and Boxes"
seo_title: "Dots and Boxes — Sergey Romanenko"
description: "The classic paper-and-pencil strategy game. Draw lines, complete boxes, earn extra turns, and outmaneuver the computer or a friend on boards up to 10×10."
canonical_url: "https://sergeyromanenko.com/applications/dots-and-boxes/"
markdown_url: "https://sergeyromanenko.com/applications/dots-and-boxes/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. Dots and Boxes

( Game · Games & Puzzles )

# Dots and Boxes

The classic paper-and-pencil strategy game. Draw lines, complete boxes, earn extra turns, and outmaneuver the computer or a friend on boards up to 10×10.

[Play now](https://app.sergeyromanenko.com/apps/dots-and-boxes/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Board sizes:** 2×2 to 10×10
- **Game modes:** 2
- **AI difficulty:** Easy, Medium, Hard
- **Offline support:** Yes

## What you can do

1. **Fixed board presets**
  Nine square sizes from 2×2 up to 10×10, picked from a preview-backed selector.
2. **Fits your screen**
  Board, scores, turn indicator and controls scale to stay inside the viewport on phone and desktop.
3. **Three AI difficulty tiers**
  From a cautious beginner to an opponent that runs a bounded alpha-beta search in the endgame.
4. **Local two-player mode**
  Pass one device back and forth with named players and a clear turn indicator.
5. **Strategy-aware computer**
  The AI understands safe moves, chains, loops, and the double-cross sacrifice.
6. **Undo and move history**
  Rewind to your last decision, review every move, and start fresh on every visit.
7. **Works offline**
  Runs entirely in your browser with local persistence and offline service worker caching.

## How it works

Draw lines between dots and claim squares in a quiet battle of territory and tempo. Every line you draw is a promise or a trap: complete the fourth side of a square and it is yours, along with another move, but leave a third side open and your opponent collects. No account or network connection is required once the game resources are cached.

## Rules in One Breath

Players alternate drawing a single horizontal or vertical line between two adjacent dots. Whoever draws the fourth side of a square claims it, shown in their color and initial, and immediately moves again. A single line can complete two squares at once, which still earns just one extra turn. When every line is drawn, the player with the most squares wins; equal scores are a draw.

## Configurable Boards

Pick one of nine fixed board sizes, from 2×2 up to 10×10. A live preview shows the shape of the board before you start, and the board scales cleanly from phones to desktops, always fitting inside the viewport together with the scoreboard and controls.

## Opponents

### Three AI Difficulty Tiers

The computer plays under the same rules as you, with all of its thinking done locally in your browser:

- **Easy:** takes free squares, prefers safe lines, and concedes the shortest chain when forced to open one.
- **Medium:** adds the double-cross, sacrificing the last two squares of a chain (four of a loop) when keeping control is worth more than the gift.
- **Hard:** plays the same strategy plus a bounded alpha-beta search with iterative deepening over endgames and small positions.

The AI is strong but not perfect; optimal Dots and Boxes play is computationally hard, and the search budget is chosen to stay responsive.

### Local Two Players

Pass a single device back and forth. Both players can enter names, and the active player is always marked on the scoreboard.

## Strategy Worth Learning

- **Safe moves** draw no third side of any square. Most of the opening is a dance of players refusing to blink first.
- **Chains** are sequences of squares that fall one after another once opened. **Loops** are their closed-ring cousins.
- The **double-cross** is the heart of endgame play: instead of capturing the whole chain, leave its last two squares for the opponent. They take the pair, must then open the next chain, and the board changes hands on your terms.

## Playing by Hand

Move history, undo to your last decision (the computer’s replies are rewound with it), and restart are all built in. Your board size, mode, and names are remembered between visits, though every new visit starts fresh on the Welcome Screen rather than resuming an old match. A dedicated service worker caches the game for offline play, and nothing about your games ever leaves the device.

## Details

- **Access:** Free to play, no account
- **Category:** Games & Puzzles
- **Kind:** Browser game
- **Runs in:** Web
- **Year:** 2026
- **Workspace:** app.sergeyromanenko.com

## Related also classic

- Game · Games & Puzzles
  ### [Battleships](https://sergeyromanenko.com/applications/battleships/)
  The classic fleet-hunting game, no-touch edition. Place five ships with a cell of water between each, trade shots with a probability-hunting computer opponent, and sink all seventeen enemy cells.

  - games
  - strategy
  - classic
  - pencil-and-paper
- Game · Games & Puzzles
  ### [Catch the Cat](https://sergeyromanenko.com/applications/catch-the-cat/)
  The classic trapping puzzle. Place barriers on a hexagonal grid while the cat takes one step per turn toward the edge. Trap it before it escapes, on boards from 7×7 to 13×13.

  - games
  - strategy
  - classic
- Game · Games & Puzzles
  ### [Nim](https://sergeyromanenko.com/applications/nim/)
  The classic mathematical strategy game. Take turns removing objects from heaps, master the XOR nim-sum, and challenge the Optimal computer opponent or a friend on your own device.

  - games
  - strategy
  - classic

## Tags

Follow a tag below to browse other applications filed under it.

- [games](https://sergeyromanenko.com/applications/?tag=games)
- [strategy](https://sergeyromanenko.com/applications/?tag=strategy)
- [classic](https://sergeyromanenko.com/applications/?tag=classic)
- [pencil-and-paper](https://sergeyromanenko.com/applications/?tag=pencil-and-paper)

Found this game useful? [Support independent development](https://sergeyromanenko.com/support/)
