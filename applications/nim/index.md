---
title: "Nim"
seo_title: "Nim — Sergey Romanenko"
description: "The classic mathematical strategy game. Take turns removing objects from heaps, master the XOR nim-sum, and challenge the Optimal computer opponent or a friend on your own device."
canonical_url: "https://sergeyromanenko.com/applications/nim/"
markdown_url: "https://sergeyromanenko.com/applications/nim/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. Nim

( Game · Games & Puzzles )

# Nim

The classic mathematical strategy game. Take turns removing objects from heaps, master the XOR nim-sum, and challenge the Optimal computer opponent or a friend on your own device.

[Play now](https://app.sergeyromanenko.com/nim/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Heaps:** 3 to 5
- **AI strategy:** Optimal (XOR)
- **AI difficulties:** 2
- **Game modes:** 2
- **Offline support:** Yes

## What you can do

1. **Optimal AI via Bouton’s theorem**
  The computer plays the mathematically optimal Nim strategy: find a move that zeroes the nim-sum with plain XOR, no search needed.
2. **Casual random opponent**
  A relaxed AI that picks a random legal heap and a random number of objects to remove, for beginners.
3. **Normal Play and Misère Play variants**
  The full XOR strategy under both the default Normal rules and the Misère endgame where taking the last object loses.
4. **Local two-player mode**
  Two people on one device, with named players and a prominent turn indicator.
5. **Fixed starting configurations**
  Five presets: Classic 3/4/5, Four Heaps, Five Heaps, Balanced, and Random Challenge, with a live preview before starting.
6. **Works offline**
  Runs entirely in your browser with local persistence and offline service worker caching.

## How it works

Take turns removing objects from one heap at a time. The last person to take an object finishes the game, unless you are playing Misère Play, in which case it is the losing move. The game has a complete mathematical solution based on Bouton’s theorem, and this implementation runs entirely offline in your browser.

## Rules in One Breath

Players alternate removing any positive number of objects from exactly one heap. You cannot remove from more than one heap per turn, and you cannot pass. With three heaps of [3, 4, 5] objects, the first player can win by reducing heap A by 2, leaving [1, 4, 5], whose nim-sum is zero, a losing position for whoever moves next.

## Two Variants

Normal Normal Play: the player who takes the last object wins. Default mode.

Misère Misère Play: the player who takes the last object loses. The objective is to force your opponent to take it.

## Opponents

### Two AI Difficulty Levels

The computer plays under the same rules as you, with all thinking done locally:

- **Casual:** picks a random legal heap and a random count. Relaxed for beginners.
- **Optimal:** implements Bouton’s theorem: always finds the winning move when one exists, including the special Misère endgame where only single-object heaps remain.

### Local Two Players

Pass a single device back and forth. Both players enter names, and the active player is marked on the scoreboard.

## Strategy Worth Learning

- **Nim-sum:** the bitwise XOR of all heap sizes. For [3, 4, 5] the nim-sum is 3 ^ 4 ^ 5 = 2. A non-zero nim-sum means you can win: reduce one heap so the nim-sum becomes zero.
- **Zero nim-sum** means the current player is at a losing position under perfect play; any move they make gives the opponent the winning response.
- **Misère endgame:** when only single-object heaps remain, leave your opponent an odd number of them. When exactly one heap holds more than one object, shrink it to 1 (leave an even count) or remove it entirely (leave an odd count) so the nim-sum works against them.

Move history, undo (rewind to your last decision), restart, and preference persistence are built in. Your selected configuration is remembered between visits, though every new visit starts fresh on the Welcome Screen rather than resuming an old match. A dedicated service worker caches the game for offline play, and nothing about your games ever leaves the device.

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
- Game · Games & Puzzles
  ### [Catch the Cat](https://sergeyromanenko.com/applications/catch-the-cat/)
  The classic trapping puzzle. Place barriers on a hexagonal grid while the cat takes one step per turn toward the edge. Trap it before it escapes, on boards from 7×7 to 13×13.

  - games
  - strategy
  - classic
- Game · Games & Puzzles
  ### [Dots and Boxes](https://sergeyromanenko.com/applications/dots-and-boxes/)
  The classic paper-and-pencil strategy game. Draw lines, complete boxes, earn extra turns, and outmaneuver the computer or a friend on boards up to 10×10.

  - games
  - strategy
  - classic

## Tags

Follow a tag below to browse other applications filed under it.

- [games](https://sergeyromanenko.com/applications/?tag=games)
- [strategy](https://sergeyromanenko.com/applications/?tag=strategy)
- [math](https://sergeyromanenko.com/applications/?tag=math)
- [classic](https://sergeyromanenko.com/applications/?tag=classic)
- [two-player](https://sergeyromanenko.com/applications/?tag=two-player)

Found this game useful? [Support independent development](https://sergeyromanenko.com/support/)
