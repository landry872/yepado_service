// Parses a plain CSS declaration string ("color:#fff;font-size:14px") into a
// React style object. Lets every section keep the exact declarations from the
// original design export instead of hand-converting hundreds of properties.
export function css(str) {
  const out = {};
  if (!str) return out;
  str.split(';').forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const rawProp = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!rawProp || !val) return;
    const prop = rawProp.startsWith('--')
      ? rawProp
      : rawProp.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[prop] = val;
  });
  return out;
}
