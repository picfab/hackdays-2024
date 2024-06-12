/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
