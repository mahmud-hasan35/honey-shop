/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ibb.co",

            },
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com"
            },
             {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
       {
        protocol: 'https',
        hostname: "images.pexels.com", 
      }
        ],
    },

    reactStrictMode: false,

};

export default nextConfig;