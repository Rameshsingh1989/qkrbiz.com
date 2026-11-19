import { createContext, useContext } from "react";

/* ── SSR status code propagation ─────────────────────────────
   React component tree can signal a non-200 status to the
   SSR renderer. Used by <Notfound /> to turn invalid URLs
   into proper 404s instead of soft-200s.

   Server: entry-server.jsx creates a mutable holder and passes
   it via context. Components mutate `holder.statusCode` during
   render (safe — renderToPipeableStream renders each subtree
   exactly once with no client-style re-renders). After render
   completes (onAllReady → writable.finish), entry-server.jsx
   reads the final value.

   Client: provider is absent, useSetSsrStatus is a no-op.
─────────────────────────────────────────────────────────── */

export const SsrStatusContext = createContext(null);

export function createSsrStatusHolder() {
  return { statusCode: 200 };
}

export function useSetSsrStatus(code) {
  const holder = useContext(SsrStatusContext);
  if (!holder || typeof window !== "undefined") return;
  // Only override 200 → error; never downgrade an existing error.
  if (holder.statusCode === 200 && code && code !== 200) {
    holder.statusCode = code;
  }
}
