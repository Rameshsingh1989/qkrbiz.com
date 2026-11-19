// blogService.js
import API from "./api";
import { cachedApi } from "../utility/serverApiCache";

export const getBlogs = async () => {
  try {
    // Cached server-side (no-op on client) so cold SSR renders skip the API
    // round-trip. TTL via API_CACHE_TTL_MS (default 5 min).
    return await cachedApi("blog:list", async () => {
      const res = await API.get("/api/Blog/Blogs");
      return Array.isArray(res.data)
        ? res.data
        : res.data?.data ?? [];
    });
  } catch (error) {
    console.error("❌ getBlogs error:", error);
    return [];
  }
};
// ✅ Get blog by slug — filter from the (cached) full list.
// Reuses getBlogs() rather than hitting /Blog/Blogs?slug= per slug: the old
// endpoint returned the same list and was filtered client-side by BlogURL
// identically, so this is behaviour-equivalent AND shares the cache — every
// blog detail page reuses one cached list instead of one fetch per slug.
export const getBlogBySlug = async (slug) => {
  try {
    const data = await getBlogs();
    const blog = data.find(
      (b) => String(b.BlogURL).toLowerCase() === String(slug).toLowerCase()
    );

    return blog || null;
  } catch (error) {
    console.error("❌ getBlogBySlug error:", error);
    return null;
  }
};

