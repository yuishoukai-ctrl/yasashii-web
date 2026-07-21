import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Web production division site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>静岡市清水区のホームページ制作｜やさしいWeb制作<\/title>/i);
  assert.match(html, /研装システムズ Web制作事業部/);
  assert.match(html, /研装システムズの(?:<br\s*\/?>)?Web制作事業部です/);
  assert.match(html, /href="https:\/\/kensosystems\.jp\/"/);
  assert.match(html, /KENSO SYSTEMS \/ WEB CREATION DIVISION/);
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
  assert.match(page, /className="group-division"/);
  assert.match(page, /やさしいWeb制作/);
  assert.match(layout, /静岡市清水区のホームページ制作｜やさしいWeb制作/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await access(new URL("../public/og-kenso-division.png", import.meta.url));
  await access(new URL("../public/favicon.png", import.meta.url));
  await access(new URL("../dist/server/index.js", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
