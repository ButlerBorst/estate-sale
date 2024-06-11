/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rei.com',
      },
      {
        protocol: 'https',
        hostname: 'www.westelm.ca',
      },
      {
        protocol: 'https',
        hostname: 'assets.weimgs.com',
      },

      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bhphotovideo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hurom.com',
      },
      {
        protocol: 'https',
        hostname: 'benisouk.com',
      },
      {
        protocol: 'https',
        hostname: 'static.bhphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'images.thdstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'd2yn9m4p3q9iyv.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.tritoncycles.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'content.backcountry.com',
      },
      {
        protocol: 'https',
        hostname: 'd1nymbkeomeoqg.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.gearo.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shoplightspeed.com',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
