/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "img.icons8.com",
            "via.placeholder.com",
        ],

        remotePatterns: [
            {
                protocol: 'https',
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/**"
            }
        ]
    },
    // fs: false,
    // webpack5: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
            config.resolve.fallback.tls = false
            config.resolve.fallback.net = false
            config.resolve.fallback.child_process = false
        }
        return config;
    },

};

export default nextConfig;
