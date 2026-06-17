import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = process.argv[2] || 'http://localhost:4321/';
const OUT = process.argv[3] || '/tmp/page';
const width = Number(process.argv[4] || 1440);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
// Reduced motion forces all [data-reveal] elements to their final visible state via CSS,
// so a static screenshot shows the real end-state without depending on scroll timing.
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 300));

await page.screenshot({ path: `${OUT}-full.png`, fullPage: true });

// Per-section clips for detail.
const ids = ['work', 'capabilities', 'about', 'contact'];
for (const id of ids) {
  const box = await page.evaluate((sel) => {
    const el = document.getElementById(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: 0, y: r.top + window.scrollY, width: window.innerWidth, height: Math.min(r.height, 1300) };
  }, id);
  if (box) await page.screenshot({ path: `${OUT}-${id}.png`, clip: box });
}

await browser.close();
console.log('done', OUT, width);
