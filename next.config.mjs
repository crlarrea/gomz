/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{ protocol: "https", hostname: "p16-sign-useast2a.tiktokcdn.com" }],
      },
};

export default nextConfig;
