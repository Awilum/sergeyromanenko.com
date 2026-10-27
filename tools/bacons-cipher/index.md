---
title: "Bacon's Cipher"
seo_title: "Bacon's Cipher — Sergey Romanenko"
description: "Encode letters as five-symbol sequences of A and B — perfect for secret travel notes and covert journey communications."
canonical_url: "https://sergeyromanenko.com/tools/bacons-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/bacons-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Bacon's Cipher

Encode letters as five-symbol sequences of A and B — perfect for secret travel notes and covert journey communications.

## At a glance

- **Symbols:** 5-bit
- **Variants:** Two
- **Formatting:** Letters only
- **Offline support:** Yes

## What you can do

1. **Five-symbol code**
  Each letter maps to A/B patterns.
2. **Variant-aware**
  Traditional and modern variants supported.
3. **Validation**
  Malformed encoded input is reported.
4. **Runs offline**
  Everything runs in your browser.

## How it works

Bacon’s cipher encodes letters as sequences of five A and B symbols, hiding messages in seemingly innocuous text. It was designed for steganography — concealing the very existence of a message.

## The Mathematics

**Encryption:** Convert each letter to 5-bit binary, A=0 (A), B=1 (B)

**Decryption:** Group symbols into blocks of five, convert binary to letters

Traditional alphabet: I/J merged, U/V merged (24 letters)

## Travel-Themed Examples

### Secret Travel Journal

> “Travel is the only thing you buy that makes you richer.” — Anonymous

**Input:** “TRAVEL MAKES YOU RICHER”

With traditional alphabet (I/J=U/V merged):

- T → 19 → 10011 → BAAAB
- R → 17 → 10001 → BAAAA
- A → 0 → 00000 → AAAAA

**Output:** “BAAAB BAAAA AAAAA …”

### Covert Exploration Notes

> “The world is a book and those who do not travel read only one page.” — St. Augustine

**Input:** “WORLD IS A BOOK TRAVELLERS READ”

With modern alphabet (26 distinct letters):

- W → 22 → 10110 → BAAAB
- O → 14 → 01110 → AABAA

**Output:** “BAAAB AABAA …”

## Steganographic Applications

Use Bacon's cipher for hidden travel messages:

> “We travel, some of us forever, to seek and to find what has been lost and found.” — Paulo Coelho

**Input:** “TRAVEL SEEK LOST FIND”

With traditional variant: **Output:** “BAAAB AAAAA …”

## Special Features

- **Steganographic:** Hides message existence
- **Binary encoding:** Mathematical precision
- **Two variants:** Traditional (24 letters) and Modern (26 letters)
- **Text-friendly:** Works with any letter group

## Security Properties

- **Key-dependent:** Variant determines alphabet
- **Pattern analysis:** Five-symbol patterns reveal messages
- **Length constraints:** Must be multiple of five
- **Symbol validation:** Only A/B symbols accepted

## Travel Stealth

Use Bacon's cipher for covert travel communication:

- Hidden travel itineraries in public text
- Secret meeting place coordinates
- Covert navigation instructions
- Private travel notes shared publicly

## References

1. Bacon, Francis. “The Advancement of Learning.” 1605.
2. Kahne, Martin. “Bacon's Cipher.” Cryptologia, 1987.
3. Smith, David. “The Code Book.” Penguin Books, 2000.

*Use Bacon's cipher to hide travel secrets in plain sight with five-symbol encoding.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also substitution

- **[Binary Converter](https://sergeyromanenko.com/tools/binary-converter/)**
  Convert between binary, decimal, octal and hexadecimal; encode and decode text and Base64; and calculate with binary arithmetic, bitwise and shift operations in your browser.

  - binary
- **[Caesar Cipher](https://sergeyromanenko.com/tools/caesar-cipher/)**
  Shift letters by a configurable number of positions — perfect for encoding travel notes and exploring hidden messages on your journey.

  - substitution
- **[Monoalphabetic Substitution](https://sergeyromanenko.com/tools/monoalphabetic-substitution/)**
  Create your own substitution alphabet — perfect for encoding travel memories and personal journey symbols with a custom 26-letter mapping.

  - substitution

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [bacon](https://sergeyromanenko.com/tools/?tag=bacon)
- [binary](https://sergeyromanenko.com/tools/?tag=binary)
- [five-symbol](https://sergeyromanenko.com/tools/?tag=five-symbol)
- [substitution](https://sergeyromanenko.com/tools/?tag=substitution)
- [stenography](https://sergeyromanenko.com/tools/?tag=stenography)
- [secret writing](https://sergeyromanenko.com/tools/?tag=secret+writing)
- [travel stealth](https://sergeyromanenko.com/tools/?tag=travel+stealth)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
