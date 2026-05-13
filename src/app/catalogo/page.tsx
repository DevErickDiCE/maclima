import type { Metadata } from "next";
import { CatalogoConsultivo } from "@/components/catalogo-consultivo";

export const metadata: Metadata = {
  title: "Catálogo consultivo — Aerotermia, fotovoltaica y geotermia",
  description:
    "Consulta el catálogo de soluciones de aerotermia, fotovoltaica y geotermia de Maclima. Cada instalación se estudia antes de recomendar el equipo más adecuado.",
  alternates: {
    canonical: "/catalogo",
  },
  openGraph: {
    title: "Catálogo consultivo — Aerotermia, fotovoltaica y geotermia | Maclima",
    description:
      "Consulta el catálogo de soluciones de aerotermia, fotovoltaica y geotermia de Maclima. Cada instalación se estudia antes de recomendar el equipo más adecuado.",
    url: "/catalogo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/whatsapp.png", width: 800, height: 800, alt: "Catálogo Maclima — Aerotermia, fotovoltaica y geotermia", type: "image/png" }],
  },
};

export default function CatalogoPage() {
  return <CatalogoConsultivo />;
}
