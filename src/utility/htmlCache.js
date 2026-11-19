/**
 * Tiny in-memory LRU + TTL cache for fully-rendered SSR HTML.
 *
 * Why: the SSR render is buffered (entry-server.jsx resolves on onAllReady),
 * so every request re-renders the entire React tree — resolving every lazy()
 * route chunk and Suspense boundary — before the first byte is written. That
 * is the dominant cost in TTFB. Marketing pages are byte-identical for every
 * visitor, so caching the rendered HTML per-URL turns a warm request into a
 * single buffer write (TTFB ≈ a few ms instead of ~1s).
 *
 * Keying: by pathname only (query stripped). This matches how server.js and
 * entry-server.jsx already derive everything — CSS links and SSR data both use
 * url.split("?")[0], and no route reads the query string to decide content — so
 * the rendered HTML is query-independent. Keeps utm/gclid variants from
 * fragmenting the cache.
 *
 * Not an LRU library on purpose: a Map preserves insertion order, so the first
 * key is always the oldest; re-inserting on read gives us LRU touch for free.
 */
export function createHtmlCache({ max = 300, ttlMs = 5 * 60 * 1000 } = {}) {
  /** @type {Map<string, { html: string, expires: number }>} */
  const store = new Map();
  let hits = 0;
  let misses = 0;

  return {
    /** Returns cached HTML for key, or null on miss/expiry. */
    get(key) {
      const entry = store.get(key);
      if (!entry) {
        misses++;
        return null;
      }
      if (entry.expires <= Date.now()) {
        store.delete(key);
        misses++;
        return null;
      }
      // LRU touch: move to newest position.
      store.delete(key);
      store.set(key, entry);
      hits++;
      return entry.html;
    },

    /** Stores HTML under key with the configured TTL, evicting the oldest. */
    set(key, html) {
      if (store.has(key)) store.delete(key);
      store.set(key, { html, expires: Date.now() + ttlMs });
      while (store.size > max) {
        const oldest = store.keys().next().value;
        store.delete(oldest);
      }
    },

    /** Drop a single key (e.g. on content publish) or everything. */
    clear(key) {
      if (key == null) store.clear();
      else store.delete(key);
    },

    stats() {
      const total = hits + misses;
      return {
        size: store.size,
        hits,
        misses,
        hitRate: total ? +(hits / total).toFixed(3) : 0,
      };
    },
  };
}
