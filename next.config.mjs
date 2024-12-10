/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    experimental: {
        staleTimes: {
            dynamic: 30,
            static: 180,
        },
    },
};

export default nextConfig;
