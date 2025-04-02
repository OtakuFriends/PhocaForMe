"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("✅ Service Worker 등록 완료!"))
        .catch((err) => console.error("❌ Service Worker 등록 실패:", err));
    }
  }, []);

  return null;
}
