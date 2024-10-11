/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          { protocol: "https", hostname: "www.tonyaguilar.es" },
          { protocol: "https", hostname: "img.bekia.es" },
          { protocol: "https", hostname: "i.scdn.co" }
          
        ],
      },
};

export default nextConfig;
