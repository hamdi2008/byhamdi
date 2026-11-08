import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired services. API URLs go to the new JSON endpoint so API clients still receive JSON.
  async redirects() {
    return [
      { source: "/vibe-coding-help", destination: "/ai-sessions", permanent: true },
      { source: "/business", destination: "/ai-sessions", permanent: true },
      { source: "/api/v1/services/vibe-coding-help", destination: "/api/v1/services/ai-sessions", permanent: true },
      { source: "/api/v1/services/digital-presence-ai-readiness", destination: "/api/v1/services/ai-sessions", permanent: true },
    ];
  },
};

export default nextConfig;
