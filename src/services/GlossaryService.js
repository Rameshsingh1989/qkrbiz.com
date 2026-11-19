// glossaryService.js

import API from "./api";
import { cachedApi } from "../utility/serverApiCache";

/* =========================================
   FLATTEN GLOSSARY DATA
   Accepts either an array or a grouped
   object { A: [], B: [] } and returns a
   flat array. Grouping/sorting is a
   presentation concern handled by callers.
========================================= */

const flattenGlossaryData = (rawData) => {

  if (Array.isArray(rawData)) {
    return rawData.filter(Boolean);
  }

  if (rawData && typeof rawData === "object") {
    return Object.values(rawData)
      .flat()
      .filter(Boolean);
  }

  return [];

};

/* =========================================
   GET ALL GLOSSARIES → flat array
========================================= */

export const getGlossary = async () => {

  try {

    // Cached server-side (no-op on client) so cold SSR renders skip the API
    // round-trip. getGlossaryBySlug() reuses this, so slug lookups are cached
    // too. TTL via API_CACHE_TTL_MS (default 5 min).
    return await cachedApi("glossary:list", async () => {

      const res = await API.get("/api/Blog/Glossary");

      const rawData =
        res.data?.data ||
        res.data ||
        [];

      return flattenGlossaryData(rawData);

    });

  } catch (error) {

    console.error("❌ getGlossary error:", error);

    return [];

  }

};

/* =========================================
   GET GLOSSARY BY SLUG
========================================= */

export const getGlossaryBySlug = async (slug) => {

  try {

    if (!slug) return null;

    const flatData = await getGlossary();

    const normalize = (str) =>
      String(str || "").trim().toLowerCase();

    const target = normalize(slug);

    return flatData.find(
      (g) => normalize(g.GlossaryUrl) === target
    ) || null;

  } catch (error) {

    console.error("❌ getGlossaryBySlug error:", error);

    return null;

  }

};


