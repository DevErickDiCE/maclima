import type { Metadata } from "next";
import { CatalogoConsultivo } from "@/components/catalogo-consultivo";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Catálogo consultivo — Aerotermia, fotovoltaica y geotermia",
  description:
    "Consulta el catálogo de soluciones de aerotermia, fotovoltaica y geotermia de Maclima. Cada instalación se estudia antes de recomendar el equipo más adecuado.",
  alternates: {
    canonical: `${SITE_URL}/catalogo`,
  },
  openGraph: {
    title: "Catálogo consultivo — Aerotermia, fotovoltaica y geotermia | Maclima",
    description:
      "Consulta el catálogo de soluciones de aerotermia, fotovoltaica y geotermia de Maclima. Cada instalación se estudia antes de recomendar el equipo más adecuado.",
    url: `${SITE_URL}/catalogo`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Catálogo Maclima — Aerotermia, fotovoltaica y geotermia" }],
  },
};

export default function CatalogoPage() {
  return <CatalogoConsultivo />;
}
