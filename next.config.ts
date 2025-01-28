import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? '/aboutme' : '',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  /* config options here */
};

export default nextConfig;
