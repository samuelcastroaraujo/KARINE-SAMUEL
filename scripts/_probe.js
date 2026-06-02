const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const raf2 = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
const cs = (el) => el ? getComputedStyle(el) : null;
const pick = (el, ps) => { const c = cs(el); const o = {}; if(!c) return null; ps.forEach(p=>o[p]=c[p]); return o; };

// 1) NAV: find the top fixed bar (logo + menu). It's likely <nav> or a fixed header/div near body top.
const navCandidates = [...document.querySelectorAll('nav, header')].map(el => ({
  tag: el.tagName.toLowerCase(), cls: (el.className||'').toString(),
  pos: cs(el).position, z: cs(el).zIndex, top: cs(el).top,
  h: Math.round(el.getBoundingClientRect().height),
  links: [...el.querySelectorAll('a')].map(a=>({t:a.textContent.trim(), href:a.getAttribute('href')}))
}));

// Find the actual nav menu element (has the menu links)
let navEl = [...document.querySelectorAll('nav, header, div')].find(el => {
  const t = el.textContent;
  return cs(el).position==='fixed' && /CONFIRME PRESEN|PRESENTES|NOSSA HIST/i.test(t) && el.querySelectorAll('a,li,button').length>=4 && el.getBoundingClientRect().height < 160;
});
const navInfo = navEl ? {
  tag: navEl.tagName.toLowerCase(), cls:(navEl.className||'').toString(),
  outerStart: navEl.outerHTML.slice(0, 1200),
  style: pick(navEl, ['position','top','left','width','height','zIndex','padding','display','justifyContent','alignItems','backgroundColor','mixBlendMode','color','transition']),
  itemsColorAtTop: [...navEl.querySelectorAll('a,span,li')].slice(0,8).map(a=>({t:a.textContent.trim().slice(0,30), color: cs(a).color, font: cs(a).fontFamily, fs: cs(a).fontSize, fw: cs(a).fontWeight, ls: cs(a).letterSpacing, tt: cs(a).textTransform}))
} : null;

// 2) Hero overlay: descendants of header with semi-transparent bg
const header = document.querySelector('header.HomeHeader_header__o88dx');
const overlays = header ? [...header.querySelectorAll('*')].filter(el=>{const b=cs(el).backgroundColor; return b && b!=='rgba(0, 0, 0, 0)';}).map(el=>({cls:(el.className||'').toString(), bg:cs(el).backgroundColor, pos:cs(el).position, z:cs(el).zIndex, w:Math.round(el.getBoundingClientRect().width), h:Math.round(el.getBoundingClientRect().height)})) : [];
// also check body/main background and any fixed full-screen overlay
const fixedOverlays = [...document.querySelectorAll('div,section')].filter(el=>{const c=cs(el); return c.position==='fixed' && el.getBoundingClientRect().width>1000;}).map(el=>({cls:(el.className||'').toString(), bg:cs(el).backgroundColor, bgImg:cs(el).backgroundImage.slice(0,60), z:cs(el).zIndex, opacity:cs(el).opacity}));

// 3) Horizontal scroll mechanism
const hs = document.querySelector('div.HorizontalScrollSection_horizontalScrollSection__yDnWr');
const hsRect = hs ? { offsetTop: hs.offsetTop, h: hs.offsetHeight } : null;
// find sticky/pinned wrapper inside and the horizontal track
let sticky=null, track=null;
if (hs) {
  [...hs.querySelectorAll('*')].forEach(el=>{ const p=cs(el).position; if(p==='sticky'&&!sticky) sticky=el; });
  // track = element whose width > viewport (the horizontal row)
  track = [...hs.querySelectorAll('*')].find(el=>el.scrollWidth>window.innerWidth*1.5 || el.getBoundingClientRect().width>window.innerWidth*1.5) || null;
}
const hsStruct = {
  hsClass: hs?.className?.toString(),
  hsStyle: pick(hs, ['position','height','overflow']),
  stickyClass: sticky?.className?.toString(), stickyStyle: pick(sticky,['position','top','height','overflow']),
  trackClass: track?.className?.toString(), trackStyle: pick(track,['display','width','transform','height','gap']),
  trackWidth: track? Math.round(track.getBoundingClientRect().width):null,
  panelCount: track? track.children.length : null,
  panels: track? [...track.children].map(c=>({cls:(c.className||'').toString(), w:Math.round(c.getBoundingClientRect().width), txt:c.textContent.trim().replace(/\s+/g,' ').slice(0,40)})) : []
};

// Probe transform at several scroll positions
const probes = [];
const top = hsRect? hsRect.offsetTop : 2766;
const positions = [top-100, top+200, top+800, top+1600, top+2400, top+3200, top+4000];
for (const y of positions) {
  window.scrollTo(0, y); await raf2(); await sleep(150);
  probes.push({ y, navColor: navEl? cs(navEl.querySelector('a,span,li')).color : null,
    trackTransform: track? cs(track).transform : null,
    stickyTop: sticky? sticky.getBoundingClientRect().top : null });
}
window.scrollTo(0,0); await raf2();

return JSON.stringify({ navCandidates, navInfo, overlays, fixedOverlays, hsRect, hsStruct, transformProbes: probes }, null, 2);
