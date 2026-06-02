// Downloads all target-site assets into public/. Node 24 global fetch.
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';

const ROOT = process.cwd();
const PUB = join(ROOT, 'public');

const direct = [
  // [remoteURL, localPath]
  ['https://www.amabillyegabriel.com/logo-teste2.png', 'logo-teste2.png'],
  ['https://www.amabillyegabriel.com/favicon.png', 'favicon.png'],
  ['https://www.amabillyegabriel.com/favicon.png', 'seo/favicon.png'],
  ['https://www.amabillyegabriel.com/banner/02.jpg', 'banner/02.jpg'],
  ['https://www.amabillyegabriel.com/banner/03.jpg', 'banner/03.jpg'],
  ['https://www.amabillyegabriel.com/countdown/ripped-bg-3.png', 'countdown/ripped-bg-3.png'],
  ['https://www.amabillyegabriel.com/folha2.jpg', 'folha2.jpg'],
  ['https://www.amabillyegabriel.com/tulipa.jpg', 'tulipa.jpg'],
  ['https://www.amabillyegabriel.com/girassol.jpg', 'girassol.jpg'],
  ['https://www.amabillyegabriel.com/dandelion.jpg', 'dandelion.jpg'],
  ['https://www.amabillyegabriel.com/planta.jpg', 'planta.jpg'],
  ['https://www.amabillyegabriel.com/final.jpg', 'final.jpg'],
];

// ImageKit love-session photos (front/back of the 3 arch cards). Constrain width.
const ik = (n) => `https://ik.imagekit.io/oe4ukkunu/amabilly_gab_love_session-${n}.jpg?tr=w-900`;
const loveSessions = [107, 184, 27, 143, 93, 65].map(n => [ik(n), `images/love-${n}.jpg`]);

const all = [...direct, ...loveSessions];

async function dl([url, rel]) {
  const out = join(PUB, rel);
  await mkdir(dirname(out), { recursive: true });
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.error(`FAIL ${res.status} ${url}`); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(out, buf);
    console.log(`ok ${rel} (${(buf.length/1024).toFixed(0)}kb)`);
    return true;
  } catch (e) { console.error(`ERR ${url}: ${e.message}`); return false; }
}

// batches of 4
let ok = 0;
for (let i = 0; i < all.length; i += 4) {
  const res = await Promise.all(all.slice(i, i + 4).map(dl));
  ok += res.filter(Boolean).length;
}
console.log(`DONE ${ok}/${all.length}`);
