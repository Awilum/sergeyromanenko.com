---
title: "Hash Text"
seo_title: "Hash Text — Sergey Romanenko"
description: "Hash text with MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA3-512 or RIPEMD-160, entirely in your browser."
canonical_url: "https://sergeyromanenko.com/tools/hash-text/"
markdown_url: "https://sergeyromanenko.com/tools/hash-text/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Hash Text

# Hash Text

Hash text with MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA3-512 or RIPEMD-160, entirely in your browser.

## At a glance

- **Algorithms:** 8
- **Encodings:** 4
- **Web Crypto:** 4 of 8
- **Offline support:** Yes

## What you can do

1. **Eight algorithms at once**
  MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA3-512 and RIPEMD-160, each on its own row with its own copy button.
2. **Updates as you type**
  Every digest is recomputed on each keystroke, so the value you are pasting into is always the one for the text on screen.
3. **Four output encodings**
  Hexadecimal, binary, base64 or base64url — whichever form the thing you are comparing against uses.
4. **Native where the browser has it**
  SHA-1, SHA-256, SHA-384 and SHA-512 come from the browser’s own Web Crypto implementation; the other four are implemented here and checked against their specifications.
5. **Runs entirely in your browser**
  Nothing is sent to a server and nothing is stored — the digests exist in the page and disappear on reload.

## How it works

Hash Text

You have a value and you need its digest: to compare against a published checksum, to build a cache key, to check that a file transferred intact, to see whether two strings were the same without writing either one down. This tool runs every algorithm at once and shows the results in one list, so you can find the one you need without choosing first.

The text is hashed on your device. Nothing is sent anywhere, and nothing is stored: the digests exist in the page and disappear when you reload it.

## The algorithms

Eight of them, each shown the moment you type:

| Algorithm | Digest size | Where it comes from |
| --- | --- | --- |
| MD5 | 128 bits | Implemented here |
| SHA-1 | 160 bits | Web Crypto |
| SHA-224 | 224 bits | Implemented here |
| SHA-256 | 256 bits | Web Crypto |
| SHA-384 | 384 bits | Web Crypto |
| SHA-512 | 512 bits | Web Crypto |
| SHA3-512 | 512 bits | Implemented here |
| RIPEMD-160 | 160 bits | Implemented here |

Four of the eight are the browser’s own `crypto.subtle.digest` — the same implementation that verifies a TLS certificate, and the fastest thing available for them. The other four have no Web Crypto equivalent at all: MD5 was never included, SHA-224 has no entry in the specification, and neither SHA-3 nor RIPEMD-160 is in any browser’s algorithm registry. Those are implemented here and checked against their own specifications’ test vectors.

## About MD5 and RIPEMD-160

MD5 is offered because a great deal of published data still carries one — old checksums, fixture files, cache directories — and being able to reproduce one is genuinely useful. It is also broken: two files with the same MD5 can be constructed deliberately. If an adversary chooses the input, do not use MD5 to decide whether it is what it claims to be.

RIPEMD-160 is in a different position. No practical collision is known for it, but no body is maintaining it either, so nothing new should be built on it. It is here for reading existing values.

## About SHA3-512

SHA3 is not SHA-256 with a bigger output. It is a different construction entirely — a sponge rather than a Merkle–Damgård block chain — and its padding byte is what distinguishes it from the pre-standard Keccak that some older tools label “SHA3”. The value produced here is FIPS 202 SHA3-512. If you are comparing against a tool that prints a different 128-character digest for the same input, that tool is producing Keccak-512 or a different SHA3 output length.

## Encodings

Each digest can be read as hexadecimal, binary, base64 or base64url. The last one is the URL-safe, unpadded variant, which is what you want when the digest is going into a link or a filename; the others are what most published checksums use.

## What it does not do

It does not hash a file — the input is text, and reading a file is a different tool. It does not compute an HMAC: that needs a key, and the specification for one is a different function again. And it does not claim anything about the strength of the algorithm you pick, because the choice is yours and the difference between them is not something the interface can decide for you.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also security

- **[Encryption](https://sergeyromanenko.com/tools/encryption/)**
  Encrypt and decrypt text in your browser with AES-256-GCM or the OpenSSL-compatible AES-256-CBC format.

  - security
- **[Token Generator](https://sergeyromanenko.com/tools/token-generator/)**
  Generate cryptographically secure random tokens in your browser, with the length and the character sets you choose.

  - security
- **[ULID Generator](https://sergeyromanenko.com/tools/ulid-generator/)**
  Generate universally unique lexicographically sortable identifiers in your browser, with the count you need.

  - security

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [hashing](https://sergeyromanenko.com/tools/?tag=hashing)
- [security](https://sergeyromanenko.com/tools/?tag=security)
- [checksums](https://sergeyromanenko.com/tools/?tag=checksums)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
