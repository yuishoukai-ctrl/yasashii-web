import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("statically exports the Web production division site", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>静岡市清水区のホームページ制作｜やさしいWeb制作<\/title>/i);
  assert.match(html, /研装システムズ Web制作事業部/);
  assert.doesNotMatch(html, /研装システムズの(?:<br\s*\/?>)?Web制作事業部です/);
  assert.match(html, /href="https:\/\/kensosystems\.jp\/"/);
  assert.match(html, /KENSO SYSTEMS \/ WEB CREATION DIVISION/);
  assert.match(html, /href="tel:05017850018"/);
  assert.match(html, /050-1785-0018/);
  assert.doesNotMatch(html, /00-0000-0000|tel:0000000000/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

test("keeps production branding and deployment assets in source", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /"@type": "Organization"/);
  assert.match(page, /provider: \{ "@id": `\$\{siteUrl\}\/\#organization` \}/);
  assert.doesNotMatch(page, /className="group-division"/);
  assert.match(page, /やさしいWeb制作/);
  assert.match(layout, /静岡市清水区のホームページ制作｜やさしいWeb制作/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await access(new URL("../public/og-kenso-division.png", import.meta.url));
  await access(new URL("../public/favicon.png", import.meta.url));
  await access(new URL("../out/index.html", import.meta.url));
  await access(new URL("../out/consultation.webp", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
