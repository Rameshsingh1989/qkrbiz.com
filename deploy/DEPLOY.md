# Deploying qkrbiz (build + Node SSR cache + Nginx cache)

Three layers, in order. The **SSR HTML cache is built into `server.js`** and turns on
automatically with `NODE_ENV=production` — there's nothing separate to install for it.

```
 Browser ──► Nginx (edge proxy_cache)  ──►  Node SSR (127.0.0.1:3000, in-memory HTML cache)  ──► React render
             deploy/nginx/*                  npm start / pm2                                     dist/server
```

---

## 0. One-time server prerequisites
- Node 18+ (repo built on Node 24), `npm`
- `pm2` (`npm i -g pm2`) — or use systemd (see bottom)
- Nginx 1.18+
- TLS certs (e.g. certbot for `qkrbiz.com` + `www.qkrbiz.com`)

## 1. Get code + install deps
```bash
cd /var/www/qkrbiz-app          # your app path
git pull                        # or upload the repo
npm ci                          # clean install from package-lock
```

## 2. Configure env
`.env.production` (already in repo — verify these):
```
PORT=3000
VITE_SITE_URL=https://www.qkrbiz.com
QKRBIZ_API_BASE=<your API base>
# optional: HTML_CACHE_TTL_MS=300000   API_CACHE_TTL_MS=300000
```
`VITE_*` values are baked in at build time, so set them **before** step 3.

## 3. Build (static client + SSR server bundle)
```bash
npm run build          # → dist/client (assets, index.html) + dist/server (entry-server.js)
```
Produces content-hashed, immutable assets (1-year cacheable) and the SSR bundle.

## 4. Run the Node server (this IS the SSR cache layer)
```bash
pm2 start deploy/ecosystem.config.cjs   # NODE_ENV=production, PORT=3000, in-memory HTML+API cache
pm2 save                                # persist across reboots
pm2 startup                             # (first time) enable pm2 on boot — run the line it prints
```
Sanity check Node directly (bypassing Nginx):
```bash
curl -sI http://127.0.0.1:3000/ | grep -iE 'x-html-cache|cache-control'
# 1st: X-HTML-Cache: MISS   2nd: X-HTML-Cache: HIT   + Cache-Control: ... s-maxage=300 ...
```

## 5. Nginx edge cache
Follow **deploy/nginx/README.md**. Short version:
```bash
sudo cp deploy/nginx/00-qkrbiz-cache.conf /etc/nginx/conf.d/
sudo mkdir -p /var/cache/nginx/qkrbiz && sudo chown -R nginx:nginx /var/cache/nginx/qkrbiz
sudo cp deploy/nginx/qkrbiz.conf /etc/nginx/sites-available/   # EDIT ssl_certificate paths first
sudo ln -sf /etc/nginx/sites-available/qkrbiz.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 6. Verify end-to-end
```bash
curl -sI https://www.qkrbiz.com/payroll-software | grep -i x-cache-status   # MISS
curl -sI https://www.qkrbiz.com/payroll-software | grep -i x-cache-status   # HIT
curl -s -o /dev/null -w 'TTFB: %{time_starttransfer}s\n' https://www.qkrbiz.com/
```
- `X-Cache-Status: HIT` → Nginx served it without touching Node.
- `X-HTML-Cache: HIT` → Node's own cache was used on an Nginx miss. Both layers compound → mobile TTFB should drop from ~2.1 s toward ~0.2–0.4 s.

---

## Redeploy (future updates)
```bash
git pull && npm ci && npm run build
pm2 reload qkrbiz                                   # zero-downtime restart (clears in-memory cache)
sudo rm -rf /var/cache/nginx/qkrbiz/* && sudo systemctl reload nginx   # drop stale edge cache
```
> Because assets are content-hashed, old cached HTML referencing new asset names is the only staleness risk — clearing the edge cache on deploy avoids it.

## Cache invalidation after publishing CMS content (blogs/glossary)
Edge + SSR TTLs are short (5 min) so it self-refreshes. For instant refresh:
```bash
pm2 reload qkrbiz                                   # clears Node HTML + API cache
sudo rm -rf /var/cache/nginx/qkrbiz/* && sudo systemctl reload nginx
```

## Tuning
- Longer/shorter HTML cache: set `HTML_CACHE_TTL_MS` in ecosystem env (drives both Node cache and Nginx `s-maxage`). No Nginx edit needed.
- Disable SSR cache temporarily: `HTML_CACHE=off` in the env, `pm2 reload qkrbiz`.

## Alternative to pm2: systemd
`/etc/systemd/system/qkrbiz.service`:
```ini
[Unit]
Description=qkrbiz SSR
After=network.target
[Service]
WorkingDirectory=/var/www/qkrbiz-app
Environment=NODE_ENV=production PORT=3000
ExecStart=/usr/bin/node server/server.js
Restart=always
[Install]
WantedBy=multi-user.target
```
```bash
sudo systemctl daemon-reload && sudo systemctl enable --now qkrbiz
```
