---
title: "Text Analyzer"
seo_title: "Text Analyzer — Sergey Romanenko"
description: "Measure words, characters, sentences, paragraphs, reading time, page count, word frequency and repeated phrases — computed entirely in your browser."
canonical_url: "https://sergeyromanenko.com/tools/text-analyzer/"
markdown_url: "https://sergeyromanenko.com/tools/text-analyzer/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

Tools

Tool

# Text Analyzer

Measure words, characters, sentences, paragraphs, reading time, page count, word frequency and repeated phrases — computed entirely in your browser.

## At a glance

- **Counts reported:** 12
- **Reading speed:** 200 wpm
- **Speaking speed:** 150 wpm
- **Offline support:** Yes

## What you can do

1. **Every count in one place**
  Words, unique words, characters, characters without spaces, UTF-8 bytes, lines, paragraphs and sentences — updated as you type.
2. **Counts characters correctly**
  A flag, a family emoji and a letter with a combining accent each count as one, because the count goes through Unicode segmentation rather than string length.
3. **Reading and speaking time**
  Both speeds are yours to set, because the tools that publish these figures disagree with each other by up to 75 words per minute.
4. **Word frequency and repetition**
  The words your text leans on, the words used more than once, and the phrases that recur.
5. **States its own limits**
  Sentence counts follow punctuation rules, not meaning — “Mr. Smith left.” is two — and Han text has no word-segmentation dictionary.

## How it works

Text Analyzer

You have a draft and you need to know what it is: how long, how fast it reads, which words it leans on, and whether you have said the same thing three times. That is a set of arithmetic operations on the text, and this page does all of them in one place.

Everything is measured on your device. Nothing is sent anywhere, and nothing is saved: the figures exist in the page and disappear when you close it.

## What the numbers mean

Most of these are straightforward, and three are not. Those three are the ones worth reading before you quote a figure.

**Characters are grapheme clusters, not code units.** `"🇻🇳".length` is 4 — two regional indicators, each a surrogate pair — while you see one flag. The same is true of a family emoji joined with zero-width joiners, and of a letter carrying a combining accent. Every count here goes through the platform’s own text segmentation, so what you see is what is counted. The **UTF-8 bytes** row is separate and is the number a file or a database column actually stores.

**Sentences are punctuation, not meaning.** The platform’s segmentation rules break a line at a full stop followed by a space and a capital. So `"Mr. Smith left."` counts as two sentences. No amount of tuning fixes that without a language model, and a heuristic that guessed would be worse than one that is consistently wrong in a way you can see. It is a count of sentence *boundaries*, and the figure says so.

**Words are segments, not dictionary entries.** Latin scripts that use spaces, Cyrillic and Vietnamese segment accurately. Thai does too — ICU carries a dictionary for it. Chinese, Japanese and Korean do not: Han text arrives as one run, because there is no word-segmentation dictionary for it and any tool claiming otherwise is either shipping a large dataset or guessing. Read those counts as “words as an editor sees them”.

## Reading time is arithmetic, not a measurement

The estimate is your word count divided by a speed. The defaults are 200 words per minute for reading and 150 for speaking, which are the figures the clearest implementations of this tool publish — and the surveyed tools disagree with each other by up to 75 wpm, because there is no correct answer. They are yours to change, and the two fields above the estimates show what each one is currently using.

The same is true of pages. 250 words to a page is a convention, and it assumes a page size, a typeface and a leading that no standard fixes. Change the number and every page figure follows.

**Publisher’s words** counts only the words that contain a letter, which is why “250 words” reads as four words to you and three to a manuscript submission.

## The vocabulary

The frequency ranking is the useful half of this tool and the stop-word filter is what makes it useful. Without it, the list opens with *the*, *and* and *of* — which is true, and which every reader already knows. The list that ships is short on purpose: it holds the words that carry no topical signal in running prose and nothing else. A writer looking for a repetition in their own draft usually wants *said* or *just* visible, and those stay in.

It is an **English** list, and the interface says so. A stop list for another language is a different list; inventing one from the shape of this one would be guessing, and a Vietnamese or Russian draft would lose real words to it.

Turn **ignore case** off to see that *The* and *the* are different words, which is what most search engines do and what a copy editor checking a repeated heading wants.

## Repetition

A word used three times is often deliberate. A phrase of three or more words used three times is usually a habit, and that is the more interesting list.

The phrases are found by sliding a window of consecutive words across the text, so a phrase that straddles a comma still matches — which is usually the point. Overlapping windows are counted deliberately: in *“very very good”*, *very very* is a repeated phrase whether or not you were looking for it.

## What it does not do

There is no readability grade here, and that is a decision rather than an omission. Six of them were found across the reference tools for this research — Flesch, Flesch–Kincaid, Fog, Coleman–Liau, SMOG and the Automated Readability Index — and every one of them reduces to a syllable count. On English prose they are a reasonable rough signal. On Vietnamese, Chinese or Russian prose they report noise while displaying a confident education level, and a tool that tells a writer their work is suitable for a 4th-grade reader when it is not looking at the right thing is worse than one that says nothing.

What is kept instead is the part that holds across languages: sentence length, which is arithmetic. **Long sentences** lists the sentences past a threshold you set. Twenty-five words is a long sentence in a novel and an ordinary one in a technical document, so the number is yours, not the tool’s.

There is also no AI check, no grammar judgement and no “your text is good”. This page measures; you decide what it means.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also writing

- **[Case Converter](https://sergeyromanenko.com/tools/case-converter/)**
  Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case and eleven more formats at once.

  - writing
- **[Emoji Picker](https://sergeyromanenko.com/tools/emoji-picker/)**
  Search and copy emoji from a set bundled with the page — no API call, no tracking, and the picker keeps working offline once the page has loaded.

  - writing
- **[Find and Replace](https://sergeyromanenko.com/tools/find-and-replace/)**
  Find and replace text with optional regular expressions, case and whole-word matching, match counting and safe capture-group substitution.

  - writing

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [writing](https://sergeyromanenko.com/tools/?tag=writing)
- [word count](https://sergeyromanenko.com/tools/?tag=word+count)
- [reading time](https://sergeyromanenko.com/tools/?tag=reading+time)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
