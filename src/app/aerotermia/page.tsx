import type { Metadata } from "next";
import { FuturePage } from "@/components/future-page";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";
import { ThermometerSun } from "lucide-react";

export const metadata: Metadata = {
  title: "Aerotermia en Madrid — Climatización, calefacción y ACS",
  description:
    "Soluciones de aerotermia para viviendas, negocios, reformas y obra nueva. Instalación y asesoramiento técnico en Madrid. Consulta gratuita antes de presupuestar.",
  alternates: {
    canonical: `${SITE_URL}/aerotermia`,
  },
  openGraph: {
    title: "Aerotermia en Madrid — Climatización, calefacción y ACS | Maclima",
    description:
      "Soluciones de aerotermia para viviendas, negocios, reformas y obra nueva. Instalación y asesoramiento técnico en Madrid.",
    url: `${SITE_URL}/aerotermia`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Aerotermia — Maclima Soluciones Energéticas" }],
  },
};

const introCards = [
  {
    title: "Qué es",
    text: "Una solución que aprovecha la energía del aire exterior para climatización y agua caliente sanitaria.",
  },
  {
    title: "Dónde encaja",
    text: "Viviendas, negocios, reformas y obra nueva que buscan eficiencia, confort y control.",
  },
  {
    title: "Cómo trabajamos",
    text: "Desde una lógica consultiva: estudio previo, recomendación técnica y propuesta adaptada.",
  },
] as const;

export default function AerotermiaPage() {
  return (
    <FuturePage
      eyebrow="Aerotermia"
      title="Soluciones de aerotermia para confort, ACS y eficiencia"
      description="Maclima plantea la aerotermia como una solución técnica completa para climatización, refrigeración y agua caliente sanitaria, con especial atención a la viabilidad real de cada instalación."
      introCards={introCards}
      roadmapTitle="Estructura de esta vertical"
      roadmap={[
        "Qué es la aerotermia y por qué puede encajar en tu proyecto",
        "Beneficios de confort, eficiencia y control",
        "Aplicaciones en vivienda, negocio, reforma y obra nueva",
        "BEN Dual-Air como producto destacado sin perder enfoque consultivo",
      ]}
      heroCtaLabel="Solicitar asesoramiento en aerotermia"
      heroHref="/consultoria-gratuita?tipo=Aerotermia#formulario"
      primaryPanel={{
        eyebrow: "Beneficios y aplicaciones",
        title: "Una tecnología pensada para calefacción, refrigeración y ACS",
        text: "La aerotermia permite trabajar el confort térmico desde un enfoque eficiente y renovable, tanto en entornos residenciales como en espacios de uso profesional.",
        bullets: [
          "Calefacción",
          "Refrigeración",
          "ACS",
          "Viviendas y negocios",
          "Reformas y obra nueva",
        ],
        cta: "Solicitar asesoramiento en aerotermia",
        href: "/consultoria-gratuita?tipo=Aerotermia#formulario",
      }}
      secondaryPanel={{
        eyebrow: "Producto destacado",
        title: "BEN Dual-Air como solución compacta y avanzada",
        text: "BEN Dual-Air se presenta como una opción destacada dentro del catálogo de aerotermia por su capacidad para integrar climatización, ventilación y ACS en una misma propuesta.",
        bullets: [
          "Climatización",
          "Ventilación",
          "Agua caliente sanitaria",
          "Solución compacta",
          "Enfoque técnico y consultivo",
        ],
        cta: "Ver catálogo de aerotermia",
        href: "/catalogo#aerotermia-catalogo",
      }}
      consultiveNote="No vendemos productos de forma automática. Analizamos cada caso para recomendar la solución de aerotermia adecuada según consumo, inmueble y objetivos del proyecto."
      icon={ThermometerSun}
    />
  );
}
