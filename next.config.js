/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "openweathermap.org",
      },
      {
        hostname: "unsplash.com",
      },
    ],
  },
};
