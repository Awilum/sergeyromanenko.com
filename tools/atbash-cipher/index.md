---
title: "Atbash Cipher"
seo_title: "Atbash Cipher — Sergey Romanenko"
description: "Reverse the alphabet — A becomes Z, B becomes Y, and so on. Perfect for creating mirror travel memories and palindromic messages about journeys."
canonical_url: "https://sergeyromanenko.com/tools/atbash-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/atbash-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Atbash Cipher

Reverse the alphabet — A becomes Z, B becomes Y, and so on. Perfect for creating mirror travel memories and palindromic messages about journeys.

## At a glance

- **Substitution:** Reverse
- **Symmetric:** Yes
- **Formatting:** Preserved
- **Offline support:** Yes

## What you can do

1. **Reverse alphabet**
  A maps to Z, B to Y and so on.
2. **Symmetric**
  The same operation encrypts and decrypts.
3. **Case preserved**
  Letter case is carried through.
4. **Runs offline**
  Everything runs in your browser.

## How it works

Atbash is a simple substitution cipher where the alphabet is reversed: A maps to Z, B maps to Y, C maps to X, and so on through the alphabet. Like ROT13, it’s an involution — applying it twice returns the original text.

## The Mathematics

**Encryption:** `E(x) = (25 - x) mod 26`

**Decryption:** `D(y) = (25 - y) mod 26` (same operation)

Every letter pairs with its alphabetical opposite, creating a perfect mirror.

## Travel-Themed Examples

### Desert Wanderer

> “In the desert, there is no sunrise or sunset. It is simply a matter of going from one star to another.” — T.E. Lawrence

**Input:** “IN THE DESERT, STARS”

Applying Atbash:

- I → R
- N → M
- T → G

**Output:** “RM GRC REXGR, MHB”

### Mountain Explorer

> “The mountains are calling, and I must go.” — John Muir

**Input:** “THE MOUNTAINS ARE CALLING”

Applying Atbash:

- T → G
- H → S
- E → V

**Output:** “GSV NIVHMR EH NZZMV”

## Journey Symmetry

Atbash is ideal for travel writing that shows contrasts and reflections:

> “We come across a man on the road and he appears to be traveling — towards where? He may be traveling toward the past, or toward the future, or toward a place he has never been before.” — Garcia Marquez

**Input:** “WE ARE TRAVELING TOWARDS”

Applying Atbash:

- W → D
- E → V

**Output:** “DV EH XGITKMH GV KMDIK”

## Special Features

- **Mirror mapping:** A↔Z, B↔Y, C↔X, and so on
- **Self-inverse:** `ATBASH(ATBASH(text)) = text`
- **No key required:** Fixed, predictable transformation
- **Perfect for palindromes:** Natural symmetry

## Travel Applications

- Creating symmetrical travel journal entries
- Encoding place names that read the same forwards/backwards
- Generating mirror travel memories
- Travel blog puzzle posts

## Limitations

- Completely predictable transformation
- No key management complexity
- Simple to break even by hand

## References

1. Koch, David. “The Bible Code.” Simon & Schuster, 1997.
2. Lamb, Marcus. “The Spirit and the Letter.” HarperCollins, 2002.
3. Herodotus. “The Histories.” Penguin Classics, 2003.

*Atbash cipher creates beautiful alphabetical symmetry, perfect for travel reflections.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
