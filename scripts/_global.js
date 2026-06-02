// Global recon extraction
const cs = (el) => getComputedStyle(el);
const uniq = (arr) => [...new Set(arr)];

// Fonts in use
const fontSet = new Set();
document.querySelectorAll('*').forEach(el => { const f = cs(el).fontFamily; if (f) fontSet.add(f); });

// Sample typography on key elements
const sample = (sel) => {
  const el = document.querySelector(sel);
  if (!el) return null;
  const c = cs(el);
  return { sel, fontFamily: c.fontFamily, fontSize: c.fontSize, fontWeight: c.fontWeight, lineHeight: c.lineHeight, letterSpacing: c.letterSpacing, color: c.color, textTransform: c.textTransform };
};

// Images
const images = [...document.querySelectorAll('img')].map(img => ({
  src: img.currentSrc || img.src,
  srcset: img.srcset || null,
  alt: img.alt,
  w: img.naturalWidth, h: img.naturalHeight,
  cw: img.clientWidth, ch: img.clientHeight,
  parentClass: (img.parentElement?.className || '').toString().slice(0,80),
  position: cs(img).position, zIndex: cs(img).zIndex
}));

// Videos
const videos = [...document.querySelectorAll('video')].map(v => ({
  src: v.currentSrc || v.src || v.querySelector('source')?.src,
  poster: v.poster, autoplay: v.autoplay, loop: v.loop, muted: v.muted
}));

// Background images
const bgImages = [];
document.querySelectorAll('*').forEach(el => {
  const bg = cs(el).backgroundImage;
  if (bg && bg !== 'none' && bg.includes('url(')) {
    bgImages.push({ url: bg, tag: el.tagName.toLowerCase(), cls: (el.className||'').toString().slice(0,80), w: el.clientWidth, h: el.clientHeight });
  }
});

// Stylesheet / font links
const links = [...document.querySelectorAll('link')].map(l => ({ rel: l.rel, href: l.href, sizes: l.sizes?.toString(), type: l.type }));

// All distinct colors from text + bg
const colors = {};
const bgcolors = {};
document.querySelectorAll('*').forEach(el => {
  const c = cs(el);
  colors[c.color] = (colors[c.color]||0)+1;
  if (c.backgroundColor && c.backgroundColor !== 'rgba(0, 0, 0, 0)') bgcolors[c.backgroundColor] = (bgcolors[c.backgroundColor]||0)+1;
});
const topColors = Object.entries(colors).sort((a,b)=>b[1]-a[1]).slice(0,20);
const topBg = Object.entries(bgcolors).sort((a,b)=>b[1]-a[1]).slice(0,20);

// Body / html background
const bodyC = cs(document.body);
const htmlC = cs(document.documentElement);

// Top-level sections (direct structure)
const main = document.querySelector('main') || document.body;
const topSections = [...main.children].map((el,i) => ({
  i, tag: el.tagName.toLowerCase(),
  cls: (el.className||'').toString().slice(0,120),
  id: el.id || null,
  h: Math.round(el.getBoundingClientRect().height),
  text: el.textContent.trim().replace(/\s+/g,' ').slice(0,120)
}));

// Detect smooth-scroll libs
const lenis = !!document.querySelector('.lenis, [data-lenis], html.lenis') || typeof window.Lenis !== 'undefined' || document.documentElement.className.includes('lenis');
const locomotive = !!document.querySelector('[data-scroll-container], .has-scroll-smooth');

// Framework hints
const fw = {
  next: !!document.querySelector('#__next, script#__NEXT_DATA__') || !!window.__NEXT_DATA__,
  nuxt: !!window.__NUXT__,
  react: !!document.querySelector('[data-reactroot]') || !!window.React,
};

// Favicons + meta
const favicons = [...document.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch"], link[rel="manifest"]')].map(l => ({ rel: l.rel, href: l.href, sizes: l.sizes?.toString() }));
const meta = {
  title: document.title,
  ogImage: document.querySelector('meta[property="og:image"]')?.content,
  description: document.querySelector('meta[name="description"]')?.content,
  lang: document.documentElement.lang
};

return JSON.stringify({
  url: location.href,
  scrollHeight: document.body.scrollHeight,
  viewport: { w: window.innerWidth, h: window.innerHeight },
  fonts: [...fontSet],
  typography: ['h1','h2','h3','h4','p','a','button','nav','span','li'].map(sample).filter(Boolean),
  bodyBg: bodyC.backgroundColor, bodyColor: bodyC.color, bodyFont: bodyC.fontFamily,
  htmlBg: htmlC.backgroundColor,
  topColors, topBg,
  imagesCount: images.length, images,
  videos, bgImages: bgImages.slice(0,40),
  links, favicons, meta,
  topSections,
  smoothScroll: { lenis, locomotive },
  framework: fw,
  svgCount: document.querySelectorAll('svg').length
}, null, 2);
