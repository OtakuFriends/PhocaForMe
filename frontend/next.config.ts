import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = withPWA({
  dest: "public", // 서비스 워커와 관련 파일들이 저장될 폴더
  register: true, // 서비스 워커를 자동으로 등록
  skipWaiting: true, // 새로운 서비스 워커를 즉시 활성화
});

export default nextConfig;
