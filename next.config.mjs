/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // Keep dev artifacts separate from production build output to avoid chunk mismatches.
  distDir: isDev ? '.next-dev' : '.next',
  images: {
    // prefer modern formats where the platform can serve them
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

// Optional bundle analyzer wrapper. If the analyzer package isn't installed
// this will fail gracefully and export the base config.
let exported = nextConfig;
try {
  const pkg = await import('@next/bundle-analyzer');
  const bundleAnalyzer = pkg.default || pkg;
  const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });
  exported = withBundleAnalyzer(nextConfig);
} catch (err) {
  // package not installed or import failed — fall back to plain config
}

export default exported;