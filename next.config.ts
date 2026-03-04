import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'df50lbm4qcrt6.cloudfront.net',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
