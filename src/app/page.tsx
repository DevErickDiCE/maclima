import type { Metadata } from "next";
import { MaclimaHome } from "@/components/maclima-home";
import { DEFAULT_OG_IMAGE, OG_IMAGE_URL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Maclima Soluciones Energéticas | Aerotermia, fotovoltaica y geotermia en Madrid",
  description:
    "Distribución, instalación y asesoramiento técnico en aerotermia, fotovoltaica y geotermia para viviendas, negocios y profesionales del sector en Madrid. Consulta técnica gratuita.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Maclima Soluciones Energéticas | Aerotermia, fotovoltaica y geotermia en Madrid",
    description:
      "Distribución, instalación y asesoramiento técnico en aerotermia, fotovoltaica y geotermia para viviendas, negocios y profesionales del sector en Madrid.",
    url: SITE_URL,
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
};

export default function Home() {
  return <MaclimaHome />;
}
