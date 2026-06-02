# HorizontalScrollSection Specification

## Overview
- **Target file:** `src/components/HorizontalScrollSection.tsx`
- **Screenshots:** `d-04..d-10-horiz*.png`
- **Interaction model:** SCROLL-DRIVEN HORIZONTAL (not click tabs)

## Mechanism
- Outer: `position:relative; height: calc(100vh + 200vw)`.
- Inner: `position:sticky; top:0; height:100vh; overflow:hidden`.
- Track: `display:flex; will-change:transform`; 6 children `width:50vw; flex:0 0 auto; height:100vh` → 300vw total.
- JS scroll listener: progress p = clamp(-section.top / (sectionHeight - vh)); `track.transform = translate3d(-(p*(trackWidth-vw)),0,0)`. Verified: translateX 0 → -2880px (=-200vw) @1440.

## Panel styles
- section: background image cover, position center-bottom, `padding 16px`, flex column center gap 12px, text-align center.
- h2 heading: freight-big-pro 44px (mobile 32px), weight 200, ls 4px, uppercase. Light panel → black, dark panel → white.
- button: `Button_primary` (light: border rgba(0,0,0,.5), text rgba(0,0,0,.85)) / `Button_secondary` (dark: white variants). Pill, width ~400px.
- Cerimônia address (hover): freight-big-pro 20px ls1.2px #717171, `opacity 0→1 transition .5s`.

## Panels (order)
1. A Cerimônia · folha2.jpg · light · "Veja informações sobre nosso Grande Dia!" → /pt/dicas-e-instrucoes/cerimonia · address: Caioçara, Jarinu - SP, 13240-000 / Estrada Municipal do Bairro Caioçara 1100
2. Lista de Presentes · tulipa.jpg · dark · "Cheque nossa lista de presentes" → /pt/presentes
3. Código de Vestimenta · girassol.jpg · light · "Confira o dresscode"
4. Hospedagem · dandelion.jpg · dark · "Encontre lugares por perto para sua hospedagem!"
5. Poemas · planta.jpg · light · "Poemas que trocamos ao longo dos anos!"
6. Galeria · final.jpg · dark · "As fotos do nosso pré-wedding" → /pt/album-de-fotos

## Responsive
- Mobile <768px: horizontal scroll disabled; panels stacked vertically, each full-width min-height 80vh.
