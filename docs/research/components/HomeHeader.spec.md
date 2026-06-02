# HomeHeader (Hero) Specification

## Overview
- **Target file:** `src/components/HomeHeader.tsx` (+ `SlideshowBackground.tsx`)
- **Screenshot:** `docs/design-references/d-00-hero.png`
- **Interaction model:** static (background crossfades on a timer)

## Computed Styles
- header: 100vh, flex column center, transparent, text white, `padding 0 32px`, text-align center.
- box gap 4px.
- h1 (freight-big-pro, weight 200, uppercase, white): `Amábilly` 72px (ls -0.5px) · `&` 92px (px 12) · `Gabriel` 72px (ls 2.5px, transform scaleX(1.055)). margin-bottom 12px.
- divider: thin white rule ~80px under title.
- h2 subtitle: bickham-script 60px, weight 300, line-height 54px, white, margin-top 12px — `nas ditas linhas em que nos encontramos`.
- date span: freight-big-pro 18px, ls 2px, uppercase, white — `29 DE JUNHO DE 2024`.
- location span: same — `MG – SP` (`–` padded 8px).

## Background (SlideshowBackground)
- Fixed `inset:0; z-index:-5`; crossfades `/banner/03.jpg` ↔ `/banner/02.jpg` (opacity, ~2s). Overlay `bg #000 opacity .425`.

## Responsive
- Title scales down (72→56→44px) and wraps to stacked lines on mobile.
