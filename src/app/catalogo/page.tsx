import type { Metadata } from "next";
import { CatalogoConsultivo } from "@/components/catalogo-consultivo";

export const metadata: Metadata = {
  title:
    "Catálogo de aerotermia, fotovoltaica y geotermia | Maclima",
  description:
    "Consulta el catálogo consultivo de aerotermia, fotovoltaica y geotermia con enfoque consultivo y asesoramiento técnico para cada instalación.",
  openGraph: {
    title:
      "Catálogo de aerotermia, fotovoltaica y geotermia | Maclima",
    description:
      "Consulta el catálogo consultivo de aerotermia, fotovoltaica y geotermia con enfoque consultivo y asesoramiento técnico para cada instalación.",
    locale: "es_ES",
    type: "website",
  },
};

export default function CatalogoPage() {
  return <CatalogoConsultivo />;
}
