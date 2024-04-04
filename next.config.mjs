/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
  },
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
