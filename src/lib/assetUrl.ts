/**
 * Prepends the Vite base URL to asset paths from site.ts.
 * In dev:  base = "/"  → "/images/sites/foo.webp"
 * In prod: base = "/my-portfolio/" → "/my-portfolio/images/sites/foo.webp"
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '') // strip trailing slash

export function assetUrl(path: string): string {
  // Paths from site.ts already include the base URL (see the img() helper),
  // so avoid prepending it twice which would produce "/base/base/images/…".
  if (base && path.startsWith(base + '/')) return path
  // path always starts with "/" e.g. "/images/sites/foo.webp"
  return base + path
}
