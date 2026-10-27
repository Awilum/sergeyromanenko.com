---
title: "ULID Generator"
seo_title: "ULID Generator — Sergey Romanenko"
description: "Generate universally unique lexicographically sortable identifiers in your browser, with the count you need."
canonical_url: "https://sergeyromanenko.com/tools/ulid-generator/"
markdown_url: "https://sergeyromanenko.com/tools/ulid-generator/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# ULID Generator

Generate universally unique lexicographically sortable identifiers in your browser, with the count you need.

## At a glance

- **Characters:** 26
- **Timestamp bits:** 48
- **Randomness bits:** 80
- **Offline support:** Yes

## What you can do

1. **Standard 26-character ULIDs**
  Crockford Base32 with no I, L, O or U, 48 bits of millisecond timestamp and 80 bits of randomness.
2. **Sorts by generation order**
  The timestamp is inside the identifier, so a lexicographic sort is also a chronological one.
3. **From 1 to 1000 at a time**
  One identifier for a single row, or a batch for a fixture, in either Raw or JSON.
4. **Cryptographically secure randomness**
  The random half comes from crypto.getRandomValues, never from the clock or from Math.random.
5. **Runs entirely in your browser**
  No server is involved and nothing is stored — the identifiers exist in the page until you reload.

## How it works

ULID Generator

A UUID version 4 is unique but random, which means it cannot be sorted. A ULID is both: 128 bits, of which the first 48 are the millisecond the identifier was generated, so a list of them ordered lexicographically is also ordered in time. That is what makes a ULID the right default for a database primary key — it stays unique when it is generated on several machines without co-ordination, and it indexes well because it arrives in order.

This tool builds them on your device. The random half comes from the operating system’s generator, and nothing is sent anywhere or stored.

## The shape of one

Twenty-six characters of Crockford Base32, which is `0–9` and `A–Z` with the letters `I`, `L`, `O` and `U` left out. Leaving them out is the point: an identifier read aloud or copied from a screenshot cannot be misread as a `1`, a `0` or a vowel, and there is no lowercase to be normalised away.

- the first 10 characters carry the timestamp, in milliseconds;
- the last 16 carry 80 bits of randomness;
- the 26 characters together are 130 bits, of which 128 are used and the top two are always zero.

`01ARZ3NDEKTSV4RRFFQ69G5FAV` is the identifier the specification uses as its example. It decodes to 30 July 2016, 23:54:10.259 UTC — the timestamp is in the value, not beside it.

## What it is good for

Sortability is the property worth paying for. A ULID primary key gives you insertion order for free, without a separate `created_at` column that can disagree with it, and it keeps its order across shards because the clock is UTC.

It is not a security token. The random half is unpredictable, but only 80 bits of it, and its unpredictability is not the reason to use a ULID. If what you need is a value that must not be guessed, generate a token instead.

## Generating several

The quantity field takes anything from 1 to 1000, and the output can be read as Raw — one identifier per line — or as JSON, which wraps the batch with its count and the timestamp of the first identifier.

Two identifiers generated in the same millisecond are still distinct, because each takes its own 80 bits from the generator. Across 1000 of them the chance of a collision is about one in 10 to the 21st.

## What it does not do

It does not guarantee monotonicity within a millisecond: two ULIDs generated at the same millisecond are distinct but their order is the order their randomness happened to fall in. If you need strict ordering at sub-millisecond resolution, the identifier is the wrong tool and you need a sequence.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also security

- **[Encryption](https://sergeyromanenko.com/tools/encryption/)**
  Encrypt and decrypt text in your browser with AES-256-GCM or the OpenSSL-compatible AES-256-CBC format.

  - security
- **[Hash Text](https://sergeyromanenko.com/tools/hash-text/)**
  Hash text with MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA3-512 or RIPEMD-160, entirely in your browser.

  - security
- **[SQL Editor](https://sergeyromanenko.com/tools/sql-editor/)**
  Write and run SQLite against a database that lives in this tab: build one from a schema script or open a .sqlite file, read results as a table, Markdown, JSON or YAML, and save the database back out as a file.

  - databases

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [identifiers](https://sergeyromanenko.com/tools/?tag=identifiers)
- [security](https://sergeyromanenko.com/tools/?tag=security)
- [databases](https://sergeyromanenko.com/tools/?tag=databases)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
