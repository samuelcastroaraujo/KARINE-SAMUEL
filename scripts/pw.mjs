// Reusable Playwright harness for website cloning.
// Usage: node scripts/pw.mjs <config.json>
// Config schema:
// {
//   "url": "https://...",            // page to load
//   "width": 1440, "height": 900,     // viewport (default 1440x900)
//   "wait": "networkidle",            // load state (default networkidle)
//   "settle": 1500,                    // extra ms to wait after load
//   "actions": [                       // optional, run in order before extract/screenshot
//      { "type": "scroll", "y": 1200 },
//      { "type": "scrollBottom" },
//      { "type": "scrollTo", "selector": ".foo" },
//      { "type": "click", "selector": ".tab" },
//      { "type": "hover", "selector": ".card" },
//      { "type": "wait", "ms": 600 }
//   ],
//   "evalFile": "scripts/_eval.js",   // optional JS file; its body is wrapped in a function and run in page ctx
//   "screenshot": "docs/x.png",       // optional screenshot path
//   "fullPage": true,                  // full-page screenshot (default false)
//   "out": "docs/research/x.json"      // optional path to write eval result JSON
// }
import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';

const cfgPath = process.argv[2];
const cfg = JSON.parse(readFileSync(cfgPath, 'utf8'));

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: cfg.width || 1440, height: cfg.height || 900 },
  deviceScaleFactor: cfg.dsf || 1,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
});
const page = await ctx.newPage();

try {
  await page.goto(cfg.url, { waitUntil: cfg.wait || 'networkidle', timeout: 60000 });
} catch (e) {
  // fall back to domcontentloaded if networkidle times out
  try { await page.goto(cfg.url, { waitUntil: 'domcontentloaded', timeout: 60000 }); } catch (e2) {}
}
await page.waitForTimeout(cfg.settle ?? 1500);

for (const a of cfg.actions || []) {
  try {
    if (a.type === 'scroll') await page.evaluate((y) => window.scrollTo(0, y), a.y);
    else if (a.type === 'scrollBottom') await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    else if (a.type === 'scrollTo') await page.evaluate((s) => { const el = document.querySelector(s); if (el) el.scrollIntoView({ block: 'center' }); }, a.selector);
    else if (a.type === 'click') await page.click(a.selector, { timeout: 5000 });
    else if (a.type === 'hover') await page.hover(a.selector, { timeout: 5000 });
    else if (a.type === 'wait') await page.waitForTimeout(a.ms || 500);
    if (a.settle) await page.waitForTimeout(a.settle);
  } catch (e) {
    console.error(`action ${a.type} failed: ${e.message}`);
  }
}

let result = null;
if (cfg.evalFile) {
  const body = readFileSync(cfg.evalFile, 'utf8');
  result = await page.evaluate(`(async () => { ${body} })()`);
  if (cfg.out) writeFileSync(cfg.out, typeof result === 'string' ? result : JSON.stringify(result, null, 2));
}

// Scroll sweep: take viewport screenshots at given scroll positions in one load.
// cfg.sweep = [{ y: 0, shot: "docs/x-0.png" }, ...]
for (const s of cfg.sweep || []) {
  await page.evaluate((y) => window.scrollTo(0, y), s.y);
  await page.waitForTimeout(s.settle ?? 900);
  await page.screenshot({ path: s.shot, fullPage: false });
}

if (cfg.screenshot) {
  await page.screenshot({ path: cfg.screenshot, fullPage: !!cfg.fullPage });
}

await browser.close();
if (result != null && !cfg.out) {
  const s = typeof result === 'string' ? result : JSON.stringify(result, null, 2);
  process.stdout.write(s.slice(0, 100000));
}
console.error('DONE');
