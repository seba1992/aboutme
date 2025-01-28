import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  console.log("Es prod!")
} else {
  console.log("no es prod")
}
const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? '/aboutme' : '',
  basePath: isProd ? '/aboutme' : '',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  /* config options here */
};

export default nextConfig;
