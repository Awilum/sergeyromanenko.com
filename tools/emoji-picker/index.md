---
title: "Emoji Picker"
seo_title: "Emoji Picker — Sergey Romanenko"
description: "Search and copy emoji from a set bundled with the page — no API call, no tracking, and the picker keeps working offline once the page has loaded."
canonical_url: "https://sergeyromanenko.com/tools/emoji-picker/"
markdown_url: "https://sergeyromanenko.com/tools/emoji-picker/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Emoji Picker

Search and copy emoji from a set bundled with the page — no API call, no tracking, and the picker keeps working offline once the page has loaded.

## At a glance

- **Emoji:** 563
- **Search:** By name
- **Data source:** Bundled
- **Offline support:** Yes

## What you can do

1. **Search by name**
  Type "thumbs" or "flag vietnam" and get the emoji, from a set bundled with the page rather than fetched from an API.
2. **Multi-code-point sequences**
  A family, a flag or a skin tone is one emoji that is several code points. The picker handles them as the single thing they are.
3. **Skin tones where they apply**
  Composed from the base emoji and a modifier, so the dataset stays small enough to ship.
4. **Nothing is remembered**
  No recent list, no storage. What you picked is in the clipboard and nowhere else.

## How it works

Emoji Picker

Search for an emoji, click it, copy it. No account, no API call, nothing stored.

## The set ships with the page, and that is a decision

Most emoji pickers call an API. This one does not, and the reasons are the same ones that apply to everything else here:

- **It works offline once the page is loaded.** There is no API behind the picker and nothing is fetched, so the search and the grid keep working on a train. That is a claim about the tool, not about the website: this site has no service worker, so the *page* still needs a connection to open in the first place.
- **Your searches are not sent to anyone.** Every keystroke in a search box is text a person typed; sending it to a third party because they were looking for a picture of a thumbs-up is not a trade anyone should have to accept quietly.
- **Nothing is added to this site.** A picker component is about 250 kB of UI framework plus its own data set, to draw a grid of buttons.

What that costs is stated plainly: **this is a selection of a few hundred emoji, not all of Unicode.** The category tabs and the count above the grid both say so. If you need an emoji that is not here, this is not the tool — and no honest offline picker of this size would have it.

The words are Latin and the search vocabulary is English, because the search box is in an English-language site.

## Search by what you would actually type

A reader types **thumb**, not “thumbs up”. A reader types **like**. So every entry carries a keyword column written by hand, and the search runs against the name and the keywords together.

That is also why this is not fuzzy matching, does not rank, and does not know synonyms beyond what the keyword column says. `flag` finds the flags because the keyword column says `flag`. `👍` is found by `thumb`, `like`, `yes`, `approve`, `good` and `+1`.

## Multi-code-point sequences are handled as one thing

**One emoji is not one code point.** A flag is two regional indicators — four UTF-16 units. A family is seven people joined by six zero-width joiners. A thumbs-up with a skin tone is a base plus a modifier.

Each is stored here as a whole sequence, because that is what the reader pastes and what has to round-trip. Copying a family gives you one emoji on the clipboard, not seven people standing next to each other.

The same care applies to skin tones: they are **composed** from the base emoji and a modifier rather than stored seven times over, so the set stays small enough to read in review.

## Skin tones apply per entry, not globally

Choosing a skin tone does not tint the whole grid. A tone applies to the emoji that accept one — hands, gestures, people — and applying it to a rocket would attach a modifier to a rocket and render two things where there should be one.

Right-click (or the variants control) on an entry that accepts a tone to see all six.

## Nothing is remembered

Most pickers keep a **recent** list. This one does not, and that is deliberate.

A recent list is a record of what someone was assembling, left in the browser of a shared or borrowed machine. The cost is that a reader who used the same emoji an hour ago has to search again — one extra click.

Nothing is written to `localStorage`, to a cookie, or to the URL. What you picked is on your clipboard and nowhere else, and it is gone when you close the page.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also writing

- **[Text Truncator](https://sergeyromanenko.com/tools/text-truncator/)**
  Shorten text to a limit in characters, words, sentences, lines or paragraphs — cutting at a word boundary and counting the suffix inside the limit.

  - writing
  - social media
- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - writing
- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [writing](https://sergeyromanenko.com/tools/?tag=writing)
- [emoji](https://sergeyromanenko.com/tools/?tag=emoji)
- [social media](https://sergeyromanenko.com/tools/?tag=social+media)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
