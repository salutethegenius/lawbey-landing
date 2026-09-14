#!/usr/bin/env node
/**
 * Render LawBey social posters to exact-size PNGs via headless Chrome.
 *
 *   node docs/social/library-drop/render.mjs
 */

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "src");
const OUT = join(__dirname, "export");
const CHROME = process.env.CHROME_PATH || "/usr/local/bin/google-chrome";

const POSTERS = [
  "01-new-this-weekend",
  "02-civic",
  "03-carta",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

function startStaticServer(root) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = new URL(req.url, "http://127.0.0.1");
      const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
      const file = join(root, rel);
      if (!file.startsWith(root)) {
        res.writeHead(403);
        res.end();
        return;
      }
      try {
        const body = await readFile(file);
        res.writeHead(200, { "content-type": MIME[extname(file)] || "application/octet-stream" });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end("not found");
      }
    });
    server.listen(0, "127.0.0.1", () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function ensurePuppeteer() {
  try {
    return createRequire(import.meta.url)("/tmp/poster-render/node_modules/puppeteer-core");
  } catch {
    await new Promise((resolve, reject) => {
      const child = spawn("npm", ["install", "--prefix", "/tmp/poster-render", "puppeteer-core@24"], {
        stdio: "inherit",
      });
      child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error("npm install failed"))));
    });
    return createRequire(import.meta.url)("/tmp/poster-render/node_modules/puppeteer-core");
  }
}

async function waitForFonts(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    const families = ["Cormorant Garamond", "DM Mono", "Barlow"];
    await Promise.all(
      families.map((f) => document.fonts.load(`16px "${f}"`) && document.fonts.load(`600 16px "${f}"`))
    );
    await document.fonts.ready;
  });
  await new Promise((r) => setTimeout(r, 400));
}

async function renderOne(browser, base, slug, format) {
  const page = await browser.newPage();
  const isStory = format === "story";
  await page.setViewport({
    width: 1080,
    height: isStory ? 1920 : 1080,
    deviceScaleFactor: 1,
  });
  await page.goto(`${base}/${slug}.html`, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate((story) => {
    document.documentElement.classList.toggle("format-square", !story);
    document.documentElement.classList.toggle("format-story", story);
  }, isStory);
  await waitForFonts(page);
  const poster = await page.$(".poster");
  if (!poster) throw new Error(`No .poster in ${slug}`);
  const name = isStory ? `${slug}-story.png` : `${slug}-1080.png`;
  const dest = join(OUT, name);
  await poster.screenshot({ path: dest, type: "png", omitBackground: false });
  const box = await poster.boundingBox();
  console.log(`wrote ${name} (${Math.round(box.width)}×${Math.round(box.height)})`);
  await page.close();
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const puppeteer = await ensurePuppeteer();
  const { server, port } = await startStaticServer(SRC);
  const base = `http://127.0.0.1:${port}`;
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--font-render-hinting=none",
      "--disable-lcd-text",
    ],
  });
  try {
    for (const slug of POSTERS) {
      await renderOne(browser, base, slug, "square");
      await renderOne(browser, base, slug, "story");
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
