/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'payfit.fabienpicard.com',
        port: '',
      },
    ],
  },
  dangerouslyAllowSVG: true,
};

export default nextConfig;
