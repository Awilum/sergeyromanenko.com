---
title: "Bifid Cipher"
seo_title: "Bifid Cipher — Sergey Romanenko"
description: "Encrypt and decrypt text using the Bifid cipher with a Polybius square and fractionation."
canonical_url: "https://sergeyromanenko.com/tools/bifid-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/bifid-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Bifid Cipher

# Bifid Cipher

Encrypt and decrypt text using the Bifid cipher with a Polybius square and fractionation.

## At a glance

- **Square:** 5×5
- **Period:** Configurable
- **Formatting:** Letters only
- **Offline support:** Yes

## What you can do

1. **Fractionation**
  Letters split into coordinates and mixed.
2. **Polybius square**
  Built from a keyword.
3. **Configurable period**
  Controls grouping of coordinates.
4. **Runs offline**
  Everything runs in your browser.

## How it works

The Bifid cipher is a fractionation cipher that uses a 5×5 Polybius square constructed from a keyword. It divides the plaintext into periods, fractionates each period into row-column coordinates, and then reads the coordinates back as letters.

## Overview

The Bifid cipher works by:

1. Building a 5×5 Polybius square from a keyword (excluding J, treating I/J as the same)
2. Splitting the plaintext into periods of specified length
3. For each period, recording the row and column indices of each letter
4. Concatenating all row indices and all column indices separately
5. Reading the concatenated sequence as pairs of coordinates to recover letters

## Key Construction

- The 25-letter alphabet excludes J (I/J are merged)
- Square is built from deduplicated keyword letters followed by remaining alphabet letters
- Each letter maps to a (row, column) coordinate in the square

## How It Works

- Period determines how many letters are processed before fractionating
- Each period produces a series of row-column pairs
- Decryption reverses the fractionation by reading coordinates back into letters
- The cipher does not preserve formatting (non-letters are dropped)

## Implementation Details

- Key consists of a keyword and a period length
- Uses a 5×5 Polybius square for fractionation
- Efficient for processing text in periods
- Handles incomplete final periods gracefully

## Usage

```typescript
import { encrypt, decrypt } from '@/lib/cryptography/classical/bifid';

const key = {
  keyword: "KEYWORD",
  period: 4 // Length of each fractionation period
};

const ciphertext = encrypt("HelloWorld", key);
const decrypted = decrypt(ciphertext, key);
```

## Limitations

- Does not preserve formatting (non-letters are dropped)
- J is treated as I in the square construction
- Requires a valid keyword with at least one letter
- Period must be a positive integer

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

Tests are included in `tests/e2e/tools/crypto.spec.ts` covering encryption, decryption, fractionation logic, and error conditions.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also ciphers

- **[Beaufort Cipher](https://sergeyromanenko.com/tools/beaufort-cipher/)**
  Encrypt and decrypt text using the Beaufort cipher - a self-inverse substitution cipher.

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
- [bifid](https://sergeyromanenko.com/tools/?tag=bifid)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
