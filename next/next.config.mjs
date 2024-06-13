/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_HOSTNAME,
	pathname: process.env.NEXT_PUBLIC_WORPRESS_CONTENT_PATH,
        port: process.env.NEXT_PUBLIC_WORDPRESS_PORT,
        protocol: process.env.NEXT_PUBLIC_WORDPRESS_PROTOCOL,
      },
    ],
  },
};

export default nextConfig;
