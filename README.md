# sergeyromanenko.com

The personal website of **Sergey Romanenko** — photographer, educator and author.

It is a static Astro site that publishes long-form photographic projects, an independent IT
education project, publications, and a small set of practical **Tools** built for real-world
problems. Everything the site shows comes from a single typed content collection, and almost
all of the page weight is plain HTML and CSS: interactivity is added only where a tool genuinely
needs it, through Vue islands.

- **Site URL:** <https://sergeyromanenko.com>
- **Repository:** `Awilum/sergeyromanenko.com`
- **Author:** Sergey Romanenko

## Publication

The generated files in this repository are produced by a local build of
[`Awilum/sergeyromanenko.src`](https://github.com/Awilum/sergeyromanenko.src) and are committed
by hand. This repository does not receive deployment pull requests.

One automated workflow, `Update Stepik statistics`, runs daily and can be started manually from
the Actions tab. It refreshes only `stepstats.json`; the published pages read that file at runtime,
so the site keeps showing current statistics without a rebuild.
