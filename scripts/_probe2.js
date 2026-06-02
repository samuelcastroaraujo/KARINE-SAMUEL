const cs = (el,pe) => el ? getComputedStyle(el, pe||null) : null;
const peInfo = (el, pe) => { const c=cs(el,pe); if(!c) return null; return { content:c.content, bg:c.backgroundColor, bgImg:c.backgroundImage.slice(0,120), clip:c.clipPath, mask:(c.maskImage||c.webkitMaskImage||'').slice(0,120), position:c.position, h:c.height, w:c.width, transform:c.transform, top:c.top, opacity:c.opacity }; };

// Monogram SVG (footer) outerHTML
const footerSvg = document.querySelector('section.Footer_footer__QJKQ8 svg');
// Nav logo + hamburger
const nav = document.querySelector('nav.Navigation_nav__D1U__');

// Header pseudo + overlay
const header = document.querySelector('header.HomeHeader_header__o88dx');
// torn paper: inspect savethedate + its container + countdown for ::before/::after
const std = document.querySelector('section.SaveTheDate_section__Ggm_C');
const cd = document.querySelector('section.CountdownSection_section__q8BFC');
// Look for any element with clip-path/mask or 'paper' in bg across page
const tornCandidates = [...document.querySelectorAll('*')].filter(el=>{
  const c=cs(el); const m=(c.maskImage||c.webkitMaskImage||''); const cp=c.clipPath;
  return (cp&&cp!=='none') || (m&&m!=='none') || /paper|rip|torn|tear/i.test((el.className||'').toString());
}).slice(0,15).map(el=>({cls:(el.className||'').toString().slice(0,60), clip:cs(el).clipPath, mask:(cs(el).maskImage||cs(el).webkitMaskImage||'').slice(0,80), bgImg:cs(el).backgroundImage.slice(0,80), tag:el.tagName.toLowerCase()}));

// RoundedCard geometry
const rc = document.querySelector('.RoundedCard_cardContainer__3kRbh');
const rcImgs = document.querySelector('.RoundedCard_imagesContainer__NlfXE');

// slideshow images current styles
const slideImgs = [...document.querySelectorAll('.SlideShow_imagesContainer__eL4Iu img')].map(i=>({opacity:cs(i).opacity, transition:cs(i).transition, animation:cs(i).animationName+' '+cs(i).animationDuration}));

return JSON.stringify({
  footerSvg: footerSvg? footerSvg.outerHTML.slice(0,4000): null,
  navLogoImg: nav? (nav.querySelector('.Navigation_logo__hfAeQ img')?.outerHTML||'').slice(0,400): null,
  hamburger: nav? (nav.querySelector('label')?.outerHTML||'')+(nav.querySelector('.Navigation_toggleButton__KLfMP')?'has-toggle':''): null,
  header_after: peInfo(header,'::after'), header_before: peInfo(header,'::before'),
  headerStyle: { bg: cs(header).backgroundColor, bgImg: cs(header).backgroundImage.slice(0,80) },
  savethedate_before: peInfo(std,'::before'), savethedate_after: peInfo(std,'::after'),
  savethedateStyle: { bg: cs(std).backgroundColor, mask:(cs(std).maskImage||cs(std).webkitMaskImage||'').slice(0,100), clip:cs(std).clipPath, marginTop:cs(std).marginTop, paddingTop:cs(std).paddingTop, position:cs(std).position },
  countdown_before: peInfo(cd,'::before'), countdown_after: peInfo(cd,'::after'),
  countdownStyle: { bg: cs(cd).backgroundColor },
  tornCandidates,
  roundedCard: rc? { borderRadius: cs(rc).borderRadius, overflow: cs(rc).overflow, w: cs(rc).width, h: cs(rc).height, transform: cs(rc).transform, transition: cs(rc).transition, transformStyle: cs(rc).transformStyle }: null,
  roundedCardImgs: rcImgs? { borderRadius: cs(rcImgs).borderRadius, overflow: cs(rcImgs).overflow, w: cs(rcImgs).width, h: cs(rcImgs).height }: null,
  slideImgs,
  bodyBg: cs(document.body).backgroundColor, htmlBg: cs(document.documentElement).backgroundColor,
  // main wrapper bg (the element that gives gray)
  mainWrappers: [...document.querySelectorAll('body > *, #__next > *, main, main > *')].slice(0,12).map(el=>({tag:el.tagName.toLowerCase(), cls:(el.className||'').toString().slice(0,50), bg:cs(el).backgroundColor, pos:cs(el).position, z:cs(el).zIndex}))
}, null, 2);
