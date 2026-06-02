# Navigation Specification

## Overview
- **Target file:** `src/components/Navigation.tsx`
- **Interaction model:** scroll-driven color toggle + click (mobile menu)

## Computed Styles
- nav: `position:fixed; inset-x 0; top 0; z-index 5; padding 24px 48px; display:flex; justify-content:space-between; --menu-color:#fff; color:#fff`.
- ul: `display:flex; gap:32px; align-items:center`.
- li (inactive): font-family Inter, 16px, weight 300, letter-spacing 2px, uppercase.
- li (active / :hover): font-family bickham-script-pro-3, 42px, letter-spacing 0, lowercase, line-height 20px; `transition: font-family .2s ease-in`.
- logo img: 40×60 (mobile height 50px).

## States & Behaviors
- **Color toggle:** white over hero; black once `scrollY > innerHeight - 112`. JS-set inline `color` (+ `--menu-color` drives hamburger).
- **Hover morph:** each item Inter-uppercase → bickham-script lowercase 42px.
- **Mobile menu:** `<768px` hamburger (3×1px lines) → checked = X; full-screen `rgba(0,0,0,.58)` blurred overlay, white items.

## Content
Logo → /pt. Links: Início(/pt, active), Confirme presença(/pt/marque-a-data), Presentes(/pt/presentes), Dicas e Instruções(/pt/dicas-e-instrucoes/cerimonia), Álbum de fotos(/pt/album-de-fotos), Nossa história(/pt/nossa-historia).

## Responsive
- Desktop: logo left, inline menu right.
- Mobile: logo + hamburger; menu becomes full-screen overlay.
