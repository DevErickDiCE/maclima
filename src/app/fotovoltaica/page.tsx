import { FuturePage } from "@/components/future-page";
import { PanelTop } from "lucide-react";

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
        cta: "Consultar solución fotovoltaica",
        href: "/consultoria-gratuita",
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
        cta: "Ver catálogo consultivo",
        href: "/catalogo",
      }}
      consultiveNote="No vendemos productos de forma automática. Analizamos cada caso para recomendar la solución fotovoltaica adecuada según consumo, cubierta disponible y objetivos de ahorro."
      icon={PanelTop}
    />
  );
}
