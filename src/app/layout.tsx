import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maclima.vercel.app"),
  title:
    "Maclima Soluciones Energéticas | Aerotermia y fotovoltaica en Madrid",
  description:
    "Distribución, instalación y asesoramiento técnico en aerotermia y fotovoltaica para viviendas, negocios y profesionales del sector.",
  openGraph: {
    title: "Maclima Soluciones Energéticas",
    description:
      "Aerotermia y fotovoltaica en Madrid con asesoramiento técnico gratuito.",
    url: "https://maclima.vercel.app",
    siteName: "Maclima Soluciones Energéticas",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://maclima.vercel.app/whatsapp.png",
        width: 1254,
        height: 1254,
        alt: "Maclima Soluciones Energéticas - Aerotermia y fotovoltaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maclima Soluciones Energéticas",
    description:
      "Aerotermia y fotovoltaica en Madrid con asesoramiento técnico gratuito.",
    images: ["https://maclima.vercel.app/whatsapp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
