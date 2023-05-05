/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.weatherbit.io",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
