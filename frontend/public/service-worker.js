self.addEventListener("install", (event) => {
  console.log("Service Worker 설치됨!");
  event.waitUntil(self.skipWaiting()); // 기존 SW 대체
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker 활성화됨!");
});

self.addEventListener("fetch", (event) => {
  //   console.log("요청 캐싱:", event.request.url);
});
