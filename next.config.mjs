/** @type {import("next").NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/invoice-generator-usa", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-uk", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-india", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-saudi-arabia", destination: "/invoice-generator", permanent: true },
    ];
  },
};

export default nextConfig;
