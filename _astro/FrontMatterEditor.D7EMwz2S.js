import{B as e,G as t,N as n,Ot as r,Tt as i,_ as a,c as o,d as s,et as c,g as l,h as u,j as d,n as f,s as p,u as m}from"./runtime-core.esm-bundler.Df01BWvV.js";import{i as h,r as g}from"./runtime-dom.esm-bundler.KDVMAhxe.js";import{t as ee}from"./CodeEditor.U49l103c.js";import{a as _,i as v,n as y,t as b}from"./data-tool.DBj5b07u.js";import{n as x,t as S}from"./browser.hJzF8IhF.js";import{t as C}from"./_plugin-vue_export-helper.BDNMzG2s.js";var w=/^(---|\.\.\.)[ \t]*\r?$/;function T(e){if(e.trim().length===0)return{value:{}};let t=S(e);return t.errors.length>0?{value:{},error:t.errors[0]?.message??`Invalid Front Matter YAML.`}:{value:t.toJS()}}function te(e){let t=e.split(`
`),n=t[0];if(n===void 0||!w.test(n))return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e};let r=-1;for(let e=1;e<t.length;e++){let n=t[e];if(n!==void 0&&w.test(n)){r=e;break}}if(r===-1)return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e,error:`This document opens a Front Matter block but never closes it. A closing "---" line is required.`};let i=t.slice(1,r).join(`
`).replace(/\r$/,``),a=t.slice(r+1).join(`
`),o=T(i),s={hasFrontMatter:o.error===void 0,metadataText:i,metadata:o.value,body:a};return o.error!==void 0&&(s.error=o.error),s}function E(e,t){return t===`json`?JSON.stringify(e,null,2):typeof e!=`object`||!e||Object.keys(e).length===0?``:x(e,{indent:2}).trimEnd()}function D(e,t,n={}){let r=n.format??`yaml`,i=n.includeBody??!0,a=`---\n${E(e,r)}\n---`;return i&&(t.length>0||t.includes(`
`))?`${a}\n${t}`:`${a}\n`}function O(e,t){if(t===`json`)try{return{value:JSON.parse(e)}}catch(e){return{value:{},error:e instanceof Error?e.message:`Invalid JSON.`}}let n=T(e),r={value:n.value};return n.error!==void 0&&(r.error=n.error),r}var k=a({__name:`FrontMatterEditor`,setup(t,{expose:n}){n();let r=c(`document`),i=c(`yaml`),a=c(!0),o=c(``),s=c(``),l=c(``),u=c(``),d=c(``),f=c({}),m=c(``),h=p(()=>JSON.stringify(f.value,null,2)),g=p(()=>D(f.value,s.value,{format:`yaml`,includeBody:a.value})),x=p(()=>D(f.value,``,{format:`yaml`,includeBody:!1})),S=c(``),C=c(`json`),w=c(``),T=p(()=>S.value.trim().length===0?``:D(f.value,``,{format:`yaml`,includeBody:!1}));function k(e){l.value=e;let t=O(e,i.value);t.error===void 0?(d.value=``,f.value=t.value):d.value=t.error}function A(e){o.value=e;let t=te(e);t.error===void 0?(u.value=``,d.value=``,s.value=t.body,f.value=t.metadata,l.value=E(t.metadata,i.value)):u.value=t.error}e(i,e=>{l.value=E(f.value,e)});function j(e){S.value=e;let t=O(e,C.value);t.error===void 0?(w.value=``,f.value=t.value,m.value=`Front Matter block rebuilt from the metadata you pasted.`):w.value=t.error}function M(e){o.value=e,A(e)}function N(){o.value=``,s.value=``,l.value=``,f.value={},u.value=``,d.value=``,m.value=``}let P=p(()=>o.value.length),F=p(()=>g.value.length),I=[{id:`blog-post`,label:`Blog post`,source:`---
title: Notes from a Slow Week
description: A week of writing, walking and very little else.
date: 2026-10-14
author: Sergey Romanenko
tags:
  - writing
  - notes
draft: false
---

# Notes from a Slow Week

A week spent writing, walking and very little else.

## What I wrote

Two essays, one of which survived the second read.
`},{id:`travel-article`,label:`Travel article`,source:`---
title: Exploring the Streets of Da Nang
description: Walking Da Nang's back streets with a camera.
date: 2026-10-14
location: Da Nang, Vietnam
season: dry
tags:
  - travel
  - photography
  - vietnam
published: true
---

# Exploring the Streets of Da Nang

The side streets east of the Han River, photographed in the hour before sunset.
`},{id:`docs-page`,label:`Documentation page`,source:`---
title: Configuring the Editor
description: How to configure the Markdown Editor.
date: 2026-10-14
weight: 20
layout: docs
tags:
  - documentation
  - editor
---

# Configuring the Editor

Everything about configuring the editor lives here.
`},{id:`astro-collection`,label:`Astro content collection`,source:`---
title: A Collection Entry
description: Front Matter as an Astro content collection reads it.
date: 2026-10-14
year: 2026
status: complete
featured: false
availability:
  - web
tags:
  - markdown
  - front matter
images: []
---

# A Collection Entry

Astro reads this block through its content collections schema, and the keys
here are the ones that schema requires.
`},{id:`seo-metadata`,label:`SEO metadata`,source:`---
title: Markdown Editor — Live Preview & PNG Export
description: Write Markdown, preview rendered HTML in real time, and export high-quality PNG images.
keywords:
  - markdown
  - preview
  - png
canonical: https://sergeyromanenko.com/tools/markdown-editor/
ogImage: /images/markdown-editor.png
---

# SEO metadata

Metadata whose job is to describe the page rather than to be read as content.
`},{id:`draft-status`,label:`Draft and published`,source:`---
title: An Unfinished Draft
description: A draft held back from the build.
date: 2026-10-14
draft: true
tags:
  - drafts
---

# An Unfinished Draft

A draft is the same document with one key flipped, which is exactly why that
key is easier to edit here than to remember to add by hand.
`}],L=_(e=>{o.value=e,A(e),m.value=`Markdown file loaded.`}),R=_(e=>{k(e),m.value=`Metadata file loaded.`}),z=_(e=>{j(e)});async function B(){m.value=await y(g.value)}async function V(){m.value=await y(x.value)}function H(){g.value.trim().length!==0&&(v(g.value,`document.md`,`text/markdown`),m.value=`Markdown file saved.`)}function U(){if(x.value.trim().length===0)return;let e=i.value===`json`?`json`:`yaml`;v(x.value,`frontmatter.${e}`,`text/yaml`),m.value=`Front Matter block saved.`}function W(){s.value.trim().length!==0&&(v(s.value,`body.md`,`text/markdown`),m.value=`Markdown body saved.`)}let G={mode:r,format:i,includeBody:a,document:o,body:s,metadataText:l,documentError:u,metadataError:d,metadataValue:f,notice:m,metadataJson:h,rebuiltDocument:g,metadataBlock:x,standaloneText:S,standaloneFormat:C,standaloneError:w,standaloneBlock:T,onMetadataInput:k,onDocumentInput:A,onStandaloneInput:j,loadExample:M,clearAll:N,documentCount:P,rebuiltCount:F,EXAMPLES:I,uploadDocument:L,uploadMetadata:R,uploadStandalone:z,copyRebuilt:B,copyMetadata:V,downloadMarkdown:H,downloadMetadata:U,downloadBody:W,CodeEditor:ee,get IDLE_STATUS(){return b}};return Object.defineProperty(G,"__isScriptSetup",{enumerable:!1,value:!0}),G}}),A={"aria-label":`Front Matter editor`,class:`flex flex-col gap-4`},j={class:`card`},M={class:`border-b border-line px-4 py-3 sm:px-6`},N={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},P={class:`meta-mono text-label`},F={class:`flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line px-4 py-3 sm:px-6`},I={class:`flex items-center gap-2`},L={role:`group`,"aria-labelledby":`fm-mode-label`,class:`flex flex-wrap gap-1`},R=[`aria-pressed`],z=[`aria-pressed`],B={class:`flex items-center gap-2`},V={class:`flex items-center gap-2 label`},H={key:0,class:`grid grid-cols-1 gap-4 p-4 sm:p-6 lg:grid-cols-3`},U={class:`flex min-w-0 flex-col gap-2`},W={class:`flex flex-wrap items-center justify-between gap-2`},G={class:`flex flex-wrap gap-2`},K={class:`btn btn-ghost btn-sm cursor-pointer`},q={class:`label-micro`},J={class:`flex min-w-0 flex-col gap-2`},Y={class:`flex flex-wrap items-center justify-between gap-2`},X={class:`label-micro`},Z={class:`flex flex-wrap gap-2`},Q={class:`btn btn-ghost btn-sm cursor-pointer`},ne=[`accept`],re={class:`label`},ie={class:`flex min-w-0 flex-col gap-2`},ae={class:`label-micro`},oe={key:1,class:`grid grid-cols-1 gap-4 p-4 sm:p-6 lg:grid-cols-2`},se={class:`flex min-w-0 flex-col gap-2`},ce={class:`flex flex-wrap items-center justify-between gap-2`},le={class:`label-micro`},ue={class:`flex flex-wrap gap-2`},de={class:`btn btn-ghost btn-sm cursor-pointer`},fe=[`accept`],pe={class:`flex items-center gap-2`},me={class:`flex min-w-0 flex-col gap-2`},he={class:`flex flex-wrap items-center justify-between gap-2`},ge={class:`flex flex-wrap gap-2`},_e=[`disabled`],ve=[`disabled`],ye={key:2,class:`flex flex-wrap items-center gap-3 border-t border-line px-4 py-3 sm:px-6`},$=[`disabled`],be=[`disabled`],xe={class:`border-t border-line px-4 py-4 sm:px-6`},Se={class:`mt-2 flex flex-wrap gap-2`},Ce=[`aria-pressed`,`onClick`],we={key:3,role:`alert`,"aria-live":`assertive`,class:`border-t border-line px-4 py-3 text-[0.875rem] text-accent`},Te={key:4,role:`alert`,"aria-live":`assertive`,class:`border-t border-line px-4 py-3 text-[0.875rem] text-accent`},Ee={key:5,role:`alert`,"aria-live":`assertive`,class:`border-t border-line px-4 py-3 text-[0.875rem] text-accent`},De={class:`border-t border-line px-4 py-3 label`,role:`status`,"aria-live":`polite`};function Oe(e,a,c,p,ee,_){return d(),s(`section`,A,[o(`div`,j,[o(`div`,M,[o(`div`,N,[a[12]||=o(`h3`,{class:`label-eyebrow`},`Front Matter Editor & Converter`,-1),o(`p`,P,r(p.mode===`document`?`Document · Metadata · Rebuilt document`:`Metadata · Front Matter block`),1)])]),o(`div`,F,[o(`div`,I,[a[13]||=o(`span`,{class:`label-micro`,id:`fm-mode-label`},`Working on`,-1),o(`div`,L,[o(`button`,{type:`button`,class:i([`btn btn-sm`,p.mode===`document`?`btn-accent`:`btn-ghost`]),"aria-pressed":p.mode===`document`,onClick:a[0]||=e=>p.mode=`document`},` A Markdown document `,10,R),o(`button`,{type:`button`,class:i([`btn btn-sm`,p.mode===`metadata`?`btn-accent`:`btn-ghost`]),"aria-pressed":p.mode===`metadata`,onClick:a[1]||=e=>p.mode=`metadata`},` Metadata only `,10,z)])]),o(`div`,B,[a[15]||=o(`label`,{class:`label-micro`,for:`fm-format`},`Metadata format`,-1),t(o(`select`,{id:`fm-format`,"onUpdate:modelValue":a[2]||=e=>p.format=e,class:`input-like`},[...a[14]||=[o(`option`,{value:`yaml`},`YAML`,-1),o(`option`,{value:`json`},`JSON`,-1)]],512),[[h,p.format]])]),o(`label`,V,[t(o(`input`,{type:`checkbox`,"onUpdate:modelValue":a[3]||=e=>p.includeBody=e,class:`h-4 w-4 accent-[var(--color-accent)]`},null,512),[[g,p.includeBody]]),a[16]||=u(` Include the Markdown body in the output `,-1)])]),p.mode===`document`?(d(),s(`div`,H,[o(`div`,U,[o(`div`,W,[a[18]||=o(`p`,{class:`label-micro`},`Markdown document`,-1),o(`div`,G,[o(`label`,K,[a[17]||=u(` Upload `,-1),o(`input`,{type:`file`,accept:`.md,.markdown`,class:`hidden`,onChange:a[4]||=(...e)=>p.uploadDocument&&p.uploadDocument(...e)},null,32)]),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:p.clearAll},`Clear`)])]),l(p.CodeEditor,{modelValue:p.document,"onUpdate:modelValue":[a[5]||=e=>p.document=e,p.onDocumentInput],"aria-label":`Markdown document`},null,8,[`modelValue`]),o(`p`,q,r(p.documentCount)+` characters`,1)]),o(`div`,J,[o(`div`,Y,[o(`p`,X,`Metadata (`+r(p.format.toUpperCase())+`)`,1),o(`div`,Z,[o(`label`,Q,[a[19]||=u(` Upload `,-1),o(`input`,{type:`file`,accept:p.format===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:a[6]||=(...e)=>p.uploadMetadata&&p.uploadMetadata(...e)},null,40,ne)])])]),l(p.CodeEditor,{modelValue:p.metadataText,"onUpdate:modelValue":[a[7]||=e=>p.metadataText=e,p.onMetadataInput],"aria-label":`Metadata`},null,8,[`modelValue`]),o(`p`,re,r(p.documentError===``&&p.metadataError===``?`Comments, quoting and key order are resolved away when the metadata is parsed.`:p.metadataError===``?``:`This metadata does not parse — the rebuilt document keeps the last version that did.`),1)]),o(`div`,ie,[o(`div`,{class:`flex flex-wrap items-center justify-between gap-2`},[a[20]||=o(`p`,{class:`label-micro`},`Rebuilt document`,-1),o(`div`,{class:`flex flex-wrap gap-2`},[o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:p.copyRebuilt},`Copy`),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:p.downloadMarkdown},`Download`)])]),l(p.CodeEditor,{"model-value":p.rebuiltDocument,"aria-label":`Rebuilt document`,readonly:``},null,8,[`model-value`]),o(`p`,ae,r(p.rebuiltCount)+` characters`,1)])])):(d(),s(`div`,oe,[o(`div`,se,[o(`div`,ce,[o(`p`,le,`Metadata (`+r(p.standaloneFormat.toUpperCase())+`)`,1),o(`div`,ue,[o(`label`,de,[a[21]||=u(` Upload `,-1),o(`input`,{type:`file`,accept:p.standaloneFormat===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:a[8]||=(...e)=>p.uploadStandalone&&p.uploadStandalone(...e)},null,40,fe)]),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:a[9]||=e=>{p.standaloneText=``,p.standaloneError=``}},` Clear `)])]),l(p.CodeEditor,{modelValue:p.standaloneText,"onUpdate:modelValue":[a[10]||=e=>p.standaloneText=e,p.onStandaloneInput],"aria-label":`Standalone metadata`},null,8,[`modelValue`]),o(`div`,pe,[a[23]||=o(`label`,{class:`label-micro`,for:`fm-standalone-format`},`Format`,-1),t(o(`select`,{id:`fm-standalone-format`,"onUpdate:modelValue":a[11]||=e=>p.standaloneFormat=e,class:`input-like`},[...a[22]||=[o(`option`,{value:`json`},`JSON`,-1),o(`option`,{value:`yaml`},`YAML`,-1)]],512),[[h,p.standaloneFormat]])])]),o(`div`,me,[o(`div`,he,[a[24]||=o(`p`,{class:`label-micro`},`Front Matter block`,-1),o(`div`,ge,[o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.standaloneText.trim().length===0,onClick:p.copyMetadata},` Copy `,8,_e),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.standaloneText.trim().length===0,onClick:p.downloadMetadata},` Download `,8,ve)])]),l(p.CodeEditor,{"model-value":p.standaloneBlock,"aria-label":`Front Matter block`,readonly:``},null,8,[`model-value`])])])),p.mode===`document`?(d(),s(`div`,ye,[o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.body.trim().length===0,onClick:p.downloadBody},` Download the body only `,8,$),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.metadataBlock.trim().length===0,onClick:p.downloadMetadata},` Download the metadata block only (YAML) `,8,be)])):m(``,!0),o(`div`,xe,[a[25]||=o(`p`,{class:`label-micro`},`Load an example`,-1),o(`div`,Se,[(d(),s(f,null,n(p.EXAMPLES,e=>o(`button`,{key:e.id,type:`button`,class:i([`chip`,p.document===e.source?`chip-solid`:`chip-outline`]),"aria-pressed":p.document===e.source,onClick:t=>p.loadExample(e.source)},r(e.label),11,Ce)),64))])]),p.documentError===``?m(``,!0):(d(),s(`p`,we,r(p.documentError),1)),p.metadataError===``?m(``,!0):(d(),s(`p`,Te,r(p.metadataError),1)),p.standaloneError===``?m(``,!0):(d(),s(`p`,Ee,r(p.standaloneError),1)),o(`p`,De,[p.notice===``?(d(),s(f,{key:1},[u(r(p.IDLE_STATUS),1)],64)):(d(),s(f,{key:0},[u(r(p.notice),1)],64))])])])}var ke=C(k,[[`render`,Oe]]);export{ke as default};