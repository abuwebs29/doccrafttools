/** @type {import("next").NextConfig} */
const nextConfig = {
  images: { unoptimized: true },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.doccrafttools.com" }],
        destination: "https://doccrafttools.com/:path*",
        permanent: true,
        basePath: false,
      },

      { source: "/invoice-generator-usa", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-uk", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-india", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-saudi-arabia", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-uae", destination: "/invoice-generator", permanent: true },

      { source: "/invoice-generator-usd", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-gbp", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-eur", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-inr", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-aud", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-cad", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-pkr", destination: "/invoice-generator", permanent: true },
      { source: "/invoice-generator-sar", destination: "/invoice-generator", permanent: true },

      { source: "/receipt-generator-usd", destination: "/receipt-generator", permanent: true },
      { source: "/receipt-generator-gbp", destination: "/receipt-generator", permanent: true },
      { source: "/receipt-generator-eur", destination: "/receipt-generator", permanent: true },
      { source: "/receipt-generator-inr", destination: "/receipt-generator", permanent: true },
      { source: "/receipt-generator-sar", destination: "/receipt-generator", permanent: true },
    ];
  },
};

export default nextConfig;
