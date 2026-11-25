---
title: "XML to JSON Converter"
seo_title: "XML to JSON Converter — Sergey Romanenko"
description: "Convert XML documents to JSON in your browser, with a documented mapping for attributes, repeated elements and mixed content."
canonical_url: "https://sergeyromanenko.com/applications/xml-to-json/"
markdown_url: "https://sergeyromanenko.com/applications/xml-to-json/index.md"
section: "Applications"
language: "en"
robots: "index, follow"
---

1. [APPLICATIONS](https://sergeyromanenko.com/applications/)
2. XML to JSON Converter

( Tool · Data & Formats )

# XML to JSON Converter

Convert XML documents to JSON in your browser, with a documented mapping for attributes, repeated elements and mixed content.

[Open application](https://app.sergeyromanenko.com/xml-to-json/)

[Browse all in workspace](https://app.sergeyromanenko.com)

Runs locally in your browser on app.sergeyromanenko.com

## At a glance

- **Attribute prefix:** @
- **Text-node key:** #text
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **A mapping that is written down**
  Attributes become @-prefixed properties, a repeated tag becomes an array, an empty element becomes null — stated in full rather than discovered.
2. **Values stay strings**
  XML has one type: text. 250 stays "250" unless you ask for coercion yourself, so 007 and 20260131 survive the trip.
3. **Namespaces preserved**
  ns:root keeps its prefix and xmlns:ns appears as an attribute like any other, so nothing is silently renamed.
4. **The browser's own parser**
  DOMParser enforces a single well-formed root, correct nesting and entity resolution, so nothing is added to the page's dependencies.
5. **Runs entirely in your browser**
  Parsing and serialisation are local — no request to make and nothing to upload.

## How it works

XML to JSON Converter

Paste an XML document and get JSON. The conversion is done by the browser’s own XML parser, so nothing is uploaded and nothing is fetched, and the rules it follows are written down below rather than discovered.

## The mapping

XML and JSON are not the same shape, so a convention has to be chosen. This one is:

```xml
<product id="123">
  <name>Camera</name>
  <price>250</price>
</product>
```

becomes

```json
{
  "product": {
    "@id": "123",
    "name": "Camera",
    "price": "250"
  }
}
```

The rules, in full:

- **Attributes** become properties prefixed with `@`. A prefix is used so an attribute can never collide with a child element of the same name.
- **An element with only text** becomes that text: `<name>Camera</name>` becomes `"Camera"`, not `{"#text": "Camera"}`.
- **An element with text and children** carries its text on `#text`, because JSON has nowhere else for a string that belongs to both.
- **An empty element** becomes `null`.
- **A repeated tag becomes an array.** `<item/>` once is an object, `<item/>` twice is an array of two objects. This is what every XML-to-JSON tool does, and it means the one-to-many transition changes the shape — which is visible rather than hidden.
- **Namespaces** are kept in the names as the document wrote them, so `<ns:root>` has the key `ns:root` and `xmlns:ns` appears as an attribute like any other.
- **Whitespace** around an element’s text is trimmed. Whitespace inside the text is preserved.

## Everything is a string

XML has one type: text. `<price>250</price>` is not the number 250, it is three characters that mean a number. This converter keeps every value as a string, because guessing what a document’s author meant is how `007` becomes `7` and `true` becomes a boolean on a year code like `20260101`. If you know your document is pure data, type coercion is one switch away and it re-reads everything you pasted.

## What is lost

XML can express things JSON cannot, so some conversions are lossy and the tool does not pretend otherwise:

- **Comments and processing instructions** are dropped.
- **Mixed content** — text and elements interleaved — is flattened onto `#text`. The order they appeared in is not recoverable from JSON.
- **CDATA** becomes ordinary text.
- **The XML declaration and DOCTYPE** describe the document, not its data, so they do not appear in the output.

## What it is not

It does not produce the JSON you would have written by hand. A hand-written JSON API response has plural keys and no `@` prefixes, because a person chose them. This converter is mechanical and predictable, which is what you want when you are turning an RSS feed into data and do not want to guess.

Every well-formed XML document converts. A malformed one gives you a line and a column from the browser’s parser, and your source stays in the editor.

## Details

- **Access:** Free to use, no account
- **Category:** Data & Formats
- **Kind:** Browser tool
- **Runs in:** Web
- **Year:** 2026
- **Workspace:** app.sergeyromanenko.com

## Related also data

- Tool · Data & Formats
  ### [JSON YAML Converter](https://sergeyromanenko.com/applications/json-yaml-converter/)
  Convert JSON to YAML and YAML to JSON in your browser, with configurable indentation and errors that say where to look.

  - json
  - converter
  - data
- Tool · Data & Formats
  ### [JSON Formatter](https://sergeyromanenko.com/applications/json-formatter/)
  Validate, format and minify JSON in your browser, with syntax errors reported as a line and a column you can find.

  - json
  - data
- Tool · Data & Formats
  ### [YAML Formatter](https://sergeyromanenko.com/applications/yaml-formatter/)
  Validate and format YAML in your browser, with parser errors reported as a line and a column you can find.

  - data

## Tags

Follow a tag below to browse other applications filed under it.

- [xml](https://sergeyromanenko.com/applications/?tag=xml)
- [json](https://sergeyromanenko.com/applications/?tag=json)
- [converter](https://sergeyromanenko.com/applications/?tag=converter)
- [data](https://sergeyromanenko.com/applications/?tag=data)
- [api](https://sergeyromanenko.com/applications/?tag=api)

Found this application useful? [Support independent development](https://sergeyromanenko.com/support/)
