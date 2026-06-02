# OurStory + Footer Specification

## Overview
- **Target files:** `src/components/OurStorySection.tsx`, `SiteFooter.tsx`
- **Screenshots:** `d-11-ourstory.png`, `d-12-footer.png`
- **Interaction model:** static (link hovers)

## OurStory
- section: white, padding ~80px; inner max-width 1184px.
- slogan: `Nossa` freight-big-pro 108px weight 200 line-height 125 color `rgba(15,15,15,.35)` (margin-left 11px); `história` freight-big-pro 180px weight 200 line-height 125 color `#1a1a1a` — tight overlap.
- mainContainer: flex row, `justify-content:space-between; align-items:flex-end`.
  - left: `Continue lendo...` Button_primary (freight-big-pro) → /pt/nossa-historia.
  - right: paragraph Inter 16px `#1a1a1a`, max-width 350px, justified.
- Paragraph (verbatim): "Kalmar, 1518-1519; Assim, costumávamos terminar nossos textos. Em uma cidade sonhada, onde nos encontrávamos em nossas imaginações. Talvez você encontre algumas dezenas de poemas escritos em nossas redes sociais com essa assinatura. Nos conhecemos em 10 de Abril de 2018. Gosto (eu, o noivo), de pensar que - guardadas as devidas proporções -, nos encontramos em um encontro às escuras do século XXI. Ela é meu primeiro amor."

## Footer
- `Footer_footer` section: white, `border-top 1px #000`, padding 32px 0, flex center; AG monogram SVG 80×80.
- Below: black `<footer>` bar; centered Inter ~11px uppercase ls2px white — `DEVELOPED BY GABRIEL MAX & ANA AMÁBILLY`.

## Responsive
- Mobile: slogan ~56/96px; button + paragraph stack; paragraph right-aligned.
