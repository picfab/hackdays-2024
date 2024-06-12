/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '10009',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'payfit.fabienpicard.com',
      //   port: '',
      // },
    ],
  },
};

export default nextConfig;
