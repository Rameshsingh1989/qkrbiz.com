
//api.js
import axios from "axios";

// Host only (e.g. https://intec.qkrbiz.com:444) — request paths include "/api".
const baseURL = (
  (typeof window === "undefined" ? process.env.QKRBIZ_API_BASE : import.meta.env.QKRBIZ_API_BASE) || ""
).trim();

if (!baseURL) console.error("QKRBIZ_API_BASE is not set — check .env / .env.production");

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default API;

