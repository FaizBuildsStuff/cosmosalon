import localFont from "next/font/local";

export const excon = localFont({
  src: [
    {
      path: "../public/fonts/excon/Excon-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/excon/Excon-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/excon/Excon-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/excon/Excon-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/excon/Excon-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/excon/Excon-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-excon",
  display: "swap",
});

export const exconVariable = localFont({
  src: [
    {
      path: "../public/fonts/excon/Excon-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-excon-variable",
  display: "swap",
});
