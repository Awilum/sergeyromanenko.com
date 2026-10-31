---
title: "Encryption"
seo_title: "Encryption — Sergey Romanenko"
description: "Encrypt and decrypt text in your browser with AES-256-GCM or the OpenSSL-compatible AES-256-CBC format."
canonical_url: "https://sergeyromanenko.com/tools/encryption/"
markdown_url: "https://sergeyromanenko.com/tools/encryption/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [Home](https://sergeyromanenko.com/)
2. [TOOLS](https://sergeyromanenko.com/tools/)
3. Encryption

Tools

Tool

# Encryption

Encrypt and decrypt text in your browser with AES-256-GCM or the OpenSSL-compatible AES-256-CBC format.

## At a glance

- **Cipher modes:** 2
- **Key derivation:** PBKDF2
- **Authenticated:** GCM
- **Offline support:** Yes

## What you can do

1. **AES-256-GCM by default**
  Authenticated encryption through Web Crypto, with a key derived from your passphrase by PBKDF2-SHA256.
2. **OpenSSL-compatible CBC**
  AES-256-CBC in the Salted__ format, so a value encrypted by another tool can be read here and vice versa.
3. **Round trip in one page**
  Encrypt on one card and decrypt on the other with the same passphrase, so the result can be checked immediately.
4. **Failures that say why**
  A wrong passphrase, a tampered ciphertext and a truncated value each get their own message.
5. **Runs entirely in your browser**
  Web Crypto only — no server, no storage, no log, and the passphrase is gone when you reload.

## How it works

Encryption

A value that has to travel somewhere it can be read, but not by everyone who can see it pass: a configuration section in a repository, a field in a fixture, a note to yourself with a credential in it. You encrypt it with a passphrase, and you can decrypt it back with the same one.

Both directions happen in this page, with the browser’s own AES implementation. Nothing is sent anywhere, and nothing is stored: the passphrase, the plaintext and the ciphertext exist only while the page is open.

## The two algorithms

**AES-256-GCM** is the default. It is authenticated, which means the ciphertext carries a tag that is verified when it is decrypted — so if a single byte of the stored value has changed, or it was encrypted with a different passphrase, the decryption fails and says so rather than returning garbage. The key is derived from your passphrase with PBKDF2-SHA256 at 100,000 iterations, and a fresh 16-byte salt is generated for every encryption. The output is base64 of the salt, the IV and the ciphertext with its tag.

**AES-256-CBC** is offered for one reason: it is the format most other tools produce. The output is base64 of the eight bytes `Salted__`, an 8-byte salt, and the ciphertext — the OpenSSL convention, so something encrypted with `openssl enc -aes-256-cbc -salt` or by a library that follows that format can be decrypted here, and vice versa. It is not authenticated: CBC will decrypt anything, including a value an attacker has altered, so use GCM unless you specifically need to match that format.

## What a passphrase is not

A passphrase is not a key. It is stretched into one, and how it is stretched is the difference between a value that costs an attacker a second and one that costs them a year. Both modes name their derivation next to the control: PBKDF2 at 100,000 iterations for GCM, and `EVP_BytesToKey` with MD5 and one iteration for the OpenSSL-compatible format. That second one is weak by design — it is weak because the format it preserves was designed in 1995 and cannot be changed without ceasing to be that format.

## The algorithms that are not offered

The reference tool this one is modelled on offers TripleDES, Rabbit and RC4. None of them is here, and the reason is not that they were forgotten.

Web Crypto has no implementation of any of the three, and none of the three would be safe to recommend: 3DES and RC4 are deprecated by NIST, and Rabbit is not a standardised block cipher at all. A tool that encrypts your text with a cipher nobody would use to protect anything is worse than a tool that says it does not support that cipher.

## What it does not do

It encrypts text. It does not encrypt files, and it does not do password hashing — hashing is one-way and does not decrypt, which is what a password store actually wants. It does not sign anything: a signature proves who wrote a message, and that needs a key pair.

And it does not keep your passphrase. Not in local storage, not in a cookie, not in the URL, not in a log. If you reload the page, it is gone, and a ciphertext you can no longer decrypt is a ciphertext you chose not to be able to decrypt.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also security

- **[Token Generator](https://sergeyromanenko.com/tools/token-generator/)**
  Generate cryptographically secure random tokens in your browser, with the length and the character sets you choose.

  - security
  - passwords
- **[Hash Text](https://sergeyromanenko.com/tools/hash-text/)**
  Hash text with MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA3-512 or RIPEMD-160, entirely in your browser.

  - security
- **[ULID Generator](https://sergeyromanenko.com/tools/ulid-generator/)**
  Generate universally unique lexicographically sortable identifiers in your browser, with the count you need.

  - security

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [encryption](https://sergeyromanenko.com/tools/?tag=encryption)
- [security](https://sergeyromanenko.com/tools/?tag=security)
- [passwords](https://sergeyromanenko.com/tools/?tag=passwords)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
