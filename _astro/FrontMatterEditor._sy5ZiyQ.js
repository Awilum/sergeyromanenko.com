import{B as e,G as t,N as n,Ot as r,Tt as i,_ as a,c as o,d as s,et as c,g as l,h as u,j as d,n as f,s as p,u as m}from"./runtime-core.esm-bundler.Df01BWvV.js";import{i as h,r as g}from"./runtime-dom.esm-bundler.KDVMAhxe.js";import{t as _}from"./copy.B4b5dPRZ.js";import{t as v}from"./download.DVDnYyzv.js";import{t as y}from"./eraser.BlCecqwN.js";import{t as b}from"./upload.Dvc8ykFI.js";import{t as x}from"./CodeEditor.JZrRkFBO.js";import{a as S,i as C,n as w,t as ee}from"./data-tool.D-Y76qT8.js";import{n as T,t as E}from"./browser.hJzF8IhF.js";import{t as D}from"./_plugin-vue_export-helper.BDNMzG2s.js";var O=/^(---|\.\.\.)[ \t]*\r?$/;function k(e){if(e.trim().length===0)return{value:{}};let t=E(e);return t.errors.length>0?{value:{},error:t.errors[0]?.message??`Invalid Front Matter YAML.`}:{value:t.toJS()}}function te(e){let t=e.split(`
`),n=t[0];if(n===void 0||!O.test(n))return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e};let r=-1;for(let e=1;e<t.length;e++){let n=t[e];if(n!==void 0&&O.test(n)){r=e;break}}if(r===-1)return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e,error:`This document opens a Front Matter block but never closes it. A closing "---" line is required.`};let i=t.slice(1,r).join(`
`).replace(/\r$/,``),a=t.slice(r+1).join(`
`),o=k(i),s={hasFrontMatter:o.error===void 0,metadataText:i,metadata:o.value,body:a};return o.error!==void 0&&(s.error=o.error),s}function A(e,t){return t===`json`?JSON.stringify(e,null,2):typeof e!=`object`||!e||Object.keys(e).length===0?``:T(e,{indent:2}).trimEnd()}function j(e,t,n={}){let r=n.format??`yaml`,i=n.includeBody??!0,a=`---\n${A(e,r)}\n---`;return i&&(t.length>0||t.includes(`
`))?`${a}\n${t}`:`${a}\n`}function M(e,t){if(t===`json`)try{return{value:JSON.parse(e)}}catch(e){return{value:{},error:e instanceof Error?e.message:`Invalid JSON.`}}let n=k(e),r={value:n.value};return n.error!==void 0&&(r.error=n.error),r}var N=a({__name:`FrontMatterEditor`,setup(t,{expose:n}){n();let r=c(`document`),i=c(`yaml`),a=c(!0),o=c(``),s=c(``),l=c(``),u=c(``),d=c(``),f=c({}),m=c(``),h=p(()=>JSON.stringify(f.value,null,2)),g=p(()=>j(f.value,s.value,{format:`yaml`,includeBody:a.value})),T=p(()=>j(f.value,``,{format:`yaml`,includeBody:!1})),E=c(``),D=c(`json`),O=c(``),k=p(()=>E.value.trim().length===0?``:j(f.value,``,{format:`yaml`,includeBody:!1}));function N(e){l.value=e;let t=M(e,i.value);t.error===void 0?(d.value=``,f.value=t.value):d.value=t.error}function P(e){o.value=e;let t=te(e);t.error===void 0?(u.value=``,d.value=``,s.value=t.body,f.value=t.metadata,l.value=A(t.metadata,i.value)):u.value=t.error}e(i,e=>{l.value=A(f.value,e)});function F(e){E.value=e;let t=M(e,D.value);t.error===void 0?(O.value=``,f.value=t.value,m.value=`Front Matter block rebuilt from the metadata you pasted.`):O.value=t.error}function I(e){o.value=e,P(e)}function L(){o.value=``,s.value=``,l.value=``,f.value={},u.value=``,d.value=``,m.value=``}let R=p(()=>o.value.length),z=p(()=>g.value.length),B=[{id:`blog-post`,label:`Blog post`,source:`---
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
gallery: []
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
`}],V=S(e=>{o.value=e,P(e),m.value=`Markdown file loaded.`}),H=S(e=>{N(e),m.value=`Metadata file loaded.`}),U=S(e=>{F(e)});async function W(){m.value=await w(g.value)}async function G(){m.value=await w(T.value)}function K(){g.value.trim().length!==0&&(C(g.value,`document.md`,`text/markdown`),m.value=`Markdown file saved.`)}function q(){if(T.value.trim().length===0)return;let e=i.value===`json`?`json`:`yaml`;C(T.value,`frontmatter.${e}`,`text/yaml`),m.value=`Front Matter block saved.`}function J(){s.value.trim().length!==0&&(C(s.value,`body.md`,`text/markdown`),m.value=`Markdown body saved.`)}let Y={mode:r,format:i,includeBody:a,document:o,body:s,metadataText:l,documentError:u,metadataError:d,metadataValue:f,notice:m,metadataJson:h,rebuiltDocument:g,metadataBlock:T,standaloneText:E,standaloneFormat:D,standaloneError:O,standaloneBlock:k,onMetadataInput:N,onDocumentInput:P,onStandaloneInput:F,loadExample:I,clearAll:L,documentCount:R,rebuiltCount:z,EXAMPLES:B,uploadDocument:V,uploadMetadata:H,uploadStandalone:U,copyRebuilt:W,copyMetadata:G,downloadMarkdown:K,downloadMetadata:q,downloadBody:J,get Copy(){return _},get Download(){return v},get Eraser(){return y},get Upload(){return b},CodeEditor:x,get IDLE_STATUS(){return ee}};return Object.defineProperty(Y,"__isScriptSetup",{enumerable:!1,value:!0}),Y}}),P={"aria-label":`Front Matter editor`,class:`flex flex-col gap-4`},F={class:`card`},I={class:`border-b border-line px-4 py-3 sm:px-5`},L={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},R={class:`meta-mono text-label`},z={class:`flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-5`},B={class:`flex items-center gap-2`},V={role:`group`,"aria-labelledby":`fm-mode-label`,class:`flex flex-wrap gap-1`},H=[`aria-pressed`],U=[`aria-pressed`],W={class:`flex items-center gap-2`},G={class:`flex items-center gap-2 label`},K={class:`grid grid-cols-1 gap-4 xl:grid-cols-12`},q={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-7`},J={class:`border-b border-line px-4 py-3 sm:px-5`},Y={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},X={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},Z={class:`meta-mono text-label`},Q={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Markdown document actions`},ne={class:`btn btn-ghost btn-sm cursor-pointer`},re={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-5`},ie={class:`border-b border-line px-4 py-3 sm:px-5`},ae={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},oe={class:`panel-header`},se={class:`btn btn-ghost btn-sm cursor-pointer`},ce=[`accept`],le={class:`border-t border-line px-4 py-3 sm:px-5 label`},ue={class:`card flex min-w-0 flex-col overflow-hidden`},de={class:`border-b border-line px-4 py-3 sm:px-5`},fe={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},pe={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},me={class:`meta-mono text-label`},he={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Rebuilt document actions`},ge={class:`flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 sm:px-5`},_e=[`disabled`],ve=[`disabled`],ye={key:1,class:`grid grid-cols-1 gap-4 xl:grid-cols-12`},be={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-7`},xe={class:`border-b border-line px-4 py-3 sm:px-5`},Se={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},Ce={class:`panel-header`},we={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Metadata actions`},Te={class:`btn btn-ghost btn-sm cursor-pointer`},Ee=[`accept`],De={class:`flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 sm:px-5`},Oe={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-5`},ke={class:`border-b border-line px-4 py-3 sm:px-5`},Ae={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},je={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Front Matter block actions`},Me=[`disabled`],Ne=[`disabled`],Pe={class:`card`},$={class:`flex flex-wrap gap-2 px-4 py-4 sm:px-5`},Fe=[`aria-pressed`,`onClick`],Ie={key:2,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},Le={key:3,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},Re={key:4,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},ze={class:`label`,role:`status`,"aria-live":`polite`};function Be(e,a,c,p,_,v){return d(),s(`section`,P,[o(`div`,F,[o(`div`,I,[o(`div`,L,[a[12]||=o(`h3`,{class:`panel-header`},`Front Matter Editor & Converter`,-1),o(`p`,R,r(p.mode===`document`?`Document · Metadata · Rebuilt document`:`Metadata · Front Matter block`),1)])]),o(`div`,z,[o(`div`,B,[a[13]||=o(`span`,{class:`label-micro`,id:`fm-mode-label`},`Working on`,-1),o(`div`,V,[o(`button`,{type:`button`,class:i([`btn btn-sm`,p.mode===`document`?`btn-accent`:`btn-ghost`]),"aria-pressed":p.mode===`document`,onClick:a[0]||=e=>p.mode=`document`},` A Markdown document `,10,H),o(`button`,{type:`button`,class:i([`btn btn-sm`,p.mode===`metadata`?`btn-accent`:`btn-ghost`]),"aria-pressed":p.mode===`metadata`,onClick:a[1]||=e=>p.mode=`metadata`},` Metadata only `,10,U)])]),o(`div`,W,[a[15]||=o(`label`,{class:`label-micro`,for:`fm-format`},`Metadata format`,-1),t(o(`select`,{id:`fm-format`,"onUpdate:modelValue":a[2]||=e=>p.format=e,class:`input-like`},[...a[14]||=[o(`option`,{value:`yaml`},`YAML`,-1),o(`option`,{value:`json`},`JSON`,-1)]],512),[[h,p.format]])]),o(`label`,G,[t(o(`input`,{type:`checkbox`,"onUpdate:modelValue":a[3]||=e=>p.includeBody=e,class:`h-4 w-4 accent-[var(--color-accent)]`},null,512),[[g,p.includeBody]]),a[16]||=u(` Include the Markdown body in the output `,-1)])])]),p.mode===`document`?(d(),s(f,{key:0},[o(`div`,K,[o(`div`,q,[o(`div`,J,[o(`div`,Y,[o(`div`,X,[a[17]||=o(`h3`,{class:`panel-header`},`Markdown document`,-1),o(`span`,Z,r(p.documentCount)+` characters`,1)]),o(`div`,Q,[o(`label`,ne,[l(p.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[18]||=u(` Upload `,-1),o(`input`,{type:`file`,accept:`.md,.markdown`,class:`hidden`,onChange:a[4]||=(...e)=>p.uploadDocument&&p.uploadDocument(...e)},null,32)]),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:p.clearAll},[l(p.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[19]||=u(` Clear `,-1)])])])]),l(p.CodeEditor,{modelValue:p.document,"onUpdate:modelValue":[a[5]||=e=>p.document=e,p.onDocumentInput],"aria-label":`Markdown document`},null,8,[`modelValue`])]),o(`div`,re,[o(`div`,ie,[o(`div`,ae,[o(`h3`,oe,`Metadata (`+r(p.format.toUpperCase())+`)`,1),o(`label`,se,[l(p.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[20]||=u(` Upload `,-1),o(`input`,{type:`file`,accept:p.format===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:a[6]||=(...e)=>p.uploadMetadata&&p.uploadMetadata(...e)},null,40,ce)])])]),l(p.CodeEditor,{modelValue:p.metadataText,"onUpdate:modelValue":[a[7]||=e=>p.metadataText=e,p.onMetadataInput],"aria-label":`Metadata`},null,8,[`modelValue`]),o(`p`,le,r(p.documentError===``&&p.metadataError===``?`Comments, quoting and key order are resolved away when the metadata is parsed.`:p.metadataError===``?``:`This metadata does not parse — the rebuilt document keeps the last version that did.`),1)])]),o(`div`,ue,[o(`div`,de,[o(`div`,fe,[o(`div`,pe,[a[21]||=o(`h3`,{class:`panel-header`},`Rebuilt document`,-1),o(`span`,me,r(p.rebuiltCount)+` characters`,1)]),o(`div`,he,[o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:p.copyRebuilt},[l(p.Copy,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[22]||=u(` Copy `,-1)]),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:p.downloadMarkdown},[l(p.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[23]||=u(` Download `,-1)])])])]),l(p.CodeEditor,{"model-value":p.rebuiltDocument,"aria-label":`Rebuilt document`,readonly:``},null,8,[`model-value`]),o(`div`,ge,[o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.body.trim().length===0,onClick:p.downloadBody},` Download the body only `,8,_e),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.metadataBlock.trim().length===0,onClick:p.downloadMetadata},` Download the metadata block only (YAML) `,8,ve)])])],64)):(d(),s(`div`,ye,[o(`div`,be,[o(`div`,xe,[o(`div`,Se,[o(`h3`,Ce,`Metadata (`+r(p.standaloneFormat.toUpperCase())+`)`,1),o(`div`,we,[o(`label`,Te,[l(p.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[24]||=u(` Upload `,-1),o(`input`,{type:`file`,accept:p.standaloneFormat===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:a[8]||=(...e)=>p.uploadStandalone&&p.uploadStandalone(...e)},null,40,Ee)]),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:a[9]||=e=>{p.standaloneText=``,p.standaloneError=``}},[l(p.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[25]||=u(` Clear `,-1)])])])]),l(p.CodeEditor,{modelValue:p.standaloneText,"onUpdate:modelValue":[a[10]||=e=>p.standaloneText=e,p.onStandaloneInput],"aria-label":`Standalone metadata`},null,8,[`modelValue`]),o(`div`,De,[a[27]||=o(`label`,{class:`label-micro`,for:`fm-standalone-format`},`Format`,-1),t(o(`select`,{id:`fm-standalone-format`,"onUpdate:modelValue":a[11]||=e=>p.standaloneFormat=e,class:`input-like`},[...a[26]||=[o(`option`,{value:`json`},`JSON`,-1),o(`option`,{value:`yaml`},`YAML`,-1)]],512),[[h,p.standaloneFormat]])])]),o(`div`,Oe,[o(`div`,ke,[o(`div`,Ae,[a[30]||=o(`h3`,{class:`panel-header`},`Front Matter block`,-1),o(`div`,je,[o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.standaloneText.trim().length===0,onClick:p.copyMetadata},[l(p.Copy,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[28]||=u(` Copy `,-1)],8,Me),o(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:p.standaloneText.trim().length===0,onClick:p.downloadMetadata},[l(p.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),a[29]||=u(` Download `,-1)],8,Ne)])])]),l(p.CodeEditor,{"model-value":p.standaloneBlock,"aria-label":`Front Matter block`,readonly:``},null,8,[`model-value`])])])),o(`div`,Pe,[a[31]||=o(`div`,{class:`border-b border-line px-4 py-3 sm:px-5`},[o(`h3`,{class:`panel-header`},`Examples`)],-1),o(`div`,$,[(d(),s(f,null,n(p.EXAMPLES,e=>o(`button`,{key:e.id,type:`button`,class:i([`btn btn-sm`,p.document===e.source?`btn-accent`:`btn-secondary`]),"aria-pressed":p.document===e.source,onClick:t=>p.loadExample(e.source)},r(e.label),11,Fe)),64))])]),p.documentError===``?m(``,!0):(d(),s(`p`,Ie,r(p.documentError),1)),p.metadataError===``?m(``,!0):(d(),s(`p`,Le,r(p.metadataError),1)),p.standaloneError===``?m(``,!0):(d(),s(`p`,Re,r(p.standaloneError),1)),o(`p`,ze,[p.notice===``?(d(),s(f,{key:1},[u(r(p.IDLE_STATUS),1)],64)):(d(),s(f,{key:0},[u(r(p.notice),1)],64))])])}var Ve=D(N,[[`render`,Be]]);export{Ve as default};