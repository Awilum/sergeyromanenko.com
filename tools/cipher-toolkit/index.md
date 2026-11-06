---
title: "Cipher Toolkit"
seo_title: "Cipher Toolkit — Sergey Romanenko"
description: "Fourteen classical ciphers in one place. Choose a cipher, set its key, and encrypt or decrypt text with the algorithm running entirely in your browser."
canonical_url: "https://sergeyromanenko.com/tools/cipher-toolkit/"
markdown_url: "https://sergeyromanenko.com/tools/cipher-toolkit/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Cipher Toolkit

# Cipher Toolkit

Fourteen classical ciphers in one place. Choose a cipher, set its key, and encrypt or decrypt text with the algorithm running entirely in your browser.

## At a glance

- **Ciphers:** 14
- **Families:** 4
- **Letters only:** 7
- **Keyword keyed:** 5

## What you can do

1. **Fourteen ciphers, one page**
  Caesar, ROT13, Affine, Atbash, Vigenère, Beaufort, Monoalphabetic Substitution, Playfair, Hill, Bifid, Rail Fence, Scytale, Columnar Transposition and Bacon's.
2. **Settings that follow the cipher**
  Each cipher shows only the parameters it uses, with its own defaults, remembered while you move between them.
3. **Encrypt and decrypt**
  Every cipher runs in both directions, with validation errors that say what to fix.
4. **A lesson per cipher**
  The formula, the steps and a worked example switch with the selection.

## How it works

The Cipher Toolkit gathers the fourteen classical ciphers that used to have one page each into a single tool. Pick a cipher from the menu, and the tool shows exactly what that cipher needs: a shift for Caesar, a pair of numbers for Affine, a keyword for Vigenère or Playfair, a matrix for Hill, nothing at all for ROT13. The explanation below the controls switches with the selection, so the page teaches whichever cipher you are looking at.

## How to use it

1. **Choose a cipher.** The menu groups the fourteen by family, from a plain Caesar shift to Bacon’s binary encoding.
2. **Type your text.** The left field is the input and the right field updates as you type.
3. **Choose a direction.** The Encrypter and Decrypter buttons swap which side is plaintext and which is ciphertext.
4. **Set the key.** The settings panel shows only the parameters the selected cipher uses, each with its default already in place.
5. **Copy or clear.** The result can be copied to your clipboard, and Clear empties both fields.

Each cipher remembers its own settings while you move between them, so trying the same message under a different cipher never disturbs the key you chose. Opening the page with `?cipher=` and a cipher name, the way the old cipher pages redirect, lands directly on that cipher.

## The four families

- **Substitution** ciphers replace letters: Caesar and ROT13 with fixed rotations, Atbash with a fixed reversal, Affine with a linear formula, Vigenère and Beaufort with a repeating keyword, and Monoalphabetic Substitution with a full custom alphabet.
- **Polygraphic** ciphers work on groups of letters: Playfair on digraphs over a keyword square, Hill on blocks multiplied by a matrix, Bifid on coordinates fractionated through a Polybius square.
- **Transposition** ciphers keep every letter but move them: Rail Fence writes a zigzag, Scytale wraps a rod, Columnar Transposition reads a grid in keyword order.
- **Binary encoding** is Bacon’s cipher, five `a`/`b` symbols per letter, built for hiding a message in plain sight rather than for scrambling it.

## The fourteen ciphers

| Cipher | Family | Key | Letters only |
| --- | --- | --- | --- |
| Caesar | Substitution | `shift` | no |
| ROT13 | Substitution | `none` | no |
| Affine | Substitution | `a, b` | no |
| Atbash | Substitution | `none` | no |
| Vigenère | Substitution | `keyword` | no |
| Beaufort | Substitution | `keyword` | no |
| Monoalphabetic Substitution | Substitution | `alphabet` | no |
| Playfair | Polygraphic | `keyword` | yes |
| Hill | Polygraphic | `matrix` | yes |
| Bifid | Polygraphic | `keyword + period` | yes |
| Rail Fence | Transposition | `rails` | yes |
| Scytale | Transposition | `diameter` | yes |
| Columnar Transposition | Transposition | `keyword` | yes |
| Bacon’s | Binary encoding | `variant` | yes |

“Letters only” means the cipher drops spaces, punctuation and case before it works, so a decrypted message comes back without its original formatting. The ciphers that preserve formatting weave the transformed letters back into the text as you typed it.

## What these ciphers are for

Classical ciphers are historical and educational tools. Each one was broken long ago: letter frequencies, repeated patterns, or plain exhaustive search defeats every cipher on this page. They are worth studying because they teach the ideas modern cryptography grew from, and they are pleasant for puzzles, but they are not suitable for protecting sensitive information. For that, use a modern tool such as the site’s [Encryption](https://sergeyromanenko.com/tools/encryption/) tool, which is built on AES.

Everything here runs in your browser. No text, key, or result is sent anywhere, stored, or logged.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [cipher](https://sergeyromanenko.com/tools/?tag=cipher)
- [classical](https://sergeyromanenko.com/tools/?tag=classical)
- [cryptography](https://sergeyromanenko.com/tools/?tag=cryptography)
- [substitution](https://sergeyromanenko.com/tools/?tag=substitution)
- [transposition](https://sergeyromanenko.com/tools/?tag=transposition)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
