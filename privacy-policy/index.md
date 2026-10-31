---
title: "Privacy & Security Policy"
seo_title: "Privacy & Security Policy — Sergey Romanenko"
description: "Privacy and Security Policy for sergeyromanenko.com — how this website handles visitor data, browser-based tools and games, external services, and your rights."
canonical_url: "https://sergeyromanenko.com/privacy-policy/"
markdown_url: "https://sergeyromanenko.com/privacy-policy/index.md"
section: "Site"
language: "en"
robots: "index, follow"
---

# Privacy & Security Policy

How sergeyromanenko.com handles visitor data, browser-based tools, external services, and your rights.

**Last updated:** October 26, 2026

## 1. Scope

This Privacy and Security Policy applies to **sergeyromanenko.com** and its subpages, including:

- **Photography** — documentary and street photography projects
- **Tools** — free browser-based utilities (78 tools as of this writing)
- **Games** — free browser-based games (6 games as of this writing)
- **Publications** — books, photo zines, travel journals, and essays
- **Courses** — informational pages describing courses hosted on Stepik
- **About** — biographical and professional information
- **Support** — voluntary contribution page linking to Ko-fi and other payment providers

This policy does not cover the practices of third-party websites linked from this site (such as Stepik, Ko-fi, GitHub, or YouTube), which operate under their own privacy policies.

## 2. Website Operator and Contact

This website is operated by **Sergey Romanenko** as a personal portfolio and publishing site.

For questions about this Privacy and Security Policy or data practices, contact:

awilum.dev@gmail.com

No separate legal entity, company registration, or postal address is associated with this website. The operator is an individual acting in a personal capacity.

## 3. Hosting, Deployment, and Infrastructure

The website is built with **Astro.js** and statically generated at build time. The output is a collection of static HTML, CSS, and JavaScript files with no server-side runtime.

The site is deployed to **GitHub Pages** from the `main` branch of the [source repository](https://github.com/Awilum/sergeyromanenko.com). GitHub Pages serves the static files over HTTPS via a global CDN.

The custom domain `sergeyromanenko.com` is registered with **Namecheap** and configured to point to GitHub Pages via DNS (CNAME and A records). Namecheap acts solely as the domain registrar and DNS provider; it does not process website visitor data beyond standard DNS resolution.

No application server, database, or server-side logging pipeline is operated by the website owner. All hosting infrastructure is managed by GitHub.

## 4. Information Processed

### 4.1 No intentional collection through website forms

This website does not provide:

- User accounts, registration, or authentication
- Contact forms
- Newsletter subscriptions
- Checkout or payment processing (payments are handled externally via Ko-fi and other providers)
- Comment systems or user-generated content

The website does not intentionally collect personal information through its own forms or interfaces.

### 4.2 Technical processing by hosting infrastructure

The site is a static build hosted on GitHub Pages' CDN. As with any website, the hosting provider and CDN process technical data necessary to deliver content, which may include:

- IP addresses
- Requested URLs and paths
- Timestamps
- HTTP headers (User-Agent, Referer, Accept-Language, etc.)
- Browser and device metadata

This processing is performed by GitHub (the infrastructure provider), not by the website operator. The operator does not access, analyze, or retain these logs beyond what GitHub's default retention entails. GitHub's privacy statement governs their handling of this data.

### 4.3 Information voluntarily provided via email

Visitors may contact the operator directly at `awilum.dev@gmail.com`. When you send an email, you voluntarily provide:

- Your email address
- Any content you include in the message
- Metadata attached by your email provider and the recipient's email infrastructure

This information is processed by your email provider, the operator's email provider (Google), and any intermediate mail systems — not by this website. The website itself does not receive, store, or process this data. Retention is governed by the email providers' policies and the operator's personal email practices; no specific retention period is committed to by this website.

### 4.4 Information processed by Cloudflare Web Analytics

This website uses **Cloudflare Web Analytics** for aggregate traffic measurement. The analytics script is loaded on every page from a single shared location in the site's layout; it is not duplicated per page. The intended metrics are page views, popular pages, referring sources, visitor geography where available, and aggregate website performance.

Cloudflare Web Analytics is designed to operate without cookies or`localStorage` for analytics and, according to Cloudflare's documentation, does not use cross-site visitor tracking or individual visitor profiles. The service still processes technical information required to generate analytics, such as IP address, user agent, requested URL, referrer, and approximate location derived from the IP address. The operator does not claim that no personal data or IP-related information is processed.

Cloudflare Web Analytics is provided by Cloudflare, Inc., a third party with its own privacy documentation and applicable service terms. The operator receives analytics reports through the Cloudflare dashboard; it does not operate a self-hosted database of raw visitor records unless a separate analytics database is actually configured (none is at present).

For Cloudflare's own description of the service and its data handling, see: [Cloudflare Web Analytics documentation](https://developers.cloudflare.com/web-analytics/) and [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/).

## 5. Legal Bases and Purposes (Where GDPR Applies)

The applicability of the EU General Data Protection Regulation (GDPR) depends on the operator's establishment and whether the processing relates to offering goods or services to, or monitoring the behaviour of, individuals in the EU. This website is an internationally accessible informational portfolio. Whether GDPR applies in a given case is a legal determination; the operator does not claim blanket GDPR compliance or non-applicability.

Where GDPR does apply, the following legal bases and purposes are relevant to the actual processing activities:

- **Legitimate interests (Article 6(1)(f)):** Operating a static website, delivering content via CDN, and maintaining the technical infrastructure necessary for the site to function.
- **Performance of a contract / pre-contractual measures (Article 6(1)(b)):** Not directly applicable — the site does not enter into contracts with visitors. Course enrollment and payments occur on Stepik and payment providers' platforms.
- **Consent (Article 6(1)(a)):** The site now loads Cloudflare Web Analytics (see Section 4.4). Whether a consent mechanism is required for that script depends on the applicable jurisdiction, the interpretation of the ePrivacy Directive and local cookie rules, and the operator's circumstances; this policy does not assert that consent is unnecessary everywhere. No consent banner or opt-out control is currently implemented. If applicable law requires one, that is a separate implementation task and is flagged in the review notes.
- **Legal obligation (Article 6(1)(c)):** Compliance with applicable laws governing the operator's obligations.

The operator does not have an establishment in the EU. Whether an EU representative must be appointed under Article 27 if GDPR applies is a legal determination that must be verified; this policy does not assert an exemption. The operator relies on the transparency and rights mechanisms described in this policy, but that reliance does not by itself establish compliance.

A GDPR legal basis for personal-data processing (Article 6) is distinct from consent requirements that may arise under the ePrivacy Directive or national cookie laws. The legal basis applicable to Cloudflare Web Analytics processing, if any personal data is involved, is not asserted here and must be assessed by the operator; this policy does not claim that legitimate interests automatically applies to analytics.

## 6. Cookies and Tracking

**The website application itself sets no cookies.** No first-party cookies, tracking pixels, fingerprinting scripts, or similar technologies are written by the application code.

**Analytics:** Cloudflare Web Analytics is integrated site-wide (see Section 4.4). It is designed to operate without cookies or `localStorage` for analytics according to Cloudflare's documentation. The operator has not independently verified every network request the beacon makes; the implementation is as described in Section 4.4.

**Hosting and CDN:** GitHub Pages may set technical cookies for load balancing, security, or DDoS protection. These are outside the operator's control and are not used by the website for tracking or analytics.

**Embedded third parties:** Tools such as YouTube on Repeat load third-party scripts and players that may set their own cookies or use browser storage. Google Fonts requests may also involve cookies set by Google. The operator does not control these and cannot promise that the entire website is cookie-free.

**Browser storage used by tools and games:** Several tools and games use `localStorage` for functionality (see Section 8). This is not used for tracking or analytics.

**Consent banner:** No cookie banner or consent management platform is present. Whether one is legally required for the actual implementation and the operator's target jurisdictions cannot be determined from the repository alone; if required, implementing it (including actually controlling when the analytics script loads) is a separate task and is flagged in the review notes. No non-functional consent control is added here.

## 7. Browser-Based Tools and Games

The [Tools](https://sergeyromanenko.com/tools/) section provides 78 free browser-based utilities, and the [Games](https://sergeyromanenko.com/games/) section provides 6 free browser-based games. Both collections share the same privacy and security architecture, described in detail below.

### 7.1 Local-first processing (74 of 78 tools; all 6 games)

For 74 tools and all 6 games, all processing occurs in the visitor's browser using JavaScript and WebAssembly. No network requests are made after the initial page load. This includes:

- All 14 classical ciphers (Caesar, ROT13, Atbash, Vigenère, Affine, Monoalphabetic Substitution, Rail Fence, Columnar Transposition, Scytale, Bacon, Playfair, Hill, Beaufort, Bifid)
- Encryption & Hashing tools (AES Encryption, Hash Text, ULID Generator)
- Text processing tools (Analyzer, Case Converter, Cleaner, Find & Replace, Formatter, List Processor, Splitter, Diff, Truncator, Lorem Ipsum, Emoji Picker, Binary Converter, Token Generator)
- Data formatters (JSON Formatter, JSON↔YAML, XML→JSON, YAML Formatter, Front Matter Editor)
- Editors (Markdown, Code, SQL, Mermaid Diagram, Pseudocode, Lua, Brainfuck)
- Image tools (Cropper, Resizer, Converter, Favicon Generator)
- Calculators & utilities (Percentage, GPS Coordinates, Speed/Distance/Time, Time Difference, World Clock, Photography Location Planner, Unit Converter, QR Code Generator, HTTP Status Codes)
- Games (2048, Tic-Tac-Toe, Rock Paper Scissors, Memory Game, Tower of Hanoi, Lights Out, Simon)

Cryptographic operations use the browser's `crypto.subtle` API (Web Crypto) where available, with audited pure-JavaScript fallbacks.

### 7.2 Tools that make external network requests (2 tools)

No games make external network requests. All 6 games are fully local-first.

- **Currency Converter** — fetches exchange rates from `open.er-api.com`. Only the base currency code (e.g., "USD") is transmitted. Amounts, target currencies, and results never leave the browser.
- **YouTube on Repeat** — loads the YouTube iframe player API from `youtube.com` and embeds the specified video. The video ID, playback position, loop markers, and speed settings are handled by YouTube's player. This tool cannot function without a connection to YouTube.

Both tools disclose their network activity in their interfaces. No other tool or game makes outbound requests.

### 7.3 File handling

Tools that accept files (image tools, SQL Editor database import, QR Code Generator logo overlay) use browser APIs. Files are read into memory in the browser and processed locally. At no point are files transmitted to the operator’s infrastructure — the site has no upload endpoint, no API, and no database.

### 7.4 Offline functionality

Once the page and its required assets (JavaScript, WebAssembly modules, bundled data files) have loaded, 74 tools and all 6 games work completely without an internet connection. The two exceptions are Currency Converter and YouTube on Repeat, which require live network connections for their core functionality.

"Offline" means the tool's or game's core function works without network access after the initial page load. It does *not* mean the page is a PWA, assets are guaranteed to be cached, or you can open the tool for the first time while offline. For guaranteed offline access, save the page (Ctrl+S / Cmd+S) or use a browser extension that archives pages.

### 7.5 Confidential files and limitations

For the 74 fully-local tools: **yes, with the caveats below.** Your files, source code, passwords, private keys, and personal data never leave your browser. The processing happens in memory and the results are either displayed on screen or offered as a download you explicitly trigger.

**Important limitations:**

- **Browser memory.** Data you paste or upload exists in the browser's JavaScript heap and, for image tools, in canvas memory. Closing the tab releases this memory. A memory dump of the browser process (by malware, a compromised extension, or forensic tooling) could theoretically recover it. This is true of *any* web application.
- **Browser extensions.** Extensions you have installed can read the DOM, intercept network requests, and access `localStorage`. We cannot control what your extensions do.
- **Sharing links.** Several tools (Token Generator, Encryption, QR Code Generator, Code Editor, SQL Editor, Mermaid Diagram Editor, Markdown Editor, Lua Editor, Time Difference Calculator, World Clock) offer a "Share link" feature. This encodes the tool's state into the URL hash fragment (the part after `#`). **Hash fragments are never sent to the server** — they are purely client-side. However, anyone with the full URL can reconstruct the state. Do not share links containing confidential material.
- **Lua Editor localStorage.** The Lua Editor persists your source code, input, and saved snippets to `localStorage`. This survives browser restarts. Clear it via the tool's "Clear" button or your browser's storage settings if needed.
- **YouTube on Repeat.** This tool sends the video ID to YouTube. Do not use it with private/unlisted videos you don't want YouTube to associate with your session.
- **Currency Converter.** Only the base currency code is sent to `open.er-api.com`. No amounts or personal data.

**No absolute guarantees.** The tools are free browser-based utilities built by one person. They are not audited by a third party, not compliant with HIPAA/GDPR/SOC2 by design, and not suitable for regulated environments without your own assessment. Use judgment. For highly sensitive work, consider air-gapped local tools.

## 8. Data Storage and Retention

### 8.1 In the browser (your device)

Two tools and all six games use persistent browser storage:

| Tool / Game | Storage | What is stored | Retention |
| --- | --- | --- | --- |
| Lua Editor | `localStorage` | Last source code, input text, named snippets (code + name + timestamps) | Until cleared via tool UI or browser settings |
| YouTube on Repeat | `localStorage` | Up to 10 recent video IDs, titles, and timestamps | Until cleared via tool UI or browser settings |
| Time Difference Calculator | `localStorage` | Selected city IDs and time format | Until cleared via browser settings |
| World Clock | `localStorage` | Selected city IDs and time format | Until cleared via browser settings |
| 2048 | `localStorage` | Best score, current game state | Until cleared via game UI or browser settings |
| Tic-Tac-Toe | `localStorage` | X wins, O wins, draws | Until cleared via game UI or browser settings |
| Rock Paper Scissors | `localStorage` | Wins, losses, draws | Until cleared via game UI or browser settings |
| Memory Game | `localStorage` | Best scores, preferences, records per difficulty/theme/mode | Until cleared via game UI or browser settings |
| Tower of Hanoi | `localStorage` | Best moves and time per disk count | Until cleared via game UI or browser settings |
| Lights Out | `localStorage` | Best moves and time per board size | Until cleared via game UI or browser settings |
| Simon | `localStorage` | Best score and best round per pad count | Until cleared via game UI or browser settings |
| Hitori | `localStorage` | Settings and best records | Until cleared via game UI or browser settings |
| All other tools | None | — | — |

In-memory data (JavaScript heap, canvas memory) is released when you close the tab. The "Share link" feature in several tools encodes state into the URL hash fragment (the part after `#`); hash fragments are never sent to the server.

### 8.2 On the operator's infrastructure

The site is a static build hosted on GitHub Pages. The operator runs no application server, no database, and no separate analytics database. GitHub Pages may process technical delivery and access information (such as IP address, requested path, timestamp, and user agent) as part of serving the site; the operator does not access, analyze, or retain those logs beyond GitHub's default handling.

Cloudflare Web Analytics processes information according to its own documented architecture and retention practices; the operator accesses the resulting reports through the Cloudflare dashboard and does not hold a self-hosted copy of raw visitor records. The operator does not state specific retention periods and instead refers to the providers' documentation.

### 8.3 Third-party services

- `static.cloudflareinsights.com` (Cloudflare Web Analytics): loads the analytics beacon on every page. See Sections 4.4 and 9. Cloudflare's privacy policy applies.
- `open.er-api.com` (Currency Converter): receives only the base currency code. Their privacy policy applies.
- `youtube.com` (YouTube on Repeat): receives video ID and playback telemetry. YouTube's (Google's) privacy policy applies.
- `fonts.googleapis.com` / `fonts.gstatic.com` (Google Fonts): serves web fonts (Instrument Serif, Inter, IBM Plex Mono). Google's privacy policy applies.
- `ko-fi.com`, `paypal.me`, `yoomoney.ru`, `nowpayments.io` (Support page): visited only when you click a support link. Their privacy policies apply.
- `stepik.org` (Course links): visited only when you click a course link. Stepik's privacy policy applies.

## 9. External Services

This website integrates with or links to the following external services. Each operates under its own terms and privacy policy.

- **Stepik (`stepik.org`):** Course catalog pages link to Stepik for enrollment, payment, and course delivery. No Stepik content is embedded; no data is exchanged between this site and Stepik except the referral implicit in following a link.
- **Ko-fi (`ko-fi.com`) and other payment providers:** The [Support](https://sergeyromanenko.com/support/) page links to Ko-fi, PayPal, YouMoney, and PayNow for voluntary contributions. No payment processing occurs on this site.
- **GitHub (`github.com`):** Source code repository and issue tracker. Visiting GitHub is governed by GitHub's privacy statement.
- **YouTube (`youtube.com`):** Used only by the YouTube on Repeat tool for video embedding and playback.
- **open.er-api.com:** Used only by the Currency Converter tool for exchange rate data.
- **Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`):** Loads three font families on every page. This is a single combined request.
- **Cloudflare Web Analytics (`static.cloudflareinsights.com`):** Loads the analytics beacon on every page and reports aggregate traffic and performance metrics to the operator's Cloudflare dashboard. See Section 4.4.

The operator does not control the data practices of these services. Visitors should review their respective privacy policies.

## 10. Stepik and Educational Courses

The [Courses](https://sergeyromanenko.com/courses/) section provides informational descriptions of programming courses created by the operator and hosted on **Stepik** (`stepik.org`).

**Enrollment, payment, course delivery, certificates, and learner support are handled entirely on Stepik.** This website does not process enrollments, collect payments, issue certificates, or provide course access. Clicking a course link takes you to Stepik, where Stepik's terms of service, privacy policy, and pricing apply.

Course information on this site (descriptions, curricula, statistics) is provided for reference and may not always reflect real-time availability or pricing on Stepik. The authoritative source is the Stepik course page.

## 11. Ko-fi and Voluntary Project Support

The [Support](https://sergeyromanenko.com/support/) page offers visitors the option to make voluntary financial contributions to support the operator's independent development work.

**Support is entirely voluntary.** It is not a purchase, subscription, or payment for goods or services. You can continue using all free tools, publications, and resources without making a contribution.

Contributions are processed by external payment providers (Ko-fi, PayPal, YouMoney, PayNow). The operator does not receive or process payment data. Each provider's terms, fees, and privacy policies apply. Refunds, disputes, and receipts are handled by the respective provider.

Some courses, guides, and other digital products are sold separately on their respective platforms and are not included in this voluntary support model.

## 12. Email Correspondence

The website provides a direct email contact: [awilum.dev@gmail.com](mailto:awilum.dev@gmail.com). No contact form exists on the website.

When you send an email, you voluntarily provide your email address, message content, and associated metadata to your email provider and the operator's email provider (Google). This information is not processed by the website itself. The operator's retention of email correspondence follows standard email practices; no automated deletion or fixed retention period is enforced by this website.

## 13. Security

The website is served over HTTPS via GitHub Pages' CDN. The static architecture (no application server, no database, no authentication) reduces the attack surface. The operator does not configure a custom Content Security Policy: GitHub Pages does not support custom response headers, so no CSP is enforced by the hosting layer. If a CSP is added later (for example through a proxy or meta tag), it must allow the Cloudflare Web Analytics script origin and the existing third-party origins.

However, no absolute security guarantees are made. The tools are not suitable for regulated environments or highly sensitive data without your own assessment. Browser extensions, compromised devices, and network-level attacks can compromise data processed in the browser — this is true of any web application.

The source code is publicly available on [GitHub](https://github.com/Awilum/sergeyromanenko.com) under the MIT License, allowing independent verification of the implementation.

## 14. International Transfers

The operator's infrastructure (GitHub Pages CDN) may process data in multiple jurisdictions. Google Fonts, YouTube, open.er-api.com, and Cloudflare Web Analytics are operated by entities that may process data outside the European Economic Area. The operator does not control the transfer mechanisms used by these third parties.

For Cloudflare Web Analytics, the processing locations and any transfer mechanisms are determined by Cloudflare's own documented arrangements and must be verified against Cloudflare's documentation; the operator's privacy policy and the provider's documentation alone do not establish that every applicable international-transfer requirement is met.

Where GDPR applies and a transfer occurs, the operator relies on the third parties' stated safeguards (standard contractual clauses, adequacy decisions, or other mechanisms they implement). The operator cannot independently verify or guarantee these safeguards.

## 15. Privacy Rights (Where GDPR Applies)

Where GDPR applies, data subjects may have rights including:

- Access (Article 15)
- Rectification (Article 16)
- Erasure (Article 17)
- Restriction of processing (Article 18)
- Data portability (Article 20)
- Objection (Article 21)
- Lodging a complaint with a supervisory authority (Article 77)

Because the operator does not maintain a database of personal data and does not intentionally collect personal information through the website, most of these rights have limited practical application to the operator's own processing. For data held by email providers, CDN logs, or third-party services, you must contact those parties directly.

Cloudflare Web Analytics records are processed and retained by Cloudflare. The operator has no mechanism to identify or delete individual visitor records in Cloudflare's systems and cannot promise deletion of individual analytics records on request. Requests concerning analytics data held by Cloudflare must be directed to Cloudflare in accordance with its privacy policy.

To exercise any rights regarding data the operator may hold (such as email correspondence), contact [awilum.dev@gmail.com](mailto:awilum.dev@gmail.com). The operator will respond within the limits of the data it actually holds.

## 16. Changes to This Policy

This Privacy and Security Policy may be updated as the website evolves. The "Last updated" date at the top of this page reflects the most recent change. Continued use of the website after changes constitutes acceptance of the updated policy.

For material changes affecting data practices, a notice may be posted on the website. However, as this site has no user accounts or notification system, visitors are encouraged to review this page periodically.

## 17. Contact

For questions about this Privacy and Security Policy or data practices, contact:

awilum.dev@gmail.com

## Related Pages

- [Terms of Use](https://sergeyromanenko.com/terms-of-use/)
- [Copyright & Licensing](https://sergeyromanenko.com/copyright-and-licensing/)
- [Support](https://sergeyromanenko.com/support/)
