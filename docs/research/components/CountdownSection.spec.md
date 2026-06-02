# CountdownSection Specification

## Overview
- **Target file:** `src/components/CountdownSection.tsx`
- **Screenshot:** `docs/design-references/d-01-countdown.png`
- **Interaction model:** time-driven (1s tick)

## Computed Styles
- section: transparent, white text, min-height ~524px, flex center, `position:relative; overflow:hidden`.
- `Casados há:` — bickham-script 64px, white.
- time row: max-width 900px, flex center; each unit column width 180px, gap 8px.
- number (timeBox): freight-big-pro 112px, weight 100, ls 4px, white, margin-top -12px.
- unit label: freight-big-pro 24px, ls 4px, uppercase, white.
- **Torn paper** `::after`: `url(/countdown/ripped-bg-3.png); background-size:contain; background-position:bottom; position:absolute; inset:0`.

## Behavior
- Live elapsed time since `2024-06-29T00:00`: Meses, Dias, Horas, Minutos, Segundos (zero-padded).

## Responsive
- Mobile: numbers ~44px, labels ~13px, 5 columns flex-distributed.
