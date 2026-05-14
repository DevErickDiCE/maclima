import type { Metadata } from "next";
import { FuturePage } from "@/components/future-page";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";
import { PanelTop } from "lucide-react";

export const metadata: Metadata = {
  title: "Fotovoltaica en Madrid — Autoconsumo solar para viviendas y negocios",
  description:
    "Instalaciones fotovoltaicas para autoconsumo con paneles solares, inversores, baterías y kits. Asesoramiento técnico gratuito en Madrid para viviendas, negocios y profesionales.",
  alternates: {
    canonical: `${SITE_URL}/fotovoltaica`,
  },
  openGraph: {
    title: "Fotovoltaica en Madrid — Autoconsumo solar | Maclima",
    description:
      "Instalaciones fotovoltaicas para autoconsumo con paneles solares, inversores, baterías y kits. Asesoramiento técnico gratuito en Madrid.",
    url: `${SITE_URL}/fotovoltaica`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Fotovoltaica — Maclima Soluciones Energéticas" }],
  },
};

const introCards = [
  {
    title: "Autoconsumo solar",
    text: "Una vía para reducir factura eléctrica, aprovechar la cubierta disponible y ganar independencia energética.",
  },
  {
    title: "Qué incluye",
    text: "Paneles solares, inversores, baterías, kits de autoconsumo, estructuras y soluciones híbridas.",
  },
  {
    title: "Cómo se plantea",
    text: "Siempre desde una propuesta técnica adaptada a vivienda, negocio o proyecto profesional.",
  },
] as const;

export default function FotovoltaicaPage() {
  return (
    <FuturePage
      eyebrow="Fotovoltaica"
      title="Autoconsumo solar para viviendas, negocios y profesionales"
      description="Maclima trabaja la fotovoltaica con el mismo peso que la aerotermia para diseñar instalaciones de autoconsumo bien dimensionadas, escalables y orientadas al ahorro real."
      introCards={introCards}
      roadmapTitle="Estructura de esta vertical"
      roadmap={[
        "Qué es la energía fotovoltaica y cómo funciona el autoconsumo",
        "Ventajas en ahorro, independencia y energía limpia",
        "Componentes principales del catálogo consultivo",
        "Aerotermia + fotovoltaica como solución combinada",
      ]}
      heroCtaLabel="Solicitar asesoramiento fotovoltaico"
      heroHref="/consultoria-gratuita?tipo=Fotovoltaica#formulario"
      primaryPanel={{
        eyebrow: "Catálogo fotovoltaico",
        title: "Paneles, inversores, baterías y kits para instalaciones a medida",
        text: "La vertical fotovoltaica se presenta con fuerza propia para que no quede en segundo plano dentro de la propuesta comercial de Maclima.",
        bullets: [
          "Paneles solares",
          "Inversores",
          "Baterías",
          "Kits de autoconsumo",
          "Estructuras para cubierta",
        ],
        cta: "Solicitar asesoramiento fotovoltaico",
        href: "/consultoria-gratuita?tipo=Fotovoltaica#formulario",
      }}
      secondaryPanel={{
        eyebrow: "Beneficios",
        title: "Ahorro, menor dependencia y escalabilidad",
        text: "La fotovoltaica permite crecer por fases y adaptarse a distintos perfiles de consumo, desde cliente final hasta proyectos técnicos más exigentes.",
        bullets: [
          "Ahorro en factura",
          "Menor dependencia de la red",
          "Energía limpia",
          "Escalabilidad",
          "Integración con aerotermia",
        ],
        cta: "Ver catálogo fotovoltaico",
        href: "/catalogo#fotovoltaica-catalogo",
      }}
      consultiveNote="No vendemos productos de forma automática. Analizamos cada caso para recomendar la solución fotovoltaica adecuada según consumo, cubierta disponible y objetivos de ahorro."
      icon={PanelTop}
    />
  );
}
