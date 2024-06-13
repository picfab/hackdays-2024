/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_WORDPRESS_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_HOSTNAME,
        port: process.env.NEXT_PUBLIC_WORDPRESS_PORT,
      },
    ],
  },
};

export default nextConfig;
