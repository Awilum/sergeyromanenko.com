---
title: "Token Generator"
seo_title: "Token Generator — Sergey Romanenko"
description: "Generate cryptographically secure random tokens in your browser, with the length and the character sets you choose."
canonical_url: "https://sergeyromanenko.com/tools/token-generator/"
markdown_url: "https://sergeyromanenko.com/tools/token-generator/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Token Generator

Generate cryptographically secure random tokens in your browser, with the length and the character sets you choose.

## At a glance

- **Characters per token:** 1 – 512
- **Character sets:** 4
- **Random source:** OS
- **Offline support:** Yes

## What you can do

1. **Four character sets**
  Uppercase, lowercase, digits and symbols, switched independently — use only what the target system accepts.
2. **Any length from 1 to 512**
  A length short enough to read aloud or long enough for a session secret, in one control.
3. **One click to regenerate**
  Get a different token without reloading the page, and copy the current one to the clipboard.
4. **Settings stay on the page**
  The four character sets and the length are yours while you use them — nothing is written to the URL, so nothing can leak into a history or a shared link.
5. **Runs entirely in your browser**
  Randomness comes from the operating system through crypto.getRandomValues — nothing is sent, stored or logged.

## How it works

The Token Generator

Somewhere between writing a new service and calling it from somewhere else, you need a value nobody else can guess: an API key, a session identifier, a webhook secret, a password for a database that has not been connected to anything yet. You generate one, you paste it in two places, and you never think about it again — until the day it matters that the thing you pasted was not actually random.

This tool builds one on your device. The randomness comes from the operating system through `crypto.getRandomValues`, which is the generator used for TLS keys and password resets; it is not `Math.random`, which is seeded in a way that a determined reader can reconstruct. Nothing is sent to a server, because there is no server to send it to — the whole tool is this page.

## What it builds

Four character sets, switched independently: uppercase A–Z, lowercase a–z, digits 0–9, and symbols. The default is all three alphanumeric sets with symbols off, because that is what most systems accept; turn symbols on when the target takes them, and the alphabet grows from 62 to 83 characters.

Length runs from 1 to 512 characters. Sixty-four alphanumeric characters is the default and is a sensible place to leave it: it is more guesses than anything can brute-force, and still short enough to paste into a terminal without thinking about it.

## How the characters are chosen

Every position in the token is an independent draw from the alphabet, and the draw is unbiased. This is the part that is easy to get wrong: turning a random number into an index with `%` looks like it works, and it almost does. The remainder is only uniform when the size of the random number is a whole multiple of the number of choices, and it never is. With a byte and a 90-character alphabet, the characters near the start of the alphabet come out around a thirteenth more often than the ones near the end.

Here each draw is a 32-bit number from the operating system, and the few numbers that fall outside the range that divides evenly into the alphabet are thrown away and drawn again. The result is that every character in the selected sets is exactly as likely as every other, at any length.

The figure shown under the token is the entropy of the configuration — `length × log2(alphabet size)` bits, the standard ceiling for a uniformly drawn token. It describes the shape of the token you are generating rather than measuring the one on screen, and it assumes nothing about the receiving system shortening or restricting it.

## What it does not do

It does not check the token against a list of known values, and it does not test whether the token is already in use anywhere. It does not guarantee that every character set you left on actually appears in a short token — with 12 characters and four sets on, the laws of probability say some set will occasionally be missing. Generate again, or lengthen the token, if what you are pasting into requires one of everything.

The token is not stored, and neither is your configuration. Nothing is in local storage, nothing is in a cookie, and nothing goes into the address bar — the tool has no query string and no history, so the page’s URL is the same whichever sets you pick. It lives in the text field until you copy it or reload.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also security

- **[Encryption](https://sergeyromanenko.com/tools/encryption/)**
  Encrypt and decrypt text in your browser with AES-256-GCM or the OpenSSL-compatible AES-256-CBC format.

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

- [security](https://sergeyromanenko.com/tools/?tag=security)
- [passwords](https://sergeyromanenko.com/tools/?tag=passwords)
- [random](https://sergeyromanenko.com/tools/?tag=random)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
