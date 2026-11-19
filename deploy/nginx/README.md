# Nginx edge cache for qkrbiz SSR

Puts an Nginx `proxy_cache` in front of the Node SSR server (127.0.0.1:3000) so
most requests are served from the edge without hitting Node's buffered render.
This is what fixes the **mobile TTFB (2.1 s)** that the app-level HTML cache
alone can't — it removes the per-request render *and* keeps a warm copy close to
the network edge.

The app is already set up for this: `server.js` sends HTML with
`Cache-Control: public, max-age=0, s-maxage=300, stale-while-revalidate=60`, so
Nginx caches HTML ~5 min while browsers always revalidate. Tune the TTL from the
app with `HTML_CACHE_TTL_MS` (drives `s-maxage`) — no Nginx edit needed.

## Files
| File | Goes to | Purpose |
|---|---|---|
| `00-qkrbiz-cache.conf` | `/etc/nginx/conf.d/` | Declares the cache zone (`proxy_cache_path`, must live in `http{}`) |
| `qkrbiz.conf` | `/etc/nginx/sites-available/` (symlink into `sites-enabled/`) | Site server block with the caching proxy |

## Install
```bash
# 1. Cache zone
sudo cp 00-qkrbiz-cache.conf /etc/nginx/conf.d/
sudo mkdir -p /var/cache/nginx/qkrbiz
sudo chown -R nginx:nginx /var/cache/nginx/qkrbiz   # use www-data on Debian/Ubuntu

# 2. Site config — EDIT the ssl_certificate paths first, or merge the
#    `location` + cache directives into your existing server{} block.
sudo cp qkrbiz.conf /etc/nginx/sites-available/
sudo ln -sf /etc/nginx/sites-available/qkrbiz.conf /etc/nginx/sites-enabled/

# 3. Validate + reload (reload never drops connections)
sudo nginx -t && sudo systemctl reload nginx
```

> Already have a `server{}` for this domain? Don't add a second one — copy the
> `proxy_cache*`, `proxy_set_header`, and `location` blocks from `qkrbiz.conf`
> into it, and keep the `upstream` block + `00-qkrbiz-cache.conf`.

## Verify it's working
```bash
# First hit populates the edge cache → MISS; second is served by Nginx → HIT.
curl -sI https://www.qkrbiz.com/payroll-software | grep -i x-cache-status   # MISS
curl -sI https://www.qkrbiz.com/payroll-software | grep -i x-cache-status   # HIT
```
- `X-Cache-Status: HIT` → Nginx served it without touching Node. 
- `X-HTML-Cache` (from the app) tells you whether Node's *own* memory cache was
  used on a MISS — both layers compound.
- Confirm TTFB dropped: `curl -s -o /dev/null -w '%{time_starttransfer}\n' https://www.qkrbiz.com/`

## Notes / gotchas
- **s-maxage support:** any currently-supported Nginx (1.18+) honors the
  `s-maxage` we send, so HTML caches for 300 s even though `max-age=0`. If
  `X-Cache-Status` never becomes `HIT` on HTML, your build is unusually old —
  as a fallback add `proxy_ignore_headers Cache-Control;` above
  `proxy_cache_valid 200 5m;` to force a deterministic 5-min edge TTL.
- **Purging on publish:** the edge TTL is short (5 min) so content refreshes on
  its own. For instant purge you'd need `ngx_cache_purge` (not in stock Nginx)
  or `sudo rm -rf /var/cache/nginx/qkrbiz/* && sudo systemctl reload nginx`.
- **Set-Cookie responses are never cached** by Nginx — safe by default if any
  route ever starts a session.
- Node keeps running `compression`, so `gzip off` here avoids double-gzip.
