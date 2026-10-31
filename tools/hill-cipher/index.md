---
title: "Hill Cipher"
seo_title: "Hill Cipher — Sergey Romanenko"
description: "Encrypt and decrypt text using the Hill cipher with matrix multiplication modulo 26."
canonical_url: "https://sergeyromanenko.com/tools/hill-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/hill-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Hill Cipher

# Hill Cipher

Encrypt and decrypt text using the Hill cipher with matrix multiplication modulo 26.

## At a glance

- **Unit:** Blocks
- **Modulus:** 26
- **Inverse:** Determinant
- **Offline support:** Yes

## What you can do

1. **Matrix transform**
  Blocks are multiplied by a key matrix.
2. **Modular inverse**
  The matrix must be invertible mod 26.
3. **Padding rules**
  Incomplete blocks are padded explicitly.
4. **Runs offline**
  Everything runs in your browser.

## How it works

The Hill cipher is a polygraphic substitution cipher that encrypts blocks of letters using a key matrix multiplied modulo 26.

## Overview

The Hill cipher works by converting letters to numbers (A=0, B=1, …, Z=25), splitting the text into blocks of size $n$, padding an incomplete final block with ‘X’, and multiplying each block by a key matrix modulo 26. Decryption involves multiplying by the modular inverse of the key matrix.

## Key Requirements

- The key matrix must be square ($n \times n$) and invertible modulo 26 (determinant coprime to 26)
- Plaintext is converted to numbers, processed in blocks, and encrypted
- Decryption uses the modular inverse of the encryption matrix

## Implementation Details

- Uses a $26$-letter alphabet (A-Z, case-insensitive)
- Blocks are padded with ‘X’ if needed
- Modular arithmetic is performed throughout
- Handles edge cases like empty input and non-invertible matrices

## Usage

```typescript
import { encrypt, decrypt } from '@/lib/cryptography/classical/hill';

const key = {
  matrix: [[5, 8], [7, 3]] // Example key matrix
};

const ciphertext = encrypt("HELLO WORLD", key);
const decrypted = decrypt(ciphertext, key);
```

## Limitations

- Does not preserve formatting (non-letters are dropped)
- Case is normalized to uppercase
- Only supports alphabetic characters
- Requires a valid, invertible key matrix

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

Comprehensive test suite is available in `tests/e2e/tools/crypto.spec.ts` covering encryption, decryption, edge cases, and error conditions.

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
- **[Bifid Cipher](https://sergeyromanenko.com/tools/bifid-cipher/)**
  Encrypt and decrypt text using the Bifid cipher with a Polybius square and fractionation.

  - cryptography
  - ciphers
  - classical

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [cryptography](https://sergeyromanenko.com/tools/?tag=cryptography)
- [ciphers](https://sergeyromanenko.com/tools/?tag=ciphers)
- [classical](https://sergeyromanenko.com/tools/?tag=classical)
- [hill](https://sergeyromanenko.com/tools/?tag=hill)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
