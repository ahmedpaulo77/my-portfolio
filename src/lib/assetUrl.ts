/**
 * Prepends the Vite base URL to asset paths from site.ts.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '') // strip trailing slash

export function assetUrl(path: string): string {
  // Avoid duplicating the base if a caller already passed a prefixed path.
  if (base && path.startsWith(base + '/')) return path
  // Content paths start with "/", e.g. "/images/sites/foo.webp".
  return base + path
}
