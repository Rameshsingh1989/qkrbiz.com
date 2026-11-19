
const isServer = typeof window === "undefined";
const DEFAULT_TTL = Number(process.env.API_CACHE_TTL_MS) || 5 * 60 * 1000;
const CLIENT_TTL = 60 * 1000;

/** @type {Map<string, { value: Promise<unknown>, expires: number }>} */
const store = new Map();

const isCacheable = (value) =>
  value != null && !(Array.isArray(value) && value.length === 0);

/**
 * Return the cached (or in-flight) value for `key`, else run `loader` and cache
 * it; a failed/empty result is evicted so the next call retries.
 * @template T
 * @param {string} key
 * @param {() => Promise<T>} loader
 * @param {number} [ttlMs]
 * @returns {Promise<T>}
 */
export async function cachedApi(key, loader, ttlMs = isServer ? DEFAULT_TTL : CLIENT_TTL) {
  const hit = store.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;

  const promise = loader();
  store.set(key, { value: promise, expires: Date.now() + ttlMs });

  // Only evict if a newer call hasn't already replaced this entry.
  const evict = () => { if (store.get(key)?.value === promise) store.delete(key); };
  try {
    const value = await promise;
    if (!isCacheable(value)) evict();
    return value;
  } catch (err) {
    evict();
    throw err;
  }
}

/** Drop one key (e.g. on publish) or the whole cache. */
export function clearApiCache(key) {
  if (key == null) store.clear();
  else store.delete(key);
}
