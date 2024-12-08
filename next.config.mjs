/** @type {import('next').NextConfig} */
const nextConfig = {
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
