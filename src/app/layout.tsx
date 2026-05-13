import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DEFAULT_OG_IMAGE, OG_IMAGE_URL, SITE_URL } from "@/lib/site-config";
import { CONTACT_INFO } from "@/lib/contact-info";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Maclima Soluciones Energéticas | Aerotermia, fotovoltaica y geotermia en Madrid",
    template: "%s | Maclima Soluciones Energéticas",
  },
  description:
    "Distribución, instalación y asesoramiento técnico en aerotermia, fotovoltaica y geotermia para viviendas, negocios y profesionales del sector en Madrid.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Maclima Soluciones Energéticas",
    description:
      "Soluciones de aerotermia, fotovoltaica, geotermia y climatización eficiente.",
    url: SITE_URL,
    siteName: "Maclima Soluciones Energéticas",
    locale: "es_ES",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maclima Soluciones Energéticas",
    description:
      "Soluciones de aerotermia, fotovoltaica, geotermia y climatización eficiente.",
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maclima Soluciones Energéticas",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Maclima Soluciones Energéticas",
    url: SITE_URL,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    areaServed: { "@type": "City", name: "Madrid" },
    serviceType: [
      "Aerotermia",
      "Instalaciones fotovoltaicas",
      "Geotermia",
      "Climatización eficiente",
      "Soluciones energéticas",
    ],
    knowsAbout: ["Aerotermia", "Fotovoltaica", "Geotermia", "ACS", "Autoconsumo solar"],
  },
];

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
