# SaveTheDate Specification

## Overview
- **Target files:** `src/components/SaveTheDate.tsx`, `RoundedCard.tsx`
- **Screenshots:** `d-02-savedate-a.png`, `d-03-savedate-b.png`
- **Interaction model:** hover (card flip)

## Computed Styles
- section: white, `padding 0 32px`, flex center; container max-width 1376px, `flex-direction:column-reverse` (images above text), gap 64px.
- **SAVE THE DATE!** h1: freight-big-pro 144px/180px, weight 200, uppercase; `background:linear-gradient(270deg,#eee,#111); -webkit-background-clip:text; text-fill-color:transparent`. Mobile 80px/92px. Three stacked lines SAVE / THE / DATE!.
- CTA (`Button_highlighted`): freight-big-pro 18px/26px ls2px, color #d39f42, bg #fff, border 1px #d39f42, radius 30px, width 260px. AG monogram SVG (60×91) to the left, gap 32px.

## RoundedCard (×3)
- arch `imagesContainer`: 275×500, `border-radius:300px`, `overflow:hidden`, z 3.
- front/back imgs: absolute inset 0, `backface-visibility:hidden`; front rotateY 0→180 on hover, back rotateY -180→0 (`transition .75s`).
- big number 94px/88px freight-big-pro: white copy clipped over photo + black copy below (right -20px, top 412px).
- splitter: 3×40px, `linear-gradient(#d39f42 10%,#fff)`.
- date span: freight-big-pro 14px ls4px #aaa uppercase; title h3: freight-big-pro 32px weight 100 ls2px #777 uppercase.

## Per-card content
1. 01. · 10 April 2018 · O começo · front love-107 / back love-184
2. 02. · 18 Nov 2023 · O pedido · front love-27 / back love-143
3. 03. · 29 Jun 2024 · O casamento · front love-93 / back love-65

## Responsive
- Mobile: arch images hidden; only splitter + date + title (vertical timeline). SAVE THE DATE 80px.
