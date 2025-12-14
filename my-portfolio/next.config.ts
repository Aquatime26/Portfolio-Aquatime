// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // force le mode serverless pour les API routes
//   experimental: {
//     serverComponentsExternalPackages: ["resend"],
//   },
//   // exclut les routes API du pre-rendering
//   typescript: {
//     ignoreBuildErrors: false,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["resend"],
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;