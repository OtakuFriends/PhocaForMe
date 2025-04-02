import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

export const metadata = {
  title: "포카포미",
  description: "포토카드 교환 전용 플랫폼",
  icons: {
    // 절대경로 들어가야 함 (나중에 깃헙 이미지 주소로 수정하기)
    icon: "https://file.notion.so/f/f/32b54871-9d93-4376-bc12-b11af2bce837/2190b6ff-e31a-4dfd-b8cf-cbe3768d11e8/favicon.ico?table=block&id=1c9c9b3d-a83e-80a9-9d9d-f9189af9d4dd&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&expirationTimestamp=1743616800000&signature=8WcEWKvx5VS9i9QSm7ZftueLJDXpDn4AyPZeuRPuPgc&downloadName=favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
