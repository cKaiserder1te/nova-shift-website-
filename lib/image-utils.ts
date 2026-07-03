import fs from 'fs';
import path from 'path';

/**
 * Return an optimized image path (prefer .avif, then .webp) if a corresponding
 * file exists in the `public` folder. Otherwise return the original src.
 *
 * This runs on the server (used from server components) and is intentionally
 * synchronous and simple so it can be evaluated during render/build.
 */
export function getOptimizedSrc(src: string) {
  if (!src) return src;
  const rel = src.replace(/^\/+/, '');
  const publicDir = path.join(process.cwd(), 'public');
  const dir = path.dirname(rel);
  const base = path.basename(rel, path.extname(rel));

  const avifPath = path.join(publicDir, dir, `${base}.avif`);
  if (fs.existsSync(avifPath)) {
    return `/${path.posix.join(dir, `${base}.avif`)}`;
  }

  const webpPath = path.join(publicDir, dir, `${base}.webp`);
  if (fs.existsSync(webpPath)) {
    return `/${path.posix.join(dir, `${base}.webp`)}`;
  }

  return src;
}
