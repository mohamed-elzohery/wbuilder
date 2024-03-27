/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "uploadthing.com" },
      { hostname: "img.clerk.com" },
      { hostname: "subdomain" },
      { hostname: "uploadthing.com" },
      { hostname: "files.stripe.com" },
      { hostname: "utfs.io" },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
