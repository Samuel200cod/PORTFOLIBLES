/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
             protocol: `https`,
             hostname:`firebasestorage.googleleepis.com`
            },
        ],
    },
};

export default nextConfig;
