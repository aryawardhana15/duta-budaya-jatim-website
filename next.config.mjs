/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  images: {
    domains: ['cdnjs.cloudflare.com'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
