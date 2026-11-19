// PM2 process config for the qkrbiz SSR server.
//   pm2 start deploy/ecosystem.config.cjs
//
// NOTE: the SSR HTML cache in server.js is IN-MEMORY per process. Keep a single
// instance (fork mode) so the cache is shared across all requests. If you ever
// need multiple instances/cluster, each worker keeps its own cache (still fine —
// just a lower hit rate) OR move to a shared cache (Redis) first.
module.exports = {
  apps: [
    {
      name: "qkrbiz",
      script: "server/server.js",
      cwd: "/var/www/qkrbiz-app", // ← set to the app's absolute path on the server
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "600M",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // must match the upstream in deploy/nginx/qkrbiz.conf
        // Optional tuning (defaults are fine):
        // HTML_CACHE_TTL_MS: 300000,  // SSR + edge HTML TTL (drives Nginx s-maxage)
        // HTML_CACHE_MAX: 300,        // max cached pages in memory
        // API_CACHE_TTL_MS: 300000,   // blog/glossary API cache TTL
      },
    },
  ],
};
