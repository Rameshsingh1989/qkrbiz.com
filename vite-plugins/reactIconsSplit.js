import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// package.json "exports" hides index.mjs paths, so resolve the package root.
const ICONS_ROOT = path.dirname(path.dirname(require.resolve("react-icons/lib")));
const PREFIX = "\0react-icon:";
const IMPORT_RE = /import\s*\{([^}]+)\}\s*from\s*["']react-icons\/([a-z0-9]+)["'];?/g;

export default function reactIconsSplit() {
  const packCache = new Map(); // pack -> Map(iconName -> function source)

  const loadPack = (pack) => {
    if (packCache.has(pack)) return packCache.get(pack);
    const file = path.join(ICONS_ROOT, pack, "index.mjs");
    const src = fs.readFileSync(file, "utf8");
    const icons = new Map();
    // Generated format: `export function Name (props) {\n  return GenIcon(...)(props);\n};`
    const fnRe = /export function (\w+) \(props\) \{\n[\s\S]*?\n\};/g;
    let m;
    while ((m = fnRe.exec(src))) icons.set(m[1], m[0]);
    packCache.set(pack, icons);
    return icons;
  };

  return {
    name: "react-icons-split",
    enforce: "pre",

    resolveId(id) {
      if (id.startsWith(PREFIX)) return id;
    },

    load(id) {
      if (!id.startsWith(PREFIX)) return;
      const [pack, name] = id.slice(PREFIX.length).split("/");
      const fnSrc = loadPack(pack).get(name);
      if (!fnSrc) {
        // Unknown name: fall back to the package so Rollup reports the real error.
        return `export { ${name} } from "react-icons/${pack}";`;
      }
      return `import { GenIcon } from "react-icons/lib";\n${fnSrc}\n`;
    },

    transform(code, id) {
      if (id.includes("node_modules") || !/\.[jt]sx?$/.test(id.split("?")[0])) return;
      if (!code.includes("react-icons/")) return;

      let changed = false;
      const out = code.replace(IMPORT_RE, (full, specList, pack) => {
        const icons = loadPack(pack);
        const specs = specList.split(",").map((s) => s.trim()).filter(Boolean);
        // Only rewrite when every specifier is a known icon (e.g. skip IconContext).
        if (!specs.every((s) => icons.has(s.split(/\s+as\s+/)[0].trim()))) return full;
        changed = true;
        return specs
          .map((s) => {
            const name = s.split(/\s+as\s+/)[0].trim();
            return `import { ${s} } from "${PREFIX}${pack}/${name}";`;
          })
          .join("\n");
      });
      return changed ? { code: out, map: null } : undefined;
    },
  };
}
