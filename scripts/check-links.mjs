import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const outputDir = new URL("../dist/", import.meta.url);
const files = await readdir(outputDir, { recursive: true });
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const missing = new Set();

for (const file of htmlFiles) {
  const html = await readFile(new URL(file, outputDir), "utf8");
  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/g)].map(
    ([, href]) => href,
  );

  for (const href of hrefs) {
    if (href.startsWith("#") || /^(?:data|mailto|tel):/.test(href)) continue;

    const url = new URL(href, "https://caycehouse.com");
    if (url.origin !== "https://caycehouse.com") continue;

    const pathname = decodeURIComponent(url.pathname);
    const target = extname(pathname)
      ? pathname.slice(1)
      : join(pathname.slice(1), "index.html");

    if (!files.includes(target)) missing.add(`${file}: ${href}`);
  }
}

if (missing.size > 0) {
  console.error(`Broken internal links:\n${[...missing].join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Checked internal links in ${htmlFiles.length} HTML files.`);
}
