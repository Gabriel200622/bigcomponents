const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
