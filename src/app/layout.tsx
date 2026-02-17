import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cofoundy.github.io"),
  title: "Sergio Cancan — AI Engineer & Soft Robotics Researcher",
  description: "AI Engineer en Rimac Seguros. Bachiller en Ing. Mecatrónica UTEC. 3 publicaciones académicas en robótica blanda e inteligencia artificial.",
  icons: {
    icon: "/portfolio-sergio-cancan/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "Sergio Cancan — AI Engineer & Soft Robotics Researcher",
    description: "AI Engineer en Rimac Seguros. Bachiller en Ing. Mecatrónica UTEC. 3 publicaciones académicas.",
    images: ["/portfolio-sergio-cancan/avatar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Cancan — AI Engineer & Soft Robotics Researcher",
    description: "AI Engineer en Rimac Seguros. Bachiller en Ing. Mecatrónica UTEC. 3 publicaciones académicas.",
    images: ["/portfolio-sergio-cancan/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </body>
    </html>
  );
}
