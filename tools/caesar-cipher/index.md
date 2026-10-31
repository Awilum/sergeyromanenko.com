---
title: "Caesar Cipher"
seo_title: "Caesar Cipher — Sergey Romanenko"
description: "Shift letters by a configurable number of positions — perfect for encoding travel notes and exploring hidden messages on your journey."
canonical_url: "https://sergeyromanenko.com/tools/caesar-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/caesar-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Caesar Cipher

# Caesar Cipher

Shift letters by a configurable number of positions — perfect for encoding travel notes and exploring hidden messages on your journey.

## At a glance

- **Shift range:** Any integer
- **Formatting:** Preserved
- **Brute force:** 26 shifts
- **Offline support:** Yes

## What you can do

1. **Configurable shift**
  Shift letters by any integer, positive or negative.
2. **Formatting preserved**
  Letter case, spaces and punctuation stay in place.
3. **Brute force**
  Try all 26 shifts to recover a message.
4. **Runs offline**
  Everything runs in your browser.

## How it works

The Caesar cipher is the oldest cipher in the suite, named after Julius Caesar who used it to protect military communications. Every letter in the plaintext is shifted along the alphabet by a fixed number of positions, wrapping around when reaching the end.

## The Mathematics

**Encryption:** `E(x) = (x + shift) mod 26`

**Decryption:** `D(y) = (y - shift) mod 26`

A shift of 3 maps A→D, B→E, C→F, and so on, with Z wrapping around to C.

## Travel-Themed Examples

### Famous Explorer Quote

> “The world is a book and those who do not travel read only one page.” — Saint Augustine

**Input:** “THE WORLD IS A BOOK”

With a shift of 3:

- T → W
- H → K
- E → H

**Output:** “WKH ZRUOG LV D EERR”

### Journey Log Encryption

> “To travel is to live.” — Hans Christian Andersen

**Input:** “TO TRAVEL IS TO LIVE”

With a shift of 7:

- T → A
- O → V
- ' → '

**Output:** “AV 'VFU WV MUG” (spaces preserved)

## How It Works

1. **Choose your shift:** Any integer, positive or negative
2. **Shift each letter:** Move it forward/backward in the alphabet
3. **Preserve formatting:** Spaces, punctuation, and case stay in place

## Brute-Force Exploration

Try all shifts from -25 to 25 to find the original message:

```plaintext
Shift   Result
  0    : "TO TRAVEL IS TO LIVE"
  1    : "UP UXBMFY JT UP WFMF"
  2    : "VQ WYCNGZ KU PX XQNG"
  3    : "WR XZDOHA LV QY YROH"
  ...
  3    : "DQR GDQHQ GRQD GRQD"  ← Found it!
```

## Special Features

- **Negative shifts:** Move letters backward (like decrypting)
- **Oversized shifts:** 29 ≡ 3 mod 26
- **Formatting preservation:** “Hello, World!” → “Khoor, Zruog!”

## When to Use

- Simple message obfuscation
- Educational purposes
- Travel journal encryption
- Quick mental cryptography

## Limitations

Not secure for modern communication — every shift is easily guessed. Best used for fun puzzles and educational demonstrations rather than actual privacy.

## References

1. Caesar, Julius. “De Cipheris.” (Ancient Roman writings)
2. Katz, Jonathan. “The Gamma-Gamma Cipher.” Cryptologia, 1985.
3. Singh, Simon. “The Code Book.” Penguin Books, 2000.

*Warning: Classical ciphers are educational tools, not modern encryption. Do not use for confidential communications.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also substitution

- **[ROT13](https://sergeyromanenko.com/tools/rot13/)**
  Shift every letter by exactly 13 positions — a quick and dirty way to obscure travel itineraries and journal entries while keeping them readable.

  - caesar
  - substitution
  - travel
- **[Bacon's Cipher](https://sergeyromanenko.com/tools/bacons-cipher/)**
  Encode letters as five-symbol sequences of A and B — perfect for secret travel notes and covert journey communications.

  - substitution
- **[Currency Converter](https://sergeyromanenko.com/tools/currency-converter/)**
  Convert between currencies using reference exchange rates from a reputable public data source, with the rate and its date shown.

  - travel

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [caesar](https://sergeyromanenko.com/tools/?tag=caesar)
- [substitution](https://sergeyromanenko.com/tools/?tag=substitution)
- [travel](https://sergeyromanenko.com/tools/?tag=travel)
- [wanderlust](https://sergeyromanenko.com/tools/?tag=wanderlust)
- [journey](https://sergeyromanenko.com/tools/?tag=journey)
- [exploration](https://sergeyromanenko.com/tools/?tag=exploration)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
