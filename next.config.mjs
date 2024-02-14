/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "apollo2.dl.playstation.net",
      },
    ],
  },
};

export default nextConfig;
