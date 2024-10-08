/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{ protocol: "https", hostname: "p16-sign-useast2a.tiktokcdn.com" },
          // { protocol: "https", hostname: "static.wixstatic.com" },
          { protocol: "https", hostname: "www.neo2.com" },
          { protocol: "https", hostname: "www.tonyaguilar.es" },
          { protocol: "https", hostname: "img.bekia.es" }

        ],
      },
};

export default nextConfig;
