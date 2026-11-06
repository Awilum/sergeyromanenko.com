---
title: "Catch the Cat"
seo_title: "Catch the Cat — Sergey Romanenko"
description: "The classic trapping puzzle. Place barriers on a hexagonal grid while the cat takes one step per turn toward the edge. Trap it before it escapes, on boards from 7×7 to 13×13."
canonical_url: "https://sergeyromanenko.com/games/catch-the-cat/"
markdown_url: "https://sergeyromanenko.com/games/catch-the-cat/index.md"
section: "Games"
language: "en"
robots: "index, follow"
---

1. [GAMES](https://sergeyromanenko.com/games/)
2. Catch the Cat

# Catch the Cat

The classic trapping puzzle. Place barriers on a hexagonal grid while the cat takes one step per turn toward the edge. Trap it before it escapes, on boards from 7×7 to 13×13.

## At a glance

- **Board sizes:** 7×7 to 13×13
- **Grid:** Hexagonal (6 neighbors)
- **AI difficulty:** Easy, Normal, Hard
- **Offline support:** Yes

## What you can do

1. **A true hexagonal chase**
  The cat moves across a staggered grid with six neighbors per cell, one step for every barrier you place.
2. **Four board sizes**
  Small 7×7, Medium 9×9, Classic 11×11, and Large 13×13, each opening with a difficulty-scaled scatter of barriers.
3. **Three cat minds**
  Easy steps greedily toward the edge, Normal runs a breadth-first escape search, Hard weighs exits, region size and mobility before moving.
4. **Walled-in play continues**
  Cut off every exit and the cat keeps moving inside the enclosure until you close the last open cell.
5. **Undo a whole turn**
  Rewind one full turn at a time: the barrier comes back and the cat steps back with it.
6. **Works offline**
  Runs entirely in your browser with local persistence and offline service worker caching.

## How it works

A quiet duel of fencing and route-finding on a hexagonal field. Every circle you tap becomes a permanent barrier; every barrier you place earns the cat one step in reply. It walks in six directions, always toward the nearest way out, and it only has to reach the edge of the board once. Fence off a patch of grass around it before that happens and the game is yours. No account or network connection is required once the game resources are cached.

## Rules in One Breath

The board is a staggered grid where every cell touches six neighbors. You place one barrier per turn on any open circle that is not the cat; the cat then moves exactly one cell, never through a barrier. You win when the cat has no open neighbor left to step to. The cat wins the moment it stands on the outer edge of the board, so the first rows and columns are the front line, not the center.

If you wall the region off completely while open cells remain inside, the game does not end early: the cat keeps wandering its shrinking enclosure until you close the last cell beside it.

## Configurable Boards

Pick one of four fixed sizes: Small 7×7, Medium 9×9, Classic 11×11, and Large 13×13. Classic is the default. A live preview shows the shape of the grid before you start, and the board scales cleanly from phones to desktops, always fitting inside the viewport together with the status and controls.

## The Cat’s Three Minds

The cat plays under the same movement rules as always, with all of its thinking done locally in your browser. The difficulty also sets how many barriers the board opens with, so a smarter cat starts with a thinner fence to fight:

- **Easy:** greedy. It always steps to the open neighbor closest to the nearest edge, without looking further ahead.
- **Normal:** search-driven. It finds the shortest open route to the perimeter with a breadth-first search over the hex grid and walks it.
- **Hard:** escape-aware. Before each step it flood-fills the board and weighs every candidate by shortest escape distance, the number of reachable edge exits, the size of the region behind the move, and its own mobility.

Even a walled-in cat keeps moving, so Hard spends its enclosed turns steering toward the largest open region it can still defend.

## Playing by Hand

Undo takes back one full turn at a time: the barrier returns to an open circle and the cat steps back to where it stood. Restart generates a freshly scattered board with the same size and difficulty. Your board size and difficulty are remembered between visits, though every new visit starts fresh on the Welcome Screen rather than resuming an old game. A dedicated service worker caches the game for offline play, and nothing about your games ever leaves the device.

The original Chat Noir was created by Taro Ito and published on GAMEDESIGN.jp in 2007; this version reimplements its gameplay from scratch for the browser.

## Details

- **Access:** Free to play, no account
- **Runs in:** Web
- **Year:** 2026

## Related — both of these are about classic

1. **[Battleships](https://sergeyromanenko.com/games/battleships/)**
  The classic fleet-hunting game, no-touch edition. Place five ships with a cell of water between each, trade shots with a probability-hunting computer opponent, and sink all seventeen enemy cells.

  - [games](https://sergeyromanenko.com/games/?tag=games)
  - [strategy](https://sergeyromanenko.com/games/?tag=strategy)
  - [classic](https://sergeyromanenko.com/games/?tag=classic)
  - [pencil-and-paper](https://sergeyromanenko.com/games/?tag=pencil-and-paper)
2. **[Dots and Boxes](https://sergeyromanenko.com/games/dots-and-boxes/)**
  The classic paper-and-pencil strategy game. Draw lines, complete boxes, earn extra turns, and outmaneuver the computer or a friend on boards up to 10×10.

  - [games](https://sergeyromanenko.com/games/?tag=games)
  - [strategy](https://sergeyromanenko.com/games/?tag=strategy)
  - [classic](https://sergeyromanenko.com/games/?tag=classic)
  - [pencil-and-paper](https://sergeyromanenko.com/games/?tag=pencil-and-paper)
3. **[Nim](https://sergeyromanenko.com/games/nim/)**
  The classic mathematical strategy game. Take turns removing objects from heaps, master the XOR nim-sum, and challenge the Optimal computer opponent or a friend on your own device.

  - [games](https://sergeyromanenko.com/games/?tag=games)
  - [strategy](https://sergeyromanenko.com/games/?tag=strategy)
  - [math](https://sergeyromanenko.com/games/?tag=math)
  - [classic](https://sergeyromanenko.com/games/?tag=classic)
  - [two-player](https://sergeyromanenko.com/games/?tag=two-player)

- [games](https://sergeyromanenko.com/games/?tag=games)
- [strategy](https://sergeyromanenko.com/games/?tag=strategy)
- [classic](https://sergeyromanenko.com/games/?tag=classic)
- [puzzle](https://sergeyromanenko.com/games/?tag=puzzle)

Enjoyed this game? [Support independent development](https://sergeyromanenko.com/support/)
