import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // the host name of image we have to configure in next js so that next js can able to connect with image's server. - this if comes then do like this or else leave
  images: {
    domains: ['images.unsplash.com']
  }
};

export default nextConfig;
