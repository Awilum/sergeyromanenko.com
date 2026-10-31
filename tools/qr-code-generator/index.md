---
title: "QR Code Generator"
seo_title: "QR Code Generator — Sergey Romanenko"
description: "Create custom QR codes for URLs, text, Wi-Fi, contacts, email, phone numbers, locations, and more. Customize colors, styles, and logos, then download as PNG. Generate QR codes privately in your browser without third-party QR APIs."
canonical_url: "https://sergeyromanenko.com/tools/qr-code-generator/"
markdown_url: "https://sergeyromanenko.com/tools/qr-code-generator/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. QR Code Generator

# QR Code Generator

Create custom QR codes for URLs, text, Wi-Fi, contacts, email, phone numbers, locations, and more. Customize colors, styles, and logos, then download as PNG. Generate QR codes privately in your browser without third-party QR APIs.

## At a glance

- **Content types:** 12
- **Export formats:** PNG
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **Twelve content types, one selector**
  URLs, plain text, Wi-Fi, vCard, email, phone, SMS, location, social profiles, events, cryptocurrency addresses and an arbitrary custom payload, each with its own fields.
2. **Live preview that exports what it shows**
  The PNG is rasterised from the same SVG the preview renders, so retrospective scaling or padding never changes the encoded pattern.
3. **Colors, modules and finder patterns**
  Square, rounded, dot and classy modules; separate finder shapes and colors; quiet zone, error correction, size and transparent backgrounds.
4. **Local logo overlay**
  Upload a PNG, JPEG or WebP from your device; it is embedded as a data URL and never uploaded.
5. **Runs entirely in your browser**
  Generation, styling and export are local; nothing is transmitted, stored, or kept.

## How it works

The QR Code Generator

A QR code is only useful if it encodes what you meant and scans where it is printed. This tool builds one on your device, entirely in your browser: the content you type, the styling you choose, and the file you download never leave it.

It does not generate a decorative pattern. It generates a standards-compliant QR code matrix and renders it to a PNG, so a phone camera or a scanner reads the same payload the preview shows.

## What it builds

Every common QR content type is available from one selector: a website link, plain text, a Wi-Fi network, a contact card, an email or phone action, an SMS, a location, a social profile, a calendar event, a cryptocurrency address, and an arbitrary custom payload. Each type keeps its own fields, so switching between them does not discard what you entered.

Each type’s payload is built for you. For Wi-Fi and vCard, the reserved characters are escaped before anything is encoded. For mail and SMS, query parameters are percent-encoded. Switching the appearance — colors, module shape, finder patterns, quiet zone, error correction, size — leaves the encoded content untouched.

## Customisation

Foreground, background, module shape (square, rounded, dots, and a few variants), finder-pattern shapes and colors, margin, size, error correction level L/M/Q/H, and an optional centre logo uploaded from your device. Transparent backgrounds are supported for the PNG. Useful presets (classic, rounded, brand, print, transparent, logo-ready) change only the appearance.

A small advisory area reports contrast, margin, logo size, and density. A low-contrast or oversized-logo combination is warned about rather than silently allowed.

## Privacy

The QR content and any uploaded logo are processed locally. Nothing is uploaded, nothing is logged, and nothing is stored — no localStorage, sessionStorage, IndexedDB, or cookies are used by this tool. Only the file you explicitly download is written, and only through your browser’s download mechanism.

## Limits

Scannability depends on the receiving device and the printed size. A logo can obscure modules; very dense codes and low-contrast combinations may fail to scan. The tool warns about these but cannot guarantee that every configuration scans on every device. Unicode text is encoded in byte mode as UTF-8; most modern readers handle it. Very long payloads increase density and may exceed QR’s capacity, in which case the tool reports the error instead of truncating.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also offline

- **[Favicon Generator](https://sergeyromanenko.com/tools/favicon-generator/)**
  Generate favicons and app icons in your browser from text or an image. Export PNGs, a multi-resolution ICO, ZIP, manifest, and HTML tags. Nothing is uploaded.

  - offline
  - privacy
- **[Image Cropper](https://sergeyromanenko.com/tools/image-cropper/)**
  Crop images in your browser. Choose freeform or fixed aspect ratios, rotate and flip, zoom, preview, and download the result. Nothing is uploaded.

  - offline
  - privacy
- **[Image Resizer](https://sergeyromanenko.com/tools/image-resizer/)**
  Resize images in your browser by pixels or percentage, with aspect-ratio lock and high-quality resampling. Preview and download the result. Nothing is uploaded.

  - offline
  - privacy

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [qr](https://sergeyromanenko.com/tools/?tag=qr)
- [codes](https://sergeyromanenko.com/tools/?tag=codes)
- [offline](https://sergeyromanenko.com/tools/?tag=offline)
- [privacy](https://sergeyromanenko.com/tools/?tag=privacy)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
