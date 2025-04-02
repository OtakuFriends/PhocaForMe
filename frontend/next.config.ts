import withPWA from "next-pwa";
import type { NextConfig } from "next";

// ✅ PWA 설정
const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

// ✅ Next.js 설정
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // 모든 HTTPS 도메인 허용
        hostname: "**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgo: true,
          },
        },
      ],
    });

    return config;
  },
};

// ✅ 변수에 할당 후 내보내기
const finalConfig = { ...pwaConfig, ...nextConfig };

export default finalConfig;
