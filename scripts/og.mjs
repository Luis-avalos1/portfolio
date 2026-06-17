// Generate public/og.png (1200x630) from the brutalist OG design, rendered with the
// real self-hosted fonts (base64-embedded so there are no font-loading races).
import { readFileSync, writeFileSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const root = new URL('..', import.meta.url).pathname;

const b64 = (p) => readFileSync(root + p).toString('base64');
const archivo = b64('node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2');
const mono = b64('node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2');

const svg = readFileSync(root + 'public/og.svg', 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family:'Archivo'; src:url(data:font/woff2;base64,${archivo}) format('woff2'); font-weight:100 900; }
  @font-face { font-family:'JetBrains Mono'; src:url(data:font/woff2;base64,${mono}) format('woff2'); font-weight:100 800; }
  html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden;}
</style></head><body>${svg}</body></html>`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
writeFileSync(root + 'public/og.png', buf);
await browser.close();
console.log('wrote public/og.png');
