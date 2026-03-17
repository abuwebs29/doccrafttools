/** @type {import("next").NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/invoice-generator-usa", destination: "/invoice-generator-usd", permanent: true },
      { source: "/invoice-generator-uk", destination: "/invoice-generator-gbp", permanent: true },
      { source: "/invoice-generator-india", destination: "/invoice-generator-inr", permanent: true },
      { source: "/invoice-generator-saudi-arabia", destination: "/invoice-generator-sar", permanent: true },
    ];
  },
};

export default nextConfig;
