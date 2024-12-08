/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',   // Allow HTTPS images
        hostname: '**',      // Allow all domains (wildcard)
      },
    ],
  },
};

export default nextConfig;
