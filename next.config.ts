import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Consente l'accesso alle risorse di sviluppo dall'IP locale
  allowedDevOrigins: ["192.168.1.10"],

  // Imposta esplicitamente la root del progetto
  turbopack: {
    root: process.cwd(),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
