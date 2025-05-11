import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const font = Geist({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Portfolio - Yousif Al-Raheem",
  description: "Portfolio of Yousif Al-Raheem",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className}>
      <body>
        {children}
        <Script async defer src="/scroll-timeline.js" />
      </body>
    </html>
  );
}
