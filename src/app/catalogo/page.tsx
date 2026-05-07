import type { Metadata } from "next";
import { CatalogoConsultivo } from "@/components/catalogo-consultivo";

export const metadata: Metadata = {
  title:
    "Catálogo de aerotermia y fotovoltaica | Maclima Soluciones Energéticas",
  description:
    "Consulta el catálogo consultivo de soluciones de aerotermia y fotovoltaica de Maclima. Productos, marcas y asesoramiento técnico para cada instalación.",
  openGraph: {
    title:
      "Catálogo de aerotermia y fotovoltaica | Maclima Soluciones Energéticas",
    description:
      "Consulta el catálogo consultivo de soluciones de aerotermia y fotovoltaica de Maclima. Productos, marcas y asesoramiento técnico para cada instalación.",
    locale: "es_ES",
    type: "website",
  },
};

export default function CatalogoPage() {
  return <CatalogoConsultivo />;
}
