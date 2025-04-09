import ServiceWorkerRegister from "../components/ServiceWorkerRegister";
import { DOSSaemmul, BMHANNAPro, Freesentation } from "@/styles/fonts";
import "@/styles/globals.css";
import Ad from "@/components/Ad";
import Header from "@/components/Header";
import Floating from "@/components/Floating";

export const metadata = {
  title: "포카포미",
  description: "포토카드 교환 전용 플랫폼",
  icons: {
    // 절대경로 들어가야 함 (나중에 깃헙 이미지 주소로 수정하기)
    icon: "https://blogog.notion.site/image/attachment%3A2190b6ff-e31a-4dfd-b8cf-cbe3768d11e8%3Afavicon.ico?table=block&id=1c9c9b3d-a83e-80a9-9d9d-f9189af9d4dd&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&userId=&cache=v2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${DOSSaemmul.variable} ${BMHANNAPro.variable} ${Freesentation.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ServiceWorkerRegister />
        <Header />
        <main>{children}</main>
        <Floating />
        <Ad />
      </body>
    </html>
  );
}
