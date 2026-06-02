# Page Topology — amabillyegabriel.com/pt

Single long scroll page (wedding site). Next.js (App Router, CSS Modules). Total height ≈ 8129px @1440.

## Layers
- **Fixed gray background** (`SlideShow`, z-index -5): crossfading banner photos (`/banner/03.jpg`, `/banner/02.jpg`) + black overlay (`::after { background:#000; opacity:.425 }`). Sits behind the transparent hero + countdown.
- **Fixed Navigation** (z 5): logo + menu, color toggled by JS (white over hero → black over white content). Active route + hover = bickham script.

## Sections (top → bottom)
1. **HomeHeader** (hero, 100vh, transparent) — title `AMÁBILLY & GABRIEL` (freight-big-pro), divider, script subtitle, date, `MG – SP`. White text over gray. *static*
2. **CountdownSection** (~524px, transparent) — `Casados há:` (script) + live timer Meses/Dias/Horas/Minutos/Segundos since 2024-06-29. White text over gray. Torn-paper PNG `::after` (`/countdown/ripped-bg-3.png`, contain/bottom) creates the gray→white transition. *time-driven*
3. **SaveTheDate** (white) — 3 arch flip-cards (01./02./03. timeline), gradient `SAVE THE DATE!`, gold `Confirme sua presença` CTA. *hover (card flip)*
4. **HorizontalScrollSection** (pinned, height = 100vh + 200vw) — 6 panels (50vw each, 2 visible): A Cerimônia, Lista de Presentes, Código de Vestimenta, Hospedagem, Poemas, Galeria. Track translateX 0→-200vw mapped to scroll. *scroll-driven horizontal*
5. **OurStorySection** (white) — offset `NOSSA`/`HISTÓRIA`, right-aligned justified paragraph, `Continue lendo...`. *static*
6. **Footer** (white, top border) — AG monogram. Followed by black `<footer>` credit bar `DEVELOPED BY GABRIEL MAX & ANA AMÁBILLY`. *static*

## Responsive
- Desktop ≥768px as above. Mobile <768px: nav → hamburger full-screen menu; SaveTheDate arches hidden (vertical date/gold-splitter timeline only); HorizontalScroll → vertically stacked full-width panels.
