import { defineConfig, loadEnv } from "vite"; // ✅ add loadEnv
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { fileURLToPath } from "node:url";
import reactIconsSplit from "./vite-plugins/reactIconsSplit.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode, isSsrBuild }) => { // ✅ add mode
  const env = loadEnv(mode, process.cwd(), ""); // ✅ load .env / .env.production

  return {
    base: "/",
    plugins: [
      reactIconsSplit(), // one module per react-icon → per-route icon chunks
      react(),
      !isSsrBuild && command === "build" && process.env.CI !== "true" &&
        visualizer({ open: true, filename: "dist/stats.html", gzipSize: true }),
    ].filter(Boolean),

    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },

    build: {
      ssr: isSsrBuild ? "src/entry-server.jsx" : false,
      outDir: isSsrBuild ? "dist/server" : "dist/client",
      target: "es2020",
      sourcemap: false,
      // Emit ALL assets as separate files instead of base64/utf8-inlining small
      // ones into JS. images.jsx funnels ~700 assets through an object Rollup
      // can't tree-shake, so any inlined asset lands in the every-page entry
      // chunk. Keeping this at 0 stops ~50 nav/menu SVGs from bloating that
      // chunk (~40 KB gzip/page) and lets them be fetched + cached on demand.
      // Regression guard: this was lost once before — do not remove.
      assetsInlineLimit: 0,
      minify: !isSsrBuild ? "esbuild" : false,
      cssCodeSplit: true,
      cssMinify: true,
      manifest: !isSsrBuild,
      ssrManifest: !isSsrBuild,
      chunkSizeWarningLimit: 1000,

      rollupOptions: !isSsrBuild
        ? {
            output: {
              // Function form (not the object/array form) because the array
              // form of manualChunks fails to capture deep sub-entries like
              // `react-dom/client` — under React 19 that ~45 KB-gzip module was
              // landing in the per-page entry chunk instead of react-vendor,
              // cache-busting on every app deploy. Matching on the resolved
              // module id keeps ALL of react/react-dom in one stable vendor
              // chunk.
              manualChunks(id) {
                if (!id.includes("node_modules")) return;
                if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|use-sync-external-store)[\\/]/.test(id)) return "react-vendor";
                if (/[\\/]node_modules[\\/](react-bootstrap|bootstrap|@restart|@popperjs|dom-helpers)[\\/]/.test(id)) return "ui";
                if (id.includes("/node_modules/axios")) return "axios";
                if (/[\\/]node_modules[\\/]motion/.test(id)) return "motion";
                if (/[\\/]node_modules[\\/]react-hook-form/.test(id)) return "forms";
                if (id.includes("@googlemaps")) return "maps";
                if (id.includes("/node_modules/react-icons")) return "icons";
              },
            },
          }
        : {
            output: { format: "esm" },
          },
    },
    ssr: {
      noExternal: ["@unhead/react", "@unhead/ssr", "@unhead/shared", "@unhead/schema"],
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "axios",
        "react-router",
        "react-hook-form",
        "@googlemaps/js-api-loader",
        "bootstrap",
        "react-bootstrap",
        "@popperjs/core",
        "dayjs",
        "he",
        "html-truncate",
      ],
    },
    optimizeDeps: {
      include: [
         "react",
          "react-dom",
          "react/jsx-runtime",
          "react-router",
          "@unhead/react",
          "@unhead/ssr",
          "axios",
          "react-bootstrap",
          "bootstrap",
          "keen-slider",
          "@popperjs/core",
      ],
      esbuildOptions: { target: "es2020" },
    },

    // ✅ Use loadEnv value — correct for both dev and prod build
    define: {
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV || mode),
      // Non-VITE_ vars are not exposed to the browser, so without this
      // import.meta.env.QKRBIZ_API_BASE is undefined client-side and blog /
      // glossary fetches hit our own origin (404). Expose ONLY the public host —
      // never add "QKRBIZ_" to envPrefix (that would bundle the internal API key).
      "import.meta.env.QKRBIZ_API_BASE": JSON.stringify((env.QKRBIZ_API_BASE || "").trim()),
    },

    // ✅ SCSS silence deprecation warnings
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },

    server: {
      host: true,
      port: parseInt(env.PORT) || 3000, // ✅ matches server.js PORT
      open: true,
      allowedHosts: [                   // ✅ allow domain in dev
        "qkrbiz.com",
        "www.qkrbiz.com",
        "localhost",
        "127.0.0.1",
      ],
      //  proxy: {
      //   "/API": {
      //     target: "http://localhost:74",
      //     changeOrigin: true,
      //   },
      // },
    },

    preview: {
      port: parseInt(env.PORT) || 3000,
      host: true,
    },
  };
});