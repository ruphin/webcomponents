import { globSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = resolve(import.meta.dirname, "app");

// Every page is its own entry. Custom elements (loaded through HTML imports),
// the web components polyfills, highlight.js and the lesson demos live in
// app/public and are served/copied as-is.
const pages = globSync(["*.html", "lessons/*.html"], { cwd: root });

export default defineConfig({
  root,
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page.replace(/\.html$/, ""), resolve(root, page)])),
    },
  },
});
