import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/login",
      permanent: false,
    },
  ],

  matcher: ["/((?!_next|favicon.ico|api/public).*)"],
};

export default nextConfig;
