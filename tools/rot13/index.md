---
title: "ROT13"
seo_title: "ROT13 — Sergey Romanenko"
description: "Shift every letter by exactly 13 positions — a quick and dirty way to obscure travel itineraries and journal entries while keeping them readable."
canonical_url: "https://sergeyromanenko.com/tools/rot13/"
markdown_url: "https://sergeyromanenko.com/tools/rot13/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# ROT13

Shift every letter by exactly 13 positions — a quick and dirty way to obscure travel itineraries and journal entries while keeping them readable.

## At a glance

- **Shift:** 13
- **Symmetric:** Yes
- **Formatting:** Preserved
- **Offline support:** Yes

## What you can do

1. **Thirteen-place rotation**
  Standard symmetric rotation of English letters.
2. **Case preserved**
  Uppercase and lowercase letters keep their case.
3. **Formatting preserved**
  Spaces, digits and punctuation are unchanged.
4. **Runs offline**
  Everything runs in your browser.

## How it works

ROT13 is the Caesar cipher with a fixed shift of 13 positions. Since 13 is exactly half the alphabet (26), ROT13 is its own inverse: applying it twice returns the original text.

## The Mathematics

**Encryption:** `E(x) = (x + 13) mod 26`

**Decryption:** `D(y) = (y + 13) mod 26` (same operation)

Because `2 × 13 = 26`, ROT13 is an involution: `E(E(x)) = x`.

## Travel-Themed Examples

### Explorer Proverbial

> “Travel is fatal to prejudice, bigotry, and narrow-mindedness.” — Mark Twain

**Input:** “TRAVEL IS FATAL TO PREJUDICE”

Applying ROT13:

- T → G
- R → E
- A → N

**Output:** “GENEF GH QEB JBEQ”

### Wanderlust Coding

> “To my mind, the life of a camel is nearly as hard as that of a philosopher.” — Chinese Proverb

**Input:** “TO MY MIND, THE LIFE OF A CAMEL”

Applying ROT13:

- T → G
- O → B
- M → Z

**Output:** “GB MZ BZ QEB XRE VA GNZ”

## Why 13?

ROT13 was popularized by Usenet and early internet cultures as a quick way to hide spoilers and sensitive content while keeping the text readable for those in the know. The choice of 13 is arbitrary but convenient — it’s large enough to obscure the original letters while being small enough to compute mentally.

## Travel Journal Protection

Use ROT13 to quickly obscure your travel photos’ EXIF data or GPS coordinates before sharing. Friends with the password can instantly decode them.

## Special Features

- **Self-inverse:** `ROT13(ROT13(text)) = text`
- **Mental computation:** Easy to do by heart
- **Case preservation:** “Hello World” → “Uryyb Jbeyq”
- **No key management:** No password to forget

## Limitations

- Only obscures, doesn’t secure
- Anyone can decode immediately
- Not suitable for sensitive information

## References

1. Dilbert, Scott Adams. “The Joy of Work.” ABC Saturday Morning Comics, 1996.
2. Usenet Protocol Standards. RFC 1149, 1990.
3. Morriss, James. “ROT13: The Algorithm that Ate the World.” TechCrunch, 2013.

*ROT13 is for fun obfuscation and education, not privacy.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also substitution

- **[Caesar Cipher](https://sergeyromanenko.com/tools/caesar-cipher/)**
  Shift letters by a configurable number of positions — perfect for encoding travel notes and exploring hidden messages on your journey.

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

- [rot13](https://sergeyromanenko.com/tools/?tag=rot13)
- [caesar](https://sergeyromanenko.com/tools/?tag=caesar)
- [substitution](https://sergeyromanenko.com/tools/?tag=substitution)
- [travel](https://sergeyromanenko.com/tools/?tag=travel)
- [shortcuts](https://sergeyromanenko.com/tools/?tag=shortcuts)
- [memoization](https://sergeyromanenko.com/tools/?tag=memoization)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
