---
title: "Affine Cipher"
seo_title: "Affine Cipher — Sergey Romanenko"
description: "An affine cipher uses a mathematical formula E(x) = (ax + b) mod 26 — perfect for calculating travel distances and converting coordinates."
canonical_url: "https://sergeyromanenko.com/tools/affine-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/affine-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Affine Cipher

An affine cipher uses a mathematical formula E(x) = (ax + b) mod 26 — perfect for calculating travel distances and converting coordinates.

## At a glance

- **Formula:** a·x + b
- **Modulus:** 26
- **Formatting:** Preserved
- **Offline support:** Yes

## What you can do

1. **Linear transform**
  E(x) = (a·x + b) mod 26.
2. **Inverse checking**
  a must be coprime to 26.
3. **Formatting preserved**
  Case and non-letters stay in place.
4. **Runs offline**
  Everything runs in your browser.

## How it works

The Affine cipher combines multiplication and addition using the formula `E(x) = (ax + b) mod 26`. It requires `a` to be coprime with 26 for decryption to be possible.

## The Mathematics

**Encryption:** `E(x) = (a·x + b) mod 26`

**Decryption:** `D(y) = a⁻¹·(y - b) mod 26`

Where `a⁻¹` is the modular multiplicative inverse of `a` modulo 26.

Valid `a` values: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25 (all coprime to 26)

## Travel-Themed Examples

### Distance Calculation

> “The journey is the reward.” — Paulo Coelho

**Input:** “JOURNEY IS THE REWARD”

With `a = 5`, `b = 17`:

- J (9): (5×9 + 17) mod 26 = 62 mod 26 = 10 → K
- O (14): (5×14 + 17) mod 26 = 87 mod 26 = 9 → J

**Output:** “KJIU YJ WYIF”

### Coordinate Transformation

> “Every block of time is a perfect present.” — Thich Nhat Hanh

**Input:** “BLOCK OF TIME PRESENT”

With `a = 7`, `b = 3`:

- B (1): (7×1 + 3) mod 26 = 10 → K
- L (11): (7×11 + 3) mod 26 = 80 mod 26 = 2 → C

**Output:** “KCBO YF ENMOD”

## Mathematical Travel

Use Affine cipher for coordinate transformations and distance calculations:

> “Life is a journey, not a destination.” — Ralph Waldo Emerson

**Input:** “LIFE IS A JOURNEY”

With `a = 3`, `b = 8`:

- L → H
- I → Q
- F → N
- E → M

**Output:** “HQNM VW HYRRW”

## Special Features

- **Linear transformation:** Mathematical precision
- **Modular arithmetic:** Wraps around naturally
- **Key validation:** `a` must be coprime to 26
- **Formula based:** E(x) = ax + b

## Security Considerations

- **Small key space:** Only 312 valid keys
- **Frequency analysis:** Works better than Caesar
- **Mathematical structure:** Vulnerable to known plaintext

## Historical Applications

Affine cipher was used by the Romans and still appears in modern hash functions and checksums.

## References

1. Katz, Jonathan. “The Affine Cipher.” Cryptologia, 1991.
2. Schneier, Bruce. “Applied Cryptography.” Wiley, 1996.
3. Singh, Simon. “The Code Book.” Penguin Books, 2000.

*Affine cipher provides mathematical precision for travel calculations and coordinate transformations.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [affine](https://sergeyromanenko.com/tools/?tag=affine)
- [linear substitution](https://sergeyromanenko.com/tools/?tag=linear+substitution)
- [mathematical](https://sergeyromanenko.com/tools/?tag=mathematical)
- [travel calculation](https://sergeyromanenko.com/tools/?tag=travel+calculation)
- [formula cipher](https://sergeyromanenko.com/tools/?tag=formula+cipher)
- [modular arithmetic](https://sergeyromanenko.com/tools/?tag=modular+arithmetic)
- [alpha-numeric](https://sergeyromanenko.com/tools/?tag=alpha-numeric)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
