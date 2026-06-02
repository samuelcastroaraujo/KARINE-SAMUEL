// Deep per-section DOM + computed-style walk
const props = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
  'textTransform','textDecoration','backgroundColor','backgroundImage','backgroundSize','backgroundPosition','backgroundRepeat',
  'padding','margin','width','height','maxWidth','minHeight',
  'display','flexDirection','justifyContent','alignItems','gap','textAlign',
  'gridTemplateColumns','borderRadius','border','boxShadow','overflow','overflowX',
  'position','top','right','bottom','left','zIndex','inset',
  'opacity','transform','transition','cursor','objectFit','mixBlendMode','filter','backdropFilter','writingMode'];
const cs = (el) => getComputedStyle(el);
function styles(el){const c=cs(el);const o={};props.forEach(p=>{const v=c[p];if(v&&v!=='none'&&v!=='normal'&&v!=='auto'&&v!=='0px'&&v!=='rgba(0, 0, 0, 0)'&&v!=='0%')o[p]=v;});return o;}
function walk(el,d,maxd){
  if(d>maxd)return null;
  const kids=[...el.children];
  const r={tag:el.tagName.toLowerCase(),cls:(el.className||'').toString(),id:el.id||undefined,
    text:el.childNodes.length===1&&el.childNodes[0].nodeType===3?el.textContent.trim().slice(0,300):undefined,
    styles:styles(el)};
  if(el.tagName==='IMG')r.img={src:el.currentSrc||el.src,alt:el.alt,w:el.naturalWidth,h:el.naturalHeight};
  if(el.tagName==='A')r.href=el.getAttribute('href');
  const rect=el.getBoundingClientRect();r.box={w:Math.round(rect.width),h:Math.round(rect.height)};
  if(kids.length)r.children=kids.slice(0,30).map(k=>walk(k,d+1,maxd)).filter(Boolean);
  return r;
}
const sels=[
  ['header','header.HomeHeader_header__o88dx',5],
  ['countdown','section.CountdownSection_section__q8BFC',5],
  ['savethedate','section.SaveTheDate_section__Ggm_C',6],
  ['horizontal','div.HorizontalScrollSection_horizontalScrollSection__yDnWr',5],
  ['ourstory','section.OurStorySection_section__6O9YV',5],
  ['footer','section.Footer_footer__QJKQ8',4]
];
const out={};
for(const [name,sel,md] of sels){const el=document.querySelector(sel);out[name]=el?walk(el,0,md):{error:'not found '+sel};}
return JSON.stringify(out,null,2);
