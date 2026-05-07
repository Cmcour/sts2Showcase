import { chromium } from 'playwright';

const url = 'file:///mnt/c/Users/Chase/OneDrive/Claude/sts2Showcase/rr-current/2026-05-05-options.html';
const out = '/mnt/c/Users/Chase/OneDrive/Claude/sts2Showcase/rr-current/2026-05-05-options.png';

const browser = await chromium.launch({
  executablePath: '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('rendered ->', out);
