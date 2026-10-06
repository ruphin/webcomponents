import { defineConfig } from "vite";

export default defineConfig({
  // React 15 has no automatic JSX runtime
  oxc: {
    jsx: { runtime: "classic" },
  },
  // Some of the old CommonJS dependencies expect Node's `global`
  define: {
    global: "globalThis",
  },
  server: {
    port: 3000,
  },
});
