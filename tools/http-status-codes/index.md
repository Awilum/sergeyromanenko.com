---
title: "HTTP Status Codes"
seo_title: "HTTP Status Codes — Sergey Romanenko"
description: "A searchable reference for every HTTP status code, with plain-English explanations, categories, and related-code links. Runs entirely in your browser."
canonical_url: "https://sergeyromanenko.com/tools/http-status-codes/"
markdown_url: "https://sergeyromanenko.com/tools/http-status-codes/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. HTTP Status Codes

# HTTP Status Codes

A searchable reference for every HTTP status code, with plain-English explanations, categories, and related-code links. Runs entirely in your browser.

## At a glance

- **Status codes:** 62
- **Classes:** 5
- **Network requests:** None
- **Offline support:** Yes

## What you can do

1. **All standard codes**
  Informational, success, redirection, client error, and server error classes.
2. **Live search**
  Filter by code, name, or keyword as you type.
3. **Class filters**
  Narrow the list to a single class (1xx–5xx).
4. **Runs entirely in your browser**
  All data is bundled with the page; nothing is sent to a server.

## How it works

HTTP Status Codes

A searchable reference for every standard HTTP status code. Filter by class (1xx–5xx), search by code, name, or keyword, and expand any entry for a plain-English explanation and related codes. All data is bundled with the page; nothing is sent to a server.

## What HTTP status codes are

HTTP status codes are the three-digit numbers a server returns at the top of every response to summarize what happened. Browsers, clients, proxies, and CDNs use them to decide whether to cache, redirect, retry, or surface an error to the user.

Every status code falls into one of five classes based on its first digit:

| Class | Meaning | Common codes |
| --- | --- | --- |
| 1xx Informational | Request received, still processing | 100, 101, 103 |
| 2xx Success | The request worked | 200, 201, 204, 206 |
| 3xx Redirection | Look somewhere else | 301, 302, 304, 307, 308 |
| 4xx Client error | Something is wrong with the request | 400, 401, 403, 404, 409, 422, 429 |
| 5xx Server error | The server failed to fulfill a valid request | 500, 502, 503, 504 |

Once you know the class, you usually know the rough meaning before looking up the specific code. Most applications only use a small core: 200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 409, 422, 429, 500, 502, 503, 504.

## How to use this reference

1. **Search by code or name.** Type a number (`404`, `429`) or a keyword (`auth`, `redirect`, `rate limit`) and the list filters live.
2. **Filter by class.** Use the class chips (1xx–5xx) to browse a category when exploring rather than searching.
3. **Read the explanation.** Each entry states when the code is sent and the typical client behavior.
4. **Compare related codes.** Use the “See also” links between confusing pairs (401 vs 403, 301 vs 302, 200 vs 204) to pick the right one for your API.

## Common codes worth knowing

### 200 OK vs 201 Created vs 204 No Content

- **200 OK** — the standard “everything worked” response, with a body.
- **201 Created** — a new resource was created, usually after a POST; should include a `Location` header.
- **204 No Content** — success with no body, common after DELETE or PUT.

All three are success codes. The difference is what the response carries.

### 301 Moved Permanently vs 302 Found

- **301 Moved Permanently** — permanent redirect; browsers and search engines remember it.
- **302 Found** — temporary redirect; browsers re-check the original URL each time.

Use 301 when a resource has actually moved. Use 302 for short-lived redirects such as login or maintenance pages.

### 401 Unauthorized vs 403 Forbidden

- **401 Unauthorized** — the server does not know who you are; send credentials.
- **403 Forbidden** — the server knows who you are but you lack permission.

If different credentials might fix it, return 401. If no credentials would help, return 403.

### 500 vs 502 vs 503 vs 504

- **500 Internal Server Error** — your application threw an unhandled exception.
- **502 Bad Gateway** — a proxy could not reach the upstream server.
- **503 Service Unavailable** — the server is up but overloaded or in maintenance.
- **504 Gateway Timeout** — a proxy reached upstream but got no response in time.

500 is your app; 502 and 504 point at the network path; 503 points at capacity.

## Common mistakes

- Returning **200 OK** with `{"error": "..."}` in the body. Status codes are part of the contract; use 400, 404, or 500 so clients can branch on them.
- Using **401** for permission errors. 401 is for authentication; permission denials are 403.
- Using **200** for newly created resources instead of **201** with a `Location` header.
- Returning **404** for unauthorized access. It hides the resource but confuses clients with legitimate access; 403 is usually clearer.
- Confusing **429 Too Many Requests** with **503 Service Unavailable**. Use 429 for per-client rate limits, 503 for global overload.

## FAQ

**What does HTTP 404 mean?** The requested resource does not exist on the server. It may also be used to hide a resource from unauthorized clients.

**What is the difference between 401 and 403?** 401 means authentication is required or has failed. 403 means the client is authenticated but lacks permission.

**What is the difference between 301 and 302?** 301 is a permanent redirect that browsers and search engines cache. 302 is temporary and re-checked on each request.

**What does HTTP 500 mean?** A generic server error, usually an unhandled exception. The response should not leak stack traces to clients.

**Should I always use a specific status code?** Yes. Status codes are part of an API contract; clients should branch on them rather than parsing error messages from the body.

**What does HTTP 429 mean?** The client has sent too many requests in a given time. The `Retry-After` header indicates when to retry.

**How many HTTP status codes are there?** RFC 9110 defines the standard set; the IANA registry lists roughly 60 codes across five classes, with more added over time.

## Privacy

All data is bundled with the page. Searching and filtering run entirely in your browser; nothing is sent to a server.

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also api

- **[Binary Converter](https://sergeyromanenko.com/tools/binary-converter/)**
  Convert between binary, decimal, octal and hexadecimal; encode and decode text and Base64; and calculate with binary arithmetic, bitwise and shift operations in your browser.

  - developers
- **[XML to JSON Converter](https://sergeyromanenko.com/tools/xml-to-json/)**
  Convert XML documents to JSON in your browser, with a documented mapping for attributes, repeated elements and mixed content.

  - api

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [http](https://sergeyromanenko.com/tools/?tag=http)
- [status codes](https://sergeyromanenko.com/tools/?tag=status+codes)
- [api](https://sergeyromanenko.com/tools/?tag=api)
- [web](https://sergeyromanenko.com/tools/?tag=web)
- [reference](https://sergeyromanenko.com/tools/?tag=reference)
- [developers](https://sergeyromanenko.com/tools/?tag=developers)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
