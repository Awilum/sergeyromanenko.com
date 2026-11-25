import{Ft as e,I as t,K as n,Mt as r,P as i,X as a,Z as o,_ as s,c,d as l,f as u,l as d,ot as f,r as p,v as m,y as h}from"./runtime-core.esm-bundler.CrQH13hR.js";import{i as g,s as _}from"./runtime-dom.esm-bundler.CbiQ580r.js";import{t as v}from"./book-open._Z7yv07n.js";import{t as y}from"./copy.iqj9JkfD.js";import{t as ee}from"./download.CzfTFvjG.js";import{t as te}from"./eraser.BRLoLLFH.js";import{t as ne}from"./upload.DdjOr0ux.js";import{t as b}from"./CodeEditor.BOacIF0B.js";import{t as x}from"./AppDialog.BFMdxbmQ.js";import{a as S,i as C,n as w,t as T}from"./data-tool.D-Y76qT8.js";import{n as E,t as D}from"./browser.hJzF8IhF.js";import{t as O}from"./_plugin-vue_export-helper.BDNMzG2s.js";var k=/^(---|\.\.\.)[ \t]*\r?$/;function A(e){if(e.trim().length===0)return{value:{}};let t=D(e);return t.errors.length>0?{value:{},error:t.errors[0]?.message??`Invalid Front Matter YAML.`}:{value:t.toJS()}}function j(e){let t=e.split(`
`),n=t[0];if(n===void 0||!k.test(n))return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e};let r=-1;for(let e=1;e<t.length;e++){let n=t[e];if(n!==void 0&&k.test(n)){r=e;break}}if(r===-1)return{hasFrontMatter:!1,metadataText:``,metadata:{},body:e,error:`This document opens a Front Matter block but never closes it. A closing "---" line is required.`};let i=t.slice(1,r).join(`
`).replace(/\r$/,``),a=t.slice(r+1).join(`
`),o=A(i),s={hasFrontMatter:o.error===void 0,metadataText:i,metadata:o.value,body:a};return o.error!==void 0&&(s.error=o.error),s}function M(e,t){return t===`json`?JSON.stringify(e,null,2):typeof e!=`object`||!e||Object.keys(e).length===0?``:E(e,{indent:2}).trimEnd()}function N(e,t,n={}){let r=n.format??`yaml`,i=n.includeBody??!0,a=`---\n${M(e,r)}\n---`;return i&&(t.length>0||t.includes(`
`))?`${a}\n${t}`:`${a}\n`}function P(e,t){if(t===`json`)try{return{value:JSON.parse(e)}}catch(e){return{value:{},error:e instanceof Error?e.message:`Invalid JSON.`}}let n=A(e),r={value:n.value};return n.error!==void 0&&(r.error=n.error),r}var F=h({__name:`FrontMatterEditor`,setup(e,{expose:t}){t();let r=f(`document`),i=f(`yaml`),a=f(!0),o=f(!1),s=f(``),l=f(``),u=f(``),d=f(``),p=f(``),m=f({}),h=f(``),g=c(()=>JSON.stringify(m.value,null,2)),_=c(()=>N(m.value,l.value,{format:`yaml`,includeBody:a.value})),E=c(()=>N(m.value,``,{format:`yaml`,includeBody:!1})),D=f(``),O=f(`json`),k=f(``),A=c(()=>D.value.trim().length===0?``:N(m.value,``,{format:`yaml`,includeBody:!1}));function F(e){u.value=e;let t=P(e,i.value);t.error===void 0?(p.value=``,m.value=t.value):p.value=t.error}function I(e){s.value=e;let t=j(e);t.error===void 0?(d.value=``,p.value=``,l.value=t.body,m.value=t.metadata,u.value=M(t.metadata,i.value)):d.value=t.error}n(i,e=>{u.value=M(m.value,e)});function L(e){D.value=e;let t=P(e,O.value);t.error===void 0?(k.value=``,m.value=t.value,h.value=`Front Matter block rebuilt from the metadata you pasted.`):k.value=t.error}function R(e){s.value=e,I(e)}function z(e){return e.match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g,``)??`A ready-made front matter document.`}function B(){s.value=``,l.value=``,u.value=``,m.value={},d.value=``,p.value=``,h.value=``}let V=c(()=>s.value.length),H=c(()=>_.value.length),U=[{id:`blog-post`,label:`Blog post`,source:`---
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
`}],W=S(e=>{s.value=e,I(e),h.value=`Markdown file loaded.`}),G=S(e=>{F(e),h.value=`Metadata file loaded.`}),K=S(e=>{L(e)});async function q(){h.value=await w(_.value)}async function J(){h.value=await w(E.value)}function Y(){_.value.trim().length!==0&&(C(_.value,`document.md`,`text/markdown`),h.value=`Markdown file saved.`)}function X(){if(E.value.trim().length===0)return;let e=i.value===`json`?`json`:`yaml`;C(E.value,`frontmatter.${e}`,`text/yaml`),h.value=`Front Matter block saved.`}function Z(){l.value.trim().length!==0&&(C(l.value,`body.md`,`text/markdown`),h.value=`Markdown body saved.`)}let Q={mode:r,format:i,includeBody:a,examplesOpen:o,document:s,body:l,metadataText:u,documentError:d,metadataError:p,metadataValue:m,notice:h,metadataJson:g,rebuiltDocument:_,metadataBlock:E,standaloneText:D,standaloneFormat:O,standaloneError:k,standaloneBlock:A,onMetadataInput:F,onDocumentInput:I,onStandaloneInput:L,loadExample:R,exampleDescription:z,clearAll:B,documentCount:V,rebuiltCount:H,EXAMPLES:U,uploadDocument:W,uploadMetadata:G,uploadStandalone:K,copyRebuilt:q,copyMetadata:J,downloadMarkdown:Y,downloadMetadata:X,downloadBody:Z,get BookOpen(){return v},get Copy(){return y},get Download(){return ee},get Eraser(){return te},get Upload(){return ne},CodeEditor:b,AppDialog:x,get IDLE_STATUS(){return T}};return Object.defineProperty(Q,"__isScriptSetup",{enumerable:!1,value:!0}),Q}}),I={"aria-label":`Front Matter editor`,class:`flex flex-col gap-4`},L={class:`card`},R={class:`border-b border-line px-4 py-3 sm:px-5`},z={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},B={class:`meta-mono text-label`},V={class:`flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-5`},H={class:`flex items-center gap-2`},U={role:`group`,"aria-labelledby":`fm-mode-label`,class:`flex flex-wrap gap-1`},W=[`aria-pressed`],G=[`aria-pressed`],K={class:`flex items-center gap-2`},q={class:`flex items-center gap-2 label`},J={class:`grid grid-cols-1 gap-4 xl:grid-cols-12`},Y={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-7`},X={class:`border-b border-line px-4 py-3 sm:px-5`},Z={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},Q={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},re={class:`meta-mono text-label`},ie={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Markdown document actions`},ae={class:`btn btn-ghost btn-sm cursor-pointer`},oe={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-5`},se={class:`border-b border-line px-4 py-3 sm:px-5`},ce={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},le={class:`panel-header`},ue={class:`btn btn-ghost btn-sm cursor-pointer`},de=[`accept`],fe={class:`border-t border-line px-4 py-3 sm:px-5 label`},pe={class:`card flex min-w-0 flex-col overflow-hidden`},me={class:`border-b border-line px-4 py-3 sm:px-5`},he={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},ge={class:`flex flex-wrap items-baseline gap-x-3 gap-y-1`},_e={class:`meta-mono text-label`},$={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Rebuilt document actions`},ve={class:`flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 sm:px-5`},ye=[`disabled`],be=[`disabled`],xe={key:1,class:`grid grid-cols-1 gap-4 xl:grid-cols-12`},Se={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-7`},Ce={class:`border-b border-line px-4 py-3 sm:px-5`},we={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},Te={class:`panel-header`},Ee={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Metadata actions`},De={class:`btn btn-ghost btn-sm cursor-pointer`},Oe=[`accept`],ke={class:`flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 sm:px-5`},Ae={class:`card flex min-w-0 flex-col overflow-hidden xl:col-span-5`},je={class:`border-b border-line px-4 py-3 sm:px-5`},Me={class:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`},Ne={class:`flex flex-wrap items-center gap-2`,role:`group`,"aria-label":`Front Matter block actions`},Pe=[`disabled`],Fe=[`disabled`],Ie={key:2,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},Le={key:3,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},Re={key:4,role:`alert`,"aria-live":`assertive`,class:`label text-destructive`},ze={class:`label`,role:`status`,"aria-live":`polite`},Be={class:`mt-4 flex flex-col gap-2`,"aria-label":`Example documents`},Ve=[`aria-pressed`,`onClick`],He={class:`example-option__icon`,"aria-hidden":`true`},Ue={class:`min-w-0 flex-1 text-left`},We={class:`block text-[0.9375rem] font-medium text-ink`},Ge={class:`mt-0.5 block text-[0.8125rem] leading-relaxed text-muted`},Ke={class:`flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end`};function qe(n,c,f,h,v,y){return i(),u(`section`,I,[d(`div`,L,[d(`div`,R,[d(`div`,z,[c[15]||=d(`h3`,{class:`panel-header`},`Front Matter Editor & Converter`,-1),d(`p`,B,e(h.mode===`document`?`Document · Metadata · Rebuilt document`:`Metadata · Front Matter block`),1)])]),d(`div`,V,[d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:c[0]||=e=>h.examplesOpen=!0},[m(h.BookOpen,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[16]||=s(` Examples `,-1)]),d(`div`,H,[c[17]||=d(`span`,{class:`label-micro`,id:`fm-mode-label`},`Working on`,-1),d(`div`,U,[d(`button`,{type:`button`,class:r([`btn btn-sm`,h.mode===`document`?`btn-accent`:`btn-ghost`]),"aria-pressed":h.mode===`document`,onClick:c[1]||=e=>h.mode=`document`},` A Markdown document `,10,W),d(`button`,{type:`button`,class:r([`btn btn-sm`,h.mode===`metadata`?`btn-accent`:`btn-ghost`]),"aria-pressed":h.mode===`metadata`,onClick:c[2]||=e=>h.mode=`metadata`},` Metadata only `,10,G)])]),d(`div`,K,[c[19]||=d(`label`,{class:`label-micro`,for:`fm-format`},`Metadata format`,-1),o(d(`select`,{id:`fm-format`,"onUpdate:modelValue":c[3]||=e=>h.format=e,class:`input-like`},[...c[18]||=[d(`option`,{value:`yaml`},`YAML`,-1),d(`option`,{value:`json`},`JSON`,-1)]],512),[[_,h.format]])]),d(`label`,q,[o(d(`input`,{type:`checkbox`,"onUpdate:modelValue":c[4]||=e=>h.includeBody=e,class:`h-4 w-4 accent-[var(--color-accent)]`},null,512),[[g,h.includeBody]]),c[20]||=s(` Include the Markdown body in the output `,-1)])])]),h.mode===`document`?(i(),u(p,{key:0},[d(`div`,J,[d(`div`,Y,[d(`div`,X,[d(`div`,Z,[d(`div`,Q,[c[21]||=d(`h3`,{class:`panel-header`},`Markdown document`,-1),d(`span`,re,e(h.documentCount)+` characters`,1)]),d(`div`,ie,[d(`label`,ae,[m(h.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[22]||=s(` Upload `,-1),d(`input`,{type:`file`,accept:`.md,.markdown`,class:`hidden`,onChange:c[5]||=(...e)=>h.uploadDocument&&h.uploadDocument(...e)},null,32)]),d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:h.clearAll},[m(h.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[23]||=s(` Clear `,-1)])])])]),m(h.CodeEditor,{modelValue:h.document,"onUpdate:modelValue":[c[6]||=e=>h.document=e,h.onDocumentInput],"aria-label":`Markdown document`},null,8,[`modelValue`])]),d(`div`,oe,[d(`div`,se,[d(`div`,ce,[d(`h3`,le,`Metadata (`+e(h.format.toUpperCase())+`)`,1),d(`label`,ue,[m(h.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[24]||=s(` Upload `,-1),d(`input`,{type:`file`,accept:h.format===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:c[7]||=(...e)=>h.uploadMetadata&&h.uploadMetadata(...e)},null,40,de)])])]),m(h.CodeEditor,{modelValue:h.metadataText,"onUpdate:modelValue":[c[8]||=e=>h.metadataText=e,h.onMetadataInput],"aria-label":`Metadata`},null,8,[`modelValue`]),d(`p`,fe,e(h.documentError===``&&h.metadataError===``?`Comments, quoting and key order are resolved away when the metadata is parsed.`:h.metadataError===``?``:`This metadata does not parse — the rebuilt document keeps the last version that did.`),1)])]),d(`div`,pe,[d(`div`,me,[d(`div`,he,[d(`div`,ge,[c[25]||=d(`h3`,{class:`panel-header`},`Rebuilt document`,-1),d(`span`,_e,e(h.rebuiltCount)+` characters`,1)]),d(`div`,$,[d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:h.copyRebuilt},[m(h.Copy,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[26]||=s(` Copy `,-1)]),d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:h.downloadMarkdown},[m(h.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[27]||=s(` Download `,-1)])])])]),m(h.CodeEditor,{"model-value":h.rebuiltDocument,"aria-label":`Rebuilt document`,readonly:``},null,8,[`model-value`]),d(`div`,ve,[d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:h.body.trim().length===0,onClick:h.downloadBody},` Download the body only `,8,ye),d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:h.metadataBlock.trim().length===0,onClick:h.downloadMetadata},` Download the metadata block only (YAML) `,8,be)])])],64)):(i(),u(`div`,xe,[d(`div`,Se,[d(`div`,Ce,[d(`div`,we,[d(`h3`,Te,`Metadata (`+e(h.standaloneFormat.toUpperCase())+`)`,1),d(`div`,Ee,[d(`label`,De,[m(h.Upload,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[28]||=s(` Upload `,-1),d(`input`,{type:`file`,accept:h.standaloneFormat===`json`?`.json`:`.yaml,.yml`,class:`hidden`,onChange:c[9]||=(...e)=>h.uploadStandalone&&h.uploadStandalone(...e)},null,40,Oe)]),d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:c[10]||=e=>{h.standaloneText=``,h.standaloneError=``}},[m(h.Eraser,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[29]||=s(` Clear `,-1)])])])]),m(h.CodeEditor,{modelValue:h.standaloneText,"onUpdate:modelValue":[c[11]||=e=>h.standaloneText=e,h.onStandaloneInput],"aria-label":`Standalone metadata`},null,8,[`modelValue`]),d(`div`,ke,[c[31]||=d(`label`,{class:`label-micro`,for:`fm-standalone-format`},`Format`,-1),o(d(`select`,{id:`fm-standalone-format`,"onUpdate:modelValue":c[12]||=e=>h.standaloneFormat=e,class:`input-like`},[...c[30]||=[d(`option`,{value:`json`},`JSON`,-1),d(`option`,{value:`yaml`},`YAML`,-1)]],512),[[_,h.standaloneFormat]])])]),d(`div`,Ae,[d(`div`,je,[d(`div`,Me,[c[34]||=d(`h3`,{class:`panel-header`},`Front Matter block`,-1),d(`div`,Ne,[d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:h.standaloneText.trim().length===0,onClick:h.copyMetadata},[m(h.Copy,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[32]||=s(` Copy `,-1)],8,Pe),d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,disabled:h.standaloneText.trim().length===0,onClick:h.downloadMetadata},[m(h.Download,{class:`h-3.5 w-3.5`,"aria-hidden":`true`}),c[33]||=s(` Download `,-1)],8,Fe)])])]),m(h.CodeEditor,{"model-value":h.standaloneBlock,"aria-label":`Front Matter block`,readonly:``},null,8,[`model-value`])])])),h.documentError===``?l(``,!0):(i(),u(`p`,Ie,e(h.documentError),1)),h.metadataError===``?l(``,!0):(i(),u(`p`,Le,e(h.metadataError),1)),h.standaloneError===``?l(``,!0):(i(),u(`p`,Re,e(h.standaloneError),1)),d(`p`,ze,[h.notice===``?(i(),u(p,{key:1},[s(e(h.IDLE_STATUS),1)],64)):(i(),u(p,{key:0},[s(e(h.notice),1)],64))]),m(h.AppDialog,{open:h.examplesOpen,id:`front-matter-examples-title`,title:`Example documents`,subtitle:`Load a shape you are likely to be holding`,"close-label":`Close examples`,measure:`narrow`,"body-label":`Available example documents`,onClose:c[14]||=e=>h.examplesOpen=!1},{footer:a(()=>[d(`div`,Ke,[d(`button`,{type:`button`,class:`btn btn-ghost btn-sm`,onClick:c[13]||=e=>h.examplesOpen=!1},`Close`)])]),default:a(()=>[c[35]||=d(`p`,{class:`label`},` Loading an example replaces the current Markdown document and metadata. `,-1),d(`div`,Be,[(i(),u(p,null,t(h.EXAMPLES,t=>d(`button`,{key:t.id,type:`button`,class:r([`example-option`,{"is-selected":h.document===t.source}]),"aria-pressed":h.document===t.source,onClick:e=>{h.loadExample(t.source),h.examplesOpen=!1}},[d(`span`,He,[m(h.BookOpen,{class:`h-4 w-4`})]),d(`span`,Ue,[d(`span`,We,e(t.label),1),d(`span`,Ge,e(h.exampleDescription(t.source)),1)])],10,Ve)),64))])]),_:1},8,[`open`])])}var Je=O(F,[[`render`,qe],[`__scopeId`,`data-v-3bd93d83`]]);export{Je as default};