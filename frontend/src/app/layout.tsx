import ServiceWorkerRegister from "./Components/ServiceWorkerRegister";

export const metadata = {
  title: "포카포미",
  description: "포토카드 교환 전용 플랫폼",
  icons: {
    icon: "images/icons/favicon.ico",
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
