---
title: "Privacy & Security Policy"
seo_title: "Privacy & Security Policy — Sergey Romanenko"
description: "Privacy and Security Policy for sergeyromanenko.com. How the website handles visitor data, external services and your rights."
canonical_url: "https://sergeyromanenko.com/privacy-policy/"
markdown_url: "https://sergeyromanenko.com/privacy-policy/index.md"
section: "Site"
language: "en"
robots: "index, follow"
---

1. [HOME](https://sergeyromanenko.com/)
2. Privacy & Security Policy

# Privacy & Security Policy

How sergeyromanenko.com handles visitor data, external services, editorial content and your rights.

Last updated: November 25, 2026

## 1. Scope

This Privacy and Security Policy applies to **sergeyromanenko.com** and its subpages, including:

- **Photography** — documentary and street photography projects
- **Applications**: editorial pages describing browser-based tools and games. The interactive workspace is hosted separately at [app.sergeyromanenko.com](https://app.sergeyromanenko.com/) , which has its own privacy policy.
- **Publications** — books, photo zines, travel journals, and essays
- **Courses** — informational pages describing courses hosted on Stepik
- **About** — biographical and professional information
- **Support** — voluntary contribution page linking to Ko-fi and other payment providers

This policy does not cover the practices of third-party websites linked from this site (such as Stepik, Ko-fi, GitHub, or YouTube), which operate under their own privacy policies.

## 2. Website Operator and Contact

This website is operated by **Sergey Romanenko** as a personal portfolio and publishing site.

For questions about this Privacy and Security Policy or data practices, contact:

[awilum.dev@gmail.com](mailto:awilum.dev@gmail.com)

No separate legal entity, company registration, or postal address is associated with this website. The operator is an individual acting in a personal capacity.

## 3. Hosting, Deployment, and Infrastructure

The website is built with **Astro.js** and statically generated at build time. The output is a collection of static HTML, CSS, and JavaScript files with no server-side runtime.

The site is deployed to **GitHub Pages** from the `main` branch of the [source repository](https://github.com/Awilum/sergeyromanenko.com) . GitHub Pages serves the static files over HTTPS via a global CDN.

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

Cloudflare Web Analytics is designed to operate without cookies or `localStorage` for analytics and, according to Cloudflare's documentation, does not use cross-site visitor tracking or individual visitor profiles. The service still processes technical information required to generate analytics, such as IP address, user agent, requested URL, referrer, and approximate location derived from the IP address. The operator does not claim that no personal data or IP-related information is processed.

Cloudflare Web Analytics is provided by Cloudflare, Inc., a third party with its own privacy documentation and applicable service terms. The operator receives analytics reports through the Cloudflare dashboard; it does not operate a self-hosted database of raw visitor records unless a separate analytics database is actually configured (none is at present).

For Cloudflare's own description of the service and its data handling, see: [Cloudflare Web Analytics documentation](https://developers.cloudflare.com/web-analytics/) and [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/) .

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

**Embedded third parties:** Google Fonts requests may involve cookies set by Google. This site no longer hosts the interactive tools and games that loaded YouTube's player; those applications are on [app.sergeyromanenko.com](https://app.sergeyromanenko.com/) , under a separate privacy policy. The operator does not control third-party cookies.

**Browser storage:** Browser storage used by the application workspace is described in its own privacy policy. This website does not run those applications.

**Consent banner:** No cookie banner or consent management platform is present. Whether one is legally required for the actual implementation and the operator's target jurisdictions cannot be determined from the repository alone; if required, implementing it (including actually controlling when the analytics script loads) is a separate task and is flagged in the review notes. No non-functional consent control is added here.

## 7. Applications on the App Domain

The [Applications](https://sergeyromanenko.com/applications/) section on this site provides editorial descriptions of browser-based tools and games. The interactive applications are no longer hosted here. Older `/tools/` and `/games/` addresses now redirect to the editorial pages.

The working applications run at [app.sergeyromanenko.com](https://app.sergeyromanenko.com/) . That workspace has its own [Privacy Policy](https://app.sergeyromanenko.com/privacy-policy/) describing browser-local processing, files, localStorage, service worker caches and third-party requests. Its Terms of Use and Copyright page govern use of the applications themselves.

This website remains responsible for the content it hosts here: editorial copy, photography, publications, course information and related pages. Questions about how an application handles data should be directed to the operator through the same contact address, but the technical disclosures live on the app domain.

## 8. Data Storage and Retention

### 8.1 In the browser (your device)

Persistent browser storage is used by the applications on the app domain, not by this website. The workspace privacy policy lists which applications store settings, scores, recent items or saved work in `localStorage`, and explains how to clear it. This site does not read that storage and does not run those applications.

In-memory data belongs to the application you are using. Closing the tab releases the browser's JavaScript and canvas memory for that application. Hash fragments in share links are not sent to a server.

### 8.2 On the operator's infrastructure

The site is a static build hosted on GitHub Pages. The operator runs no application server, no database, and no separate analytics database. GitHub Pages may process technical delivery and access information (such as IP address, requested path, timestamp, and user agent) as part of serving the site; the operator does not access, analyze, or retain those logs beyond GitHub's default handling.

Cloudflare Web Analytics processes information according to its own documented architecture and retention practices; the operator accesses the resulting reports through the Cloudflare dashboard and does not hold a self-hosted copy of raw visitor records. The operator does not state specific retention periods and instead refers to the providers' documentation.

### 8.3 Third-party services

- `static.cloudflareinsights.com` (Cloudflare Web Analytics): loads the analytics beacon on every page. See Sections 4.4 and 9. Cloudflare's privacy policy applies.
- `fonts.googleapis.com` / `fonts.gstatic.com` (Google Fonts): serves web fonts (Instrument Serif, Inter, IBM Plex Mono). Google's privacy policy applies.
- `ko-fi.com`, `paypal.me`, `yoomoney.ru`, `nowpayments.io` (Support page): visited only when you click a support link. Their privacy policies apply.
- `stepik.org` (Course links): visited only when you click a course link. Stepik's privacy policy applies.

## 9. External Services

This website integrates with or links to the following external services. Each operates under its own terms and privacy policy.

- **Stepik (`stepik.org`):** Course catalog pages link to Stepik for enrollment, payment, and course delivery. No Stepik content is embedded; no data is exchanged between this site and Stepik except the referral implicit in following a link.
- **Ko-fi (`ko-fi.com`) and other payment providers:** The [Support](https://sergeyromanenko.com/support/) page links to Ko-fi, PayPal, YouMoney, and PayNow for voluntary contributions. No payment processing occurs on this site.
- **GitHub (`github.com`):** Source code repository and issue tracker. Visiting GitHub is governed by GitHub's privacy statement.
- **Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`):** Loads three font families on every page. This is a single combined request.
- **Cloudflare Web Analytics (`static.cloudflareinsights.com`):** Loads the analytics beacon on every page and reports aggregate traffic and performance metrics to the operator's Cloudflare dashboard. See Section 4.4.

The operator does not control the data practices of these services. Visitors should review their respective privacy policies.

## 10. Stepik and Educational Courses

The [Courses](https://sergeyromanenko.com/courses/) section provides informational descriptions of programming courses created by the operator and hosted on **Stepik** (`stepik.org`).

**Enrollment, payment, course delivery, certificates, and learner support are handled entirely on Stepik.** This website does not process enrollments, collect payments, issue certificates, or provide course access. Clicking a course link takes you to Stepik, where Stepik's terms of service, privacy policy, and pricing apply.

Course information on this site (descriptions, curricula, statistics) is provided for reference and may not always reflect real-time availability or pricing on Stepik. The authoritative source is the Stepik course page.

## 11. Ko-fi and Voluntary Project Support

The [Support](https://sergeyromanenko.com/support/) page offers visitors the option to make voluntary financial contributions to support the operator's independent development work.

**Support is entirely voluntary.** It is not a purchase, subscription, or payment for goods or services. Visitors can continue accessing content expressly offered free of charge and using the applications provided through the separate workspace without making a contribution. Such access remains subject to the [Terms of Use](https://sergeyromanenko.com/terms-of-use/) and the copyright and licensing conditions described on the [Copyright & Licensing](https://sergeyromanenko.com/copyright-and-licensing/) page, as well as the workspace's own legal documents.

Contributions are processed by external payment providers (Ko-fi, PayPal, YouMoney, PayNow) and may be one-time or recurring where a provider supports it; any recurring arrangement is set up and managed with that provider. This website does not itself process payments. The operator does not receive or process payment data. Each provider's terms, fees, and privacy policies apply. Refunds, disputes, and receipts are handled by the respective provider.

Some courses, guides, and other digital products are sold separately on their respective platforms and are not included in this voluntary support model.

## 12. Email Correspondence

The website provides a direct email contact: [awilum.dev@gmail.com](mailto:awilum.dev@gmail.com) . No contact form exists on the website.

When you send an email, you voluntarily provide your email address, message content, and associated metadata to your email provider and the operator's email provider (Google). This information is not processed by the website itself. The operator's retention of email correspondence follows standard email practices; no automated deletion or fixed retention period is enforced by this website.

## 13. Security

The website is served over HTTPS via GitHub Pages' CDN. The static architecture (no application server, no database, no authentication) reduces the attack surface. The operator does not configure a custom Content Security Policy: GitHub Pages does not support custom response headers, so no CSP is enforced by the hosting layer. If a CSP is added later (for example through a proxy or meta tag), it must allow the Cloudflare Web Analytics script origin and the existing third-party origins.

However, no absolute security guarantees are made. The applications on the app domain are not suitable for regulated environments or highly sensitive data without your own assessment. Browser extensions, compromised devices, and network-level attacks can compromise data processed in the browser. This is true of any web application.

The source code is publicly available on [GitHub](https://github.com/Awilum/sergeyromanenko.src) for inspection and independent verification of the implementation. Public availability of source code does not by itself grant a licence to reuse, modify, or redistribute it.

## 14. International Transfers

The operator's infrastructure (GitHub Pages CDN) may process data in multiple jurisdictions. Google Fonts and Cloudflare Web Analytics are operated by entities that may process data outside the European Economic Area. The operator does not control the transfer mechanisms used by these third parties. The separate applications workspace has its own privacy policy and third-party list.

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

To exercise any rights regarding data the operator may hold (such as email correspondence), contact [awilum.dev@gmail.com](mailto:awilum.dev@gmail.com) . The operator will respond within the limits of the data it actually holds.

## 16. Changes to This Policy

This Privacy and Security Policy may be updated as the website evolves. The "Last updated" date at the top of this page reflects the most recent change. Continued use of the website after changes constitutes acceptance of the updated policy.

For material changes affecting data practices, a notice may be posted on the website. However, as this site has no user accounts or notification system, visitors are encouraged to review this page periodically.

## 17. Contact

For questions about this Privacy and Security Policy or data practices, contact:

[awilum.dev@gmail.com](mailto:awilum.dev@gmail.com)

## Related Pages

- [Terms of Use](https://sergeyromanenko.com/terms-of-use/)
- [Copyright & Licensing](https://sergeyromanenko.com/copyright-and-licensing/)
- [Support](https://sergeyromanenko.com/support/)
- [Applications workspace Privacy Policy](https://app.sergeyromanenko.com/privacy-policy/)
