import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
      "*.yaml": {
        loaders: ["yaml-loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
