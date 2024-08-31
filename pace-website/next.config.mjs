/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "picsum.photos"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
