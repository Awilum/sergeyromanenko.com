---
title: "Beaufort Cipher"
seo_title: "Beaufort Cipher — Sergey Romanenko"
description: "Encrypt and decrypt text using the Beaufort cipher - a self-inverse substitution cipher."
canonical_url: "https://sergeyromanenko.com/tools/beaufort-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/beaufort-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Beaufort Cipher

Encrypt and decrypt text using the Beaufort cipher - a self-inverse substitution cipher.

## At a glance

- **Key:** Keyword
- **Self-inverse:** Yes
- **Formatting:** Preserved
- **Offline support:** Yes

## What you can do

1. **Self-inverse cipher**
  Standard Beaufort transformation.
2. **Keyword key**
  Letters become successive shifts.
3. **Related to Vigenère**
  The relationship is documented.
4. **Runs offline**
  Everything runs in your browser.

## How it works

The Beaufort cipher is a substitution cipher defined by the formula $C = (K - P) \mod 26$, where $K$ is the key letter and $P$ is the plaintext letter. Unlike most ciphers, the Beaufort cipher is its own inverse—applying it twice returns the original text.

## Overview

The Beaufort cipher operates differently from the Caesar or Vigenère ciphers. While those typically map plaintext to ciphertext through addition or multiplication, the Beaufort cipher subtracts the plaintext from the key. Because of this property, encryption and decryption are identical operations.

## Key Characteristics

- **Self-inverse**: Applying the cipher twice yields the original text
- **Preserves formatting**: Non-letters are preserved in their original positions
- **Keyword-based**: The key is a keyword that repeats across the plaintext
- **Case-sensitive**: Preserves the original case of letters

## How It Works

1. Extract letters from the key keyword (ignoring non-letters)
2. Iterate through the plaintext, transforming each letter using $C = (K - P) \mod 26$
3. Advance the key position only on letters (non-letters act as delimiters)
4. Preserve non-letter characters in their original positions

## Implementation Details

- Key consists of a keyword repeated across the entire plaintext
- Each letter is shifted backward by the corresponding key letter
- The transformation is symmetric (encrypt = decrypt)
- Handles edge cases like empty input and insufficient letters

## Usage

```typescript
import { encrypt, decrypt } from '@/lib/cryptography/classical/beaufort';

const key = {
  keyword: "SECRET",
  period: 4 // Number of letters the key advances per character
};

const ciphertext = encrypt("Hello, World!", key);
const decrypted = decrypt(ciphertext, key);
```

## Limitations

- Does not preserve formatting in the traditional sense (though it preserves non-letters)
- Key must contain at least one letter
- Self-inverse property means encryption and decryption are identical

## Related Ciphers

- Caesar cipher (simple rotation)
- Vigenère cipher (polyalphabetic substitution)
- Affine cipher (linear transformation)
- Monomorphic substitution cipher
- Rail fence cipher (alternating column transposition)
- Columnar transposition cipher (column-wise permutation)
- Scytale cipher (historical cylinder-based cipher)
- Bacon’s cipher (binary encoding)
- Playfair cipher (digraph substitution)
- Hill cipher (polygraphic substitution)
- Beaufort cipher (self-inverse substitution)
- Bifid cipher (fractionation cipher)

## Testing

Tests are included in `tests/e2e/tools/crypto.spec.ts` covering encryption, decryption, formatting preservation, and error conditions.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also ciphers

- **[Bifid Cipher](https://sergeyromanenko.com/tools/bifid-cipher/)**
  Encrypt and decrypt text using the Bifid cipher with a Polybius square and fractionation.

  - cryptography
  - ciphers
  - classical
- **[Hill Cipher](https://sergeyromanenko.com/tools/hill-cipher/)**
  Encrypt and decrypt text using the Hill cipher with matrix multiplication modulo 26.

  - cryptography
  - ciphers
  - classical

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [cryptography](https://sergeyromanenko.com/tools/?tag=cryptography)
- [ciphers](https://sergeyromanenko.com/tools/?tag=ciphers)
- [classical](https://sergeyromanenko.com/tools/?tag=classical)
- [beaufort](https://sergeyromanenko.com/tools/?tag=beaufort)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
