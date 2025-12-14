import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["resend"],
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;