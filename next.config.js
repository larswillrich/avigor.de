/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    // In development, proxy /api/* to the backend
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:4000/:path*",
        },
      ];
    }
    return [];
  },
};
module.exports = nextConfig;
