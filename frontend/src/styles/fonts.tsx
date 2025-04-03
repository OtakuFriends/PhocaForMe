import localFont from "next/font/local";

export const DOSSaemmul = localFont({
  src: [{ path: "../fonts/DOSSaemmul.ttf", style: "normal" }],
  variable: "--font-DOSSaemmul",
});

export const BMHANNAPro = localFont({
  src: [{ path: "../fonts/BMHANNAPro.ttf", style: "normal" }],
  variable: "--font-BMHANNAPro",
});

export const Freesentation = localFont({
  src: [
    {
      path: "../fonts/Freesentation/Freesentation-1Thin.ttf",
      weight: "100",
    },
    {
      path: "../fonts/Freesentation/Freesentation-2ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../fonts/Freesentation/Freesentation-3Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/Freesentation/Freesentation-4Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Freesentation/Freesentation-5Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Freesentation/Freesentation-6SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Freesentation/Freesentation-7Bold.ttf",
      weight: "700",
    },
    {
      path: "../fonts/Freesentation/Freesentation-8ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-Freesentation",
});
