import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 301 Redirects for APK download
      {
        source: '/dhan-7-apk-download',
        destination: '/dhan7-apk-download',
        permanent: true,
      },
      {
        source: '/dhan77-apk-download',
        destination: '/dhan7-apk-download',
        permanent: true,
      },
      {
        source: '/download',
        destination: '/dhan7-apk-download',
        permanent: true,
      },
      {
        source: '/apk',
        destination: '/dhan7-apk-download',
        permanent: true,
      },
      // 301 Redirects for Login
      {
        source: '/dhan-7-login',
        destination: '/dhan7-login',
        permanent: true,
      },
      {
        source: '/dhan77-login',
        destination: '/dhan7-login',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/dhan7-login',
        permanent: true,
      },
      // 301 Redirects for Bonus
      {
        source: '/dhan-7-bonus',
        destination: '/dhan7-bonus',
        permanent: true,
      },
      {
        source: '/dhan77-bonus',
        destination: '/dhan7-bonus',
        permanent: true,
      },
      {
        source: '/bonus',
        destination: '/dhan7-bonus',
        permanent: true,
      },
      // 301 Redirects for Review
      {
        source: '/dhan-7-review',
        destination: '/dhan7-review',
        permanent: true,
      },
      {
        source: '/dhan77-review',
        destination: '/dhan7-review',
        permanent: true,
      },
      {
        source: '/review',
        destination: '/dhan7-review',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
