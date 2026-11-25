import{B as e,G as t,N as n,Ot as r,Tt as i,W as a,_ as o,c as s,d as c,et as l,g as u,h as d,j as f,n as p,s as m,u as h}from"./runtime-core.esm-bundler.Df01BWvV.js";import{i as g,r as _}from"./runtime-dom.esm-bundler.KDVMAhxe.js";import{t as v}from"./book-open.D6Ie2evi.js";import{t as y}from"./copy.B4b5dPRZ.js";import{t as b}from"./download.DVDnYyzv.js";import{t as x}from"./eraser.BlCecqwN.js";import{t as S}from"./upload.Dvc8ykFI.js";import{t as ee}from"./CodeEditor.JZrRkFBO.js";import{t as te}from"./AppDialog.BS83hiq9.js";import{a as C,i as w,n as T,t as E}from"./data-tool.D-Y76qT8.js";import{n as D,t as O}from"./browser.hJzF8IhF.js";import{t as k}from"./_plugin-vue_export-helper.BDNMzG2s.js";var A=/^(---|\.\.\.)[ \t]*\r?$/;function j(e){if(e.trim().length===0)return{value:{}};let t=O(e);return t.errors.length>0?{value:{},error:t.errors[0]?.message??`Invalid Front Matter YAML.`}:{value:t.toJS()}}function M(e){let t=e.split(`
`),n=t[0];if(n===void 0||!A.test(n))return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e};let r=-1;for(let e=1;e<t.length;e++){let n=t[e];if(n!==void 0&&A.test(n)){r=e;break}}if(r===-1)return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e,error:`This document opens a Front Matter block but never closes it. A closing "---" line is required.`};let i=t.slice(1,r).join(`
`).replace(/\r$/,``),a=t.slice(r+1).join(`
`),o=j(i),s={hasFrontMatter:o.error===void 0,metadataText:i,metadata:o.value,body:a};return o.error!==void 0&&(s.error=o.error),s}function N(e,t){return t===`json`?JSON.stringify(e,null,2):typeof e!=`object`||!e||Object.keys(e).length===0?``:D(e,{indent:2}).trimEnd()}function P(e,t,n={}){let r=n.format??`yaml`,i=n.includeBody??!0,a=`---\n${N(e,r)}\n---`;return i&&(t.length>0||t.includes(`
`))?`${a}\n${t}`:`${a}\n`}function F(e,t){if(t===`json`)try{return{value:JSON.parse(e)}}catch(e){return{value:{},error:e instanceof Error?e.message:`Invalid JSON.`}}let n=j(e),r={value:n.value};return n.error!==void 0&&(r.error=n.error),r}var I=o({__name:`FrontMatterEditor`,setup(t,{expose:n}){n();let r=l(`document`),i=l(`yaml`),a=l(!0),o=l(!1),s=l(``),c=l(``),u=l(``),d=l(``),f=l(``),p=l({}),h=l(``),g=m(()=>JSON.stringify(p.value,null,2)),_=m(()=>P(p.value,c.value,{format:`yaml`,includeBody:a.value})),D=m(()=>P(p.value,``,{format:`yaml`,includeBody:!1})),O=l(``),k=l(`json`),A=l(``),j=m(()=>O.value.trim().length===0?``:P(p.value,``,{format:`yaml`,includeBody:!1}));function I(e){u.value=e;let t=F(e,i.value);t.error===void 0?(f.value=``,p.value=t.value):f.value=t.error}function L(e){s.value=e;let t=M(e);t.error===void 0?(d.value=``,f.value=``,c.value=t.body,p.value=t.metadata,u.value=N(t.metadata,i.value)):d.value=t.error}e(i,e=>{u.value=N(p.value,e)});function R(e){O.value=e;let t=F(e,k.value);t.error===void 0?(A.value=``,p.value=t.value,h.value=`Front Matter block rebuilt from the metadata you pasted.`):A.value=t.error}function z(e){s.value=e,L(e)}function B(){s.value=``,c.value=``,u.value=``,p.value={},d.value=``,f.value=``,h.value=``}let V=m(()=>s.value.length),H=m(()=>_.value.length),U=[{id:`blog-post`,label:`Blog post`,source:`---
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
`}],W=C(e=>{s.value=e,L(e),h.value=`Markdown file loaded.`}),G=C(e=>{I(e),h.value=`Metadata file loaded.`}),K=C(e=>{R(e)});async function q(){h.value=await T(_.value)}async function J(){h.value=await T(D.value)}function Y(){_.value.trim().length!==0&&(w(_.value,`document.md`,`text/markdown`),h.value=`Markdown file saved.`)}function X(){if(D.value.trim().length===0)return;let e=i.value===`json`?`json`:`yaml`;w(D.value,`frontmatter.${e}`,`text/yaml`),h.value=`Front Matter block saved.`}function Z(){c.value.trim().length!==0&&(w(c.value,`body.md`,`text/markdown`),h.value=`Markdown body saved.`)}let Q={mode:r,format:i,includeBody:a,examplesOpen:o,document:s,body:c,metadataText:u,documentError:d,metadataError:f,metadataValue:p,notice:h,metadataJson:g,rebuiltDocument:_,metadataBlock:D,standaloneText:O,standaloneFormat:k,standaloneError:A,standaloneBlock:j,onMetadataInput:I,onDocumentInput:L,onStandaloneInput:R,loadExample:z,clearAll:B,documentCount:V,rebuiltCount:H,EXAMPLES:U,uploadDocument:W,uploadMetadata:G,uploadStandalone:K,copyRebuilt:q,copyMetadata:J,downloadMarkdown:Y,downloadMetadata:X,downloadBody:Z,get BookOpen(){return v},get Copy(){return y},get Download(){return b},get Eraser(){return x},get Upload(){return S},CodeEditor:ee,AppDialog:te,get IDLE_STATUS(){return E}};return Object.defineProperty(Q,"__isScriptSetup",{enumerable:!1,value:!0}),Q}}),L={"aria-label":`Front Matter editor`,class:`flex flex-col gap-4`},R={class:`card`},z={class:`border-b border-line px-4 py-3 sm:px-5`},B={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},V={class:`meta-mono text-label`},H={class:`flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-5`},U={class:`flex items-center gap-2`},W={role:`group`,"aria-labelledby":`fm-mode-label`,class:`flex flex-wrap gap-1`},G=[`aria-pressed`],K=[`aria-pressed`],q={class:`flex items-center gap-2`},J={class:`flex items-center gap-2 label`},Y={class:`grid grid-cols-1 gap-4 xl:grid-cols-12`},X={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-7`},Z={class:`border-b border-line px-4 py-3 sm:px-5`},Q={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},ne={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},re={class:`meta-mono text-label`},ie={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Markdown document actions`},ae={class:`btn btn-ghost btn-sm cursor-pointer`},oe={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-5`},se={class:`border-b border-line px-4 py-3 sm:px-5`},ce={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},le={class:`panel-header`},ue={class:`btn btn-ghost btn-sm cursor-pointer`},de=[`accept`],fe={class:`border-t border-line px-4 py-3 sm:px-5 label`},pe={class:`card flex min-w-0 flex-col overflow-hidden`},me={class:`border-b border-line px-4 py-3 sm:px-5`},$={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},he={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},ge={class:`meta-mono text-label`},_e={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Rebuilt document actions`},ve={class:`flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 sm:px-5`},ye=[`disabled`],be=[`disabled`],xe={key:1,class:`grid grid-cols-1 gap-4 xl:grid-cols-12`},Se={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-7`},Ce={class:`border-b border-line px-4 py-3 sm:px-5`},we={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},Te={class:`panel-header`},Ee={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Metadata actions`},De={class:`btn btn-ghost btn-sm cursor-pointer`},Oe=[`accept`],ke={class:`flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 sm:px-5`},Ae={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-5`},je={class:`border-b border-line px-4 py-3 sm:px-5`},Me={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},Ne={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Front Matter block actions`},Pe=[`disabled`],Fe=[`disabled`],Ie={key:2,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},Le={key:3,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},Re={key:4,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},ze={class:`label`,role:`status`,"aria-live":`polite`},Be={class:`mt-4 flex flex-wrap gap-2`},Ve=[`aria-pressed`,`onClick`];function He(e,o,l,m,v,y){return f(),c(`section`,L,[s(`div`,R,[s(`div`,z,[s(`div`,B,[o[15]||=s(`h3`,{class:`panel-header`},`Front Matter Editor & Converter`,-1),s(`p`,V,r(m.mode===`document`?`Document · Metadata · Rebuilt document`:`Metadata · Front Matter block`),1)])]),s(`div`,H,[s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:o[0]||=e=>m.examplesOpen=!0},[u(m.BookOpen,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[16]||=d(` Examples `,-1)]),s(`div`,U,[o[17]||=s(`span`,{class:`label-micro`,id:`fm-mode-label`},`Working on`,-1),s(`div`,W,[s(`button`,{type:`button`,class:i([`btn btn-sm`,m.mode===`document`?`btn-accent`:`btn-ghost`]),"aria-pressed":m.mode===`document`,onClick:o[1]||=e=>m.mode=`document`},` A Markdown document `,10,G),s(`button`,{type:`button`,class:i([`btn btn-sm`,m.mode===`metadata`?`btn-accent`:`btn-ghost`]),"aria-pressed":m.mode===`metadata`,onClick:o[2]||=e=>m.mode=`metadata`},` Metadata only `,10,K)])]),s(`div`,q,[o[19]||=s(`label`,{class:`label-micro`,for:`fm-format`},`Metadata format`,-1),t(s(`select`,{id:`fm-format`,"onUpdate:modelValue":o[3]||=e=>m.format=e,class:`input-like`},[...o[18]||=[s(`option`,{value:`yaml`},`YAML`,-1),s(`option`,{value:`json`},`JSON`,-1)]],512),[[g,m.format]])]),s(`label`,J,[t(s(`input`,{type:`checkbox`,"onUpdate:modelValue":o[4]||=e=>m.includeBody=e,class:`h-4 w-4 accent-[var(--color-accent)]`},null,512),[[_,m.includeBody]]),o[20]||=d(` Include the Markdown body in the output `,-1)])])]),m.mode===`document`?(f(),c(p,{key:0},[s(`div`,Y,[s(`div`,X,[s(`div`,Z,[s(`div`,Q,[s(`div`,ne,[o[21]||=s(`h3`,{class:`panel-header`},`Markdown document`,-1),s(`span`,re,r(m.documentCount)+` characters`,1)]),s(`div`,ie,[s(`label`,ae,[u(m.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[22]||=d(` Upload `,-1),s(`input`,{type:`file`,accept:`.md,.markdown`,class:`hidden`,onChange:o[5]||=(...e)=>m.uploadDocument&&m.uploadDocument(...e)},null,32)]),s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:m.clearAll},[u(m.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[23]||=d(` Clear `,-1)])])])]),u(m.CodeEditor,{modelValue:m.document,"onUpdate:modelValue":[o[6]||=e=>m.document=e,m.onDocumentInput],"aria-label":`Markdown document`},null,8,[`modelValue`])]),s(`div`,oe,[s(`div`,se,[s(`div`,ce,[s(`h3`,le,`Metadata (`+r(m.format.toUpperCase())+`)`,1),s(`label`,ue,[u(m.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[24]||=d(` Upload `,-1),s(`input`,{type:`file`,accept:m.format===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:o[7]||=(...e)=>m.uploadMetadata&&m.uploadMetadata(...e)},null,40,de)])])]),u(m.CodeEditor,{modelValue:m.metadataText,"onUpdate:modelValue":[o[8]||=e=>m.metadataText=e,m.onMetadataInput],"aria-label":`Metadata`},null,8,[`modelValue`]),s(`p`,fe,r(m.documentError===``&&m.metadataError===``?`Comments, quoting and key order are resolved away when the metadata is parsed.`:m.metadataError===``?``:`This metadata does not parse — the rebuilt document keeps the last version that did.`),1)])]),s(`div`,pe,[s(`div`,me,[s(`div`,$,[s(`div`,he,[o[25]||=s(`h3`,{class:`panel-header`},`Rebuilt document`,-1),s(`span`,ge,r(m.rebuiltCount)+` characters`,1)]),s(`div`,_e,[s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:m.copyRebuilt},[u(m.Copy,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[26]||=d(` Copy `,-1)]),s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:m.downloadMarkdown},[u(m.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[27]||=d(` Download `,-1)])])])]),u(m.CodeEditor,{"model-value":m.rebuiltDocument,"aria-label":`Rebuilt document`,readonly:``},null,8,[`model-value`]),s(`div`,ve,[s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:m.body.trim().length===0,onClick:m.downloadBody},` Download the body only `,8,ye),s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:m.metadataBlock.trim().length===0,onClick:m.downloadMetadata},` Download the metadata block only (YAML) `,8,be)])])],64)):(f(),c(`div`,xe,[s(`div`,Se,[s(`div`,Ce,[s(`div`,we,[s(`h3`,Te,`Metadata (`+r(m.standaloneFormat.toUpperCase())+`)`,1),s(`div`,Ee,[s(`label`,De,[u(m.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[28]||=d(` Upload `,-1),s(`input`,{type:`file`,accept:m.standaloneFormat===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:o[9]||=(...e)=>m.uploadStandalone&&m.uploadStandalone(...e)},null,40,Oe)]),s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:o[10]||=e=>{m.standaloneText=``,m.standaloneError=``}},[u(m.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[29]||=d(` Clear `,-1)])])])]),u(m.CodeEditor,{modelValue:m.standaloneText,"onUpdate:modelValue":[o[11]||=e=>m.standaloneText=e,m.onStandaloneInput],"aria-label":`Standalone metadata`},null,8,[`modelValue`]),s(`div`,ke,[o[31]||=s(`label`,{class:`label-micro`,for:`fm-standalone-format`},`Format`,-1),t(s(`select`,{id:`fm-standalone-format`,"onUpdate:modelValue":o[12]||=e=>m.standaloneFormat=e,class:`input-like`},[...o[30]||=[s(`option`,{value:`json`},`JSON`,-1),s(`option`,{value:`yaml`},`YAML`,-1)]],512),[[g,m.standaloneFormat]])])]),s(`div`,Ae,[s(`div`,je,[s(`div`,Me,[o[34]||=s(`h3`,{class:`panel-header`},`Front Matter block`,-1),s(`div`,Ne,[s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:m.standaloneText.trim().length===0,onClick:m.copyMetadata},[u(m.Copy,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[32]||=d(` Copy `,-1)],8,Pe),s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:m.standaloneText.trim().length===0,onClick:m.downloadMetadata},[u(m.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),o[33]||=d(` Download `,-1)],8,Fe)])])]),u(m.CodeEditor,{"model-value":m.standaloneBlock,"aria-label":`Front Matter block`,readonly:``},null,8,[`model-value`])])])),m.documentError===``?h(``,!0):(f(),c(`p`,Ie,r(m.documentError),1)),m.metadataError===``?h(``,!0):(f(),c(`p`,Le,r(m.metadataError),1)),m.standaloneError===``?h(``,!0):(f(),c(`p`,Re,r(m.standaloneError),1)),s(`p`,ze,[m.notice===``?(f(),c(p,{key:1},[d(r(m.IDLE_STATUS),1)],64)):(f(),c(p,{key:0},[d(r(m.notice),1)],64))]),u(m.AppDialog,{open:m.examplesOpen,title:`Example documents`,subtitle:`Load a shape you are likely to be holding`,"close-label":`Close examples`,measure:`wide`,onClose:o[14]||=e=>m.examplesOpen=!1},{footer:a(()=>[s(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:o[13]||=e=>m.examplesOpen=!1},`Close`)]),default:a(()=>[o[35]||=s(`p`,{class:`label`},` Loading an example replaces the current Markdown document and metadata. `,-1),s(`div`,Be,[(f(),c(p,null,n(m.EXAMPLES,e=>s(`button`,{key:e.id,type:`button`,class:i([`btn btn-sm`,m.document===e.source?`btn-accent`:`btn-secondary`]),"aria-pressed":m.document===e.source,onClick:t=>{m.loadExample(e.source),m.examplesOpen=!1}},r(e.label),11,Ve)),64))])]),_:1},8,[`open`])])}var Ue=k(I,[[`render`,He]]);export{Ue as default};