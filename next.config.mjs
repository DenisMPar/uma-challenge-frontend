import { format } from "date-fns";
/** @type {import('next').NextConfig} */
const date = format(new Date(), "yyyy-MM");
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: `/calendar/${date}`,
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        port: "",
        pathname: "/apod/image/**",
      },
    ],
  },
};

export default nextConfig;
