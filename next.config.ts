import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: '/:path((?!api(?:/|$)).*)',
      has: [{type: 'host', value: 'fastzone2.vercel.app'}],
      destination: 'https://www.fastzone.sa/:path',
      permanent: true,
    }];
  },
};

export default nextConfig;
