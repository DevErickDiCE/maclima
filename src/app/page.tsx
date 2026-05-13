import type { Metadata } from "next";
import { MaclimaHome } from "@/components/maclima-home";

export const metadata: Metadata = {
  title:
    "Maclima Soluciones Energéticas | Aerotermia, fotovoltaica y geotermia en Madrid",
  description:
    "Distribución, instalación y asesoramiento técnico en aerotermia, fotovoltaica y geotermia para viviendas, negocios y profesionales del sector en Madrid. Consulta técnica gratuita.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maclima Soluciones Energéticas | Aerotermia, fotovoltaica y geotermia en Madrid",
    description:
      "Distribución, instalación y asesoramiento técnico en aerotermia, fotovoltaica y geotermia para viviendas, negocios y profesionales del sector en Madrid.",
    url: "/",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/whatsapp.png", width: 800, height: 800, alt: "Maclima Soluciones Energéticas", type: "image/png" }],
  },
};

export default function Home() {
  return <MaclimaHome />;
}
