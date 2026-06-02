# Behaviors — amabillyegabriel.com/pt

## Global
- **Smooth scroll lib:** none (native).
- **Fonts:** Adobe Typekit `freight-big-pro` (serif headings), `bickham-script-pro-3` (script), Inter (body). Loaded via `https://use.typekit.net/gja5cdy.css` + next/font Inter.
- **Palette:** white #fff, black #000, body text #1a1a1a, grays #777 / #aaa / #717171, gold accent **#d39f42**.

## Navigation
- Fixed, `padding 24px 48px`, z 5. Inline `color` toggled by JS: **#fff** over hero, **#000** over white content (observed black through the whole horizontal section too).
- Items: Inter 16px / weight 300 / letter-spacing 2px / uppercase. **On hover** (and the active route) each item morphs to `bickham-script-pro-3` 42px lowercase (`transition: font-family .2s`).
- Mobile: hidden checkbox `#menuToggle` + hamburger; checked → full-screen `rgba(0,0,0,.58)` blurred overlay menu, hamburger lines rotate into an X.

## Hero / Slideshow
- Fixed full-viewport slideshow crossfades 2 banner photos; `::after` black overlay opacity **.425** = the gray tone. White hero text over it.

## Countdown
- Live timer (1s tick) since `2024-06-29`. `::after` ripped-paper PNG (`background-size:contain; position:bottom`) = torn white transition into the next section.

## SaveTheDate
- `SAVE THE DATE!` = `linear-gradient(270deg,#eee,#111)` + `-webkit-background-clip:text; text-fill-color:transparent` (mobile 80px/92px, desktop 144px/180px).
- **Arch flip cards:** `imagesContainer` 275×500, `border-radius:300px`, `overflow:hidden`. Front/back images flip on hover via `rotateY` (.75s, `backface-visibility:hidden`). Big number: white copy clipped inside the arch (over photo) + black copy below. Gold→white `splitter` (`linear-gradient(#d39f42 10%,#fff)`).
- CTA pill `Confirme sua presença`: gold text/border on white, AG monogram to the left.

## HorizontalScrollSection
- **INTERACTION MODEL: scroll-driven horizontal.** Section height = 100vh + horizontal travel. Track (`display:flex; will-change:transform`) `translateX` linearly `0 → -(trackWidth - viewport)` (= -200vw for 6×50vw panels) as the section scrolls through the pinned viewport. Confirmed via transform probe (translateX -168→-2880 over scroll).
- Panels: each `section` uses its botanical image as `background:cover center-bottom`. Light panels → black heading + `Button_primary` (dark border); dark panels → white heading + `Button_secondary` (light border).
- Per-panel hover: address/details fade in (`opacity 0→1`, `transition .5s`) — implemented on the Cerimônia panel.

## OurStory
- `Nossa` 108px `rgba(15,15,15,.35)` overlapping `história` 180px `#1a1a1a` (freight-big-pro/200, line-height 125 → tight overlap). Right column Inter 16px justified, max-width 350px.

## Buttons (shared)
- Pill: `padding 13px 23px; border-radius 30px; freight-big-pro 18px/22.5 letter-spacing 2px`. Hover morphs label to script (`transition: font-family .25s`).
